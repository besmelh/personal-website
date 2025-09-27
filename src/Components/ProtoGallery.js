// src/Components/ProtoGallery.js
import React from "react";
import CarouselGallery from "./CarouselGallery";
import Figure, { CaptionOverlay as CapOverlay } from "./Figure";
import ZoomableImage from "./ZoomableImage";
import Section from "./Section";

/**
 * items: [{ src, alt, label, caption }]
 * - label: short tag shown on the image (e.g., "Paper prototype", "Physical")
 * - caption: short description under the image
 */
export default function ProtoGallery({ title, subtitle, description, items = [], breakpoints }) {
  return (
    <Section title={title} subtitle={subtitle}>
      {description && <p style={{ marginBottom: 12 }}>{description}</p>}
      <CarouselGallery breakpoints={breakpoints}>
        {items.map((it, i) => (
          <Figure key={i}>
            <ZoomableImage src={it.src} alt={it.alt || it.label || title} />
            {it.label && <CapOverlay>{it.label}</CapOverlay>}
            {it.caption && <figcaption>{it.caption}</figcaption>}
          </Figure>
        ))}
      </CarouselGallery>
    </Section>
  );
}
