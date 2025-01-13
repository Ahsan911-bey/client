import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AnimeGrid from "./AnimeGrid";
import Footer from "./footer"

export default function Site() {
    return(
        <div>
            <NavBar />
            <HeroSection />
            <AnimeGrid />
            <Footer />
        </div>
    )
}