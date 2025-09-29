import React, { useState } from "react";
import styled from "styled-components";

const ClickableImg = styled.img`
  width:100%; border-radius:12px; display:block; cursor:zoom-in;
  transition: transform .15s ease; &:hover { transform: scale(1.01); }
`;
const LightboxOverlay = styled.div`
  position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,.8);
  display:grid; place-items:center; padding:24px;
`;
const LightboxImg = styled.img`max-width:92vw; 
max-height:92vh;
height: auto;
width: auto;
border-radius:12px;
object-fit: contain;`;

export default function ZoomableImage({ src, alt }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ClickableImg src={src} alt={alt} onClick={() => setOpen(true)} />
      {open && (
        <LightboxOverlay onClick={() => setOpen(false)}>
          <LightboxImg src={src} alt={alt} />
        </LightboxOverlay>
      )}
    </>
  );
}
