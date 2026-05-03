import { FadeUp } from "./FadeUp";

export function OfferBanner() {
  return (
    <section id="shop" className="scroll-mt-24 bg-white px-8 pt-6 pb-20">
      <FadeUp>
        <div className="mx-auto max-w-[1280px]">
          <img
            src="https://qmfzkvfxjheyhrweyshl.supabase.co/storage/v1/object/public/Desire%202/312.png"
            alt="Daily Desire Ritual Pro, Save 30% + Free Welcome Gifts"
            className="block h-auto w-full rounded-3xl shadow-2xl"
          />
        </div>
      </FadeUp>
    </section>
  );
}
