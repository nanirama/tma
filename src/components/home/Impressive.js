import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

const Impressive = () => {   
  return(
  <Wrapper>
     <Container>
        <Grid>
           <Item>
              <Image>
                 <StaticImage src="../../images/product-planning-discussion.png" alt="" />
              </Image>
           </Item>
           <Item>
              <TextBlock>
                 <h2>Its Impressive how we are growing so fast</h2>
                 <p>Our community started in late 2020, till now Take Me Abroad helped thousands of students to achieve their goals through personal career advices. We are now one of  the biggest abroad communities in India</p>
                 <CounterBlock>
                    <CountItem>
                       <SubHeading>25.4K+</SubHeading>
                       <SubTitle>Total downloads</SubTitle>
                    </CountItem>
                    <CountItem>
                       <SubHeading>15K+</SubHeading>
                       <SubTitle>Monthly users</SubTitle>
                    </CountItem>
                    <CountItem>
                       <SubHeading>4.5</SubHeading>
                       <SubTitle>Star rating</SubTitle>
                    </CountItem>
                 </CounterBlock>
              </TextBlock>
           </Item>
        </Grid>
     </Container>
  </Wrapper>
  )
  }
  export default Impressive;
    
const Wrapper = styled.section`
  margin: 60px auto;
  width:100%;
float:left;
@media (max-width: 767px) {
  margin: 30px auto;
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
  grid-gap: 20px 20px;
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
const Image = styled.div`
@media (max-width: 991px) {
margin-bottom:30px;
}
`;
const TextBlock = styled.div`
padding-right:30px;
@media (max-width: 1100px) {
    padding-right:0px;
}
`;
const CounterBlock = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
@media (max-width: 767px) {
  flex-direction:column;
}
`;
const CountItem = styled.div`
justify-content:center;
display:flex;
align-items:center;
padding:0 25px;
text-align:center;
flex-direction:column;
@media only screen and (min-width:992px) and (max-width:1100px){
  padding:0 12px;
}
@media (max-width: 767px) {
margin-bottom:20px;

}
`;
const SubHeading = styled.h3`
color: #F84663;
`;
const SubTitle = styled.h4`
font-weight:500;
`;