"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FadeIn } from "@/components/animations";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-widest mb-16">
              PROFILE
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1}>
              <div>
                {/* Profile Image */}
                <div className="relative w-full aspect-[2/3] mb-8 overflow-hidden rounded-lg">
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="梅澤美波"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl text-white mb-2 tracking-wider">
                  梅澤 美波
                </h2>
                <p className="text-white/60 text-lg mb-8">
                  うめざわ みなみ
                </p>

                <div className="space-y-6">
                  {[
                    { label: "生年月日", value: "1999年1月6日" },
                    { label: "血液型", value: "A型" },
                    { label: "星座", value: "やぎ座" },
                    { label: "身長", value: "170cm" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex border-b border-white/10 pb-4"
                    >
                      <div className="w-24 text-white/40 text-sm">
                        {item.label}
                      </div>
                      <div className="flex-1 text-white">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 p-8 rounded-lg mt-8">
                  <h3 className="text-white text-lg mb-6 tracking-wider">
                    BIOGRAPHY
                  </h3>
                  <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                    <p>
                      乃木坂46のメンバーとして活動後、2026年に卒業。
                    </p>
                    <p>
                      その後、女優・モデルとして活動の場を広げ、ドラマや舞台、映画など多方面で活躍中。
                    </p>
                    <p>
                      2026年6月、オフィシャルWEBサイトを開設し、新たなスタートを切る。
                    </p>
                  </div>

                  <h3 className="text-white text-lg mb-6 mt-12 tracking-wider">
                    OFFICIAL LINKS
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "X (Twitter)", href: "https://x.com/teamume2026" },
                      { label: "Instagram", href: "https://www.instagram.com/ume_minami.official/" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/60 hover:text-white text-sm transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
}
