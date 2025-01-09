import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AnimeGrid from "./AnimeGrid";

export default function Site() {
    return(
        <div>
            <NavBar />
            <HeroSection />
            <AnimeGrid />
        </div>
    )
}