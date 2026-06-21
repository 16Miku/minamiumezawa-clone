"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FadeIn } from "@/components/animations";

const categories = ["ALL", "MODEL", "STAGE", "MOVIE", "TV", "BOOK"];

const works = [
  {
    category: "MODEL",
    items: [{ title: "「CLASSY.」", detail: "レギュラーモデル（2024年～、光文社）" }],
  },
  {
    category: "STAGE",
    items: [
      { title: "ミュージカル「梨泰院クラス」", detail: "オ・スア 役（2025年、東京建物 Brillia HALLほか）" },
      { title: "「キングダム」", detail: "楊端和 役（2023年、帝国劇場ほか）" },
      { title: "「七つの大罪 The STAGE」", detail: "ヒロイン・エリザベス 役（2018年、天王洲 銀河劇場ほか）" },
    ],
  },
  {
    category: "MOVIE",
    items: [
      { title: "「九龍ジェネリックロマンス」", detail: "楊明 役（2025年）" },
      { title: "「映像研には手を出すな！」", detail: "金森さやか 役（2020年）" },
    ],
  },
  {
    category: "TV",
    items: [
      { title: "毎日放送・TBS系「失恋カルタ」", detail: "主演・夏野千波 役（2026年）" },
      { title: "関西テレビ「デスゲームで待ってる」", detail: "秋澤和 役（2024年）" },
      { title: "読売テレビ「筋トレサラリーマン 中山筋太郎」", detail: "渋沢まどか 役（2023年）" },
    ],
  },
  {
    category: "BOOK",
    items: [{ title: "2nd写真集「透明な覚悟」", detail: "（2026年、光文社）" }],
  },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredWorks =
    activeCategory === "ALL" ? works : works.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-widest mb-16">
              WORKS
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm tracking-wider rounded transition-colors ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-card text-muted-foreground hover:bg-card-hover hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="space-y-12">
            {filteredWorks.map((work, workIndex) => (
              <FadeIn key={work.category} delay={0.2 + workIndex * 0.1}>
                <div id={work.category.toLowerCase()}>
                  <h2 className="text-muted-foreground text-sm tracking-widest mb-6">
                    {work.category}
                  </h2>
                  <div className="space-y-4">
                    {work.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-card hover:bg-card-hover p-6 rounded-lg transition-colors"
                      >
                        <h3 className="text-foreground text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.detail}</p>
                      </div>
                    ))}
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
