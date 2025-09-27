import React from 'react';
import styled from 'styled-components';

import Header from '../Components/Header';
import Content from '../Components/Content';
import Section from '../Components/Section';
import Figure, { CaptionOverlay as CapOverlay } from '../Components/Figure';
import ZoomableImage from '../Components/ZoomableImage';
import MediaBox from '../Components/MediaBox';
import CarouselGallery from '../Components/CarouselGallery';
import ButtonsSet from '../Components/ButtonsSet';
import MyButton from '../Components/MyButton';
import Divider from '../Components/Divider';
import ScrollToTop from '../Components/ScrollToTop';

// TEMP: placeholder planet (swap to PlanetDisplay_SoniClean when you make one)
import PlanetDisplay_Phobigone from '../Components/PlanetDisplay_Phobigone';

// --- OPTIONAL: if you move assets to /public/images/soniclean,
// replace these with "/images/soniclean/<file>" paths or imports.
const img_path = "/images/soniclean/"
const POSTER = img_path + "SoniClean_poster.jpg"; // put the jpg in public/images/soniclean
const FINAL_PPT = '/files/soniclean/Final-PPT.pdf';       // move your PDFs to public/files/soniclean
const INTER_PPT = '/files/soniclean/Intermediate-PPT.pdf';

const Row = styled.div`
  display: flex; gap: 24px; align-items: center; justify-content: center;
  @media (max-width: 900px){ flex-direction: column; }
`;

const Col = styled.div`
  flex: 1; display: flex; flex-direction: column; align-items: center; width: 100%;
`;

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];


