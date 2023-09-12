import Link from "next/link";
import { useEffect, useRef } from "react";
import { units } from "../utils/courses";
import { TileStatus } from "./tileStatus";
import { getTileTooltipLeftOffset } from "./getTileTooltipLeftOffset";


export const TileTooltip = ({
  selectedTile, index, unitNumber, tilesLength, description, status, closeTooltip,
}: {
  selectedTile: number | null;
  index: number;
  unitNumber: number;
  tilesLength: number;
  description: string;
  status: TileStatus;
  closeTooltip: () => void;
}) => {
  const tileTooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containsTileTooltip = (event: MouseEvent) => {
      if (selectedTile !== index) return;
      const clickIsInsideTooltip = tileTooltipRef.current?.contains(
        event.target as Node
      );
      if (clickIsInsideTooltip) return;
      closeTooltip();
    };

    window.addEventListener("click", containsTileTooltip, true);
    return () => window.removeEventListener("click", containsTileTooltip, true);
  }, [selectedTile, tileTooltipRef, closeTooltip, index]);

  const unit = units.find((unit) => unit.unitNumber === unitNumber);
  const activeBackgroundColor = unit?.backgroundColor ?? "bg-green-500";
  const activeTextColor = unit?.textColor ?? "text-green-500";

  return (
    <div
      className={[
        "relative h-0 w-full",
        index === selectedTile ? "" : "invisible",
      ].join(" ")}
      ref={tileTooltipRef}
    >
      <div
        className={[
          "absolute z-30 flex w-[300px] flex-col gap-4 rounded-xl p-4 font-bold transition-all duration-300",
          status === "ACTIVE"
            ? activeBackgroundColor
            : status === "LOCKED"
              ? "border-2 border-gray-200 bg-gray-100"
              : "bg-yellow-400",
          index === selectedTile ? "top-4 scale-100" : "-top-14 scale-0",
        ].join(" ")}
        style={{ left: "calc(50% - 150px)" }}
      >
        <div
          className={[
            "absolute top-[-8px] left-[140px] h-4 w-4 rotate-45",
            status === "ACTIVE"
              ? activeBackgroundColor
              : status === "LOCKED"
                ? "border-t-2 border-l-2 border-gray-200 bg-gray-100"
                : "bg-yellow-400",
          ].join(" ")}
          style={{
            left: getTileTooltipLeftOffset({ index, unitNumber, tilesLength }),
          }}
        ></div>
        <div
          className={[
            "text-lg",
            status === "ACTIVE"
              ? "text-white"
              : status === "LOCKED"
                ? "text-gray-400"
                : "text-yellow-600",
          ].join(" ")}
        >
          {description}
        </div>
        {status === "ACTIVE" ? (
          <Link
            href="/lesson"
            className={[
              "flex w-full items-center justify-center rounded-xl border-b-4 border-gray-200 bg-white p-3 uppercase",
              activeTextColor,
            ].join(" ")}
          >
            Start +10 XP
          </Link>
        ) : status === "LOCKED" ? (
          <button
            className="w-full rounded-xl bg-gray-200 p-3 uppercase text-gray-400"
            disabled
          >
            Locked
          </button>
        ) : (
          <Link
            href="/lesson"
            className="flex w-full items-center justify-center rounded-xl border-b-4 border-yellow-200 bg-white p-3 uppercase text-yellow-400"
          >
            Practice +5 XP
          </Link>
        )}
      </div>
    </div>
  );
};
