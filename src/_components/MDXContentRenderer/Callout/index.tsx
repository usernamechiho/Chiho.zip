import { BlockquoteHTMLAttributes } from "react";

import { DetailedHTMLProps } from "react";

export default function Callout(
  props: DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
) {
  return (
    <blockquote
      className="leading-8 text-black h-auto w-full block rounded bg-[var(--text-quote)] p-4 my-2 [&>*]:text-black"
      {...props}
    />
  );
}
