import React from 'react';
import styled from 'styled-components';
import StaryBackground from '../Components/StaryBackground';

const HeaderContainer = styled.div`
  padding: 10%;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-family: 'PralineMCL', sans-serif;
  color: var(--color-secondary-dark);
  color: white;

  & h1 {
    font-size: 38px;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  }

  & h2 {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 800;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  }

  & h3 {
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  & h4 {
    font-weight: 200;
    font-size: 18px;
    margin: 0;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  & br {
    display: hide;
  }

  & .astronaut {
    width: 40%;
    padding-right: 5%;
    height: 500px;
    & img {
      width: 100%;
      animation: float 6s ease-in-out infinite;
    }
  }

  & .icon {
    width: 40%;
    padding-right: 5%;
    height: 500px;
    & img {
      width: 100%;
      animation: float 6s ease-in-out infinite;
    }
  }

  & .homeText {
    width: 60%;
    margin-top: 15%;
  }

  & .main {
    background-color: red;
    flex-direction: row;
  }

  @media only screen and (max-width: 1040px) {
    /* For everything smaller than 1040px */
    /* flex-direction: column-reverse; */
    margin-bottom: 5%;
    & .icon {
      width: 100%;
      padding-right: 0;
      height: 400px;
      & img {
        width: 100%;
        animation: float 6s ease-in-out infinite;
      }
    }
  }
`;

const GradientBG = styled.div`
  position: absolute;
  width: 100%;
  height: 460px;
  left: 0;
  top: 0;
  z-index: -100;

  background: linear-gradient(
    180deg,
    rgba(232, 225, 254, 0.6) 0%,
    rgba(232, 225, 254, 0) 100%
  );
`;

function Header(props) {
  const { stars, topGradient, children, main, ...other } = props;

  // handling smaller viewports
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1040;
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

  const flexCol = {
    flexDirection: 'column-reverse',
  };
  const flexRow = {
    flexDirection: 'row',
  };

  return (
    <HeaderContainer
      // style={main === false ? null : width <= breakpoint ? flexRow : null}
      style={width > breakpoint ? null : main === true ? flexRow : flexCol}
      {...other}
    >
      {topGradient && <GradientBG />}
      {stars && <StaryBackground />}
      {children}
    </HeaderContainer>
  );
}

export default Header;
