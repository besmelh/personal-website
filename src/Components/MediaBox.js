import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width:800px; height:450px; max-width:100%; max-height:56.25vw;
  border-radius:12px; overflow:hidden; margin:0 auto; background:rgba(255,255,255,.04);
`;
export default function MediaBox({ children, ...rest }) { return <Box {...rest}>{children}</Box>; }
