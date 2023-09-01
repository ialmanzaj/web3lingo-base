import Link from "next/link";
import React from "react";
import { useBoundStore } from "../hooks/useBoundStore";
import { TreasureClosedSvg } from "./Svgs";
import { Box, Card, Button, Heading, Flex, Badge } from "@radix-ui/themes";

export const XpProgressSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());
  const goalXp = useBoundStore((x) => x.goalXp);
  return (
    <Card size="3" className="flex flex-col gap-5 p-6">
      <div className="flex items-center justify-between">
        <Box py="3">
          <Heading as="h2" size="5">
            Tu progreso semanal
          </Heading>
        </Box>
      </div>
      <Flex gap="5">
        <TreasureClosedSvg />
        <Flex className="grow flex-col" justify="center">
          {/* <Heading as="h3" size="4" color="gray" weight="medium">
            Objetivo diario
          </Heading> */}
          <Flex gap="5" className="items-center">
            <div className="relative h-4 w-full grow rounded-full bg-gray-200">
              {xpToday > 0 && (
                <div
                  className="absolute left-0 top-0 h-4 rounded-full bg-yellow-400"
                  style={{ width: `${Math.min(1, xpToday / goalXp) * 100}%` }}
                >
                  <div className="absolute left-2 right-2 top-1 h-[6px] rounded-full bg-yellow-300"></div>
                </div>
              )}
            </div>
            <Badge color="crimson">
              {xpToday}/{goalXp} XP
            </Badge>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
