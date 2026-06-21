"use client";

import Navbar from "@/components/Navbar";
import { FadeIn } from "@/components/animations";

const schedules = [
  {
    year: "2026",
    month: "6",
    day: "22",
    weekday: "MON",
    time: "WEB21:00頃～",
    title: "yodel生配信",
    category: "WEB",
  },
  {
    year: "2026",
    month: "6",
    day: "26",
    weekday: "FRI",
    time: "",
    title: "CLASSY.",
    category: "MAGAZINE",
  },
  {
    year: "2026",
    month: "6",
    day: "26",
    weekday: "FRI",
    time: "WEB20:00頃～",
    title: "Instagram LIVE",
    category: "WEB",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-widest mb-16">
              SCHEDULE
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center justify-between mb-12">
              <button className="text-muted-foreground hover:text-foreground transition-colors text-2xl">
                ←
              </button>
              <h2 className="text-2xl text-foreground tracking-wider">2026.6</h2>
              <button className="text-muted-foreground hover:text-foreground transition-colors text-2xl">
                →
              </button>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {schedules.map((schedule, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1}>
                <div className="bg-card hover:bg-card-hover p-6 rounded-lg transition-colors cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 min-w-[120px]">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">
                          {schedule.year}.{schedule.month}
                        </div>
                        <div className="text-3xl font-light text-foreground">
                          {schedule.day}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {schedule.weekday}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      {schedule.time && (
                        <div className="text-sm text-muted-foreground mb-1">
                          {schedule.time}
                        </div>
                      )}
                      <h3 className="text-foreground text-lg">{schedule.title}</h3>
                      {schedule.category && (
                        <span className="inline-block mt-2 text-xs px-2 py-1 border border-border rounded text-muted-foreground">
                          {schedule.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
