import { createFileRoute, useNavigate, Outlet } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Brain, Heart, Zap, Activity, Droplet, Flame, Sun, Shield, Award, Package, Lock, type LucideIcon } from "lucide-react";
import { ProductNav } from "@/components/desire/ProductNav";
import { Footer } from "@/components/desire/Footer";
import { PainPointsMarquee } from "@/components/desire/PainPointsMarquee";
import { addToCart } from "@/lib/cartStore";
import { SlideInX } from "@/components/desire/SlideInX";
import pain1 from "@/assets/pain-1.jpg";
import pain2 from "@/assets/pain-2.jpg";
import pain3 from "@/assets/pain-3.jpg";
import pain4 from "@/assets/pain-4.jpg";
import pain5 from "@/assets/pain-5.jpg";
import pain6 from "@/assets/pain-6.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import desireJars from "@/assets/desire-jars.png";
import silentStress from "@/assets/silent-stress.png";
import silentHormonal from "@/assets/silent-hormonal.png";
import silentUnsafe from "@/assets/silent-unsafe.png";
import silentSpark from "@/assets/silent-spark.png";

export const Route = createFileRoute("/products")({
  component: () => <Outlet />,
});

export type ProductVariant = "her" | "him" | "couple";

export const VARIANT_ROUTES: Record<ProductVariant, string> = {
  him: "/products/desire-men",
  her: "/products/dsw",
  couple: "/products/desire-for-couple-2bottles-1-598-00",
};

const MARQUEE_ITEMS = [
  "★ YOU TAKE THE 30-DAY CHALLENGE",
  "★ AND IN 2 WEEKS, YOU FEEL THE SPARK COMING BACK",
];

