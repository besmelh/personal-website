// /src/Pages/Soniclean.js
import React from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Content from "../Components/Content";
import Section from "../Components/Section";
import Divider from "../Components/Divider";
import Figure, { CaptionOverlay as CapOverlay } from "../Components/Figure";
import ZoomableImage from "../Components/ZoomableImage";
import MediaBox from "../Components/MediaBox";
import CarouselGallery from "../Components/CarouselGallery";
import ButtonsSet from "../Components/ButtonsSet";
import MyButton from "../Components/MyButton";

import { Icon } from "@iconify/react";

/* ---------- Local helpers ---------- */
const Row = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* centers carousels/images */
  width: 100%;
  max-width: 760px;
`;

const Kicker = styled.h3`
  margin: 16px 0 8px;
`;

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];

/* ---------- Image paths (drop assets into /public/images/soniclean) ---------- */
const base = "/images/soniclean/";

// Header-side visuals
const imgTeam = base + "team_shentech.jpeg"; // ← add your team+trophy photo
const imgPoster = base + "poster.jpg"; // ← add your poster

// User research + findings + personas + market + competitors
const imgUR = base + "ur_slide.jpg";
const imgFind = base + "pain_points.jpg";
const imgPersona = base + "personas.png";
const imgMarket = base + "market.jpg";
const imgComp = base + "competitors.png";

// Tech research + anatomy
const imgTech1 = base + "technologies.jpg";
const imgTech2 = base + "shoe_anatomy.jpg";

// Ideation / sketches
const imgSketch1 = base + "sketch_1.png";
const imgSketch2 = base + "sketch_2.png";
const imgSketch3 = base + "sketch_3.png";
const imgSketch4 = base + "sketch_4.png";

// Final solution
const imgFinal1 = base + "final_solution_slide.jpg";
const imgFinal2 = base + "solution_ultrasonic_cleaning.jpg";
const imgFinal3 = base + "solution_vacuum_drying.jpg";

// Modes & scaling
const imgModes = base + "scaling.jpg";

// Business model (table)
const imgBiz = base + "business_model_table.jpg";

/* -------------------------------------------------------------------------- */

export default function Soniclean() {
  return (
    <div>
      <Header stars topGradient>
        <div className="icon">
          {/* You can swap this with a small icon or 3D planet later if you create one */}
          <img
            src={imgPoster}
            alt="SoniClean poster"
            style={{
              width: 160,
              height: 160,
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>

        <div>
          <h2>SoniClean</h2>
          <h4>
            A compact ultrasonic shoe-cleaning + drying device designed through
            human-centered research, experience & service design, and strategic
            UX.
          </h4>

          <ButtonsSet style={{ margin: "18px 0 6px" }}>
            <MyButton href={imgPoster}>
              <Icon icon="clarity:two-page-settings-line" inline /> Poster
            </MyButton>
            <MyButton href={imgTeam}>
              <Icon icon="mdi:image" inline /> Team &amp; Trophy
            </MyButton>
          </ButtonsSet>
        </div>
      </Header>

      <Content homeButton>
        {/* -------------------- OVERVIEW -------------------- */}
        <Section
          title="Overview"
          subtitle="Project summary, role, timeline, recognition"
        >
          <Row>
            <Col>
              <p>
                <b>SoniClean</b> is a small-form-factor device that cleans and
                dries sneakers using <b>ultrasonic agitation</b> and a guided
                drying workflow. We built the concept during the{" "}
                <b>ShenTech Entrepreneurship Program</b> in Shenzhen, China
                (2-week sprint).
              </p>
              <p>
                <b>My role:</b> led user interviews & synthesis (human
                research), framed the service model across purchase, usage, and
                maintenance (experience/service design), shaped market &
                competitor strategy, and designed the product interactions and
                UI touchpoints (UI/UX).
              </p>
              <p>
                <b>Outcome:</b> Awarded a <b>Top Project</b> for evidencing
                market need, feasibility, and an end-to-end experience that fits
                into users’ routines.
              </p>
            </Col>
            <Col>
              {/* <Figure style={{ width: "70%" }}>
                <ZoomableImage src={imgPoster} alt="Team receiving the award" />
                <figcaption>Final symposium poster.</figcaption>
              </Figure> */}
              <CarouselGallery breakPoints={breakpoints}>
                {[imgPoster, imgTeam].map((src, i) => (
                  <Figure key={i}>
                    <ZoomableImage src={src} alt={`Sketch ${i + 1}`} />
                    <CapOverlay>
                      {i === 0
                        ? "Final symposium poster."
                        : "Team receiving the award."}
                    </CapOverlay>
                  </Figure>
                ))}
              </CarouselGallery>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- USER RESEARCH -------------------- */}
        <Section
          title="User Research"
          subtitle="Interviews that shaped the problem framing"
        >
          <Row>
            <Col>
              <p>
                We interviewed sneaker owners and casual users to understand{" "}
                <b>when</b> and <b>how</b> they clean shoes, what they find
                frustrating, and the <b>trade-offs</b> between time, space, and
                results. The research focused on routines (entryways, laundry
                areas), materials (mesh, leather, foam), and pain points with
                current DIY and service options.
              </p>
              <ul>
                <li>
                  10+ rapid interviews in dorms/cafés; contextual notes on
                  spaces/tools used.
                </li>
                <li>
                  Photos of storage/cleaning setups; product/brand mentions and
                  expectations.
                </li>
                <li>
                  Decision drivers: time-to-clean, mess containment, drying
                  time, shape retention.
                </li>
              </ul>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgUR} alt={`User research slide.`} />
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- FINDINGS -------------------- */}
        <Section
          title="Pain Points & Findings"
          subtitle="What must the solution respect"
        >
          <Row>
            <Col>
              <ul>
                <li>
                  <b>Mess & space:</b> Cleaning splashes and odor discourage
                  frequent cleaning in small apartments.
                </li>
                <li>
                  <b>Drying delay:</b> Waiting overnight is common; fears of
                  trapping moisture or warping shape.
                </li>
                <li>
                  <b>Material anxiety:</b> Users worry about damaging knit/foam,
                  discoloration, or glue failure.
                </li>
                <li>
                  <b>Consistency:</b> Multi-step DIY kits feel effortful;
                  professional services are slow/inconvenient.
                </li>
              </ul>
              <p>
                These point to a <b>contained, quick, material-safe</b> process
                that <b>retains shoe shape</b> and has a predictable, repeatable
                routine.
              </p>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgFind} alt="Findings slide" />
                <figcaption>
                  Top pain points consolidated from interviews.
                </figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- PERSONAS -------------------- */}
        <Section
          title="Target Customers (Personas)"
          subtitle="Who benefits first"
        >
          <Row>
            <Col>
              <p>
                We targeted <b>urban sneaker owners</b> who value cleanliness
                and longevity but have limited time/space. Early adopters
                include students and young professionals with 3–8 pairs in
                active rotation.
              </p>
              <ul>
                <li>
                  <b>Goals:</b> fast refresh, safe for materials, minimal
                  space/mess.
                </li>
                <li>
                  <b>Behaviors:</b> batch cleaning on weekends; avoids long
                  drying times.
                </li>
                <li>
                  <b>Constraints:</b> small apartments, shared laundry, no
                  balcony/yard.
                </li>
              </ul>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage
                  src={imgPersona}
                  alt="Personas / targeted customers"
                />
                <figcaption>
                  Condensed persona board from the workshop.
                </figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- MARKET + COMPETITORS -------------------- */}
        <Section title="Market & Competitors" subtitle="Where SoniClean fits">
          <Row>
            <Col>
              <Figure>
                <ZoomableImage src={imgMarket} alt="Market research" />
                <figcaption>Market Research</figcaption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgComp} alt="Potential competitors" />
                <figcaption>Potential competitors</figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- TECH RESEARCH -------------------- */}
        <Section
          title="Tech Research"
          subtitle="Ultrasound + shoe anatomy → safe cleaning strategy"
        >
          <Row>
            <Col>
              <p>
                We explored <b>ultrasonic cleaning</b> literature (already used
                in textiles and precision parts) and mapped <b>shoe anatomy</b>{" "}
                to identify risk areas (adhesives, foam midsoles, knit uppers).
                Our direction: short ultrasonic cycles with controlled{" "}
                <b>water level</b> and <b>temperature</b>, followed by contained
                draining and a <b>gentle forced-air + vacuum</b> dry that
                preserves shape.
              </p>
              <ul>
                <li>
                  Ultrasound helps dislodge dirt in crevices at low mechanical
                  abrasion.
                </li>
                <li>
                  Modularity around <b>last/rod supports</b> keeps the shoe form
                  during wet stages.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <Figure>
                <ZoomableImage src={imgTech1} alt="Market research" />
                <figcaption>Market Research</figcaption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgComp} alt="Potential competitors" />
                <figcaption>Potential competitors</figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- IDEATION / SKETCHES -------------------- */}
        <Section
          title="Ideation & Sketches"
          subtitle="Form factor, compartments, and controls"
        >
          <Row>
            <Col>
              <p>
                We tested <b>horizontal vs. vertical</b> placement for{" "}
                <b>loading ease</b>, <b>drainage</b>, and
                <b> footprint</b>. Controls cluster near the handle for
                one-handed use; the door seals splash and odor, enabling
                countertop operation.
              </p>
            </Col>
            <Col>
              <CarouselGallery breakPoints={breakpoints}>
                {[imgSketch1, imgSketch2, imgSketch3, imgSketch4].map(
                  (src, i) => (
                    <Figure key={i}>
                      <ZoomableImage src={src} alt={`Sketch ${i + 1}`} />
                      <CapOverlay>
                        {i === 0
                          ? "Horizontal vs vertical placement; rod spacing"
                          : i === 1
                          ? "Compartment door & button placement options"
                          : "Drying mechanism placement & airflow paths"}
                      </CapOverlay>
                    </Figure>
                  )
                )}
              </CarouselGallery>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- FINAL SOLUTION -------------------- */}
        <Section title="Final Solution" subtitle="Mechanism & end-to-end cycle">
          <Row>
            <Col>
              <p>
                The core is a <b>container with two shoe rods</b>. You place
                shoes while the rods are angled for easy loading; as the door
                closes, the mechanism{" "}
                <b>rotates rods to an inverted vertical</b> position to aid
                drainage.
              </p>
              <ol>
                <li>
                  <b>Fill & Ultrasonic Clean:</b> chamber fills from a
                  clean-water side tank; ultrasonic transducers agitate debris.
                </li>
                <li>
                  <b>Drain:</b> water moves to a dirty-water tank for later
                  disposal.
                </li>
                <li>
                  <b>Dry:</b> gentle <b>rod vents</b> + chamber airflow;
                  optional <b>vacuum assist</b> to evacuate moisture quickly.
                </li>
              </ol>
              <p style={{ opacity: 0.9 }}>
                <i>Feasibility notes:</i> Ultrasonic cleaning is compatible with
                textiles at moderate power/time. Forced-air through hollow rods
                plus chamber airflow is a reasonable combo; keep temps low to
                avoid glue damage.
              </p>
            </Col>
            {/* <Col>
              <CarouselGallery breakPoints={breakpoints}>
                {[imgFinal1, imgFinal2, imgFinal3].map((src, i) => (
                  <Figure key={i}>
                    <ZoomableImage src={src} alt={`Final mechanism ${i + 1}`} />
                    <CapOverlay>
                      {i === 0
                        ? "Overall cycle: fill → sonics → drain → dry"
                        : i === 1
                        ? "Door-linked rod rotation for load → invert"
                        : "Water path: clean tank → chamber → dirty tank"}
                    </CapOverlay>
                  </Figure>
                ))}
              </CarouselGallery>
            </Col> */}
          </Row>
          <CarouselGallery breakPoints={breakpoints}>
            {[imgFinal1, imgFinal2, imgFinal3].map((src, i) => (
              <Figure key={i}>
                <ZoomableImage src={src} alt={`Final mechanism ${i + 1}`} />
                <CapOverlay>
                  {i === 0
                    ? "Overall cycle: fill → sonics → drain → dry"
                    : i === 1
                    ? "Door-linked rod rotation for load → invert"
                    : "Water path: clean tank → chamber → dirty tank"}
                </CapOverlay>
              </Figure>
            ))}
          </CarouselGallery>
        </Section>

        <Divider />

        {/* -------------------- MODES & SCALING -------------------- */}
        <Section
          title="Modes & Scaling"
          subtitle="From MVP to performance tiers"
        >
          <Row>
            <Col>
              <ul>
                <li>
                  <b>MVP:</b> Single “Daily Clean” (short sonic burst + quick
                  dry).
                </li>
                <li>
                  <b>Deep Clean:</b> Longer sonic time; optional mild detergent
                  capsule.
                </li>
                <li>
                  <b>Dry-Only:</b> For rainy days (skip fill; use airflow +
                  vacuum).
                </li>
                <li>
                  <b>Scale-Up:</b> Higher-capacity variant for small shops or
                  dorm floors.
                </li>
              </ul>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgModes} alt="Modes & scaling" />
                <figcaption>
                  Feature tiers mapped to use cases and environments.
                </figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- BUSINESS MODEL -------------------- */}
        <Section
          title="Business Model"
          subtitle="Hardware + consumables + placement strategy"
        >
          <Row>
            <Col>
              <p>
                <b>Hardware sale</b> for individuals; <b>placement</b> in
                dorms/gyms with rev-share; optional
                <b> consumables</b> (mild detergent/filters). Warranty & filter
                replacements create recurring touchpoints.
              </p>
              <ul>
                <li>
                  Early channel: university housing & sneaker communities.
                </li>
                <li>Service model: filter swap program; repair partners.</li>
              </ul>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgBiz} alt="Business model table" />
                <figcaption>Business model snapshot from the deck.</figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>
      </Content>
    </div>
  );
}
