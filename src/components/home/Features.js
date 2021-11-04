import React from "react"
import styled from "styled-components";
// import Backpack from "../../svg/backpack.svg";

import feature1 from "../../images/feature1.svg";
import feature2 from "../../images/feature2.svg";
import feature3 from "../../images/feature3.svg";
const Features = () => {   
    return(
    <Wrapper>
       <Container>
          <FeatureBlock>
             <h2>Our Top Features</h2>
             <Grid>
                <Item>
                   <Icon>
                     <img src={feature1}/>                      
                   </Icon>
                   <h4>Jobs</h4>
                   <Paragraph>Abroad job options through licensed<br/> Recruiters</Paragraph>
                </Item>
                <Item>
                   <Icon>
                   <img src={feature2}/> 
                   </Icon>
                   <h4>Study Abroad</h4>
                   <Paragraph>Study Abroad destinations and latest<br/> Courses</Paragraph>
                </Item>
                <Item>
                   <Icon>
                   <img src={feature3}/> 
                   </Icon>
                   <h4>Academy</h4>
                   <Paragraph>Master classes on immigration<br/> procedures</Paragraph>
                </Item>
             </Grid>
          </FeatureBlock>
       </Container>
    </Wrapper>
    )
    }
    export default Features;

const Wrapper = styled.section`
  margin: 60px auto;
  width:100%;
float:left;
@media (max-width: 991px) {
    margin:0 0 30px 0;
}
  `;
  const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  padding:0 15px;
`;
const FeatureBlock = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px 20px;
  justify-content:center;
  align-items:center;
  width:100%;
  margin-top:55px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
     }
     @media (max-width: 991px) {
     margin-top:30px;
     }
    `;
const Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
position:relative;
@media (min-width: 1200px) {
&::before{
position:absolute;
content:'';
top:30px;
right:-150px;
width:77%;
height:1px;
background-color:#e5e5e5;
}
}
&:nth-of-type(3)::before{
display:none;
    }
&:nth-of-type(1) div{
    background: rgba(255, 92, 88, 0.1);
}
&:nth-of-type(2) div{
    background: rgba(121, 180, 183, 0.13);
 }
&:nth-of-type(3) div{
    background: rgba(124, 131, 253, 0.1);
}
`;
const Icon = styled.div`

border-radius: 6px;
width: 65px;
height: 65px;
margin-bottom:20px;
`;

const Paragraph = styled.p`
font-size:14px; 
line-height:24px;
@media only screen and (min-width:768px) and (max-width:991px){
br{
    display:none;
}
`;