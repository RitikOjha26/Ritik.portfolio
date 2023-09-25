import React from "react";

type Props = { children: String };

function HeadingHighlight({ children }: Props) {
  return <div className="highlight flex-row">{children}</div>;
}

export default HeadingHighlight;