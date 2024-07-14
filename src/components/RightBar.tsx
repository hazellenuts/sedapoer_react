import Link from "next/link";
import React, { useState } from "react";
import {
  FireSvg,
  LightningProgressSvg,
  LessonTopBarHeart,
  TreasureProgressSvg,
} from "./Svgs";
import { useBoundStore } from "~/hooks/useBoundStore";
import type { LoginScreenState } from "./LoginScreen";


export const RightBar = () => {
  const lingots = useBoundStore((x) => x.lingots);
  const streak = useBoundStore((x) => x.streak);

    useState<LoginScreenState>("HIDDEN");

  return (
    <>
      <aside className="sticky top-0 hidden w-96 flex-col gap-6 self-start sm:flex">
        <article className="my-6 flex justify-between gap-4">
          <div
            className="relative flex cursor-default items-center gap-2 rounded-xl p-3 font-bold uppercase text-gray-500 hover:bg-gray-100"
            role="button"
            tabIndex={0}
          >
            <FireSvg />
            <div>20</div>
            
          </div>
          <span
            className="relative flex items-center gap-2 rounded-xl p-3 font-bold text-orange-500 hover:bg-gray-100"
            onMouseLeave={() => {
              
            }}
            onClick={(event) => {
              if (event.target !== event.currentTarget) return;
              
            }}
            role="button"
            tabIndex={0}
          >
            <div className="pointer-events-none">
            <LightningProgressSvg />
            </div>
            <span className={streak > 0 ? "text-orange-500" : "text-gray-300"}>
              {streak}
            </span>
            
          </span>
          <span
            className="relative flex items-center gap-2 rounded-xl p-3 font-bold text-red-500 hover:bg-gray-100"
            role="button"
            tabIndex={0}
          >
            <LessonTopBarHeart />
            <span className={lingots > 0 ? "text-red-500" : "text-gray-300"}>
              {lingots}
            </span>
            
          </span>
        </article>
        <DailyQuestsSection />
        <LeaderboardSection />
        <AchievementSection />
    
      </aside>
    </>
  );
};

const DailyQuestsSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());

  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700">
      <h2 className="text-xl">Daily Quests</h2>
      <div className="flex items-center gap-4">
        <LightningProgressSvg />
        <div className="flex flex-col gap-2">
          <h3>Earn 20 XP</h3>
          <div className="flex items-center">
            <div className="relative h-5 w-52 rounded-l-full bg-gray-200">
              <div
                className={[
                  "relative h-full rounded-l-full bg-yellow-400",
                  xpToday === 0 ? "" : "px-2",
                ].join(" ")}
                style={{ width: `${Math.min(1, xpToday / 25) * 100}%` }}
              >
                <div className="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                {xpToday} / 25
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <LightningProgressSvg />
        <div className="flex flex-col gap-2">
          <h3>Earn 100 XP</h3>
          <div className="flex items-center">
            <div className="relative h-5 w-52 rounded-l-full bg-gray-200">
              <div
                className={[
                  "relative h-full rounded-l-full bg-yellow-400",
                  xpToday === 0 ? "" : "px-2",
                ].join(" ")}
                style={{ width: `${Math.min(1, xpToday / 200) * 100}%` }}
              >
                <div className="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                {xpToday} / 200
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <LightningProgressSvg />
        <div className="flex flex-col gap-2">
          <h3>Earn 200 XP</h3>
          <div className="flex items-center">
            <div className="relative h-5 w-52 rounded-l-full bg-gray-200">
              <div
                className={[
                  "relative h-full rounded-l-full bg-yellow-400",
                  xpToday === 0 ? "" : "px-2",
                ].join(" ")}
                style={{ width: `${Math.min(1, xpToday / 35) * 100}%` }}
              >
                <div className="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                {xpToday} / 35
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
    </article>
  );
};

const LeaderboardSection = () => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Leaderboard</h2>
        <Link href="/settings/coach" className="uppercase text-blue-400">
          view all
        </Link>
      </div>
      
    </article>
  );
};
const AchievementSection = () => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Achievement</h2>
        <Link href="/settings/coach" className="uppercase text-blue-400">
          view all
        </Link>
      </div>
      
    </article>
  );
};

