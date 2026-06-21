"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`切换到${theme === "dark" ? "亮色" : "暗色"}模式`}
      className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-foreground/10 transition-colors"
    >
      {/* 太阳图标 (Light mode indicator) */}
      <svg
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "dark"
            ? "text-foreground/60 rotate-0 scale-100"
            : "text-foreground/60 rotate-90 scale-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {/* 月亮图标 (Dark mode indicator) */}
      <svg
        className={`absolute w-4 h-4 transition-all duration-300 ${
          theme === "light"
            ? "text-foreground/60 rotate-0 scale-100"
            : "text-foreground/60 -rotate-90 scale-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
