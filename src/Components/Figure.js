import React from "react";
import styled from "styled-components";

const FigureWrap = styled.figure`
  margin:0; position:relative; display:flex; flex-direction:column; align-items:center;
  & img { width:100%; border-radius:12px; display:block; }
  & figcaption { font-size:.92rem; opacity:.85; margin-top:8px; line-height:1.35; width:80%; }
`;

export const CaptionOverlay = styled.div`
  position:absolute; left:10px; bottom:10px; background:rgba(0,0,0,.45);
  backdrop-filter: blur(3px); padding:6px 10px; border-radius:8px; font-size:.9rem;
`;

export default function Figure({ children, caption, ...rest }) {
  return (
    <FigureWrap {...rest}>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </FigureWrap>
  );
}
