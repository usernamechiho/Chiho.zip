import { ArrowUpRightIcon } from "lucide-react";
import { AnchorHTMLAttributes } from "react";

import { DetailedHTMLProps } from "react";

export default function ExternalLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a
      className="underline text-black"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
      <ArrowUpRightIcon size={16} className="inline" />
    </a>
  );
}
