"use client";

import Navbar from "@/components/Navbar";
import { FadeIn } from "@/components/animations";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-widest mb-16">
              CONTACT
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <p className="text-white/60 text-center mb-12 leading-relaxed">
                お仕事のご依頼やお問い合わせは、<br />
                以下のリンクからお願いいたします。
              </p>

              <div className="bg-white/5 p-8 rounded-lg text-center">
                <a
                  href="https://n46llc-seedandflowerllc.com/s/m00/form/inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-white/90 transition-colors tracking-wider"
                >
                  お問い合わせフォームへ →
                </a>
              </div>

              <div className="mt-12 text-center">
                <p className="text-white/40 text-sm mb-4">FOLLOW ME</p>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://x.com/teamume2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href="https://www.instagram.com/ume_minami.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
