import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import DevProjectSection from '../Components/DevProjectSection';

function WebDevelopment() {
  const src =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/web-dev-planet.glb?v=1642120711136';
  const poster =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/web-planet.png?v=1642120223997';
  const alt = 'web dev planet 3d model';
  const modelDimension = '400px';

  return (
    <div>
      <Header stars>
        <div className='icon'>
          <model-viewer
            src={src}
            poster={poster}
            alt={alt}
            shadow-intensity='0'
            auto-rotate
            camera-controls
            style={{ height: modelDimension, width: modelDimension }}
            seamless-poster
          ></model-viewer>
        </div>

        <div className='inPageText'>
          <h2>Web Development</h2>
          <h4>
            Below are some of the Full-stack and Front-end website development
            projects I worked on using React and/or Vanilla JS/HTML/CSS.
          </h4>
        </div>
      </Header>

      <Content>
        {/* ********* lofi ********* */}
        <DevProjectSection
          image='https://i.ibb.co/dDS9Q1Q/boppity-bop-lofi.png'
          icon='https://i.ibb.co/Qj3Nb8G/boppity-bop-logo.png'
          title='Boppity-Bop Lofi'
          description={`Audio visualizer website, with a relaxing window view (buildings, trees, clouds) that animates to Lo-fi music.`}
          buttonText='Go to Website'
          buttonIcon='akar-icons:link-chain'
          buttonHref='https://boppity-bop-lofi.netlify.app/'
          largeContainerLeft
        >
          <p>
            Boppity-Bop Lofi is a an audio visualizing website, where you can
            play your music, and watch the buildings bop and move to the music.
            The scene is designed to resemble a relaxing window view, with a 2D
            animation style.
          </p>
          <p>
            At the moment it works by playing a demo mp3 file, but currently I'm
            working on integrating it with Spotify's API so users can play their
            own music.
          </p>
        </DevProjectSection>

        <Divider />

        {/* ********* BalanceBuddy ********* */}
        <DevProjectSection
          image='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/balancebuddy.png?v=1664592763460'
          icon='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/balancebuddy-logo.png?v=1664593702558'
          title='BalanceBuddy'
          description={`A concept website to help students balance between their schoolwork & internship search process.`}
          videoUrl='https://www.youtube.com/watch?v=xZ66I4_RNAo&t=25s'
        >
          <p>Implemented website feautures:</p>
          <ol>
            <li>
              Users receive daily notifications that give them tasks to
              complete. The notifications are sent via a browser extension
              popup.
            </li>
            <li>
              Each user has a profile dashboard which displays their current
              task, a roadmap of the completed tasks, and a gallery populated
              with images that motivate the user.
            </li>
            <li>The dashboard and extension pop-up are always in-sync.</li>
          </ol>

          <p>
            Teammates:{' '}
            <a
              href='https://www.fionaau.net/'
              target={'_blank'}
              rel='noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              Fiona Au
            </a>{' '}
            &{' '}
            <a
              href='https://www.tasheembrown.com/'
              target={'_blank'}
              rel='noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              Tasheem Brown
            </a>
          </p>
        </DevProjectSection>

        <Divider />
        {/* ********* millie ********* */}
        <DevProjectSection
          image='https://i.ibb.co/qYQ1HqQ/millie-ss.png'
          icon='https://i.ibb.co/vXNcrVp/millie-icon.png'
          title="Millie's School Recommender"
          description={`During my time as a Tech & Product Intern at Millie Group in Summer 2021, I worked on Millie’s internal school recommender tool which will be used to view and manage Millie’s existing info in their database of schools in a user-friendly UI.`}
          buttonText='View on Github'
          buttonIcon='akar-icons:github-fill'
          buttonHref='https://github.com/besmelh/millie-school-recommender-2021'
          largeContainerLeft
        >
          <p>My work included:</p>
          <ol>
            <li>
              Conducting <strong>user research</strong> to finalize the portal’s
              functionality and features.
            </li>
            <li>
              Designed the <strong>UI/UX</strong> of the portal through a Figma
              prototype.
            </li>
            <li>
              Developed a <strong>full-stack</strong> website using React,
              Material UI, and Express. And managed some databases through AWS
              and PostgreSQL.
            </li>
          </ol>
        </DevProjectSection>

        <Divider />

        {/* ********* DandyHacks '22 ********* */}
        <DevProjectSection
          image='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/dandyhacks.png?v=1664592775709'
          icon='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/dandyhacks22-logo.png?v=1664593205462'
          title="DandyHacks '22 - Website Design"
          description={`For DandyHacks 2022, I was the Marketing & Design lead of a team of 4. We worked on designing 2022's website, along with other branding assests such as the logo, social media posts, and mercahndise.`}
          buttonText='Figma Prototype'
          buttonIcon='bxl:figma'
          buttonHref="https://www.figma.com/proto/wmg1R0ApvBdPrvaOG7m9lL/Final-Website---DandyHacks-'22?page-id=156%3A1789&node-id=244%3A2136&viewport=587%2C400%2C0.14&scaling=min-zoom&starting-point-node-id=328%3A3995"
        ></DevProjectSection>

        <Divider />
      </Content>
    </div>
  );
}

export default WebDevelopment;
