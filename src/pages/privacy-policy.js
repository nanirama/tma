import * as React from "react"
import styled from "styled-components";


import Layout from "../components/layout"

const PrivacyPolicy = () => (
    <Layout bgcolor="#fcfcfc">
     <Wrapper>
        <Container>
            <Grid>
                <Item>
                    <h1>Privacy Policy</h1>
                    <p>Jerin Francis built the Take Me Abroad app as an Ad Supported app. This SERVICE is provided by jerin francis at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Take Me Abroad unless otherwise defined in this Privacy Policy.</p>
                    <h2>Information Collection and Use</h2>
                    <p>For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to email address, name,. The information that I request will be retained on your device and is not collected by me in any way. The app does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app Google Play Services</p>
                    <h2>Log Data</h2>
                    <p>I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</p>
                    <h2>Cookies</h2>
                    <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                    <h2>Service Providers</h2>
                    <p>I may employ third-party companies and individuals due to the following reasons:</p>
                    <ul>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <p>I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                    <h2>Security</h2>
                    <p>I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.</p>
                    <h2>Links to Other Sites</h2>
                    <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any thirdparty sites or services.</p>
                    <h2>Children’s Privacy</h2>
                    <p>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.</p>
                    <h2>Changes to This Privacy Policy</h2>
                    <p>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <a href="mailto:info@takemeabroad.in">info@takemeabroad.in</a>. This privacy policy page was created at privacypolicytemplate.net and modified/generated by App Privacy Policy Generator</p>
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
export default PrivacyPolicy;
