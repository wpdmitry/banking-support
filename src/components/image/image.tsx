import React from "react";

import { ImageProps } from "./models";

function getCorrectSrc(src: string | undefined) {
  if (!src) return undefined;

  return src[0] === "/" && src[1] !== "/"
    ? `${process.env.PUBLIC_URL}${src}`
    : src;
}

function Image({ src, alt, ...rest }: ImageProps) {
  return <img src={getCorrectSrc(src)} alt={alt} {...rest} />;
}

export default Image;
