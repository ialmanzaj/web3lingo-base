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
      <NavBar />

      <Flex
        direction="row"
        className="relative	w-screen bg-[#292929]"
        width="100%"
        gap="4"
      >
        <Sidebar />

        <Box grow="1" py="5">
          <Flex direction="column" gap="7">
            <Card asChild className="w-5/6 p-3" m="auto">
              <Link href="/">
                <Box p="4">
                  <Flex>
                    <Flex direction="column" justify="between">
                      <Heading as="h2" size="8" weight="bold">
                        Blockchain 101
                      </Heading>
                      <Text as="div" color="gray" size="3">
                        Aprende los conceptos básicos y fundamentales de blockchain
                        con este curso de introducción.
                      </Text>
                      <Box py="4">
                        <Link href="/" className="inline">
                          Ir al curso{" "}
                          <svg
                            className="inline"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                             
                            ></path>
                          </svg>
                        </Link>
                      </Box>
                      <Flex gap="2">
                        <Badge color="orange">Beginner</Badge>
                        <Badge color="blue">6 hours</Badge>
                        <Badge color="green">Fundamentals</Badge>
                      </Flex>
                    </Flex>

                    <Box width="auto" height="auto">
                      <img
                        alt=""
                        src="https://quest.philand.xyz/assets/cover_adventure_ens_owner.png"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </Box>
                  </Flex>
                </Box>
              </Link>
            </Card>
            <Card asChild className="w-5/6 p-3" m="auto">
              <Link href="/">
                <Box p="4">
                  <Flex>
                    <Flex direction="column" justify="between">
                      <Heading as="h2" size="8" weight="bold">
                        NFTs 101
                      </Heading>
                      <Text as="div" color="gray" size="3">
                        Aprende los conceptos básicos y fundamentales de los NFTs
                        con este curso de introducción.
                      </Text>
                      <Box py="4">
                        <Link href="/" className="inline">
                          Ir al curso{" "}
                          <svg
                            className="inline"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                             
                            ></path>
                          </svg>
                        </Link>
                      </Box>
                      <Flex gap="2">
                        <Badge color="orange">Beginner</Badge>
                        <Badge color="blue">8 hours</Badge>
                        <Badge color="green">Fundamentals</Badge>
                      </Flex>
                    </Flex>

                    <Box width="auto" height="auto">
                      <img
                        alt=""
                        src="	https://quest.philand.xyz/assets/cover_adventure_beginner.png"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </Box>
                  </Flex>
                </Box>
              </Link>
            </Card>
          </Flex>
        </Box>
        <Box px="5">
          <RightBar />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
