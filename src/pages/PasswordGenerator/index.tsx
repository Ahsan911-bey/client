import { Geist, Geist_Mono } from "next/font/google";
import  Header  from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PassGen from "./PassGen";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col">
            <Header />
                <main className="flex-grow">
                        <PassGen />
                </main>
            <Footer />
      </div>
    );
  }
