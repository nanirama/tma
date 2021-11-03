import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

const WhoweareBlock = () => {   
  return(
  <Wrapper id="about">
     <Container>
        <Grid>
           <Item>
              <Image>
                 <StaticImage src="../../images/team-success.png" alt="" />
              </Image>
           </Item>
           <Item>
              <TextBlock>
                 <h2>Who we are?</h2>
                 <p>Take me abroad is a prototype designed and developed by Mr. Jerin Francis and his team under Norvel Technologies Pvt Ltd to protect its subscribers who are professionals as well as students against fake Job scams as well as fraudsters.</p>
                 <p>Our team is a small group of people from various countries, passonate to provide in-depth and most updated informations and Immigration related assiatance on Migration Programs, Study Visa, Job Visa and other immigration-related opportunities for  countries like Canada, Australia, New Zealand, United Kingdom, Schengen and other European Countries.</p>
              </TextBlock>
           </Item>
        </Grid>
     </Container>
  </Wrapper>
  )
  }
  export default WhoweareBlock;
    
const Wrapper = styled.section`
  margin: 60px auto;
  width:100%;
float:left;
@media (max-width: 991px) {
  margin:30px 0;
}
  `;
  const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  padding:0 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px 10px;
  justify-content:center;
  align-items:center;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
     }
     @media (max-width: 991px) {
text-align:center;
flex-direction: column-reverse;
display: flex;
     }
`;
const Item = styled.div`
`;
const TextBlock = styled.div`
padding-right:45px;
@media (max-width: 1100px) {
    padding-right:0px;
}
`;
const Image = styled.div`
display:flex;
justify-content:center;
  align-items:center;
  @media (max-width:991px) {
    margin:20px 0;
  }

`;
