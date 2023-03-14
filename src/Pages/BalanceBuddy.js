import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import DevProjectSection from '../Components/DevProjectSection';
import { motion } from 'framer-motion';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay from '../Components/PlanetDisplay';
import PlanetDisplay_BalanceBuddy from '../Components/PlanetDisplay_BalanceBuddy';
import LeftRightContainer from '../Components/LeftRightContainer';
import VideoPlayer from '../Components/VideoPlayer';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';

function BalanceBuddy(props) {
  const transition = { duration: 0.5, type: 'spring' };

  const { imageDetails, ...other } = props;
  return (
    <div>
      <ScrollToTop>
        <Header stars>
          <div className='icon'>
            <PlanetDisplay_BalanceBuddy />
          </div>

          <div>
            <h2>BalanceBuddy</h2>
            <h4>
              Website to balance between students’ schoolwork & internship
              search process through daily tasks & progress dashboard.
            </h4>
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
          </div>
        </Header>

        <div initial={{ opacity: 1 }}>
          <Content>
            {/* ********* BalanceBuddy ********* */}
            <LeftRightContainer>
              <div className='container-xsmall'>
                <p>
                  Our collective efforts enabled us to design a web app and
                  browser extension to help college students balance between
                  their schoolwork and internship search process. My role in the
                  team included developing the back-end of the webpage and
                  Chrome extension using React, and setting up a MongoDB
                  database. In addition to conducting user research, designed
                  prototypes in Figma, & performed usability testing for the
                  working prototype.
                </p>
              </div>
              <div className='container-large'>
                <img src='https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/balancebuddy-screenshots.png?v=1678760584525' />
              </div>
            </LeftRightContainer>

            <LeftRightContainer>
              <div className='container-medium' style={{ height: '400px' }}>
                <VideoPlayer url='https://www.youtube.com/watch?time_continue=25&v=xZ66I4_RNAo' />
              </div>
              <div className='container-small'>
                <p>Implemented website features:</p>
                <ol>
                  <li>
                    Users receive daily notifications that give them tasks to
                    complete. The notifications are sent via a browser extension
                    popup.
                  </li>
                  <li>
                    Each user has a profile dashboard which displays their
                    current task, a roadmap of the completed tasks, and a
                    gallery populated with images that motivate the user.
                  </li>
                  <li>
                    The dashboard and extension pop-up are always in-sync.
                  </li>
                </ol>

                <MyButton href='https://www.figma.com/proto/qzyKR4nYhvoto2GAvLiiOr/BalanceBuddy-High-Fidelity?page-id=0%3A1&node-id=2%3A350&viewport=481%2C246%2C0.02&scaling=min-zoom&starting-point-node-id=2%3A350'>
                  <Icon icon='bxl:figma' inline={true} />
                  Figma Prototype
                </MyButton>
                <MyButton
                  href='https://github.com/BalanceBuddy/balancebuddy'
                  style={{ marginTop: 0 }}
                >
                  <Icon icon='akar-icons:github-fill' inline={true} />
                  Source Code
                </MyButton>
              </div>
            </LeftRightContainer>
          </Content>
        </div>
      </ScrollToTop>
    </div>
  );
}

export default BalanceBuddy;
