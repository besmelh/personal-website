import React from "react";
import Carousel from "react-elastic-carousel";
import { createGlobalStyle } from "styled-components";

const GlobalCarousel = createGlobalStyle`
  .rec.rec-arrow, .rec.rec-dot { box-shadow:none !important; }
  .rec.rec-arrow { background:rgba(255,255,255,.08)!important; color:#fff!important; }
  .rec.rec-arrow:hover:enabled { background:rgba(255,255,255,.16)!important; }
  .rec.rec-dot { background:rgba(255,255,255,.25)!important; }
  .rec.rec-dot_active { background:rgba(255,255,255,.7)!important; }

  /* vertical + horizontal centering */
  .rec .rec-carousel-item {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .rec .rec-item-wrapper {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    height: 100%;
  }

  
`;


const defaultBreakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];

export default function CarouselGallery({
  children,
  breakpoints = defaultBreakpoints,
  subtitle,
  subtitlePosition = "bottom",
  ...rest
}) {
  const Subtitle = subtitle ? (
    <p style={{ textAlign: "center", opacity: 0.75, margin: "12px 0", fontWeight:600 }}>
      {subtitle}
    </p>
  ) : null;

  return (
    <>
      <GlobalCarousel />
      {subtitle && subtitlePosition === "top" && Subtitle}
      <Carousel breakPoints={breakpoints} itemPadding={[0, 10]} {...rest}>
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",   // makes child fill available space
            }}
          >
            {child}
          </div>
        ))}
      </Carousel>

      {subtitle && subtitlePosition === "bottom" && Subtitle}
    </>
  );
}
