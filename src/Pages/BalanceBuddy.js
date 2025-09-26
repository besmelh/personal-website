import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay_BalanceBuddy from '../Components/PlanetDisplay_BalanceBuddy';
import ButtonsSet from '../Components/ButtonsSet';
import MyButton from '../Components/MyButton';
import VideoPlayer from '../Components/VideoPlayer';
import { Icon } from '@iconify/react';
// NEW (already in your deps): lightweight carousel for your research artifacts
import Carousel from 'react-elastic-carousel';

const placeholderImg = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
const img_path = "/images/balancebuddy/"
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  align-items: start;
  margin-top: 10px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Figure = styled.figure`
  margin: 0;
  opacity: 0.98;
  & img { width: 100%; border-radius: 12px; }
  & figcaption { font-size: 0.95rem; opacity: 0.8; margin-top: 6px; line-height: 1.35; }
`;

const Strip = styled.div`
  display: grid;
  gap: 16px;
`;

const Caption = styled.p`
  margin-top: 8px;
  opacity: 0.9;
`;

const Kicker = styled.h3`
  margin: 0 0 8px 0;
  opacity: 0.9;
  font-weight: 600;
`;

const Hint = styled.p`
  margin-top: 8px;
  font-size: 0.9rem;
  opacity: 0.75;
`;

// Carousel breakpoint config (nice defaults)
const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
];

