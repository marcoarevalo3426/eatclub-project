import type { SerializedStyles } from "@emotion/react"; // or from "@emotion/serialize"
import type { DOMAttributes } from "react";

// Extend the HTMLAttributes interface to include the 'css' prop
declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: SerializedStyles;
  }
}