import React from "react";
import { LightningProgressSvg, TreasureProgressSvg } from "./Svgs";
import { useBoundStore } from "../hooks/useBoundStore";
import { Card, Box, Heading, Flex, Badge } from "@radix-ui/themes";

export const DailyQuestsSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());
  const goalXp = useBoundStore((x) => x.goalXp);
  return (
    <Card
      variant="surface"
      size="2"
      className="flex flex-col gap-5 p-6 font-bold	"
    >
      <Box py="2">
        <Heading as="h2" size="4">
          Retos diarios
        </Heading>
      </Box>
      <div className="flex items-center gap-4">
        <LightningProgressSvg />
        <div className="flex flex-col gap-2">
          <Flex gap="2">
            <Badge color="blue">Gana +{goalXp} XP</Badge>
          </Flex>
          <div className="flex items-center">
            <div className="relative h-5 w-52 rounded-l-full bg-gray-200">
              <div
                className={[
                  "relative h-full rounded-l-full bg-yellow-400",
                  xpToday === 0 ? "" : "px-2",
                ].join(" ")}
                style={{ width: `${Math.min(1, xpToday / goalXp) * 100}%` }}
              >
                <div className="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                {xpToday} / {goalXp}
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
    </Card>
  );
};
