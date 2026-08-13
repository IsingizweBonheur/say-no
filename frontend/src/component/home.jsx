import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Stats from "./stats";
import Choose from "./choose";
import Campaigns from "./compain";
import Vision from "../pages/vision"
import SEO from "../seo/seo";
import Footer from "./footer";
export default function Home(){
    return(
        <div>
              <SEO
        title="Say No to Drug | Drug Abuse Prevention in Rwanda"
        description="Say No to Drug raises awareness about drug abuse, promotes prevention, and encourages healthier, drug-free communities in Rwanda."
        url="https://antidrug.com/"
      />
            <Navbar />
            <Hero />
            <Stats />
            <Choose />
            <Campaigns />
            <Vision />
            <Footer />
        </div>
    )
}