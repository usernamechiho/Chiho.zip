import { DetailedHTMLProps } from "react";

import { HTMLAttributes } from "react";

export default function Code(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) {
  return <code className="text-red-500 text-gray" {...props} />;
}
