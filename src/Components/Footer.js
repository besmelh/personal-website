import React from "react";
import styled from 'styled-components';
import { Icon } from '@iconify/react';


const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: justify;
    font-family: "Lufga", sans-serif;
    background: linear-gradient(180deg, rgba(32, 40, 71, 0) 0%, rgba(17, 22, 41, 0.6) 100%);
    color:  white;
    align-items: center;
    padding: 5% 0;
    margin-top: 5%;


    & a {
        padding: 0;
        margin:0;
        margin-bottom: 8px;
        font-weight: 500;
        text-decoration: none;
        color:  white;
    }

    & svg {
        color:  white;
    }


    & a:hover, svg:hover {
        color: var(--color-secondary-light);
    }
`;

const IconLinks = styled.div`

    margin: 10px 0;

    & a {
        font-size: 25px;
        margin: 0 5px;
    }
`

const Copyrights = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
    color: #AAA5BD;

    & p{
        margin: 0;
        padding: 5px 0;
    }

`

function Footer(props) {

  const {...other } = props;

  return (
    <StyledFooter {...other}>
        <a href="/">Home Page</a>
        <a href="https://drive.google.com/file/d/1d2gmDO29PjthNws-rth2ulxlUtvvQhFP/view?usp=sharing" target={"_blank"} rel="noreferrer">My Resume</a>

        <IconLinks>
            <a href="mailto:balshaal@u.rochester.edu" target={"_blank"} rel="noreferrer"><Icon icon="clarity:email-solid" /></a>
            <a href="https://github.com/besmelh" target={"_blank"} rel="noreferrer"><Icon icon="akar-icons:github-fill" /></a>
            <a href="https://www.linkedin.com/in/besmelh-alshaalan/" target={"_blank"} rel="noreferrer"><Icon icon="entypo-social:linkedin-with-circle" /></a>
            <a href="https://youtube.com/channel/UC29ev1ljKQAl-8-hp6VwL-g" target={"_blank"} rel="noreferrer"><Icon icon="entypo-social:youtube-with-circle" /></a>
        </IconLinks>

        <Copyrights>
            <p>Built using React, and planets made with Blender.</p>
            <p>© 2022 by Besmelh Alshaalan</p>
        </Copyrights>

    </StyledFooter>
  );
}
  
export default Footer;