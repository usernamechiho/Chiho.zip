import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/docs/source";
import type { ReactNode } from "react";
import { RehooksIcon } from "@rehooks/ui/icons";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,

  sidebar: {
    tabs: [
      /** 필요시 주석 해제 */
      // {
      //   title: "최근 프로젝트",
      //   icon: <RehooksIcon className="m-0 size-6 md:mb-7" />,
      //   description: "Studio Rone, Backoffice",
      //   url: "/docs/dev",
      // },
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
