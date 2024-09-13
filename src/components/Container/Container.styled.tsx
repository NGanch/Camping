import styled from "styled-components";

export const MainSection = styled.section`
  margin-top: 48px;
  margin-bottom: 52px;
`; 

export const Section = styled.section`
  margin-bottom: 70px;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;
  max-width: 375px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 768px;
  }

  @media screen and (max-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1352px;
  }
`;