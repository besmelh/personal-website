import React from 'react';
import styled from 'styled-components';

import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import Section from '../Components/Section';
import Figure, { CaptionOverlay as CapOverlay } from '../Components/Figure';
import ZoomableImage from '../Components/ZoomableImage';
import MediaBox from '../Components/MediaBox';
import CarouselGallery from '../Components/CarouselGallery';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_Phobigone from '../Components/PlanetDisplay_Phobigone';
import ButtonsSet from '../Components/ButtonsSet';
import MyButton from '../Components/MyButton';
import VideoPlayer from '../Components/VideoPlayer';
import { Icon } from '@iconify/react';
import ProtoGallery from '../Components/ProtoGallery';


const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  @media (max-width: 900px){ grid-template-columns: 1fr; }
`;

// reusable row + column wrappers
export const Row = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;   /* centers the columns in the row */
  align-items: center;
  gap: 24px;
  margin: 20px 0;

  @media (max-width: 900px) {
    flex-direction: column;  /* stack vertically on phones */
    align-items: center;     /* center each column */
  }
`;

export const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;       /* center carousel inside column */
  //max-width: 600px;          /* optional: keeps them from stretching too wide */
  width: 100%;
`;

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];

function Phobigone() {
  const img_path = "/images/phobigone/"
  const imgDark   = 'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-dark.png?v=1678982363456';
  const imgHeights= 'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-heights.png?v=1678982362408';
  const imgTight  = 'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/phobigone-tight.png?v=1678982361714';

  // ---- Storyboard ----
  const imgStoryboard = '/images/phobigone/storyboard.png';

  // ---- Dark scene: 2 paper, 3 physical ----
  const darkPaper1   = '/images/phobigone/dark_paper_1.jpg';
  const darkPaper2   = '/images/phobigone/dark_paper_2.jpg';
  const darkPhys1    = '/images/phobigone/dark_physical_1.jpg';
  const darkPhys2    = '/images/phobigone/dark_physical_2.jpg';
  const darkPhys3    = '/images/phobigone/dark_physical_3.jpg';

  // ---- Heights scene: 2 paper, 1 physical ----
  const heightsPaper1 = '/images/phobigone/heights_paper_1.jpg';
  const heightsPaper2 = '/images/phobigone/heights_paper_2.jpg';
  const heightsPhys1  = '/images/phobigone/heights_physical_1.jpg';


  return (
    <div>
      <ScrollToTop>
        <Header stars topGradient>
          <div className="icon"><PlanetDisplay_Phobigone /></div>
          <div>
            <h2>Phobigone</h2>
            <h4>
              A VR application that uses safe, gradual exposure to help people face common phobias
              (dark, heights, tight spaces). Built in Unity for Meta Quest.
            </h4>

            {/* Quick access buttons */}
            <ButtonsSet style={{ margin: '18px 0 6px' }}>
              <MyButton href="https://www.youtube.com/watch?v=z7GhZehCUkI">
                <Icon icon="mdi:video-outline" inline /> Demo Video
              </MyButton>
              <MyButton href="https://sites.google.com/u.rochester.edu/phobigone-vr/home">
                <Icon icon="akar-icons:link-chain" inline /> Project Site
              </MyButton>
              <MyButton href="https://drive.google.com/file/d/1oT8HZgRvJIcfB8AuXeWEyzBtrn1jgeIZ/view?usp=sharing">
                <Icon icon="clarity:two-page-settings-line" inline /> Poster
              </MyButton>
            </ButtonsSet>
          </div>
        </Header>

        <Content homeButton>
          {/* OVERVIEW */}
          <Section title="Overview" subtitle="What we set out to solve">
            <p>
              <b>Phobigone</b> explores how VR can provide a <b>safe, immersive environment</b> for
              exposure therapy. Players choose one of three scenarios—fear of the dark, heights,
              or tight spaces—and complete a simple task designed to build confidence through
              gradual exposure.
            </p>
            <p>
              <b>My role:</b> storyboarding and prototyping, plus <b>scene styling</b> and interaction design for
              the <b>Heights</b> and <b>Tight Spaces</b> environments. I focused on clarity, comfort, and
              feedback cues so players always know what to do and when they’ve succeeded. As well as ensuring the scene feels immersive.
            </p>
          </Section>

          <Divider />


          {/* DEMO */}
          <Section title="Demo Video" subtitle="Short walkthrough of the VR build" style ={{marginBottom: "20px"}}>
            <MediaBox>
              <VideoPlayer height="100%" url="https://www.youtube.com/watch?v=z7GhZehCUkI" />
            </MediaBox>
          </Section>

          <Divider />

          {/* PROBLEM & GOALS */}
          <Section title="Problem & Goals" subtitle="Why VR + exposure matters">
            <p>
              Phobias can severely limit everyday experiences, and confronting them in the real
              world can feel unsafe or inaccessible. Our goal was to craft <b>gentle, guided
              scenarios</b> that reduce anxiety, emphasize <b>perceived safety</b>, and provide
              <b> clear task completion feedback</b>.
            </p>
          </Section>

          <Divider />

          {/* TARGET USERS */}
          <Section title="Target Users" subtitle="Who we designed for">
            <p>
              College-age participants who reported at least two of the simulated phobias and had
              some familiarity with VR. We aimed for varied intensities of fear and different levels
              of comfort with immersive tech.
            </p>
          </Section>

          <Divider />

          {/* RESEARCH INSIGHTS */}
          <Section title="User Research & Insights" subtitle="What shaped our design decisions">
            <ul>
              <li><b>Safety first:</b> players needed to feel secure and in control (e.g., clear exits, steady locomotion).</li>
              <li><b>Clarity of success:</b> people sometimes couldn’t tell when a task was complete — feedback had to be explicit.</li>
              <li><b>Gradual exposure:</b> intensity should scale up in small, predictable steps.</li>
              <li><b>Comfort:</b> minimize motion sickness via speed tuning and interaction affordances.</li>
            </ul>
          </Section>

          <Divider />

        {/* ===== STORYBOARD ===== */}
        <Section title="Storyboard" subtitle="Narrative of the experience">
          <p>
            We mapped the end-to-end experience to ensure clarity, safety, and success feedback.
            The storyboard highlights the user’s motivation, the safe setup, the in-VR task,
            and the signal that confirms completion before returning to the menu.
          </p>
          <Figure style={{ width: '80%', margin: '0 auto' }}>
            <ZoomableImage src={imgStoryboard} alt="Phobigone storyboard" />
            <figcaption>
              From motivation → safe setup → guided exposure → clear completion cue → return to menu.
            </figcaption>
          </Figure>
        </Section>

        <Divider />

        {/* ===== DARK SCENE PROTOTYPES ===== */}
        <Section title="Dark Scene — Prototypes" subtitle="Paper sketches to physical mockups">
          <p>
          The dark scene tests locating a light switch with a flickering flashlight.
              We began with paper to validate flow and visibility, then built a physical
              mockup (phone-as-flashlight) to simulate timing, cone angle, and handheld ergonomics.
          </p>
          <Row>
            <Col>
              <CarouselGallery
                subtitle="Paper-based prototypes"
                subtitlePosition="bottom"
                breakPoints={breakpoints}
                itemPadding={[0, 10]}
              >
                {[
                  [darkPaper1, "A flashlight blinking incrementally in player's hand."],
                  [darkPaper2, "A light switch for the user to turn on."],
                ].map((f, i) => (
                  <Figure key={i}>
                    <ZoomableImage src={f[0]} alt={`Paper-based Prototype ${i + 1}`} />
                    <CapOverlay>{f[1]}</CapOverlay>
                  </Figure>
                ))}
              </CarouselGallery>
            </Col>

          <Col>
            <CarouselGallery
              subtitle="Physical prototypes"
              subtitlePosition="bottom"
              breakPoints={breakpoints}
              itemPadding={[0, 10]}
            >
              {[darkPhys1, darkPhys2, darkPhys3].map((f, i) => (
                <Figure key={i}>
                  <ZoomableImage src={f} alt={`Physical Prototype ${i + 1}`} />
                  <CapOverlay>
                    {i === 0
                      ? "Phone as flashlight in dark space"
                      : i === 1
                      ? "Testing search behavior for the switch"
                      : "Evaluating intermittent light without frustration"}
                  </CapOverlay>
                </Figure>
              ))}
            </CarouselGallery>
          </Col>
        </Row>
          </Section>

        <Divider />
        
  {/* ===== DARK SCENE PROTOTYPES ===== */}
  <Section title="Dark Scene — Prototypes" subtitle="Paper sketches to physical mockups">
          <p>
          The dark scene tests locating a light switch with a flickering flashlight.
              We began with paper to validate flow and visibility, then built a physical
              mockup (phone-as-flashlight) to simulate timing, cone angle, and handheld ergonomics.
          </p>
          <Row>
            <Col>
              <CarouselGallery
                subtitle="Paper-based prototypes"
                subtitlePosition="bottom"
                breakPoints={breakpoints}
                itemPadding={[0, 10]}
              >
                {[
                  [darkPaper1, "A flashlight blinking incrementally in player's hand."],
                  [darkPaper2, "A light switch for the user to turn on."],
                ].map((f, i) => (
                  <Figure key={i}>
                    <ZoomableImage src={f[0]} alt={`Paper-based Prototype ${i + 1}`} />
                    <CapOverlay>{f[1]}</CapOverlay>
                  </Figure>
                ))}
              </CarouselGallery>
            </Col>

          <Col>
            <CarouselGallery
              subtitle="Physical prototypes"
              subtitlePosition="bottom"
              breakPoints={breakpoints}
              itemPadding={[0, 10]}
            >
              {[darkPhys1, darkPhys2, darkPhys3].map((f, i) => (
                <Figure key={i}>
                  <ZoomableImage src={f} alt={`Physical Prototype ${i + 1}`} />
                  <CapOverlay>
                    {i === 0
                      ? "Phone as flashlight in dark space"
                      : i === 1
                      ? "Testing search behavior for the switch"
                      : "Evaluating intermittent light without frustration"}
                  </CapOverlay>
                </Figure>
              ))}
            </CarouselGallery>
          </Col>
        </Row>
          </Section>

        <Divider />

        {/* ===== HEIGHTS SCENE PROTOTYPES ===== */}
        <ProtoGallery
          title="Heights Scene — Prototypes"
          subtitle="From paper to physical to VR"
          description={
            <>
              The heights scene focuses on crossing a bridge between rooftops and confirming success
              by collecting a star. Paper prototypes clarified the menu-to-scene selection and walking path.
              A quick physical mockup (cups as skyscrapers, a blade as the bridge) let us test distance and
              perceived risk without real height.
            </>
          }
          items={[
            {
              src: heightsPaper1,
              label: 'Paper prototype',
              caption:
                'Menu selection via ray-cast + bridge path diagram to the target platform.',
            },
            {
              src: heightsPaper2,
              label: 'Paper prototype',
              caption:
                'Star collection as the explicit success cue before returning to the menu.',
            },
            {
              src: heightsPhys1,
              label: 'Physical prototype',
              caption:
                'Cups as buildings, tool as bridge — used to reason about spacing and perceived exposure.',
            },
          ]}
        />


          {/* PROTOTYPING */}
          {/* <Section title="Prototyping" subtitle="From storyboard to Unity">
            <p>
              We iterated from a <b>storyboard</b> to <b>paper</b> and <b>physical prototypes</b> (e.g., phone-as-flashlight
              for the Dark scenario; cups and tools as buildings and bridges) before implementing
              the Unity VR build. Each stage validated <b>task flow</b>, <b>comfort</b>, and <b>feedback</b>.
            </p>
          </Section> */}

          <Divider />

          {/* SCENARIOS */}
          <Section title="Scenarios" subtitle="Three fears, three focused tasks">
            <ImgGrid>
              <Figure>
                <ZoomableImage src={imgDark} alt="Fear of the Dark" />
                <figcaption>
                  <b>Fear of the Dark:</b> find a light switch with a flashlight that intermittently flickers.
                </figcaption>
              </Figure>
              <Figure>
                <ZoomableImage src={imgHeights} alt="Fear of Heights" />
                <figcaption>
                  <b>Fear of Heights:</b> cross a wooden bridge between rooftops and collect a star.
                </figcaption>
              </Figure>
              <Figure>
                <ZoomableImage src={imgTight} alt="Fear of Tight Spaces" />
                <figcaption>
                  <b>Fear of Tight Spaces:</b> press a button to shrink the room until completion.
                </figcaption>
              </Figure>
            </ImgGrid>
          </Section>

          <Divider />

          {/* EVALUATION */}
          <Section title="Evaluation" subtitle="How we tested and what we learned">
            <p>
              We ran an in-person study with <b>5 participants</b> using pre/post surveys and observation.
              We measured <b>effectiveness</b> (fear, safety, confidence), <b>efficiency</b> (errors, recovery, task time),
              and <b>satisfaction</b>.
            </p>
            <ul>
              <li><b>Effectiveness:</b> Several participants felt safer and more confident afterward; others reported no change in fear.</li>
              <li><b>Efficiency:</b> Scenarios were completed with little struggle; most errors occurred in the menu/tutorial.</li>
              <li><b>Satisfaction:</b> Average rating <b>4/5</b>; all said they would try the simulation again.</li>
            </ul>
            <p>
              Two main issues emerged: (1) some players <b>couldn’t tell when a task was complete</b>; (2) a few experienced
              <b> mild motion sickness</b>. We addressed these with <b>clear completion cues</b> (e.g., collect a purple star,
              auto return to menu) and <b>slightly reduced movement speed</b>.
            </p>
          </Section>

          <Divider />

          {/* FUTURE WORK */}
          <Section title="Future Work" subtitle="Where we’d take it next">
            <ul>
              <li><b>Intensity levels</b> within each scenario to support gradual, repeatable exposure.</li>
              <li><b>More phobias</b> built on the same framework.</li>
              <li><b>Longer-term evaluation</b> to study retention and real-world transfer of confidence.</li>
            </ul>
          </Section>

          <Divider />

          {/* REFLECTIONS */}
          <Section title="Reflections" subtitle="What I learned">
            <ul>
              <li>In VR, <b>feedback timing and clarity</b> must be obvious — players shouldn’t wonder if they “did it.”</li>
              <li><b>Comfort</b> (e.g., speed, locomotion, exits) is foundational to any behavior-change experience.</li>
              <li>Storyboards and quick physical prototypes <b>de-risk interaction design</b> before dev time.</li>
            </ul>
          </Section>
        </Content>
      </ScrollToTop>
    </div>
  );
}

export default Phobigone;
