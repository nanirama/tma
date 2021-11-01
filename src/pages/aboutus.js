import * as React from "react"
import styled from "styled-components";


import Layout from "../components/layout"

const AboutUs = () => (
    <Layout bgcolor="#fcfcfc">
     <Wrapper>
        <Container>
            <Grid>
                <Item>
                    <h1>About Us</h1>
                    <p><b>TAKE ME ABROAD owned</b>, registered and operated by Norvel Technologies Private Limited, a private company incorporated under the (Indian) Companies Act, 2013 and having its registered office at Room No. 405, Christhuraja Shopping Complex, Madaplathuruth, Moothakunnam P.O., Ernakulam, Kerala, India 683516 (hereinafter referred to as “Take Me Abroad” or “TAKE ME ABROAD” or “The Mobile Application” or “us” or “we” or “our” or “Company”).</p>
                    <p>We offer value-based services to students & professionals seeking an opportunity to study/work abroad. Our services include educating and helping the students, as well as professionals, make the right decision based on their credentials, areas of expertise, course preferences, work experience budget and other requirements and providing them personalized counselling on courses, permanent residency and related processes, visa procurement and post landing services. We establishing a prototype which shall try to protect its subscribers who are professionals as well as students against fake Job scams as well as fraudsters, of which the present generation is vulnerable to. </p>
                    <p>This Mobile Application is designed to provide in-depth and most updated information and Immigration related Assessment tools related to Skilled Migration Programs, Study Visa, Job Visa and other immigration-related opportunities for Canada, Australia, New Zealand, United Kingdom, Schengen and other European Countries.</p>
                </Item>
            </Grid>
        </Container>
    </Wrapper>
  </Layout>
  )
  const Wrapper = styled.section`
    margin: 50px auto;
    width:100%;
    float:left;
    @media only screen and (max-width:992px) {
    margin: 10px auto;
    }
  `;
  const Container = styled.div`
  max-width: 1170px;
  margin: auto;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  justify-content:start;
  align-items:start;
  padding:20px 0px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
     }
     @media (max-width: 991px) {
text-align:center;
flex-direction: column-reverse;
display: flex;

     }
`;
const Item = styled.div`
     & > p{
         color:#7c838e !important;
     }
     & > p > b{
        color:#2d3748 !important;
        font-weight:700 !important;
    }
     & > h1{
         color:#2d3748 !important;
         text-align:center;
         font-size:34px !important;
         line-height:48px !important;
     }
     & > h2{
         color:#2d3748 !important;
        font-size:19px !important;
        line-height:30px !important;
        padding-bottom:2px !important;
        margin-bottom:2px !important;
     }
     & > ul > li{
        font-size:19px !important;
        line-height:24px !important; 
        color:#7c838e !important; 
     }
     & > p > a{
         color:#f84663 !important;
     }
     @media only screen and (max-width:992px) {
        padding:0px 0.5rem !important;
        & > p,
        & > h2,
        & > ul,
        & > ul > li{
            text-align:left !important;
        }
     }
`;
export default AboutUs;
