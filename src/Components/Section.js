import React from "react";
import styled from "styled-components";

const SectionWrap = styled.section`padding:24px 0;`;
const TitleRow = styled.div`margin-bottom:8px;`;
const SubTitle = styled.p`
  margin:0 0 20px 0; font-size:1.06rem; font-weight:800; opacity:.7; letter-spacing:.15px;
`;

export default function Section({ title, subtitle, children, ...rest }) {
  return (
    <SectionWrap className="case-section" {...rest}>
      <TitleRow>
        <h1 style={{marginBottom:0}}>{title}</h1>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </TitleRow>
      {children}
    </SectionWrap>
  );
}
