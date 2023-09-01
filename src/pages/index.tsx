import { type NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { CourseHeader } from "../components/LanguageHeader";
import { useBoundStore } from "../hooks/useBoundStore";
import _bgSnow from "../../public/bg-snow.svg";
import { RightBar } from "../components/RightBar";

import _logosDefi from "../../public/defi-logos.svg";
import type { StaticImageData } from "next/image";
import { Flex, Button } from "@radix-ui/themes";

const bgSnow = _bgSnow as StaticImageData;
const bgDefi = _logosDefi as StaticImageData;

const Home: NextPage = () => {
  //const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const [email, setEmail] = useState("");

  const setLanguage = useBoundStore((x) => x.setLanguage);

  return (
    <main
      className="theme-dark flex min-h-screen flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <Flex gap="3" align="center">
        <Button size="3" variant="soft">
          Edit profile
        </Button>
        <Button size="2" variant="soft">
          Edit profile
        </Button>
        <Button size="1" variant="soft">
          Edit profile
        </Button>
      </Flex>
      <RightBar />
    </main>
  );
};

export default Home;
