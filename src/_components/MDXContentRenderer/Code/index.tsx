import { DetailedHTMLProps } from "react";

import { HTMLAttributes } from "react";

export default function Code(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) {
  return (
    <code
      className="rounded px-[0.3em] py-[0.2em] text-black bg-[var(--text-quote)]"
      {...props}
    />
  );
}