function BalanceBuddy() {
  return (
    <div>
      <ScrollToTop>
        <Header stars topGradient>
          <div className='icon'>
            <PlanetDisplay_BalanceBuddy />
          </div>

          <div>
            <h2>BalanceBuddy</h2>
            <h4>
              A gentle coach for students balancing the internship hunt with classes — small, timely tasks,
              clear next steps, and a browser extension that nudges without nagging.
            </h4>

            <p>
              Teammates:{' '}
              <a href='https://www.fionaau.net/' target='_blank' rel='noreferrer' style={{ textDecoration:'underline' }}>Fiona Au</a>{' '}
              &{' '}
              <a href='https://www.tasheembrown.com/' target='_blank' rel='noreferrer' style={{ textDecoration:'underline' }}>Tasheem Brown</a>
            </p>

            <ButtonsSet style={{ margin: '4% 0' }}>
              <MyButton href='https://www.figma.com/proto/qzyKR4nYhvoto2GAvLiiOr/BalanceBuddy-High-Fidelity?page-id=0%3A1&node-id=2%3A350&viewport=481%2C246%2C0.02&scaling=min-zoom&starting-point-node-id=2%3A350'>
                <Icon icon='bxl:figma' inline /> Open Prototype
              </MyButton>
              <MyButton href='https://github.com/BalanceBuddy/balancebuddy' style={{ marginTop: 0 }}>
                <Icon icon='akar-icons:github-fill' inline /> Source Code
              </MyButton>
              <MyButton href='https://youtu.be/xZ66I4_RNAo' style={{ marginTop: 0 }}>
                <Icon icon='mdi:video-outline' inline /> Demo Video
              </MyButton>
            </ButtonsSet>
          </div>
        </Header>

        <Content homeButton>
          {/* OVERVIEW */}
          <h1>Overview: What we set out to solve</h1>
          <TwoCol>
            <div>
              <p>
                We kept meeting the same pattern: students wanted internships, but the process competed with coursework.
                Trackers helped them list applications, yet they didn’t offer direction or momentum.
                BalanceBuddy was our answer — a daily rhythm of small, well-timed tasks with resources attached,
                a roadmap that makes progress visible, and a light touch that fits the ebb and flow of a semester.
              </p>

              <Kicker>My role</Kicker>
              <p>
                I co-led the research and design, then built the back-end and data models. I connected the Chrome extension
                and website so progress stayed in sync, and produced the demo.
              </p>

              <Kicker>Timeline</Kicker>
              <p>Semester project (Jan–May). Team of three.</p>
            </div>

            {/* IMAGE SLOT — Hi-fi overview composite */}
            <Figure>
              {/* Replace src with a wide composite of hi-fi dashboard + extension */}
              <img src={img_path + "final_screenshots.png"} alt='BalanceBuddy hi-fi overview' />
              <figcaption>Screenshots of the Hi-fi dashboard and extension tabs.</figcaption>
            </Figure>
          </TwoCol>

          <Divider />

          {/* PROBLEM + LIMITATIONS */}
          <h1>Problem & Market Gap: Why existing tools weren’t enough</h1>
          <p>
            Students didn’t just need a place to log applications — they needed help deciding what to do next, when to do it,
            and how to stay motivated. Products like Huntr keep track of applications, but they don’t guide users toward getting
            internships. Calendar tools are great for reminders, but they rely on manual setup and don’t curate tasks around
            students’ changing workload. BalanceBuddy bridges that gap with guidance, timing, and gentle motivation.
          </p>

          <Divider />

          {/* TARGET USERS */}
          <h1>Target Users: Who we designed for</h1>
          <p>
            We focused on undergraduates actively looking for internships during the semester. They vary in experience,
            schedules change week to week, and motivation rises and falls. The design needed to adapt to all three.
          </p>

          <Divider />

          {/* RESEARCH */}
          <h1>Affinity Mapping: What students told us</h1>
          <p>
            We interviewed internship-seeking students and clustered their pain points and needs.
            Three patterns stood out: they wanted guidance beyond tracking, they needed schedules to flex with coursework,
            and their motivation was personal and easily affected by tone and timing.
          </p>

          {/* Carousel — 3 Affinity diagrams */}
          <Strip>
            <Carousel breakPoints={breakpoints} itemPadding={[0, 10]}>
              {/* Replace src with your three affinity exports */}
              <Figure>
                <img src={img_path + "affinity_diagram_1.png"} alt='Affinity map 1' />
                <figcaption>Affinity clusters — confusion points across the application journey.</figcaption>
              </Figure>
              <Figure>
                <img src={img_path + "affinity_diagram_2.png"} alt='Affinity map 2' />
                <figcaption>Signals for guidance and “what’s next”.</figcaption>
              </Figure>
              <Figure>
                <img src={img_path + "affinity_diagram_3.png"} alt='Affinity map 3' />
                <figcaption>Motivation patterns and tone sensitivity.</figcaption>
              </Figure>
            </Carousel>
          </Strip>

          {/* Insights + Needs table (from slides) */}
          <h1>User Insights + Needs: What shaped the solution</h1>
          <Figure>
            {/* Replace with your slide/table export */}
            <img src={placeholderImg} alt='User Insights and Needs table' />
            <figcaption>Insights mapped directly to needs — guidance, flexible scheduling, and personalized motivation.</figcaption>
          </Figure>

          <Divider />

          {/* PERSONAS */}
          <h1>Personas: Who we designed for</h1>
          <TwoCol>
            <Figure>
              <img src={img_path + "persona_1.png"} alt='Persona — Bobby' />
              <figcaption>“Bobby”: busy and forgetful; wants consistency and better application quality.</figcaption>
            </Figure>
            <Figure>
              <img src={img_path + "persona_2.png"} alt='Persona — Tern' />
              <figcaption>“Tern”: international student; needs clarity on process and interview practice.</figcaption>
            </Figure>
          </TwoCol>

          <Divider />

          {/* VOLERE SHELLS */}
          <h1>Volere & User Requirements: What the product must support</h1>
          <p>
            We captured requirements with Volere shells so the system could meet students where they are:
            motivating without pressure, adjusting to time constraints, and guiding next steps with practical resources.
          </p>

          {/* Carousel — 5 Volere shells */}
          <Strip>
            <Carousel breakPoints={breakpoints} itemPadding={[0, 10]}>
              {/* Replace each with a clear Volere shell export */}
              <Figure><img src={img_path + "volere_1.png"} alt='Volere 1' /><figcaption>Motivation when progress stalls.</figcaption></Figure>
              <Figure><img src={img_path + "volere_2.png"} /><figcaption>Calendar-aware task timing.</figcaption></Figure>
              <Figure><img src={img_path + "volere_3.png"} /><figcaption>Guided roadmap and milestones.</figcaption></Figure>
              <Figure><img src={img_path + "volere_4.png"} /><figcaption>Per-task resources.</figcaption></Figure>
              <Figure><img src={img_path + "volere_5.png"} /><figcaption>Lightweight daily nudges.</figcaption></Figure>
            </Carousel>
          </Strip>

          <Divider />

          {/* USE CASES — per-use-case structure like slides */}
          <h1>Use Cases → Flows → Prototypes: How the system works</h1>

          <Kicker>Use Case #1: User sets up an account</Kicker>
          <TwoCol>
            <div>
              <p>
                New users create an account, choose or upload motivational material, connect a calendar if they wish,
                and complete a short assessment. The system places them on an appropriate milestone and prepares a starting set of tasks.
              </p>
              <Caption><b>User Flow #1</b> follows the same path — account setup through assessment into the dashboard.</Caption>
            </div>
            <Figure>
              {/* Use case #1 diagram */}
              <img src={placeholderImg} alt='Use Case 1: Account Setup' />
              <figcaption>Use Case Diagram #1 — account setup and onboarding.</figcaption>
            </Figure>
          </TwoCol>

          <TwoCol>
            <Figure>
              {/* Flow screenshot */}
              <img src={placeholderImg} alt='User Flow 1 — account setup' />
              <figcaption>User Flow #1 — website account setup.</figcaption>
            </Figure>
            <Figure>
              {/* Lo-fi or hi-fi prototype screen(s) */}
              <img src={placeholderImg} alt='Lo-fi — setup' />
              <figcaption>Lo-fi frames exploring account setup before moving to hi-fi.</figcaption>
            </Figure>
          </TwoCol>

          <Divider />

          <Kicker>Use Case #2: Utilizing resources to do a task</Kicker>
          <TwoCol>
            <div>
              <p>
                When a task feels unclear, students can open the dashboard and use the attached resources for that task
                rather than searching elsewhere. This keeps momentum and reduces the cognitive load of “figuring out where to look.”
              </p>
              <Caption><b>User Flow #2</b> illustrates the pivot from a notification to the dashboard’s resource list, then back to completion.</Caption>
            </div>
            <Figure>
              <img src={placeholderImg} alt='Use Case 2: Utilize Resources' />
              <figcaption>Use Case Diagram #2 — resources support task completion.</figcaption>
            </Figure>
          </TwoCol>

          <TwoCol>
            <Figure>
              <img src={placeholderImg} alt='User Flow 2 — resources' />
              <figcaption>User Flow #2 — utilizing resources from the dashboard.</figcaption>
            </Figure>
            <Figure>
              <img src={placeholderImg} alt='Hi-fi — dashboard' />
              <figcaption>Hi-fi dashboard with per-task resources and roadmap progress.</figcaption>
            </Figure>
          </TwoCol>

          <Divider />

          <Kicker>Use Case #3: Receiving a task notification and doing the task</Kicker>
          <TwoCol>
            <div>
              <p>
                The extension nudges students at times that fit their schedule. If recent progress is low, the nudge includes
                personal motivation. Students can change the task, complete it, or ask to be reminded later — and the dashboard
                reflects progress immediately.
              </p>
              <Caption><b>User Flow #3</b> shows the extension path end-to-end.</Caption>
            </div>
            <Figure>
              <img src={placeholderImg} alt='Use Case 3: Notification and Task' />
              <figcaption>Use Case Diagram #3 — notification to task completion.</figcaption>
            </Figure>
          </TwoCol>

          <TwoCol>
            <Figure>
              <img src={placeholderImg} alt='User Flow 3 — extension' />
              <figcaption>User Flow #3 — extension notification and quick actions.</figcaption>
            </Figure>
            <Figure>
              <img src={placeholderImg} alt='Hi-fi — extension notification' />
              <figcaption>Hi-fi extension with change/complete/remind controls.</figcaption>
            </Figure>
          </TwoCol>

          {/* If you want to include Use Cases 4 & 5 without bloating the page */}
          <Strip style={{ marginTop: 12 }}>
            <Carousel breakPoints={breakpoints} itemPadding={[0, 10]}>
              <Figure><img src={placeholderImg} alt='Use Case 4' /><figcaption>Use Case Diagram #4 — roadmap progress update.</figcaption></Figure>
              <Figure><img src={placeholderImg} alt='Use Case 5' /><figcaption>Use Case Diagram #5 — attempt/ignore task paths.</figcaption></Figure>
            </Carousel>
          </Strip>

          <Divider />

          {/* EVALUATION — accurate to report/slides */}
          <h1>Evaluation: How we tested BalanceBuddy</h1>

          <Kicker>Goals & Questions</Kicker>
          <p>
            We wanted to understand whether the assessment represented users well, and whether providing resources and
            motivation alongside tasks helped students complete those tasks. We focused on clarity, efficiency, and how supported
            students felt during the process.
          </p>

          <Kicker>Participants</Kicker>
          <p>
            We ran a small study with six undergraduates (18–22), all attending U.S. institutions and actively seeking internships
            or planning to start. We aimed for diversity across gender and international status, and assumed moderate to strong
            computer literacy.
          </p>

          <Kicker>Test Procedure</Kicker>
          <p>
            We began with a brief pre-test interview about perceived factors in internship outcomes, how often students feel lost,
            and what keeps them motivated. Participants were then randomly split into control and test groups. Everyone completed
            the assessment the same way. Each participant then worked on a 30-minute task. The control group received no
            motivational material or resources; the test group received both. We closed with a post-test interview covering clarity,
            representation, and motivation.
          </p>

          <Kicker>Data Collection</Kicker>
          <p>
            We noted whether participants completed the task, how often the test group used resources and motivation,
            and gathered interview feedback. For usability, we looked at effectiveness (representation in the assessment; task
            completion rate), efficiency (how easily participants navigated assessment, resources, and motivation), and satisfaction
            (assessment length; whether the motivation board helped).
          </p>

          <Kicker>Data Analysis & Findings</Kicker>
          <p>
            All six participants completed the task. The test group (with resources and motivation) produced more thorough outputs
            — compiling 43 interview questions and answers versus 25 in the control group. Test-group participants described the
            experience as straightforward and self-explanatory. Participants generally felt represented by the assessment and were
            satisfied with its length. We saw signs that attaching resources at the point of action improved quality and reduced friction.
          </p>

          <Divider />

          {/* LINKS */}
          <h1>Links & Extras</h1>
          <ButtonsSet style={{ margin: '8px 0 40px' }}>
            <MyButton href='https://github.com/BalanceBuddy/balancebuddy'>
              <Icon icon='akar-icons:github-fill' inline /> Source Code
            </MyButton>
            <MyButton href='https://youtu.be/xZ66I4_RNAo'>
              <Icon icon='mdi:video-outline' inline /> Demo Video
            </MyButton>
            {/* Optional: link your full PDF report and presentation once hosted */}
            {/* <MyButton href='/assets/BalanceBuddy_FinalReport.pdf'><Icon icon='mdi:file-document-outline' inline /> Full Report (PDF)</MyButton>
            <MyButton href='/assets/BalanceBuddy_FinalPresentation.pdf'><Icon icon='mdi:monitor-screenshot' inline /> Final Presentation (PDF)</MyButton> */}
          </ButtonsSet>
        </Content>
      </ScrollToTop>
    </div>
  );
}

export default BalanceBuddy;
