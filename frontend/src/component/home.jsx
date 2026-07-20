import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Stats from "./stats";
import Choose from "./choose";
import Campaigns from "./compain";
import Footer from "./footer";
export default function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Stats />
            <Choose />
            <Campaigns />
            <Footer />
        </div>
    )
}