export default function SoniClean() {
  return (
    <div>
      <ScrollToTop>
        <Header stars topGradient>
          <div className="icon">
            <PlanetDisplay_Phobigone />
          </div>
          <div>
            <h2>SoniClean</h2>
            <h4>
            Effortless shoe cleaning, by combining ultrasonic cleaning and vacuum drying
              to reduce time and effort, without damaging sneakers.
            </h4>

            <ButtonsSet style={{ margin: '18px 0 6px' }}>
              <MyButton href={FINAL_PPT}><span role="img" aria-label="deck">📑</span> Final Slides</MyButton>
              <MyButton href={INTER_PPT} style={{ marginTop: 0 }}>
                <span role="img" aria-label="deck">🗂️</span> Intermediate Slides
              </MyButton>
            </ButtonsSet>
          </div>
        </Header>

        <Content homeButton>
          {/* OVERVIEW */}
          <Section title="Overview" subtitle="What SoniClean is and why it matters">
            <Row>

              <Col>
                <p>
                  <b>SoniClean</b> is a home device concept that cleans and dries shoes quickly and safely.
                  It merges <b>ultrasonic cleaning</b> (to lift dirt from fabric and seams) with <b>vacuum drying</b>
                  (to drop the boiling point and dry at ~20&nbsp;°C under ~−98&nbsp;kPa), delivering
                  <b> less time</b>, <b>less effort</b>, and <b>no damage</b>.
                </p>

                <ul>
                  <li><b>Timeline:</b> 2 weeks</li>
                  <li><b>Program:</b> ShenTech Entrepreneurship Bootcamp (KAUST × InnoX Academy, Shenzhen)</li>
                  <li><b>Award:</b> recognized as a <i>Top Project</i>.</li>
                </ul>
            </Col>
            <Col>
            <Figure style={{ width: '86%', margin: '22px auto 0' }}>
              <ZoomableImage src={POSTER} alt="SoniClean poster" />
              <figcaption>Concept poster highlighting value props and core technologies.</figcaption>
            </Figure>
            </Col>
            </Row>
          </Section>

          <Divider />

          {/* RESEARCH */}
          <Section title="Human Research" subtitle="How we learned what people struggle with">
            <p>
              We combined <b>shopping-mall intercepts</b>, <b>interviews</b>, and <b>surveys</b> to
              understand current shoe-care habits. Three pain points dominated: <b>time-consuming</b>
              workflows, <b>tedious manual scrubbing</b>, and fear of <b>damaging shoes</b> 
              (especially white sneakers and premium fabrics).
            </p>

            <Row>
              <Col>
                <Figure>
                  <ZoomableImage
                    src="/images/soniclean/pain_points.png"
                    alt="Pain points"
                  />
                  <figcaption>Top pain points from interviews & surveys: time, effort, and damage risk.</figcaption>
                </Figure>
              </Col>
              <Col>
                <Figure>
                  <ZoomableImage
                    src="/images/soniclean/user_journeys.png"
                    alt="Current journeys"
                  />
                  <figcaption>
                    Current journeys involve laundromats, washing machines, or manual scrubbing —
                    all slow, effortful, or risky.
                  </figcaption>
                </Figure>
              </Col>
            </Row>
          </Section>

          <Divider />

          {/* EXPERIENCE / SERVICE / STRATEGY */}
          <Section title="Experience & Service Design" subtitle="End-to-end flow and modes">
            <p>
              We framed SoniClean as a simple, guided service at home. The interface exposes
              <b> three operation modes</b> tuned to outcomes:
            </p>
            <ul>
              <li><b>Sonic Clean</b> — fast clean for light dirt and dust.</li>
              <li><b>Deep Clean</b> — longer ultrasonic phase for heavy stains.</li>
              <li><b>UV Clean</b> — a sanitization pass for odor and microbes.</li>
            </ul>

            <Row>
              <Col>
                <Figure>
                  <ZoomableImage src="/images/soniclean/modes_ui.png" alt="Modes UI" />
                  <figcaption>Simple mode selection with safeguards for material types.</figcaption>
                </Figure>
              </Col>
              <Col>
                <Figure>
                  <ZoomableImage src="/images/soniclean/water_compartments.png" alt="Water compartments" />
                  <figcaption>Clean/dirty water compartments for hygienic cycles and easy disposal.</figcaption>
                </Figure>
              </Col>
            </Row>
          </Section>

          <Divider />

          {/* PRODUCT / TECH */}
          <Section title="Product & Technology" subtitle="Why ultrasonic + vacuum">
            <p>
              <b>Ultrasonic waves</b> create cavitation bubbles that lift dirt from fabrics and seams,
              avoiding abrasive brushing that can fray materials. <b>Vacuum drying</b> lowers the
              boiling point so water evaporates quickly at low temperature — <b>drying fast without heat</b>.
            </p>

            <Row>
              <Col>
                <Figure>
                  <ZoomableImage src="/images/soniclean/ultrasonic_diagram.png" alt="Ultrasound diagram" />
                  <figcaption>Ultrasonic cavitation lifts grime deep inside the fabric.</figcaption>
                </Figure>
              </Col>
              <Col>
                <Figure>
                  <ZoomableImage src="/images/soniclean/vacuum_curve.png" alt="Vacuum drying curve" />
                  <figcaption>
                    Under ~−98&nbsp;kPa, water reaches a ~20&nbsp;°C boiling point → gentle, fast drying.
                  </figcaption>
                </Figure>
              </Col>
            </Row>
          </Section>

          <Divider />

          {/* STRATEGY */}
          <Section title="Strategy" subtitle="Positioning, channels, and partners">
            <p>
              We target sneaker owners (students, athletes, families) who value convenience and shoe longevity.
              Early channels: direct-to-consumer online + retail partners; longer-term: brand collaborations for
              co-branded care. Key partners include component suppliers, contract manufacturers, and
              sneaker brands for testing + credibility.
            </p>
            <ul>
              <li><b>Value prop:</b> faster, safer, at-home shoe care that preserves materials.</li>
              <li><b>Revenue:</b> device sales + accessories (filters, cleaning solution).</li>
              <li><b>Costs:</b> manufacturing, R&amp;D, marketing, customer support.</li>
            </ul>
          </Section>

          <Divider />

          {/* NEXT STEPS */}
          <Section title="Next Steps" subtitle="What We’d validate next">
            <ul>
              <li>Bench-top ultrasonic + vacuum tests with common materials (mesh, knit, suede).</li>
              <li>Material-aware presets and auto-sensing (e.g., tag or vision) for safer defaults.</li>
              <li>Pilot with sneaker-community partners; longevity and satisfaction measures.</li>
            </ul>
          </Section>
        </Content>
      </ScrollToTop>
    </div>
  );
}
