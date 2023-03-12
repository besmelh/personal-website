import React, { useState, Children } from 'react';
import styled from 'styled-components';
import PlanetDisplay from './PlanetDisplay';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StyledMainPageSection = styled.section`
  display: flex;
  align-items: center;
  padding: 50px 0;
  z-index: 1;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(17, 22, 41, 0.6) 0%,
    rgba(32, 40, 71, 0) 100%
  );
  padding: 50px;
  top: -100px;
  border-radius: 4px;
  position: relative;
  width: 300px;
  z-index: -5;

  & h3 {
    font-weight: normal;
    font-size: 30px;
    margin: 0;
  }

  & h4 {
    font-weight: 200;
    font-size: 25px;
    margin: 0;
  }

  & p {
    font-weight: 100;
    font-size: 15px;
    text-align: justify;

    &.skills {
      font-size: 13px;
    }
  }

  @media (max-width: 730px) {
    margin-top: 10%;
    align-items: center;
    text-align: center;

    & h4 {
      font-weight: 200;
      font-size: 25px;
      margin-top: 3%;
    }

    & p {
      width: 250px;
      text-align: center;
    }
  }
`;

const rightContainer = {
  justifyContent: 'flex-end',
};

const rightContainerText = {
  top: '0',
  left: '150px',
  paddingRight: '150px',
  background:
    'linear-gradient(90deg, rgba(17, 22, 41, 0.6) 0%, rgba(32, 40, 71, 0) 100%)',
};

const leftContainerText = {
  top: '0',
  left: '-150px',
  paddingLeft: '150px',
  background:
    'linear-gradient(270deg, rgba(17, 22, 41, 0.6) 0%, rgba(32, 40, 71, 0) 100%)',
};

function MainPageSection(props) {
  const transition = { duration: 1, type: 'spring' };
  const { title, summary, skills, href, src, alt, allignedLeft, children } =
    props;
  const [showVideo, setShowVideo] = useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 730;
  const modelDimension = '400px';

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(href || '/');
  };

  // function model(route) {
  //   const model = (
  //     <motion.div
  //       whileHover={{ scale: 1.1 }}
  //       transition={transition}
  //       onClick={route}
  //     >
  //       {Children.map(children, (child) => (
  //         <div>{child}</div>
  //       ))}
  //     </motion.div>
  //   );
  //   return model;
  // }

  const model = (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={transition}
      onClick={handleRoute}
    >
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </motion.div>
  );

  return (
    <StyledMainPageSection
      style={allignedLeft === false ? rightContainer : null}
      className={width < breakpoint ? 'phone-view' : null}
    >
      {(allignedLeft === true || width < breakpoint) && model}

      <div>
        <MainText
          style={
            width < breakpoint
              ? null
              : allignedLeft === true
              ? leftContainerText
              : rightContainerText
          }
        >
          <h3>{title}</h3>
          <p>{summary}</p>
          <p className='skills'>{skills}</p>
        </MainText>
      </div>

      {allignedLeft === false && width > breakpoint && model}
    </StyledMainPageSection>
  );
}

export default MainPageSection;
