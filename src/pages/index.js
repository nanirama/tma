import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/home/Banner";
import Impressive from "../components/home/Impressive";
import Features from "../components/home/Features";
import WhyusBlock from "../components/home/WhyusBlock";
import HelpBlock from "../components/home/HelpBlock";
import WhoweareBlock from "../components/home/WhoweareBlock";
import Testimonials from "../components/home/Testimonials";

const IndexPage = () => (
  <Layout bgcolor="#fafafa">
     <Banner />
     <Impressive />
     <Features />
     <WhyusBlock />
     <HelpBlock />
     <WhoweareBlock />
     <Testimonials />
  </Layout>
  )
export default IndexPage;
