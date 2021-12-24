import React from "react";
import styled from 'styled-components';
import { Icon } from '@iconify/react';


const StyledFooter = styled.footer`
    // height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: justify;
    font-family: "Avenir", sans-serif;
    background-color: var(--color-primary);
    color: var(--color-secondary-dark);
    align-items: center;
    padding: 5% 0;

    & a {
        padding: 0;
        margin:0;
        margin-bottom: 8px;
        font-weight: 500;
        text-decoration: none;
        color: var(--color-secondary-dark);
    }

    & svg {
        color: var(--color-secondary-dark);
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

function Footer(props) {

  const {...other } = props;

  return (
    <StyledFooter {...other}>
        <a href="/">Home Page</a>
        <a href="https://drive.google.com/file/d/1d2gmDO29PjthNws-rth2ulxlUtvvQhFP/view?usp=sharing" target={"_blank"}>My Resume</a>

        <IconLinks>
            <a href="mailto:balshaal@u.rochester.edu" target={"_blank"}><Icon icon="clarity:email-solid" /></a>
            <a href="https://www.linkedin.com/in/besmelh-alshaalan/" target={"_blank"}><Icon icon="akar-icons:github-fill" /></a>
            <a href="https://github.com/besmelh" target={"_blank"}><Icon icon="entypo-social:linkedin-with-circle" /></a>
            <a href="https://github.com/besmelh" target={"_blank"}><Icon icon="entypo-social:youtube-with-circle" /></a>
        </IconLinks>

        <p>© 2021 by Besmelh Alshaalan</p>
    </StyledFooter>
  );
}
  
export default Footer;