const PRODUCT_IMAGES_HIM = [
  { label: "Hero Shot", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%201%20(1).png" },
  { label: "Hero Shot 2", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%202%20(1).png" },
  { label: "Benefits", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%203.png" },
  { label: "Lifestyle", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/MAIN%204%20(1).png" },
  { label: "Bundle", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Man%20Testimonial.png" },
];
const PRODUCT_IMAGES_HER = [
  { label: "Hero Shot", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%201.png" },
  { label: "Hero Shot 2", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%202.png" },
  { label: "Benefits", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%205.png" },
  { label: "Lifestyle", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Main%204.png" },
  { label: "Bundle", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%209/Woman%20Testimonial.png" },
];
const PRODUCT_IMAGES_COUPLE = [
  { label: "Hero Shot", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%208/Couple%202.png" },
  { label: "Hero Shot 2", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%208/Copy%20of%20Woman%20Testimonial.png" },
  { label: "Benefits", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%208/Main%203.png" },
  { label: "Lifestyle", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%208/Main%205.png" },
  { label: "Bundle", src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%208/Man%20Testimonial.png" },
];

const BUNDLES_HIM = [
  { id: 1, name: "1 Bottle", original: 1798, price: 899, supply: "30-day supply", perDay: 30, badge: null as string | null, isPopular: false },
  { id: 2, name: "2 Bottles", original: 2499, price: 1598, supply: "60-day supply", perDay: 27, badge: "Save 12%", isPopular: false },
  { id: 3, name: "3 Bottles", original: 4599, price: 2097, supply: "90-day supply", perDay: 23, badge: null, isPopular: true },
];

const BUNDLES_COUPLE = [
  { id: 1, name: "1 Bottle Men + 1 Bottle Women", original: 3596, price: 1598, supply: "30-day supply", perDay: 53, badge: null as string | null, isPopular: false },
  { id: 2, name: "2 Bottles Men + 2 Bottles Women", original: 7196, price: 2796, supply: "60-day supply", perDay: 47, badge: "Save 22%", isPopular: true },
];

const PAIN_POINTS = [
  { title: "Can't Last Long as You Want", img: pain1 },
  { title: "Difficulty in Achieving Climax", img: pain3 },
  { title: "Not in the Mood Lately", img: pain5 },
  { title: "Bedroom Confidence Issue", img: pain6 },
  { title: "Loss of Desires Lately", img: pain2 },
  { title: "Stress and Anxiety", img: pain4 },
];

const STATS = [
  { n: "92%", l: "DAILY ULTIMATE ESSENTIALS, of participants experienced a noticeable boost in their drive and feeling younger than ever" },
  { n: "87%", l: "of participants reported the feeling that their lover physically connected to them" },
  { n: "79%", l: "of participants experienced a deeper, more restful sleep within their lover and feeling younger than ever" },
  { n: "74%", l: "of participants reported having love-making feeling lighter than ever" },
];

type ReviewQuotePart = { text: string; em?: boolean };
const REVIEWS: { rating: string; variant: string; quote: ReviewQuotePart[]; author: string }[] = [
  {
    rating: "4.8",
    variant: "For Him",
    quote: [
      { text: `"Get palaging routine na akong yung intimacy namin. ` },
      { text: `Now it feels like we're dating again.`, em: true },
      { text: `"` },
    ],
    author: "Anton Dela Cruz",
  },
  {
    rating: "4.8",
    variant: "For Her",
    quote: [
      { text: `"Akala ko sa akin na lang pong yung pagka-down. Turns out, I just needed the right support. ` },
      { text: `I feel like myself again.`, em: true },
      { text: ` Mas patient, more present, more connected."` },
    ],
    author: "Karen Reyes",
  },
  {
    rating: "4.8",
    variant: "For Couple",
    quote: [
      { text: `"Hindi sino-naming sa supplements pero ito sobrang sulit. Within 2 weeks, ` },
      { text: `mas confident kami, grabe yung difference sa stamina and mood.`, em: true },
      { text: `"` },
    ],
    author: "Mark Anthony Villanueva",
  },
  {
    rating: "4.8",
    variant: "For Her",
    quote: [
      { text: `"Sobrang yon, stress sa kids, work na energy for my husband. Since I started Desire, ` },
      { text: `I feel lighter and mas may gana na uli.`, em: true },
      { text: ` Ramdam pa lang ang sarap sarap."` },
    ],
    author: "Angela Mae Customer",
  },
  {
    rating: "4.8",
    variant: "For Him",
    quote: [
      { text: `"I love the results. After three weeks, ` },
      { text: `I feel a noticeable difference in my performance and confidence.`, em: true },
      { text: ` My wife is happy too. Solid investment for our marriage."` },
    ],
    author: "Rico Mendoza",
  },
  {
    rating: "4.8",
    variant: "For Him",
    quote: [
      { text: `"Hindi ako believer sa supplements pero ang asawa ko nag-insist. Now I get it, ` },
      { text: `mas malakas energy ko, mas focused sa work, at mas present sa pamilya.`, em: true },
      { text: `"` },
    ],
    author: "Joseph Ramirez",
  },
  {
    rating: "4.8",
    variant: "For Her",
    quote: [
      { text: `"After 40, akala ko tapos na yung passion. Desire proved me wrong. ` },
      { text: `Mas masigla kami ngayon kaysa noong bagong kasal pa lang kami.`, em: true },
      { text: `"` },
    ],
    author: "Liza Fernandez",
  },
  {
    rating: "4.8",
    variant: "For Couple",
    quote: [
      { text: `"Three months in and I can confidently say na worth every peso. ` },
      { text: `Stamina, mood, confidence, lahat improved.`, em: true },
      { text: ` Salamat Desire!"` },
    ],
    author: "Paolo Santiago",
  },
];

function useCountdown(hours: number) {
  const [target] = useState(() => Date.now() + hours * 3600 * 1000);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (24 * 3600 * 1000));
  const h = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
  const m = Math.floor((diff % (3600 * 1000)) / 60000);
  return { d, h, m };
}

const CLINICAL_STATS = [
  { label: "More Drive", value: 92 },
  { label: "Best Nights", value: 87 },
  { label: "Deeper Sleep", value: 79 },
  { label: "Better Mood", value: 74 },
];

const INGREDIENTS_HIM_SHORT = [
  { name: "Tongkat Ali Extract", desc: "Boosts testosterone naturally. Supports energy, stamina, and male performance." },
  { name: "Maca Root Extract", desc: "Enhances stamina, libido, and overall vitality. A time-tested adaptogen." },
  { name: "Panax Ginseng Extract", desc: "Improves circulation, mental focus, and sexual performance." },
  { name: "Lactobacillus Rhamnosus", desc: "Supports gut balance, hormone regulation, and confidence." },
  { name: "Zinc", desc: "Critical for testosterone production and male reproductive health." },
  { name: "L-Arginine", desc: "Supports nitric oxide production for healthy blood flow and performance." },
];

const INGREDIENTS_HER_SHORT = [
  { name: "Ashwagandha", desc: "Supports stress control, mood balance, and hormonal wellness." },
  { name: "Red Maca Root", desc: "Supports libido, stamina, and natural hormonal balance." },
  { name: "Dong Quai", desc: "Supports menstrual balance, circulation, and reproductive wellness." },
  { name: "Chaste Berry", desc: "Supports hormonal regulation and cycle stability." },
  { name: "Zinc", desc: "Supports immune function and healthy hormone production." },
  { name: "Lactobacillus Rhamnosus", desc: "Supports gut balance, immune function, and nutrient absorption." },
];

const BENEFITS_LIST = [
  "Boosts natural drive and stamina",
  "Restores confidence in the bedroom",
  "Deepens emotional connection with your partner",
  "Improves mood and reduces everyday stress",
  "Promotes deeper, more restorative sleep",
  "100% natural, no harsh stimulants, no crash",
];

type CbTab = "results" | "ingredients" | "usage" | "benefits" | "couples" | "faq";

const CB_TABS: { id: CbTab; label: string; desktopOnly?: boolean }[] = [
  { id: "couples", label: "Real Couples" },
  { id: "results", label: "Clinical Results" },
  { id: "usage", label: "How To Use" },
  { id: "benefits", label: "Why Desire" },
  { id: "faq", label: "FAQ", desktopOnly: true },
];

const CB_FAQS = [
  { question: "Will this actually work for me?", answer: "Yes. Unless you're expecting a magic pill that makes you fall in love again overnight, this will work. What it does is <strong>remove the physical and chemical barriers</strong> preventing you from feeling desire. <em>The rest is up to you and your partner.</em>" },
  { question: "What if I'm on other medications?", answer: "It's safe. Our formula is <strong>100% natural, plant-based ingredients</strong>. No synthetic chemicals. No interactions with standard medications. <em>If you're on something unusual, email us and we'll verify it personally.</em>" },
  { question: "How long until I feel something?", answer: "Most people feel a shift within <strong>10–15 days</strong>. Increased energy, better mood, reduced anxiety. The deeper benefits — increased desire, improved performance, better lubrication — typically show up within <strong>4–6 weeks</strong>." },
  { question: "What if we haven't been intimate in months?", answer: "That's more common than you think, and there's no shame in it. DESIRE is a <strong>daily wellness ritual</strong> that gently supports your body's natural energy, mood, and comfort over time. <em>Many of our happiest customers started from exactly where you are now.</em>" },
  { question: "Isn't this just another supplement?", answer: "No. Supplements are generic. DESIRE is <strong>specifically engineered for couples who've lost their intimacy</strong>. Every ingredient was chosen for a specific reason: to restore hormonal balance, boost mood, increase energy, and reignite desire." },
  { question: "What about side effects?", answer: "None that we've documented. It's all natural ingredients. Some people report feeling <strong>more energized</strong> (which is the point). Some report <strong>better sleep</strong> (also the point). <em>If you have a specific health condition, check with your doctor.</em>" },
  { question: "Do both partners need to take it?", answer: "It works better when both partners take it — that's why we have <strong>For Her and For Him formulations</strong>. But you can absolutely start solo and bring your partner in later." },
  { question: "What if it doesn't work for me?", answer: "You get every peso back. <strong>30-day money-back guarantee.</strong> No questions. No hassle. No judgment. Try it for a full 30 days. If you don't feel the difference, we refund you completely." },
];

const CB_COUPLE_VIDEOS = [
  {
    src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/Aliyah%20Testimonial%20UGC-2.mp4",
    name: "Aliyah",
    sub: "23 years old",
  },
  {
    src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/VID%204%20HULK%20&%20MS%20HULK%20FINAL-2.mov",
    name: "John & Maureen",
    sub: "3 years Together",
  },
  {
    src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/D/0502(1).mp4",
    name: "Roy & Angela",
    sub: "6 years Together",
  },
  {
    src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/Desire%20Edit%2010-2.mp4",
    name: "Angelo",
    sub: "33 years old",
  },
];

function CouplesPanel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const expandedRef = useRef<HTMLVideoElement | null>(null);
  const active = activeIdx !== null ? CB_COUPLE_VIDEOS[activeIdx] : null;

  useEffect(() => {
    if (active && expandedRef.current) {
      expandedRef.current.currentTime = 0;
      expandedRef.current.play().catch(() => {});
      expandedRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  return (
    <div className="cb-tab-panel" key="couples">
      <h3 className="cb-panel-title">
        Real couples, <em>real stories.</em>
      </h3>
      <p className="cb-panel-sub">
        Hear what real Filipino couples are saying about Desire.
      </p>
      <div className="cb-couples-grid">
        {CB_COUPLE_VIDEOS.map((v, i) => (
          <div key={v.name} className="cb-couple-card">
            <button
              type="button"
              className={`cb-couple-media cb-couple-media-btn${activeIdx === i ? " is-active" : ""}`}
              onClick={() => setActiveIdx(i)}
              aria-label={`Play ${v.name} testimonial`}
            >
              <video
                src={`${v.src}#t=0.1`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="cb-couple-video"
              />
              <span className="cb-couple-play" aria-hidden="true">▶</span>
            </button>
            <div className="cb-couple-name">{v.name}</div>
            <div className="cb-couple-sub">{v.sub}</div>
          </div>
        ))}
      </div>
      {active && (
        <div className="cb-couple-expanded">
          <video
            ref={expandedRef}
            key={active.src}
            src={active.src}
            controls
            autoPlay
            playsInline
            className="cb-couple-expanded-video"
          />
          <div className="cb-couple-expanded-meta">
            <div className="cb-couple-name">{active.name}</div>
            <div className="cb-couple-sub">{active.sub}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function FaqPanel() {
  const [openIdx, setOpenIdx] = useState<number>(0);
  return (
    <div className="cb-tab-panel" key="faq">
      <h3 className="cb-panel-title">
        Things people <em>often ask</em>
      </h3>
      <div className="cb-faq-list">
        {CB_FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`cb-faq-item${isOpen ? " open" : ""}`}>
              <button
                type="button"
                className="cb-faq-trigger"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
              >
                <span className="cb-faq-q">{faq.question}</span>
                <span className="cb-faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div className={`cb-faq-answer${isOpen ? " open" : ""}`}>
                <div className="cb-faq-body" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ClinicalProofBox({ variant = "him" }: { variant?: ProductVariant }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState<CbTab>("couples");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ingredients =
    variant === "her"
      ? INGREDIENTS_HER_SHORT
      : variant === "couple"
        ? [...INGREDIENTS_HIM_SHORT.slice(0, 3), ...INGREDIENTS_HER_SHORT.slice(0, 3)]
        : INGREDIENTS_HIM_SHORT;

  return (
    <div className="cb-wrap">
      <div className="cb-eyebrow">Tell me about:</div>

      <div className="cb-tabs" role="tablist" aria-label="Product information">
        {CB_TABS.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`cb-tab ${isActive ? "active" : ""}${t.desktopOnly ? " cb-tab-desktop" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div ref={ref} className="clinical-box-v2 cb-with-tabs">
        {activeTab === "results" && (
          <div className="cb-tab-panel" key="results">
            <div className="cb-header">
              <div className="cb-header-left">
                <span className="cb-trust-pill">
                  <span className="cb-trust-check" aria-hidden="true">✓</span>
                  Verified by Independent Lab
                </span>
                <h3 className="cb-headline">
                  Clinically <em>Proven</em> Results.
                </h3>
                <p className="cb-sub">Tested with real Filipino couples over 30 days.</p>
              </div>
              <div className="cb-study-block">
                <div className="cb-study-num">30</div>
                <div className="cb-study-label">Day Study</div>
              </div>
            </div>

            <div className="cb-stats">
              {CLINICAL_STATS.map((stat) => (
                <div key={stat.label} className="cb-stat-row">
                  <div className="cb-stat-name">{stat.label}</div>
                  <div
                    className="cb-stat-bar"
                    role="progressbar"
                    aria-label={`${stat.label}: ${stat.value}%`}
                    aria-valuenow={stat.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="cb-stat-fill"
                      style={{ width: animate ? `${stat.value}%` : "0%" }}
                    />
                  </div>
                  <div className="cb-stat-num">{stat.value}%</div>
                </div>
              ))}
            </div>

            <a className="cb-link" href="/our-science">View third-party study report</a>

            <div className="cb-info-pills">
              <div className="cb-pill">
                <div className="cb-pill-icon" aria-hidden="true">◆</div>
                <div className="cb-pill-text">
                  <div className="cb-pill-label">Active Ingredients</div>
                  <div className="cb-pill-value">6 Clinically-Studied</div>
                </div>
              </div>
              <div className="cb-pill">
                <div className="cb-pill-icon" aria-hidden="true">⚡</div>
                <div className="cb-pill-text">
                  <div className="cb-pill-label">First Results</div>
                  <div className="cb-pill-value">In 14 Days</div>
                </div>
              </div>
            </div>

            <div className="cb-guarantee">
              <div className="cb-guarantee-icon" aria-hidden="true">✓</div>
              <div className="cb-guarantee-content">
                <div className="cb-guarantee-title">30-Day Money-Back Guarantee</div>
                <div className="cb-guarantee-desc">
                  Don't feel a difference? <em>We refund every peso.</em> No questions asked.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div className="cb-tab-panel" key="ingredients">
            <h3 className="cb-panel-title">
              Six ingredients. <em>One purpose.</em>
            </h3>
            <p className="cb-panel-sub">
              Each one carefully chosen, dosed, and tested to bring back the spark.
            </p>
            <div className="cb-ing-list">
              {ingredients.map((ing) => (
                <div key={ing.name} className="cb-ing-row">
                  <div className="cb-ing-name">{ing.name}</div>
                  <p className="cb-ing-desc">{ing.desc}</p>
                </div>
              ))}
            </div>
            <a className="cb-link" href="/our-science">See full ingredient breakdown</a>
          </div>
        )}

        {activeTab === "usage" && (
          <div className="cb-tab-panel" key="usage">
            <h3 className="cb-panel-title">
              Simple <em>daily ritual.</em>
            </h3>
            <p className="cb-panel-sub">Take consistently for 14 days to feel the first results.</p>
            <div className="cb-usage-table">
              <div className="cb-usage-cols">
                <span>When</span>
                <span>Daily Dose</span>
              </div>
              <div className="cb-usage-head">EVERY MORNING</div>
              <div className="cb-usage-row">
                <div className="cb-usage-when">
                  <div className="cb-usage-when-main">With breakfast</div>
                  <div className="cb-usage-when-sub">For all-day drive</div>
                </div>
                <div className="cb-usage-dose">
                  <div className="cb-usage-dose-main">2 gummies</div>
                  <div className="cb-usage-dose-sub">Daily serving</div>
                </div>
              </div>
              <div className="cb-usage-head">BEFORE INTIMACY</div>
              <div className="cb-usage-row">
                <div className="cb-usage-when">
                  <div className="cb-usage-when-main">30–60 min before</div>
                  <div className="cb-usage-when-sub">Optional boost</div>
                </div>
                <div className="cb-usage-dose">
                  <div className="cb-usage-dose-main">2 gummies</div>
                  <div className="cb-usage-dose-sub">Extra spark</div>
                </div>
              </div>
            </div>
            <ul className="cb-usage-tips">
              <li>Best taken with water.</li>
              <li>Safe for daily use, no cycling required.</li>
              <li>Store in a cool, dry place.</li>
            </ul>
          </div>
        )}

        {activeTab === "benefits" && (
          <div className="cb-tab-panel" key="benefits">
            <h3 className="cb-panel-title">
              Take your relationship <em>to the next level.</em>
            </h3>
            <ul className="cb-benefits-list">
              {BENEFITS_LIST.map((b) => (
                <li key={b} className="cb-benefit-row">
                  <span className="cb-benefit-check" aria-hidden="true">✓</span>
                  <span className="cb-benefit-text">{b}</span>
                </li>
              ))}
            </ul>
            <div className="cb-guarantee">
              <div className="cb-guarantee-icon" aria-hidden="true">✓</div>
              <div className="cb-guarantee-content">
                <div className="cb-guarantee-title">30-Day Money-Back Guarantee</div>
                <div className="cb-guarantee-desc">
                  Don't feel a difference? <em>We refund every peso.</em> No questions asked.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "couples" && (
          <CouplesPanel />
        )}

        {activeTab === "faq" && (
          <FaqPanel />
        )}
      </div>
    </div>
  );
}

const CS_STATS = [
  { id: 1, label: "Increased Drive", value: 92 },
  { id: 2, label: "Deeper Emotions", value: 87 },
  { id: 3, label: "Deeper Sleep", value: 79 },
  { id: 4, label: "Better Mood", value: 74 },
];

function ClinicalStatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="clinical-stats-section">
      <div className="cs-header">
        <div className="cs-eyebrow">
          <span className="dot" aria-hidden="true" />
          Clinical Study Results
        </div>
        <h2 className="cs-headline">
          Backed by <em>real data.</em>
        </h2>
        <p className="cs-sub">Tested with 3,500+ couples over 30 days.</p>
      </div>

      <div className="cs-card" ref={ref}>
        <div className="cs-card-header">
          <h3 className="cs-card-title">
            30-Day Study <em>Results</em>
          </h3>
          <span className="cs-verify-badge" aria-label="Verified clinical study">
            Clinical Study
          </span>
        </div>

        <div className="cs-bars">
          {CS_STATS.map((stat) => (
            <div key={stat.id} className="cs-bar-row">
              <div className="cs-bar-label">{stat.label}</div>
              <div
                className="cs-bar-track"
                role="progressbar"
                aria-label={`${stat.label}: ${stat.value}%`}
                aria-valuenow={stat.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="cs-bar-fill"
                  style={{ width: animate ? `${stat.value}%` : "0%" }}
                />
              </div>
              <div className="cs-bar-num">{stat.value}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cs-anchor">
        <div className="cs-anchor-num-block">
          <div className="cs-anchor-num">
            3,500<span>+</span>
          </div>
          <div className="cs-anchor-num-label">Couples</div>
        </div>
        <div className="cs-anchor-text">
          <div className="cs-anchor-title">
            Have <em>rebuilt their love life.</em>
          </div>
          <p className="cs-anchor-sub">
            Trust. Intimacy. Passion. It's not gone, it just needs the right support.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProductDesireMen({ initialVariant = "him" }: { initialVariant?: ProductVariant } = {}) {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(0);
  const [variant, setVariant] = useState<ProductVariant>(initialVariant);
  const [selectedBundle, setSelectedBundle] = useState(3);
  const { d, h, m } = useCountdown(48);

  const PRODUCT_IMAGES =
    variant === "her" ? PRODUCT_IMAGES_HER :
    variant === "couple" ? PRODUCT_IMAGES_COUPLE :
    PRODUCT_IMAGES_HIM;

  const BUNDLES = variant === "couple" ? BUNDLES_COUPLE : BUNDLES_HIM;

  // Preload ALL variant images (Him, Her, Couple) on first mount so switching
  // between variants is instant and never re-downloads.
  // Step 1: load the current variant first (priority).
  // Step 2: load the other two variants in the background after current is queued.
  useEffect(() => {
    PRODUCT_IMAGES.forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });

    const otherVariants = [
      ...PRODUCT_IMAGES_HIM,
      ...PRODUCT_IMAGES_HER,
      ...PRODUCT_IMAGES_COUPLE,
    ].filter((img) => !PRODUCT_IMAGES.some((p) => p.src === img.src));

    otherVariants.forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });
  }, [variant]);

  // Reset to first image whenever the variant changes
  useEffect(() => {
    setCurrentImg(0);
  }, [variant]);

  // Reset to the popular bundle when variant changes (couple has 2 tiers, others have 3)
  useEffect(() => {
    setSelectedBundle(variant === "couple" ? 2 : 3);
  }, [variant]);

  const bundle = BUNDLES.find((b) => b.id === selectedBundle)!;

  const prev = () => setCurrentImg((p) => (p - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  const next = () => setCurrentImg((p) => (p + 1) % PRODUCT_IMAGES.length);

  return (
    <>
      {/* Section 1: Marquee */}
      <div className="pdp-marquee" role="region" aria-label="Promotion">
        <div className="pdp-marquee-track">
          {[0, 1, 2].map((rep) => (
            <div key={rep} className="pdp-marquee-group">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={`${rep}-${i}`} className="pdp-marquee-item">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ProductNav />

      <main className="pdp-main">
        {/* Section 3: Hero */}
        <section className="pdp-hero">
          <div className="pdp-hero-grid">
            {/* Gallery */}
            <div className="pdp-gallery">
              <div className="pdp-main-image">
                <div className="pdp-main-image-inner" aria-label={`Product image ${currentImg + 1}`}>
                  <img
                    src={PRODUCT_IMAGES[currentImg].src}
                    alt={PRODUCT_IMAGES[currentImg].label}
                    className="pdp-main-img"
                    decoding="sync"
                    loading="eager"
                    {...({ fetchpriority: "high" } as Record<string, string>)}
                  />
                </div>
                <button className="pdp-arrow pdp-arrow-prev" onClick={prev} aria-label="Previous image">‹</button>
                <button className="pdp-arrow pdp-arrow-next" onClick={next} aria-label="Next image">›</button>
              </div>
              <div className="pdp-thumbs">
                {PRODUCT_IMAGES.map((img, idx) => idx === currentImg ? null : (
                  <button
                    key={idx}
                    className="pdp-thumb"
                    onClick={() => setCurrentImg(idx)}
                    aria-label={`View ${img.label}`}
                  >
                    <img src={img.src} alt={img.label} className="pdp-thumb-img" decoding="async" loading="eager" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="pdp-info">
              <div className="pdp-header">
                <h1 className="pdp-title">
                  Desire for <em>{variant === "her" ? "Women" : variant === "couple" ? "Couple" : "Men"}</em>
                </h1>
                <p className="pdp-desc">
                  The daily mood enhancer gummies that 3,500+ Filipino couples trust to feel closer, more connected, and more passionate together.
                </p>
                <div className="pdp-rating" aria-label="Rated 4.9 out of 5 stars">
                  <span className="pdp-stars" aria-hidden="true">★★★★★</span>
                  <div className="pdp-score-block">
                    <span className="pdp-score">4.8</span>
                    <span className="pdp-out-of">/ 5</span>
                  </div>
                  <a href="#reviews" className="pdp-review-count">16,225 verified reviews</a>
                </div>
              </div>

              {/* Step 1, Variant */}
              <div className="step-label">
                <span className="step-num">1</span>
                <span className="step-text">Pick Your Variant</span>
                <span className="step-line" aria-hidden />
              </div>
              <div className={`variant-segmented ${variant}`} role="tablist" aria-label="Pick your variant">
                <span className="slider" aria-hidden />
                {[
                  { id: "her", label: "For Her", icon: "♀" },
                  { id: "him", label: "For Him", icon: "♂" },
                  { id: "couple", label: "For Couple", icon: "♥" },
                ].map((v) => (
                  <button
                    key={v.id}
                    className={variant === v.id ? "active" : ""}
                    onClick={() => {
                      const v2 = v.id as ProductVariant;
                      setVariant(v2);
                      navigate({ to: VARIANT_ROUTES[v2] as "/products/desire-men" });
                    }}
                    aria-pressed={variant === v.id}
                    type="button"
                  >
                    <span className="icon" aria-hidden>{v.icon}</span>
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Step 2, Bundle */}
              <div className="step-label">
                <span className="step-num">2</span>
                <span className="step-text">Choose Your Bundle</span>
                <span className="step-line" aria-hidden />
              </div>
              <div className="bundle-list">
                {BUNDLES.map((b) => (
                  <div
                    key={b.id}
                    className={`bundle-card ${selectedBundle === b.id ? "active" : ""}`}
                    onClick={() => setSelectedBundle(b.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedBundle(b.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-pressed={selectedBundle === b.id}
                  >
                    {b.badge && (
                      <span className={`save-badge ${b.isPopular ? "best" : ""}`}>{b.badge}</span>
                    )}
                    <span className="bundle-radio" aria-hidden />
                    <div className="bundle-info">
                      <span className="bundle-name">{b.name}</span>
                      <span className="bundle-meta">
                        <strong>₱{b.original.toLocaleString()}</strong>
                        {b.supply}
                      </span>
                    </div>
                    <div className="bundle-prices">
                      <div className="bundle-price">₱{b.price.toLocaleString()}</div>
                      <div className="bundle-per">₱{b.perDay}/day</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="pdp-cta"
                aria-label="Check out"
                onClick={() => {
                  const variantName =
                    variant === "her" ? "Desire for <em>Women</em>" :
                    variant === "couple" ? "Desire <em>for Couple</em>" :
                    "Desire for <em>Men</em>";
                  const variantTag =
                    variant === "her" ? "For Her" :
                    variant === "couple" ? "For Couple" :
                    "For Him";
                  const image = PRODUCT_IMAGES[0].src;
                  // For couple:
                  //  - Bundle 1 (1 Men + 1 Women, ₱1,598) = base unit. Each "+" adds another set at ₱1,598.
                  //  - Bundle 2 (2 Men + 2 Women, ₱2,796) = real bundle. Dissolving steps down to base sets @ ₱1,598 each.
                  // For him/her: bundleSize = number of bottles, basePrice = ₱899 single bottle.
                  const isCouple = variant === "couple";
                  const coupleBaseSetPrice = 1598; // 1 Men + 1 Women set price
                  const bundleSize = isCouple ? bundle.id : bundle.id; // # of "couple sets" or # of bottles
                  const isBundle = isCouple ? bundle.id > 1 : bundleSize > 1;
                  addToCart({
                    id: `${variant}-${bundle.id}`,
                    variant,
                    bundleId: bundle.id,
                    name: variantName,
                    meta: isCouple
                      ? `${bundle.id} ${bundle.id === 1 ? "Set" : "Sets"} (1 Men + 1 Women each) · ${bundle.supply}`
                      : `${bundle.name} · ${bundle.supply}`,
                    tag: variantTag,
                    unitPrice: bundle.price,
                    image,
                    isBundle,
                    bundleSize,
                    basePrice: isCouple ? coupleBaseSetPrice : 899,
                    originalPrice: bundle.original,
                    bundleLabel: bundle.name,
                  });
                  navigate({ to: "/cart" });
                }}
              >
                Check Out 🛒
              </button>

              <div className="pdp-trust-badges">
                <span className="pdp-trust-badge">
                  <span aria-hidden>💳</span> COD Available
                </span>
                <span className="pdp-trust-badge">
                  <span aria-hidden>↩</span> 60-Day Money-Back
                </span>
                <span className="pdp-trust-badge">
                  <span aria-hidden>🧬</span> Doctor-Formulated
                </span>
              </div>

              {/* Clinical proof box, dashboard style */}
              <ClinicalProofBox variant={variant} />


              {/* FAQ, separate card, still in same section */}
              <div className="pdp-clinical pdp-faq-card">
                <div className="pdp-clinical-faq pdp-faq-card-inner">
                  <div className="pdp-clinical-faq-head">
                    <span className="pdp-faq-eyebrow">● Frequently Asked</span>
                    <h3 className="pdp-clinical-faq-title">Questions, <em>Answered</em></h3>
                  </div>
                  <div className="pdp-clinical-faq-list">
                    {[
                      { q: "How long before I see results?", a: "Most men feel a noticeable boost in drive, energy, and mood within 2 weeks of daily use. For full results, stamina, deeper connection, and consistent confidence, give it the full 30-day challenge." },
                      { q: "Is Desire for Men safe to take daily?", a: "Yes. Desire is FDA-approved, made from clinically-studied natural ingredients, and formulated for daily use. No prescription needed, no harsh stimulants, and no crash." },
                      { q: "Will my partner notice the difference?", a: "Almost always, yes. 87% of partners in our 30-day study reported feeling more physically and emotionally connected. That's the whole point: it's not just for you, it's for both of you." },
                      { q: "What if it doesn't work for me?", a: "You're covered by our 30-Day Money-Back Guarantee. If you don't feel the difference, send it back, even if the bottle is empty, and we'll refund you. No questions asked." },
                      { q: "How discreet is the shipping?", a: "Very. Orders ship in plain, unbranded packaging with no mention of Desire or its contents on the outside. Only you'll know what's inside." },
                      { q: "Can I take Desire with other supplements or medications?", a: "Desire is made from natural ingredients and is generally safe to combine with most supplements. If you're on prescription medication or have a medical condition, we recommend checking with your doctor first." },
                      { q: "When is the best time of day to take it?", a: "Most men take Desire in the morning with breakfast for all-day drive and focus. You can also take it 30–60 minutes before intimacy for an extra boost when you need it most." },
                      { q: "How long will one bottle last?", a: "Each bottle is a 30-day supply when taken as directed (2 gummies daily). For best results, we recommend the 3-bottle bundle, the full 90-day cycle is when most men feel the deepest, lasting transformation." },
                    ].map((item, i) => (
                      <details key={i} className="pdp-faq-item">
                        <summary>
                          <span className="pdp-faq-q">{item.q}</span>
                          <span className="pdp-faq-icon" aria-hidden>+</span>
                        </summary>
                        <p className="pdp-faq-a">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points marquee */}
        <PainPointsMarquee />

        {/* Section 7: Reviews Grid */}
        <section className="reviews-section">
          <div className="reviews-grid" aria-label="Customer reviews">
            {REVIEWS.map((r, i) => (
              <article key={i} className="review-card" data-review-index={i}>
                <div className="review-top">
                  <span className="rating-pill">{r.rating}</span>
                  <span className="variant-tag">{r.variant}</span>
                </div>
                <p className="review-quote">
                  {r.quote.map((part, j) =>
                    part.em ? <em key={j}>{part.text}</em> : <span key={j}>{part.text}</span>,
                  )}
                </p>
                <div className="review-divider" />
                <p className="review-author">{r.author}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 8: Real Stories */}
        <section className="real-stories-section">
          <div className="stories-header">
            <div className="stories-eyebrow">
              <span className="dot" />
              Real Stories
            </div>
            <h2 className="stories-headline">
              Real people. Real stories. <em>No scripts.</em>
            </h2>
            <p className="stories-sub">
              From real Filipino couples who tried Desire and felt the difference.
            </p>
          </div>
          <div className="stories-grid">
            {[
              {
                img: story1,
                rating: "4.8",
                variant: "For Couple",
                headline: <>"Parang bago kaming <em>mag-jowa ulit.</em>"</>,
                quote: <>"Matagal na po kaming kasal at totoo talaga na <em>unti-unti nawawala yung init</em>. Nung nagsimula kaming uminom ng Desire, <em>bumalik po yung lambingan namin</em>. Mas ganado siya!"</>,
                author: "Lonz & Jesusa",
                meta: "Married 27 years",
                alt: "Lonz and Jesusa, married 27 years",
              },
              {
                img: story2,
                rating: "4.8",
                variant: "For Couple",
                headline: <>"Age is just a number. <em>Desire proved that.</em>"</>,
                quote: <>"We're both in our 60s and people assume na wala na yun. But Desire gave us that <em>extra boost</em>. Mas may energy si Eddie, mas magaan ang pakiramdam ko. We hold hands again. <em>Parang bumalik yung kilig.</em>"</>,
                author: "Rick & Bridge",
                meta: "Both in their 60s",
                alt: "Rick and Bridge, both in their 60s",
              },
              {
                img: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/ChatGPT%20Image%20Apr%2029,%202026,%2001_24_12%20PM.png",
                rating: "4.8",
                variant: "For Couple",
                headline: <>"He made me feel <em>beautiful again.</em>"</>,
                quote: <>"After having kids, hindi na ako comfortable sa katawan ko. Naa-affect yung intimacy namin. Nung nag-start ako ng Desire, nagbago yung feeling ko. <em>Mas may confidence.</em>"</>,
                author: "Anna & Vic",
                meta: "Married 12 years",
                alt: "Randy and Marilene, married 12 years",
              },
              {
                img: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/ChatGPT%20Image%20Apr%2029,%202026,%2003_14_12%20PM.png",
                rating: "4.8",
                variant: "For Couple",
                headline: <>"Sobrang sulit. <em>Worth every peso.</em>"</>,
                quote: <>"Six months kami ni Mark na nag-uumpisang mawalan ng spark dahil sa stress sa work. Nung sinubukan namin ang Desire, <em>parang honeymoon ulit</em>. Mas malambing, mas masaya, mas konektado kami pareho."</>,
                author: "Mark & Liza",
                meta: "Married 8 years",
                alt: "Mark and Liza, married 8 years",
              },
            ].map((s, i) => (
              <article key={i} className="story-card">
                <div className="story-photo">
                  <span className="rating-pill">{s.rating}</span>
                  <span className="variant-tag story-variant-tag">{s.variant}</span>
                  <img src={s.img} alt={s.alt} loading="lazy" width={800} height={1000} />
                  <div className="photo-overlay">
                    <div className="photo-headline">{s.headline}</div>
                  </div>
                </div>
                <div className="story-content">
                  <span className="quote-mark">“</span>
                  <p className="quote-text">{s.quote}</p>
                  <div className="author-block">
                    <p className="author-name">{s.author}</p>
                    <p className="author-meta">{s.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SystemsSection />

        {/* Comparison Table */}
        <section className="comparison-section">
          <div className="comparison-header">
            <div className="comparison-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              Why Choose Desire
            </div>
            <h2 className="comparison-headline">
              Built different. <em>Built better.</em>
            </h2>
            <p className="comparison-sub">
              See how Desire compares to traditional pill enhancers.
            </p>
          </div>

          <div className="comparison-wrap">
            <div className="comparison-table" role="table" aria-label="Desire vs traditional pill enhancers comparison">
              <div className="comparison-thead" role="row">
                <div className="comp-th desire" role="columnheader" style={{ position: "relative", overflow: "visible" }}>
                  <img
                    src="https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/desire%204/Couples.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -65,
                      left: -85,
                      width: 270,
                      height: "auto",
                      pointerEvents: "none",
                      zIndex: 5,
                      transform: "rotate(-15deg)",
                    }}
                  />
                  <div className="comp-th-eyebrow">Recommended</div>
                  <div className="comp-th-name">Desire <em>for Couples</em></div>
                  <div className="comp-th-tag">Daily Wellness</div>
                </div>
                <div className="comp-th others" role="columnheader" style={{ position: "relative", overflow: "visible" }}>
                  <img
                    className="comp-others-img"
                    src="https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/Other%20Brands.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -55,
                      right: -40,
                      width: 190,
                      height: "auto",
                      pointerEvents: "none",
                      zIndex: 5,
                      transform: "rotate(15deg)",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="comp-th-eyebrow">Traditional</div>
                  <div className="comp-th-name">Leading Pill Enhancer</div>
                  <div className="comp-th-tag">Quick Fix</div>
                </div>
              </div>

              {[
                { id: 1, desire: "Plant-based, natural ingredients", others: "Synthetic chemicals" },
                { id: 2, desire: "Chocolate-flavored gummies", others: "Hard pills, bitter taste" },
                { id: 3, desire: "Sugar-free (Stevia), safe for diabetics", others: "Often contains sugar or fillers" },
                { id: 4, desire: "No headaches, no side effects", others: "Headaches, dizziness, palpitations" },
                { id: 5, desire: "Safe to take daily", others: "Risky with heart/BP medications" },
                { id: 6, desire: "NSF Certified for Sport & Dietary Supplements", others: "No third-party certification" },
                { id: 7, desire: "Separate formulations for Him & Her", others: "One generic formula, usually men only" },
                { id: 8, desire: "Supports mood, stress relief, and closeness", others: "Focuses only on physical performance" },
                { id: 9, desire: "Daily wellness for long-term balance", others: "One-time quick fix, temporary effect" },
              ].map((row) => (
                <div className="comp-row" role="row" key={row.id}>
                  <div className="comp-cell desire" role="cell">
                    <span className="comp-icon check" aria-hidden="true">✓</span>
                    <span>{row.desire}</span>
                  </div>
                  <div className="comp-cell others" role="cell">
                    <span className="comp-icon x" aria-hidden="true">×</span>
                    <span>{row.others}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="comparison-cta">
              <button type="button" className="comparison-cta-btn">
                View Supplement Facts
              </button>
            </div>
          </div>
        </section>
      </main>

        {/* Video Testimonials */}
        <section className="pdp-vtestim">
          <h2 className="pdp-vtestim-title">See what the couples says about Desire.</h2>
          <div className="pdp-vtestim-grid">
            {[
              {
                src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/Aliyah%20Testimonial%20UGC-2.mp4",
                name: "Aliyah (23 years old)",
              },
              {
                src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/VID%204%20HULK%20&%20MS%20HULK%20FINAL-2.mov",
                name: "John and Maureen (3 years Together)",
              },
              {
                src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/D/0502(1).mp4",
                name: "Roy and Angela (6 years Together)",
              },
              {
                src: "https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/Desire%20Edit%2010-2.mp4",
                name: "Angelo (33 years old)",
              },
            ].map((v, i) => (
              <div key={i} className="pdp-vtestim-card">
                <div className="pdp-vtestim-media">
                  <video
                    src={`${v.src}#t=0.1`}
                    controls
                    playsInline
                    preload="metadata"
                    className="pdp-vtestim-video"
                  />
                  <span className="pdp-vtestim-logo">D∃</span>
                </div>
                <p className="pdp-vtestim-name">{v.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Values, Dark Premium */}
        <section className="brand-values-section">
          <div className="brand-values-bridge">
            <span className="bridge-dot" aria-hidden="true" />
            Why Desire
          </div>
          <div className="brand-values-content">
            <div className="bv-header">
              <div className="bv-eyebrow">
                <span className="dot" aria-hidden="true" />
                Our Promise
              </div>
              <h2 className="bv-headline">
                Nothing but the best, <em>in every serving.</em>
              </h2>
              <p
                className="bv-sub"
                dangerouslySetInnerHTML={{
                  __html:
                    "Every gummy is crafted with <em>plant-based ingredients</em>, third-party tested, and made in FDA-approved facilities. Built for couples who deserve more.",
                }}
              />
            </div>

            <div className="bv-grid">
              {[
                {
                  id: 1,
                  icon: Sun,
                  title: "Daily Wellness <em>Ritual</em>",
                  description:
                    "Delicious chocolate gummies made for long-term vitality, not quick fixes.",
                },
                {
                  id: 2,
                  icon: Heart,
                  title: "Feel <em>Desired Again</em>",
                  description:
                    "Restore confidence, mood, and natural intimacy, the way it was meant to feel.",
                },
                {
                  id: 3,
                  icon: Award,
                  title: "Stress-Free <em>Balance</em>",
                  description:
                    "Hormonal support that helps you <em>reconnect emotionally</em> with your partner.",
                },
                {
                  id: 4,
                  icon: Shield,
                  title: "Safe For <em>Life</em>",
                  description:
                    "Compatible with medications. <em>Zero side effects</em>. FDA-approved facilities.",
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <article className="bv-card" key={value.id}>
                    <div className="bv-num">{String(idx + 1).padStart(2, "0")}</div>
                    <div className="bv-icon">
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3
                      className="bv-title"
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    />
                    <p
                      className="bv-desc"
                      dangerouslySetInnerHTML={{ __html: value.description }}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <SilentStruggleSection />

        {/* Certifications & Verified Certificates */}
        <section className="pdp-certs">
          <p className="pdp-certs-eyebrow">Every Ingredient Chosen For A Reason</p>
          <h3 className="pdp-certs-headline">
            Science based. <em>Verified.</em> Approved.
          </h3>
          <div className="pdp-certs-badges-img">
            <img
              src="https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%2012/logoosss.png"
              alt="FDA, GMP, HALAL, ISO 9001 certifications"
              loading="lazy"
            />
          </div>
          <p className="pdp-certs-meta">
            Manufactured in Compliant &amp; Approved Facilities Abroad
          </p>

          <div className="pdp-certs-divider" />

          <h2 className="pdp-certs-title">See Our Verified Certificates</h2>
          <p className="pdp-certs-sub">
            Every batch of Desire is lab-tested by independent evaluators<br />
            so you know exactly what's going into your body… and what results to expect.
          </p>
          <div className="pdp-certs-cta-wrap">
            <button className="pdp-certs-cta">VIEW THIRD PARTY RESULTS</button>
          </div>
        </section>

        <ClinicalStatsSection />


        <section className="cta-30day-section">
          <div className="cta-flex-layout" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
            <SlideInX from="left" rotate={-12} style={{ flexShrink: 0 }}>
              <img
                src="https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/desire%204/Him.png"
                alt="Him"
                style={{ width: "clamp(180px, 22vw, 340px)", height: "auto", display: "block" }}
                loading="lazy"
              />
            </SlideInX>
            <div className="cta-wrap" style={{ flex: 1 }}>
              <div className="cta-badge">
                <span className="dot" aria-hidden />
                30-Day Guarantee
              </div>
              <h2 className="cta-headline">
                Try it for 30 days.<br />
                <em>You'll feel the difference.</em>
              </h2>
              <p className="cta-sub">
                Love it or <em>get your money back.</em> No questions asked, no return shipping. Just real intimacy back.
              </p>
              <div className="cta-row">
                <a href="#shop" className="cta-btn-primary">Try Desire Today</a>
                <a href="#how" className="cta-btn-secondary">Learn how it works</a>
              </div>
              <div className="cta-trust">
                <div className="cta-trust-item">
                  <div className="cta-trust-icon"><Shield size={18} aria-hidden /></div>
                  <div className="cta-trust-label">Money<br />Back</div>
                </div>
                <div className="cta-trust-item">
                  <div className="cta-trust-icon"><Package size={18} aria-hidden /></div>
                  <div className="cta-trust-label">Free<br />Shipping</div>
                </div>
                <div className="cta-trust-item">
                  <div className="cta-trust-icon"><Lock size={18} aria-hidden /></div>
                  <div className="cta-trust-label">Discreet<br />Package</div>
                </div>
                <div className="cta-trust-item">
                  <div className="cta-trust-icon"><Zap size={18} aria-hidden /></div>
                  <div className="cta-trust-label">Daily<br />Wellness</div>
                </div>
              </div>
            </div>
            <SlideInX from="right" rotate={12} style={{ flexShrink: 0 }}>
              <img
                src="https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/desire%204/Her.png"
                alt="Her"
                style={{ width: "clamp(180px, 22vw, 340px)", height: "auto", display: "block" }}
                loading="lazy"
              />
            </SlideInX>
          </div>
        </section>

      <Footer />
    </>
  );
}

type SystemCard = {
  id: number;
  name: string;
  icon: LucideIcon;
  description: string;
  ingredients: string[];
};

const SYSTEMS_HIM: SystemCard[] = [
  {
    id: 1,
    name: "Hypothalamus",
    icon: Brain,
    description:
      "The hormone control center. Sets the foundation for <em>healthy testosterone production</em> and sexual interest.",
    ingredients: ["Tongkat Ali", "Tribulus"],
  },
  {
    id: 2,
    name: "Limbic System",
    icon: Heart,
    description:
      "Where emotional connection lives. Strengthens <em>intimacy and bonding</em> with your partner.",
    ingredients: ["Korean Ginseng", "Zinc"],
  },
  {
    id: 3,
    name: "Cerebral Cortex",
    icon: Zap,
    description:
      "Where fantasies and conscious desire happen. <em>Mental arousal starts here</em>.",
    ingredients: ["L-Arginine", "Maca Root", "Panax Ginseng"],
  },
  {
    id: 4,
    name: "Spinal Cord",
    icon: Activity,
    description:
      "Carries signals between brain and body. <em>Nerve responsiveness</em> supports physical response.",
    ingredients: ["Zinc", "Tribulus"],
  },
  {
    id: 5,
    name: "Blood Flow",
    icon: Droplet,
    description:
      "<em>Healthy circulation</em> supports stamina and physical response. The engine of intimacy.",
    ingredients: ["L-Arginine", "Tongkat Ali"],
  },
  {
    id: 6,
    name: "Testosterone",
    icon: Flame,
    description:
      "The fuel of male vitality. Optimal levels support <em>drive, energy, and confidence</em>.",
    ingredients: ["Tongkat Ali", "Maca Root", "Tribulus"],
  },
];

const SYSTEMS_HER: SystemCard[] = [
  {
    id: 1,
    name: "Hypothalamus",
    icon: Brain,
    description:
      "The hormone control center. Sets the foundation for <em>balanced cycles</em> and natural intimacy.",
    ingredients: ["Ashwagandha", "Chaste Berry"],
  },
  {
    id: 2,
    name: "Limbic System",
    icon: Heart,
    description:
      "Where emotional connection lives. Strengthens <em>intimacy and bonding</em> with your partner.",
    ingredients: ["Ashwagandha", "Zinc"],
  },
  {
    id: 3,
    name: "Cerebral Cortex",
    icon: Zap,
    description:
      "Where fantasies and conscious desire happen. <em>Mental arousal starts here</em>.",
    ingredients: ["Red Maca", "Dong Quai"],
  },
  {
    id: 4,
    name: "Nervous System",
    icon: Activity,
    description:
      "Carries signals throughout the body. <em>Healthy sensitivity</em> supports physical response.",
    ingredients: ["Zinc", "Lactobacillus"],
  },
  {
    id: 5,
    name: "Circulation",
    icon: Droplet,
    description:
      "<em>Healthy blood flow</em> supports stamina and physical response. The engine of intimacy.",
    ingredients: ["Red Maca", "Dong Quai"],
  },
  {
    id: 6,
    name: "Hormonal Balance",
    icon: Flame,
    description:
      "The foundation of female vitality. <em>Balanced hormones</em> support cycles, mood, and intimacy.",
    ingredients: ["Chaste Berry", "Dong Quai", "Ashwagandha"],
  },
];

const HERO_HIM = {
  title: "Built for the way <em>your body works.</em>",
  text: "Desire For Him supports every step of intimacy, from the <em>first spark of desire in your brain</em> to the physical response. Each ingredient is chosen for a specific system.",
};

const HERO_HER = {
  title: "Built for the way <em>your body works.</em>",
  text: "Desire For Her supports every step of intimacy, from <em>hormonal balance to emotional connection</em>. Each ingredient is chosen for a specific system.",
};

function SystemsSection() {
  const [variant, setVariant] = useState<"him" | "her">("him");
  const systems = variant === "him" ? SYSTEMS_HIM : SYSTEMS_HER;
  const hero = variant === "him" ? HERO_HIM : HERO_HER;

  return (
    <section className="systems-section">
      <div className="systems-header">
        <span className="systems-eyebrow">
          <span className="dot" aria-hidden />
          How It Works
        </span>
        <h2 className="systems-headline">
          6 systems. <em>One purpose.</em>
        </h2>
        <p className="systems-sub">
          Intimacy starts in the brain, flows through your nerves, and is powered by hormones.
        </p>
      </div>

      <div className="systems-toggle-row">
        <div className={`systems-toggle ${variant}`} role="tablist" aria-label="Choose variant">
          <span className="toggle-slider" aria-hidden />
          <button
            type="button"
            role="tab"
            aria-pressed={variant === "him"}
            className={variant === "him" ? "active" : ""}
            onClick={() => setVariant("him")}
          >
            Desire For Him
          </button>
          <button
            type="button"
            role="tab"
            aria-pressed={variant === "her"}
            className={variant === "her" ? "active" : ""}
            onClick={() => setVariant("her")}
          >
            Desire For Her
          </button>
        </div>
      </div>

      <div className="systems-hero">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-dot" aria-hidden />
            Comprehensive Body Support
          </span>
          <h3 className="hero-title" dangerouslySetInnerHTML={{ __html: hero.title }} />
          <p className="hero-text" dangerouslySetInnerHTML={{ __html: hero.text }} />
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">6</div>
            <div className="hero-stat-label">Body Systems</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">8</div>
            <div className="hero-stat-label">Ingredients</div>
          </div>
        </div>
      </div>

      <div className="systems-grid">
        {systems.map((s, idx) => {
          const Icon = s.icon;
          return (
            <article className="system-card" key={s.id}>
              <div className="card-header">
                <div className="card-icon">
                  <Icon size={26} aria-hidden />
                </div>
                <div className="card-titles">
                  <div className="card-num">System {String(idx + 1).padStart(2, "0")}</div>
                  <div className="card-name">{s.name}</div>
                </div>
              </div>
              <p
                className="card-desc"
                dangerouslySetInnerHTML={{ __html: s.description }}
              />
              <div className="card-tags">
                {s.ingredients.map((ing) => (
                  <span className="card-tag" key={ing}>
                    {ing}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const SILENT_STRUGGLES = [
  {
    key: "stress",
    label: "Stress & Disconnection",
    desc: "Daily stress builds walls between you. Long workdays, exhaustion, and constant distractions leave little room for closeness.",
    body: "Modern life drains us. Work stress, parenting burnout, hormonal imbalance,it all kills intimacy. You stop touching. Stop talking. Stop wanting.",
    help: "Desire's plant-based formula helps reduce cortisol (stress hormone), balance mood, and restore natural energy,so you can feel like you again. Not exhausted. Not numb. Just… alive.",
    image: silentStress,
    alt: "Stress and disconnection",
  },
  {
    key: "hormonal",
    label: "Hormonal Imbalance",
    desc: "When hormones are off, desire fades. Mood swings, fatigue, and low libido aren't your fault, they're chemistry.",
    body: "Cortisol up, testosterone and estrogen down. Your body literally can't feel desire when its hormones are out of sync, no matter how much you love your partner.",
    help: "Desire's adaptogens (Maca, Ashwagandha, Tribulus) gently rebalance hormones the natural way. Drive returns. Mood lifts. Connection comes back, without synthetic chemicals.",
    image: silentHormonal,
    alt: "Hormonal imbalance",
  },
  {
    key: "unsafe",
    label: 'Unsafe "Solutions"',
    desc: "Hard pills, synthetic chemicals, and unregulated supplements bring side effects, headaches, and dangerous risks.",
    body: "Most enhancers in the market are synthetic, designed for one-night fixes. They cause headaches, dizziness, and palpitations. Worse, they can clash with heart and BP medications.",
    help: "Desire is plant-based, sugar-free, and NSF-certified. No harsh chemicals. No crash. Just clean, daily wellness that's safe to take long-term, for both Him and Her.",
    image: silentUnsafe,
    alt: "Unsafe supplement solutions",
  },
  {
    key: "spark",
    label: "Losing the spark",
    desc: "Routine, kids, work, life takes over. The passion that brought you together quietly slips away.",
    body: "It doesn't vanish overnight. It fades, one missed night, one tired evening, one distracted weekend at a time. Until you wake up wondering when you stopped feeling close.",
    help: "Desire reignites that spark from the inside out. Better mood, better energy, better blood flow, deeper emotional connection. The version of you that fell in love? Still there. Desire helps you find them again.",
    image: silentSpark,
    alt: "Losing the spark",
  },
];

function SilentStruggleSection() {
  const [active, setActive] = useState(SILENT_STRUGGLES[0].key);
  const current = SILENT_STRUGGLES.find((s) => s.key === active) ?? SILENT_STRUGGLES[0];

  return (
    <section className="pdp-silent">
      <h2 className="pdp-silent-title">
        THE SILENT STRUGGLE IN<br />YOUR RELATIONSHIP
      </h2>
      <div className="pdp-silent-tabs">
        {SILENT_STRUGGLES.map((s) => (
          <button
            key={s.key}
            className={`pdp-silent-tab ${active === s.key ? "active" : ""}`}
            onClick={() => setActive(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="pdp-silent-stage">
        <div
          className="pdp-silent-illustration"
          style={{ position: "relative", aspectRatio: "1 / 1" }}
        >
          {SILENT_STRUGGLES.map((s) => (
            <img
              key={s.key}
              src={s.image}
              alt={s.alt}
              width={512}
              height={512}
              loading="eager"
              decoding="async"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: s.key === active ? 1 : 0,
                pointerEvents: s.key === active ? "auto" : "none",
                transition: "opacity 0.2s ease",
              }}
            />
          ))}
        </div>
      </div>
      <div className="pdp-silent-content">
        <h3 className="pdp-silent-h3">{current.label}</h3>
        <p className="pdp-silent-body">{current.body}</p>
        <h4 className="pdp-silent-h4">How Desire Helps:</h4>
        <p className="pdp-silent-body">{current.help}</p>
      </div>
    </section>
  );
}
