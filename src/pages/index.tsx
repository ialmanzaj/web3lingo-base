import { type NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { CourseHeader } from "../components/LanguageHeader";
import { useBoundStore } from "../hooks/useBoundStore";
import _bgSnow from "../../public/bg-snow.svg";
import { RightBar } from "../components/RightBar";
import { Sidebar } from "../components/sidebar";
import _logosDefi from "../../public/defi-logos.svg";
import type { StaticImageData } from "next/image";
import {
  Container,
  Flex,
  Box,
  Text,
  Button,
  Grid,
  Card,
  Badge,
  Heading,
} from "@radix-ui/themes";

import { NavBar } from "~/components/Nav";

const bgSnow = _bgSnow as StaticImageData;
const bgDefi = _logosDefi as StaticImageData;

const Home: NextPage = () => {
  //const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen">
     <h1 className="center">AprendiendoDefi.com</h1>
    </main>
  );
};

export default Home;
