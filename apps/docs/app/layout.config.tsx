import type { HomeLayoutProps } from "fumadocs-ui/layouts/home";
import { RehooksIcon } from "@rehooks/ui/icons";

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/usernamechiho",
  nav: {
    title: (
      <div className="flex flex-row items-center justify-center gap-x-2">
        <RehooksIcon className="size-6" />
        <p className="font-sans text-lg">Chiho.zip</p>
      </div>
    ),
  },
  links: [
    {
      type: "menu",
      text: "Documentation",
      url: "/docs/dev",
      items: [
        {
          menu: {
            banner: <></>,
          },
          icon: <RehooksIcon className="size-6" />,
          text: "Rehooks CLI",
          description:
            "Learn how does Rehooks works and interact with the Rehooks CLI.",
          url: "/docs/dev",
        },
      ],
    },
    {
      type: "menu",
      text: "Blog",
      url: "/blog",
      items: [
        {
          menu: {
            banner: <></>,
          },
          icon: <RehooksIcon className="size-6" />,
          text: "Rehooks CLI",
          description:
            "Learn how does Rehooks works and interact with the Rehooks CLI.",
          url: "/blog",
        },
      ],
    },
  ],
};
