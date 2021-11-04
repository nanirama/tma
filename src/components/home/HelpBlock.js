import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

import helpImg1 from "../../images/physics.svg";
import helpImg2 from "../../images/globus.svg";
import helpImg3 from "../../images/video.svg";
import helpImg4 from "../../images/pendilum.svg";
import helpImg5 from "../../images/evaluation.svg";
import helpImg6 from "../../images/rating.svg";
const Help = () => {   
    return(
    <Wrapper id="features">
       <Container>
          <HelpBlock>
             <h2>How We can help</h2>
             <Grid>
                <Item>
                   <Image>
                      <img src={helpImg1}/>
                   </Image>
                   <h4>Shows Latest Jobs</h4>
                   <Paragraph>We Publishes Abroad job opportunities<br/> from licensed recruiters</Paragraph>
                </Item>
                <Item>
                   <Image>
                     <img src={helpImg2}/>
                   </Image>
                   <h4>Abroad Study</h4>
                   <Paragraph>Our platform helps students to find their<br/> favorite courses in their Dream destinations</Paragraph>
                </Item>
                <Item>
                   <Image>
                     <img src={helpImg3}/>
                   </Image>
                   <h4>Master Class</h4>
                   <Paragraph>instructional guides and tutorials videos<br/> on various immigration procedures</Paragraph>
                </Item>
                <Item>
                   <Image>
                     <img src={helpImg4}/>
                   </Image>
                   <h4>Interactive Sessions</h4>
                   <Paragraph>Live Q&A and Group Discussions with<br/> experts</Paragraph>
                </Item>
                <Item>
                   <Image>
                     <img src={helpImg5}/>
                   </Image>
                   <h4>Career Advice</h4>
                   <Paragraph>1-On-1 Personal Career advices from<br/> expert career advisors</Paragraph>
                </Item>
                <Item>
                   <Image>
                     <img src={helpImg6}/>
                   </Image>
                   <h4>Trust</h4>
                   <Paragraph>The platform you can rely on for<br/> generations</Paragraph>
                </Item>
             </Grid>
          </HelpBlock>
       </Container>
    </Wrapper>
    )
    }
    export default Help;

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
const HelpBlock = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px 10px;
  justify-content:center;
  align-items:center;
  width:100%;
  margin-top:55px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
     }
    @media (max-width: 991px) {
     margin-top:30px;
     }
     @media only screen and (min-width:600px) and (max-width:991px){
        grid-template-columns: repeat(2, 1fr);
     }
    `;
const Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:0;
text-align:center;
`;
const Image = styled.div`
margin-bottom:20px;
`;
const Paragraph = styled.p`
font-size:14px; 
line-height:24px;
@media only screen (max-width:991px){
br{
    display:none;
}
`;


















