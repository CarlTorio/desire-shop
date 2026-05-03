import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FadeUp } from "./FadeUp";

const desireBottleHim = "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/her.png";
const desireBottle = "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%206/Desire%20Black.png";
const heroVideo = "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%205/Background%20for%20Main%20Page%20(Looping).mp4";

const EASE = [0.16, 1, 0.3, 1] as const;

function HeadlineLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.0, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Bottle({
  variant,
  delay = 0,
}: {
  variant: "him" | "her";
  delay?: number;
}) {
  const isHim = variant === "him";

  if (isHim) {
    return (
      <div
        className="desire-bottle-float relative flex items-center justify-center"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="hero-bottle-shine">
          <img
            src={desireBottleHim}
            alt="DESIRE Mood Enhancer For Him"
            className="h-auto w-[200px] md:w-[240px] xl:w-[270px]"
            loading="eager"
            decoding="async"
            {...({ fetchpriority: "high" } as Record<string, string>)}
            style={{
              filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.45))",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="desire-bottle-float relative flex items-center justify-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="hero-bottle-shine">
        <img
          src={desireBottle}
          alt="DESIRE Mood Enhancer For Her"
          className="h-auto w-[200px] md:w-[240px] xl:w-[270px]"
          loading="eager"
          decoding="async"
          {...({ fetchpriority: "high" } as Record<string, string>)}
          style={{
            filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.45))",
          }}
        />
      </div>
    </div>
  );
}

const TRUST = [
  "FDA Approved",
  "30-Day Guarantee",
  "3,500+ Couples",
];

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 400]);

  return (
    <section
      ref={ref}
      data-hero-section
      className="relative flex min-h-[82vh] items-center overflow-hidden px-5 pt-20 pb-16 md:px-12 md:pt-24 md:pb-20"
      style={{ backgroundColor: "#f5efe4" }}
    >
      {/* BG video with parallax */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ y: bgY }}
      >
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          ref={(el) => {
            if (el) el.playbackRate = 1.0;
          }}
        />
      </motion.div>


      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="hero-text-overlay flex flex-col pt-20 md:pt-0 lg:pl-24 xl:pl-36">
          <h1 className="hero-headline">
            <span className="line-1">Feel That</span>
            <span className="line-2"><em>Spark</em> Again.</span>
          </h1>

          <FadeUp delay={1.0} immediate>
            <div className="hero-sub-block">
              <span aria-hidden className="hero-sub-divider" />
              <p className="hero-sub">
                A natural wellness blend for couples who want to feel{" "}
                <em>more alive, together.</em>
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.2} immediate>
            <div className="hero-action-row">
              <Link to="/products/desire-men" preload="intent" className="hero-cta">
                <span className="hero-cta-text">Shop Now</span>
              </Link>

              <div className="hero-reviews">
                <div className="hero-reviews-stars">
                  <span className="stars" aria-hidden>★★★★★</span>
                  <span className="num">4.8</span>
                </div>
                <span className="hero-reviews-count">
                  Based on 16,255 verified reviews
                </span>
              </div>
            </div>
          </FadeUp>

        </div>

        {/* RIGHT, Bottles */}
        <div className="relative hidden h-[500px] items-center justify-center lg:flex lg:-translate-x-12 xl:-translate-x-16">
          <div className="group/bottles flex items-center gap-7">
            <div className="transition-transform duration-500 ease-out group-hover/bottles:scale-95 hover:!scale-110">
              <Bottle variant="him" delay={0} />
            </div>
            <div className="transition-transform duration-500 ease-out group-hover/bottles:scale-95 hover:!scale-110">
              <Bottle variant="her" delay={0.5} />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

