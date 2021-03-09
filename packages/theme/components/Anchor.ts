import Vue from "vue";
import { SidebarHeader } from "@theme/util/sidebar";
import { isActive } from "@theme/util/path";

import type { CreateElement, VNode } from "vue";
import type { Route } from "vue-router";

interface AnchorItem {
  text: string;
  level?: number;
  link: string;
  active: boolean;
}

const renderLink = (
  h: CreateElement,
  { text, link, level, active }: AnchorItem
): VNode =>
  h(
    "RouterLink",
    {
      props: {
        to: link,
        activeClass: "",
        exactActiveClass: "",
      },
      class: {
        active,
        "anchor-link": true,
        [level ? `heading${level}` : ""]: level,
      },
    },
    [h("div", {}, [text])]
  );

interface RenderChildrenOptions {
  children: SidebarHeader[];
  route: Route;
}

const renderChildren = (
  h: CreateElement,
  { children, route }: RenderChildrenOptions
): VNode =>
  h(
    "ul",
    { class: "anchor-list" },
    children.map((child: SidebarHeader) => {
      const active = isActive(route, `${route.path}#${child.slug}`);

      return h("li", { class: "anchor" }, [
        renderLink(h, {
          text: child.title,
          link: `${route.path}#${child.slug}`,
          level: child.level,
          active,
        }),
      ]);
    })
  );

export default Vue.extend({
  name: "Anchor",

  functional: true,

  render(h, { parent: { $page, $route } }) {
    return h("div", { attrs: { class: "anchor-place-holder" } }, [
      h("aside", { attrs: { id: "anchor" } }, [
        h("div", { class: "anchor-wrapper" }, [
          $page.headers
            ? renderChildren(h, {
                children: $page.headers,
                route: $route,
              })
            : null,
        ]),
      ]),
    ]);
  },
});
