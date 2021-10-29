import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import img from '../../images/arrow.png';

const Testimonials = () => {
  return (
  <Wrapper>
     <Container>
        <TestimonialBlock>
           <h2>What our clients have to say?</h2>
           <Grid>
              <Item>
                 <ReviewBox>
                    <h4>Title Here</h4>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magniaLorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                 </ReviewBox>
                 <StaticImage src="../../images/author-1.png" alt="" />
                 <AuthorName>Wade Warren</AuthorName>
              </Item>
              <Item>
                 <ReviewBox>
                    <h4>Title Here</h4>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magniaLorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                 </ReviewBox>
                 <StaticImage src="../../images/author-2.png" alt="" />
                 <AuthorName>Cody Fisher</AuthorName>
              </Item>
              <Item>
                 <ReviewBox>
                    <h4>Title Here</h4>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magniaLorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                 </ReviewBox>
                 <StaticImage src="../../images/author-3.png" alt="" />
                 <AuthorName>Robert Fox</AuthorName>
              </Item>
           </Grid>
        </TestimonialBlock>
     </Container>
  </Wrapper>
  );
  };
  export default Testimonials;

const Wrapper = styled.section`
margin: 60px auto;
width:100%;
float:left;
@media (max-width: 991px) {
margin:30px 0 50px 0;
}
`;

const Container = styled.div`
max-width: 1170px;
margin: auto;
padding:0 15px;
`;
const TestimonialBlock = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding-bottom:20px;
@media (max-width: 991px) {
  padding-bottom:0px;
}
`;
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1fr);
grid-gap: 20px 30px;
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
   @media only screen and (min-width:701px) and (max-width:991px){
      grid-template-columns: repeat(2, 1fr);
   }
  `;
const Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`;
const ReviewBox = styled.div`
background-color:#fff;
box-shadow: 0px 2px 13.3333px rgba(0, 0, 0, 0.04);
border: 1px solid #F84663;
// border-image-source: linear-gradient(180deg, rgba(252, 99, 82, 0) 0%, #F84663 102.03%);
border-radius:6px;
padding:50px 15px;
margin-bottom:40px;
position:relative;

&::before{
  position:absolute;
  content:'';
  width:26px;
  height:26px;
  background-image:url(${img});
background-position:bottom center;
background-repeat:no-repeat;
bottom:-22px;
margin:0 auto;
left:0;
right:0;
  
}


@media (max-width: 767px) {
  padding:30px 15px;
}
`;
const Paragraph = styled.p`
font-size:14px; 
line-height:24px;
margin:0;
@media only screen (max-width:991px){
br{
    display:none;
}
`;
const AuthorName = styled.p`
font-size:14px; 
line-height:24px;
font-weight:500;
color:#2D3748;
margin-top:15px;
`;