import React, { useRef } from 'react';
import styled from 'styled-components';

const Star = styled.div`
  border-radius: 100%;
  background-color: #aaa6bd;
  position: absolute;
  z-index: -5;
`;

const RandomStar = (props) => {
  const minSize = 1;
  const maxSize = 5;
  const minDur = 3;
  const maxDur = 8;
  const minDel = 0.1;
  const maxDel = 2;
  const maxHeight = 90;
  const maxHeightPhone = 30;

  const randHeight = Math.floor(Math.random() * maxHeight);
  //     const randHeightPhone = Math.floor(Math.random()*maxHeightPhone);
  const randWidth = Math.floor(Math.random() * 100);
  const randSize = Math.floor(
    Math.random() * (maxSize - minSize + 1) + minSize
  );

  const randAnimDuration = Math.random() * (maxDur - minDur + 1) + minDur;
  const randAnimDelay = Math.random() * (maxDel - minDel + 1) + minDel;

  const StarStyle = useRef({
    height: `${randSize}px`,
    width: `${randSize}px`,
    top: `${randHeight}%`,
    left: `${randWidth}%`,
    transform: 'translate(-50%, -50%)',
    zindex: '-10',
    animation: `flickerAnimation ${randAnimDuration}s infinite`,
    animationDelay: `${randAnimDelay}s`,
  });

  return <Star style={StarStyle.current} {...props} />;
};

export default RandomStar;
