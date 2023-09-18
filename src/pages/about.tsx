import { type NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import _bgSnow from "../../public/bg-snow.svg";

import _logosDefi from "../../public/defi-logos.svg";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBarBasic";

const About: NextPage = () => {
  return (
    <main>
      <TopBar />
      <div className="m-auto max-w-screen-sm gap-4 py-4">
        <p className="py-6 text-2xl font-bold">Quienes somos</p>
        <br></br>
        <p className="text-xl">
          <span className="font-bold">Web3lingo</span> es una plataforma
          dedicada a los novatos, entusiastas y pioneros de blockchain.
        </p>
        <br></br>
        <p className="text-xl">
          Nuestra misión es acelerar la adopción de Web3 y educar a los próximos
          mil millones de usuarios en LATAM a usar y crear en el mundo del
          crypto.
        </p>
        <br></br>
        <br></br>
        <p>
          Creado por <a href="https://x.com/ialmanzaj">Isaac Almanza</a> y 
          <a href="https://x.com/cryptoxkong"> Juan Kong</a>
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default About;
