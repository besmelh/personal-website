import React from "react";
import Carousel from "react-elastic-carousel";
import { createGlobalStyle } from "styled-components";

// soft theme overrides once (safe to include multiple times)
const GlobalCarousel = createGlobalStyle`
  .rec.rec-arrow, .rec.rec-dot { box-shadow:none !important; }
  .rec.rec-arrow { background:rgba(255,255,255,.08)!important; color:#fff!important; }
  .rec.rec-arrow:hover:enabled { background:rgba(255,255,255,.16)!important; }
  .rec.rec-dot { background:rgba(255,255,255,.25)!important; }
  .rec.rec-dot_active { background:rgba(255,255,255,.7)!important; }
`;

const defaultBreakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];

export default function CarouselGallery({ children, breakpoints = defaultBreakpoints, ...rest }) {
  return (
    <>
      <GlobalCarousel />
      <Carousel breakPoints={breakpoints} itemPadding={[0,10]} {...rest}>
        {children}
      </Carousel>
    </>
  );
}
