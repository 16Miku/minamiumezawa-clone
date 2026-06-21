"use client";

import Navbar from "@/components/Navbar";
import { FadeIn } from "@/components/animations";

const newsItems = [
  {
    date: "2026.06.21",
    category: "OTHERS",
    title: "6月22日（月）21:00～ 生配信の視聴方法をご案内",
    content: "yodelにて生配信を行います。視聴方法の詳細はこちらをご確認ください。",
  },
  {
    date: "2026.06.15",
    category: "OTHERS",
    title: "【6月22日】梅澤美波 卒業後・公式サイト開設後初の生配信が決定！",
    content: "メンバーシップ会員限定の生配信をyodelにて実施いたします。",
  },
  {
    date: "2026.06.15",
    category: "OTHERS",
    title: "梅澤美波、新たなスタート。オフィシャルWEBサイト・オフィシャルXを開設",
    content: "新たなスタートを切り、オフィシャルWEBサイトとオフィシャルX（旧Twitter）を開設しました。",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-widest mb-16">
              NEWS
            </h1>
          </FadeIn>

          <div className="space-y-0">
            {newsItems.map((news, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <article className="border-b border-white/10 py-8 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-white/40 tracking-wider">
                        {news.date}
                      </span>
                      <span className="text-xs px-2 py-1 border border-white/20 rounded text-white/50">
                        {news.category}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg text-white/80 group-hover:text-white transition-colors mb-2">
                        {news.title}
                      </h2>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {news.content}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
