import styled from "styled-components";

export const MainSection = styled.section`
  margin-top: 100px;
  margin-bottom: 200px;
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
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (max-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1354px;
  }
`;