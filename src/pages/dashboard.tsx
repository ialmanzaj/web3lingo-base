import { type NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { CourseHeader } from "@/components/LanguageHeader";
import { useBoundStore } from "../hooks/useBoundStore";
import _bgSnow from "../../public/bg-snow.svg";
import { RightBar } from "@/components/RightBar";
import { Sidebar } from "@/components/sidebar";
import _logosDefi from "../../public/defi-logos.svg";
import type { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { TopBar } from "@/components/TopBar";

const Dashboard: NextPage = () => {
  return (
    <main className="min-h-screen">
      <TopBar />

      <div className="relative flex w-screen	flex-row gap-4">
        <Sidebar />

        <div className="flex grow">
          <div className="flex-column gap-7">
            <Card className="w-5/6 p-3">
              <Link href="/lesson">
                <div>
                  <div>
                    <div>
                      <CardHeader>Blockchain 101</CardHeader>
                      <CardDescription color="gray">
                        Aprende los conceptos básicos y fundamentales de
                        blockchain con este curso de introducción.
                      </CardDescription>
                      <CardContent>
                        <div className="inline">
                          Ir al curso{" "}
                          <svg
                            className="inline"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"></path>
                          </svg>
                        </div>
                      </CardContent>
                      <div>
                        <Badge color="orange">Principiante</Badge>
                        <Badge color="blue">6 hours</Badge>
                        <Badge color="green">Fundamentos</Badge>
                      </div>
                    </div>

                    <div>
                      <img
                        alt=""
                        src="https://quest.philand.xyz/assets/cover_adventure_ens_owner.png"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
