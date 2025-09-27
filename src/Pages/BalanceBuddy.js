import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_BalanceBuddy from '../Components/PlanetDisplay_BalanceBuddy';
import ButtonsSet from '../Components/ButtonsSet';
import MyButton from '../Components/MyButton';
import VideoPlayer from '../Components/VideoPlayer';
import { Icon } from '@iconify/react';

import Section from '../Components/Section';
import Figure, { CaptionOverlay as CapOverlay } from '../Components/Figure';
import ZoomableImage from '../Components/ZoomableImage';
import MediaBox from '../Components/MediaBox';
import CarouselGallery from '../Components/CarouselGallery';

const img_path = "/images/balancebuddy/";

/* ---------- GLOBAL TWEAKS (carousel + spacing) ---------- */
const Global = createGlobalStyle`
  /* Softer carousel theme (override react-elastic-carousel defaults) */
  .rec.rec-arrow, .rec.rec-dot {
    box-shadow: none !important;
  }
  .rec.rec-arrow {
    background: rgba(255,255,255,0.08) !important;
    color: #fff !important;
  }
  .rec.rec-arrow:hover:enabled {
    background: rgba(255,255,255,0.16) !important;
  }
  .rec.rec-dot {
    background: rgba(255,255,255,0.25) !important;
  }
  .rec.rec-dot_active {
    background: rgba(255,255,255,0.7) !important;
  }

  /* Mildly larger default spacing inside Content */
  section.case-section { padding: 24px 0; }
  @media (max-width: 900px){ section.case-section { padding: 18px 0; } }
`;


/* ---------- LAYOUT ---------- */
const TitleRow = styled.div`
  margin-bottom: 8px;
`;
const SubTitle = styled.p`
  margin: 0 0 40px 0;
  /* margin-bottom: 20px; */
  font-size: 1.06rem;
  font-weight: 800;
  opacity: 0.7;
  letter-spacing: .15px;
`;

const Row = styled.div`
  display: flex;
  align-items: start;
  margin-top: 8px;
  justify-content: space-around;
  @media (max-width: 900px){ grid-template-columns: 1fr; gap: 16px; }
`;

/* Equal persona sizing (consistent aspect ratio) */
const PersonaFrame = styled.div`
  width: 100%;
  max-width: 420px;          /*keeps them reasonable */
  margin: 0 auto;            /* center the block */
  border-radius: 12px;
  padding: 8px;
  background: rgba(255,255,255,0.04);
  display: flex; justify-content: center; align-items: center;
  & img { max-width: 100%; max-height: 100%; object-fit: contain; }
`;

/* Insights table */
const InsightsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: 0.98rem;
  th, td { border: 1px solid rgba(255,255,255,0.15); padding: 12px; vertical-align: top; }
  th { text-align: left; background: rgba(255,255,255,0.04); }
`;

/* Use Case → Flow → Prototype row with arrows */
const Trio = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 16px;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 900px){
    grid-template-columns: 1fr;
    & .arrow { display: none; }
  }
`;
const Arrow = styled.div`
  font-size: 28px; opacity: 0.6; padding: 0 6px;
`;

/* General text helpers */
const Kicker = styled.h3` margin: 20px 0; `;

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];

