"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import { FadeIn } from "@/components/animations";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* News Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-widest">
                NEWS
              </h2>
              <a
                href="/news"
                className="text-white/50 hover:text-white text-sm tracking-widest transition-colors"
              >
                VIEW ALL →
              </a>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                date: "2026.06.21",
                category: "OTHERS",
                title:
                  "6月22日（月）21:00～ 生配信の視聴方法をご案内",
              },
              {
                date: "2026.06.15",
                category: "OTHERS",
                title:
                  "【6月22日】梅澤美波 卒業後・公式サイト開設後初の生配信が決定！",
              },
              {
                date: "2026.06.15",
                category: "OTHERS",
                title:
                  "梅澤美波、新たなスタート。オフィシャルWEBサイト・オフィシャルXを開設",
              },
            ].map((news, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <a
                  href="/news"
                  className="block group border-b border-white/10 pb-6 hover:border-white/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span className="tracking-wider">{news.date}</span>
                      <span className="text-xs px-2 py-1 border border-white/20 rounded">
                        {news.category}
                      </span>
                    </div>
                    <h3 className="text-white/80 group-hover:text-white transition-colors text-lg md:ml-8">
                      {news.title}
                    </h3>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-widest">
                SCHEDULE
              </h2>
              <a
                href="/schedule"
                className="text-white/50 hover:text-white text-sm tracking-widest transition-colors"
              >
                VIEW ALL →
              </a>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                date: "2026.6",
                day: "22",
                weekday: "MON",
                title: "yodel生配信",
                time: "WEB21:00頃～",
              },
              {
                date: "2026.6",
                day: "26",
                weekday: "FRI",
                title: "CLASSY.",
                time: "MAGAZINE",
              },
            ].map((schedule, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <a
                  href="/schedule"
                  className="block group bg-white/5 hover:bg-white/10 p-6 rounded-lg transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-center">
                      <div className="text-xs text-white/40 mb-1">
                        {schedule.date}
                      </div>
                      <div className="text-3xl font-light text-white">
                        {schedule.day}
                      </div>
                      <div className="text-xs text-white/40">
                        {schedule.weekday}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="text-xs text-white/50 mb-2">
                        {schedule.time}
                      </div>
                      <h3 className="text-white group-hover:text-white/80 transition-colors">
                        {schedule.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-widest mb-12 text-center">
              PROFILE
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src="/images/profile/profile.jpg"
                  alt="梅澤美波"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center md:text-left">
                <h3 className="text-2xl text-white mb-4 tracking-wider">
                  梅澤 美波
                  <span className="block text-lg text-white/60 mt-2 tracking-normal">
                    うめざわ みなみ
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/60 mt-8">
                  <div className="text-right">生年月日</div>
                  <div className="text-left">1999年1月6日</div>
                  <div className="text-right">血液型</div>
                  <div className="text-left">A型</div>
                  <div className="text-right">星座</div>
                  <div className="text-left">やぎ座</div>
                  <div className="text-right">身長</div>
                  <div className="text-left">170cm</div>
                </div>
                <a
                  href="/profile"
                  className="inline-block mt-8 text-white/60 hover:text-white text-sm tracking-widest transition-colors border border-white/20 px-6 py-3 rounded hover:border-white/40"
                >
                  VIEW ALL →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Works Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-widest mb-12 text-center">
              WORKS
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["MODEL", "STAGE", "MOVIE", "TV", "BOOK"].map((category, index) => (
              <FadeIn key={category} delay={index * 0.1}>
                <a
                  href={`/works#${category.toLowerCase()}`}
                  className="block bg-white/5 hover:bg-white/10 p-6 rounded-lg text-center transition-colors group"
                >
                  <span className="text-white/60 group-hover:text-white text-sm tracking-widest transition-colors">
                    {category}
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 text-sm tracking-wider">
            © 2026 梅澤美波 OFFICIAL WEBSITE
          </p>
        </div>
      </footer>
    </div>
  );
}
