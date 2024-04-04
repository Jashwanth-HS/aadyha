import Link from "next/link";
import React from "react";

export default function RenderButton({ children, ...rest }) {
  const RenderDiv = rest?.href ? Link : button;
  return <RenderDiv {...rest}>{children}</RenderDiv>;
}