function BalanceBuddy() {
  return (
    <div>
      <Global />
      <ScrollToTop>
        <Header stars topGradient>
          <div className="icon"><PlanetDisplay_BalanceBuddy /></div>
          <div>
            <h2>BalanceBuddy</h2>
            <h4>
            Website to balance between students’ schoolwork & internship search process through daily tasks & progress dashboard.
            </h4>
            <p>
              Teammates:{" "}
              <a href="https://www.fionaau.net/" target="_blank" rel="noreferrer" style={{ textDecoration:'underline' }}>Fiona Au</a>{" "}
              &{" "}
              <a href="https://www.tasheembrown.com/" target="_blank" rel="noreferrer" style={{ textDecoration:'underline' }}>Tasheem Brown</a>
            </p>

            {/* 4) Video & prototype link at the TOP */}
            <ButtonsSet style={{ margin: '20px 0 14px' }}>
              <MyButton href="https://www.figma.com/proto/qzyKR4nYhvoto2GAvLiiOr/BalanceBuddy-High-Fidelity?page-id=0%3A1&node-id=2%3A350&viewport=481%2C246%2C0.02&scaling=min-zoom&starting-point-node-id=2%3A350">
                <Icon icon="bxl:figma" inline /> Open Prototype
              </MyButton>
              <MyButton href="https://youtu.be/xZ66I4_RNAo" style={{ marginTop: 0 }}>
                <Icon icon="mdi:video-outline" inline /> Demo Video
              </MyButton>
              <MyButton href="https://github.com/BalanceBuddy/balancebuddy" style={{ marginTop: 0 }}>
                <Icon icon="akar-icons:github-fill" inline /> Source Code
              </MyButton>
            </ButtonsSet>
            {/* <VideoPlayer height="380px" url="https://youtu.be/xZ66I4_RNAo" /> */}
          </div>
        </Header>

        <Content homeButton>
          {/* 3) Shorter title + subtitle */}
          <Section title="Overview" subtitle="What we set out to solve">
            {/* <Row> */}
              <div style={{marginBottom: "50px"}}>
              <>
              <p>
                <b>BalanceBuddy</b> is a web app and browser extension that helps college students balance their
                schoolwork with the internship search process.
              </p>
              <p>
                Students receive daily notifications through the browser extension, each containing a small task
                related to their applications. These tasks prevent procrastination and keep progress manageable.
              </p>
              <p>
                Each student also has a profile dashboard. The dashboard shows the current task, a roadmap of
                completed and upcoming tasks, and a motivational gallery personalized with images the student
                chooses. The dashboard and extension pop-up remain <b>in sync</b>, so progress is always updated across both.
              </p>
            </>

                <Kicker>My role</Kicker>
                <p>I co-led research and design, built the back-end and data models, connected the Chrome extension and website, and produced the demo.</p>
                <Kicker>Timeline</Kicker>
                <p>Semester project (Jan–May). Team of three.</p>
              </div>
              <Figure>
                <ZoomableImage src={img_path + "final_screenshots.png"} alt="Hi-fi overview" />
                <figcaption>High-fidelity dashboard and extension design.</figcaption>
              </Figure>
            {/* </Row> */}
          </Section>

          <Divider />

        <Section title="Demo & Prototype" subtitle="See it in action">
        <Row>
          <Figure style={{width:"50%", marginRight:"40px"}}>
            <MediaBox>
              <VideoPlayer height="100%" url="https://youtu.be/xZ66I4_RNAo" />
            </MediaBox>
            <figcaption>Walkthrough of the working prototype.</figcaption>
          </Figure>

          <Figure style={{width:"50%"}}>
            <MediaBox>
              <iframe
                title="BalanceBuddy Figma Prototype"
                src="https://embed.figma.com/proto/w0ahttkKQEyJQAGsgzFJ1d/BalanceBuddy?page-id=0%3A1&node-id=3-2&p=f&viewport=148%2C341%2C0.03&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3%3A2&show-proto-sidebar=1&embed-host=share"
                style={{ width:'100%', height:'100%', border:0 }}
                allowFullScreen
                loading="lazy"
              />
            </MediaBox>
            <figcaption>Interactive prototype — explore flows and screens.</figcaption>
          </Figure>
        </Row>
        </Section>


          <Divider />

          <Section title="Problem & Market Gap" subtitle="Why existing tools weren’t enough">
            <p>
              Students didn’t just need a place to log applications — they needed help deciding what to do next, when to do it, and how to stay motivated.
              Products like Huntr track applications but don’t guide users toward getting internships. Calendar tools remind, but rely on manual setup and don’t curate tasks around a changing workload.
              BalanceBuddy bridges that gap with guidance, timing, and gentle motivation.
            </p>
          </Section>

          <Divider />

          <Section title="Target Users" subtitle="Who we designed for">
            <p>
              Undergraduates actively looking for internships during the semester. Experience varies, schedules shift week to week, and motivation rises and falls — so the design had to adapt to all three.
            </p>
          </Section>

          <Divider />

          <Section title="User Insights + Needs" subtitle="What shaped the solution">
            <p>
              Early research clarified four themes we kept designing around: students get lost without next steps,
              their schedules fluctuate, reminders can backfire if poorly timed, and motivation is personal.
            </p>
            <InsightsTable>
              <thead>
                <tr><th>Insights</th><th>Needs</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lost or confused at various points in the application process</td>
                  <td>Guidance and resources</td>
                </tr>
                <tr>
                  <td>Trouble balancing schoolwork and the application process</td>
                  <td>Flexible schedule that still allows students to progress</td>
                </tr>
                <tr>
                  <td>Reminders are desired but can be stressful if poorly timed</td>
                  <td>Persistent, considerate reminders</td>
                </tr>
                <tr>
                  <td>Staying motivated can be a challenge</td>
                  <td>Customizable ways to remain motivated</td>
                </tr>
              </tbody>
            </InsightsTable>
          </Section>


          <Divider />

          {/* 1) Carousel restyle + readable subtitle over images */}
          <Section title="Affinity Mapping" subtitle="What students told us">
            <p>
              We interviewed internship-seeking students and clustered their pain points and needs. Three patterns stood out: they wanted guidance beyond tracking, they needed schedules to flex with coursework, and motivation was personal and tone-sensitive.
            </p>
            <CarouselGallery breakPoints={breakpoints} itemPadding={[0, 10]}>
              {["affinity_diagram_1.png","affinity_diagram_2.png","affinity_diagram_3.png"].map((f,i)=>(
                <Figure key={i}>
                  <ZoomableImage src={img_path + f} alt={`Affinity map ${i+1}`} />
                  <CapOverlay>{i===0?"Confusion points across the journey": i===1?"Signals for guidance and “what’s next”":"Motivation patterns and tone sensitivity"}</CapOverlay>
                </Figure>
              ))}
            </CarouselGallery>
           
          </Section>

          <Divider />

          <Section title="Personas" subtitle="Who we designed for">
          <Row>
            <Figure>
              <PersonaFrame>
                <ZoomableImage src={img_path + "/persona_1.png" } alt="Persona — Bobby" />
              </PersonaFrame>
              <figcaption>“Bobby”: busy, forgetful; wants consistency and better application quality.</figcaption>
            </Figure>
            <Figure>
              <PersonaFrame>
                <ZoomableImage src={img_path + "/persona_2.png" } alt="Persona — Tern" />
              </PersonaFrame>
              <figcaption>“Tern”: international student; needs clarity on process and practice.</figcaption>
            </Figure>
          </Row>
          </Section>

          <Divider />

          <Section title="Volere & User Requirements" subtitle="What the product must support">
            <p>
              We documented requirements with Volere shells so BalanceBuddy could motivate without pressure, adjust to time constraints, and guide next steps with practical resources.
            </p>
            <CarouselGallery breakPoints={breakpoints} itemPadding={[0, 10]}>
              {[1,2,3,4,5].map(n=>(
                <Figure key={n}>
                  <ZoomableImage src={img_path + `volere_${n}.png`} alt={`Volere ${n}`} />
                  <CapOverlay>
                    {n===1?"Motivation when progress stalls"
                      :n===2?"Calendar-aware timing"
                      :n===3?"Guided roadmap & milestones"
                      :n===4?"Per-task resources"
                      :"Lightweight daily nudges"}
                  </CapOverlay>
                </Figure>
              ))}
            </CarouselGallery>
          </Section>

          <Divider />

          {/* 9) Organized Use Case → Flow → Prototype rows with arrows */}
          <Section title="Use Cases → Flows → Prototypes" subtitle="How the system works">
            {/* UC #1 */}
            <Kicker>Use Case #1 · User sets up an account</Kicker>
            <Trio>
              <Figure><ZoomableImage src={img_path + "use_case_1.png"} alt="Use Case 1" /><figcaption>Use case diagram</figcaption></Figure>
              <Arrow className="arrow">→</Arrow>
              <Figure><ZoomableImage src={img_path + "user_flow_1.png"} alt="Flow 1" /><figcaption>User flow</figcaption></Figure>
              <Arrow className="arrow">→</Arrow>
              <Figure><ZoomableImage src={img_path + "wireflow_1.png"} alt="Lo-fi setup" /><figcaption>Wireflow</figcaption></Figure>
            </Trio>

            <Divider style={{margin: "40px auto", width: "300px", opacity:"0.5"}}/>

            {/* UC #2 */}
            <Kicker style={{marginTop: "50px"}}>Use Case #2 · Utilize resources to complete a task</Kicker>
            <Trio>
              <Figure><ZoomableImage src={img_path + "use_case_2.png"} alt="Use Case 2" /><figcaption>Use case diagram</figcaption></Figure>
              <Arrow className="arrow">→</Arrow>
              <Figure><ZoomableImage src={img_path + "user_flow_2.png"} alt="Flow 2" /><figcaption>User flow</figcaption></Figure>
              <Arrow className="arrow">→</Arrow>
              <Figure><ZoomableImage src={img_path + "wireflow_2.png"} alt="Hi-fi dashboard" /><figcaption>Wireflow</figcaption></Figure>
            </Trio>

            <Divider style={{margin: "40px auto", width: "300px", opacity:"0.5"}}/>

            {/* UC #3 */}
            <Kicker>Use Case #3 · Receive a task and do it</Kicker>
            <Trio>
              <Figure><ZoomableImage src={img_path + "use_case_3.png"} alt="Use Case 3" /><figcaption>Use case diagram</figcaption></Figure>
              <Arrow className="arrow">→</Arrow>
              <Figure><ZoomableImage src={img_path + "user_flow_3.png"} alt="Flow 3" /><figcaption>User flow</figcaption></Figure>
              <Arrow className="arrow">→</Arrow>
              <Figure><ZoomableImage src={img_path + "wireflow_3.png"} alt="Hi-fi extension" /><figcaption>Wireflow</figcaption></Figure>
            </Trio>
          </Section>

          <Divider/>

          {/* 7) Storyboard — short and optional; recommended */}
          <Section title="Storyboard" subtitle="From nudge to completion">
            <Row>
            <Figure style={{ width: '80%' }}>
              <ZoomableImage src={img_path + "storyboard.png"} alt="Storyboard" />
              <figcaption>How a student moves from a timely nudge to completing a task with attached resources.</figcaption>
            </Figure>
            </Row>
          </Section>

          <Divider />

          {/* 8) Shorter Evaluation with collapsible details */}
          <Section title="Evaluation" subtitle="How we tested BalanceBuddy">
          <>
  <p>
    We evaluated <b>BalanceBuddy</b> with <b>6 undergraduate students</b> who were actively seeking internships.
    Participants were split into a <b>control group</b> (no resources or motivation) and a <b>test group</b>
    (tasks included resources and motivation).
  </p>

  <h3>Procedure</h3>
  <ul>
    <li><b>Pre-test interview:</b> current process, blockers, and how often they need motivation/resources.</li>
    <li>
      <b>In-app assessment:</b> short questionnaire to gauge experience and current progress (used to place the student on a starting milestone).
    </li>
    <li><b>Task:</b> a 30-minute internship-related task triggered by a notification.</li>
    <li><b>Post-test interview:</b> clarity, representation, usability, and perceived support.</li>
  </ul>

  <h3>Collected Data (what we captured)</h3>
  <ul>
    <li><b>Completion & output:</b> whether the task was completed; number/quality of produced Q&As.</li>
    <li><b>Feature usage (test group):</b> count of resource opens and motivation board views.</li>
    <li><b>Assessment interaction:</b> time spent and any points of confusion.</li>
    <li><b>Qualitative feedback:</b> feelings of representation, clarity, motivation, and friction points.</li>
  </ul>

  <h3>Findings</h3>
  <table style={{ width:'100%', borderCollapse:'collapse', margin:'8px 0' }}>
    <thead>
      <tr>
        <th style={{ textAlign:'left', padding:'8px', borderBottom:'1px solid rgba(255,255,255,0.2)' }}>Control group</th>
        <th style={{ textAlign:'left', padding:'8px', borderBottom:'1px solid rgba(255,255,255,0.2)' }}>Test group</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ verticalAlign:'top', padding:'8px' }}>
          All participants completed the task but produced fewer outputs:
          <b> 25 interview Q&As</b> in total. Reported moments of feeling stuck; often searched externally.
        </td>
        <td style={{ verticalAlign:'top', padding:'8px' }}>
          All participants completed the task and produced <b>43 interview Q&As</b> in total.
          Used attached resources/motivation multiple times; described the flow as clearer and more self-explanatory.
        </td>
      </tr>
    </tbody>
  </table>

  <h4 style={{ marginTop: '8px' }}>Observed in both groups</h4>
  <ul>
    <li>All 6 participants finished within the session.</li>
    <li>Students generally felt the in-app assessment represented them and was a reasonable length.</li>
  </ul>

  <p style={{ marginTop:'8px' }}>
    <b>Result:</b> Delivering resources and motivation at the moment of action improved task quality and perceived support, while maintaining clarity and completion.
  </p>
</>



          </Section>

          <Section title="Reflections" subtitle="What we learned">
  <ul>
    <li>Reminders can motivate, but poor timing creates stress — context and tone matter as much as the content.</li>
    <li>Small user tests (6 participants) revealed clear differences between control and test groups, showing the value of even lightweight evaluation.</li>
    <li>Designing both the extension and dashboard taught us how important it is to keep experiences in sync across platforms.</li>
    <li>Next time, we would expand testing over several weeks to study long-term motivation, not just single-session tasks.</li>
  </ul>
</Section>

  
        </Content>
      </ScrollToTop>
    </div>
  );
}

export default BalanceBuddy;
