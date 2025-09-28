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
import PlanetDisplay_SoniClean from '../Components/PlanetDisplay_SoniClean';


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

const soniclean_3d_model_img = base + "soniclean_open.png";
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
            <PlanetDisplay_SoniClean />
            </div>
          <div>
            <h2>SoniClean</h2>
            <h4>
            A design for a shoe cleaning and drying device.
            </h4>          
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
                <b>SoniClean</b> is a device to clean and dry sneakers quickly,
                safely, and effectivley using <b>ultrasonic waves</b> and{" "}
                <b>vacuum technology</b>. We built the concept during the{" "}
                <b>ShenTech Entrepreneurship Program</b> in Shenzhen, China
                (2-week sprint).
              </p>
              <p>
                <b>My role:</b> led user interviews, and designed the 3D
                prototype.
              </p>
              <p>
                <b>Outcome:</b> Awarded <b>Top Project</b> for innovation,
                creativity, user focus, market relevance, feasibility, and a
                complete end-to-end experience.
              </p>
              <Figure>
                <ZoomableImage src={imgTeam} alt="poster" />
                <figcaption>Final symposium poster.</figcaption>
              </Figure>
            </Col>
            <Col>
              <Figure style={{ width: "90%" }}>
                <ZoomableImage src={imgPoster} alt="Team receiving the award" />
                <figcaption>Team receiving the award.</figcaption>
              </Figure>
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
                We interviewed sneaker owners to understand <b>when</b> and{" "}
                <b>how</b> they clean shoes, what they find frustrating, and the{" "}
                <b>trade-offs</b> between time, effort, and results. The
                research focused on shoe care routines, common shoe materials
                (mesh, leather, foam), and pain points with current cleaning
                methods.
              </p>
              <ul>
                <li>
                  <li>
                    12 interviews in malls and offices, with participants from
                    Saudi Arabia, China, Hong Kong, Mexico, and the USA.
                  </li>
                </li>
                <li>Photos documented common sneaker types and materials.</li>
                <li>
                  Main drivers: cleaning time, drying time, effort, and shape
                  retention.
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
                  <b>Time & effort:</b> Current methods are slow, messy, or
                  inconvenient.
                </li>
                <li>
                  <b>Shoe safety:</b> Users fear damage from water, heat, or
                  chemicals — affecting knit, foam, glue, and overall shape.
                </li>
                <li>
                  <b>Access & cost:</b> Professional services are expensive and
                  require extra trips.
                </li>
              </ul>

              <p>
                Together these show the need for a{" "}
                <b>containedy, quick, and material-safe</b> process that{" "}
                <b>maintains shoe shape</b> and fits easily into daily routines.
              </p>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage src={imgFind} alt="Findings slide" />
                <figcaption>Pain points from existing methods.</figcaption>
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
                and longevity of their but have limited time. Early adopters
                include students and young professionals with 2-4 pairs in
                active rotation.
              </p>
              <ul>
                <li>
                  <b>Goals:</b> Fast cleaning, safe on materials, minimal mess.
                </li>
                <li>
                  <b>Habits:</b> Want simple, repeatable routines that fit into
                  busy schedules.
                </li>
                <li>
                  <b>Limits:</b> Small apartments and no suitable space for
                  drying shoes.
                </li>
              </ul>
            </Col>
            <Col>
              <Figure>
                <ZoomableImage
                  src={imgPersona}
                  alt="Personas / targeted customers"
                />
                <figcaption>Persona and target customers.</figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        {/* -------------------- MARKET + COMPETITORS -------------------- */}
        <Section title="Market & Competitors" subtitle="Where SoniClean fits">
          <p>
            Sneaker care is a growing market, fueled by sneaker culture and busy
            lifestyles. Current options—laundromats, dryers, shoe washing
            machines, and manual cleaning products— are either costly,
            inconvenient, or incomplete (they clean but don’t dry, or dry but
            don’t clean). With global sneaker sales at <b>$73B</b> and the
            sneaker cleaning market projected to reach
            <b>$412M by 2028</b>, there is clear opportunity for a solution that
            is compact, efficient, and safe for modern sneakers.
          </p>

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
                We reviewed <b>ultrasonic cleaning</b> technology, commonly used
                for delicate items like jewelry and medical tools, and mapped
                the <b>anatomy of a shoe</b> to spot risk areas such as
                adhesives, foam midsoles, and knit uppers. Our approach was to
                use short ultrasonic cycles with controlled <b>water level</b>{" "}
                and <b>temperature</b>, then drain the chamber and apply a{" "}
                <b>gentle airflow with vacuum support</b> to dry shoes while
                preserving their shape.
              </p>
              <ul>
                <li>
                  Ultrasonic waves loosen dirt in hard-to-reach areas with
                  minimal abrasion.
                </li>
                <li>
                  Shoe-holding <b>rods</b> support the form during washing and
                  drying, preventing deformation.
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
                Our sketches capture the <b>ideation process</b> that led to the
                final design. We explored aspects like:
              </p>
              <ul>
                <li>How shoes should be placed (horizontal vs. vertical)?</li>
                <li>Where to position compartments, doors, and controls?</li>
                <li>How to integrate the cleaning and drying mechanisms?</li>
              </ul>
              <p>
                Insights from the research (such as the need for quick drying,
                safe handling of delicate materials, and avoiding shape loss)
                directly guided these design choices.
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
                          ? "Horizontal vs vertical placement; spacing between shoes"
                          : i === 1
                          ? "Drying mechanism placement & airflow paths"
                          : i === 2
                          ? "Rods to keep shoes in an optimal position"
                          : "Compartment door & button placement options"}
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
                SoniClean is a <b>sealed container with two shoe rods</b>. Shoes
                are placed while the rods are angled upright for easy loading.
                As the door closes, the mechanism{" "}
                <b>bends the rods into a horizontal position</b>, enuring the
                shoes are horizontally upside down for better water drainage and
                faster drying while mantaining the shoe’s form.
              </p>
              <ol>
                <li>
                  <b>Ultrasonic Cleaning:</b> chamber fills from a clean-water
                  side tank; ultrasonic waved remove debris.
                </li>
                <li>
                  <b>Drainage:</b> water moves to a dirty-water tank for later
                  disposal.
                </li>
                <li>
                  <b>Drying:</b> Gentle airflow through rod vents and the
                  chamber, combined with
                  <b>vacuum</b> drying, removes moisture quickly and safely.
                </li>
              </ol>
            </Col>
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
              <p>
                SoniClean can expand beyond the MVP through multiple operation
                modes and performance upgrades. Modes like:
              </p>
              <ul>
                <li>
                  <b>Sonic Clean</b> for quick refresh
                </li>
                <li>
                  <b>Deep Clean</b> for heavy stains
                </li>
                <li>
                  <b>UV Clean</b> for sanitization
                </li>
                <li>
                  <b>Quick Dry:</b> for wet shoes on rainy days
                </li>
              </ul>
              <p>
                Various modes make it adaptable to different user needs. Future
                scaling also focuses on <b>energy & water efficiency</b>
                for sustainable use.
              </p>
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
            <ul>
              <li><b>Value:</b> Convenient, effective shoe care that saves time and preserves longevity.</li>
              <li><b>Revenue:</b> Product sales, partnerships, and aftermarket services (filters, maintenance).</li>
              <li><b>Customers:</b> Individuals, families, athletes, and sneaker enthusiasts.</li>
              <li><b>Channels:</b> Online platforms, retail partners, and direct sales.</li>
            </ul>
            </Col>
          <Col>
              <Figure>
                <ZoomableImage src={imgBiz} alt="Business model table" />
                <figcaption>Business model.</figcaption>
              </Figure>
            </Col>
          </Row>
        </Section>

        <Divider />

        <Section
          title="Reflections"
        >
          <p>
  This project taught us how to connect <b>user research</b> with <b>technical feasibility</b> 
  and <b>business strategy</b>. We learned the importance of balancing convenience, safety, 
  and cost in product design. If continued, we would test prototypes with users to refine 
  usability and validate the cleaning and drying performance.
</p>

        </Section>
      </Content>
    </div>
  );
}
