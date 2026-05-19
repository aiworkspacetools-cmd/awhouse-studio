"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP = "https://wa.me/48730692263";
const LOGO = "/logo-gold.png";
const HERO = "/kuchnia-2.png";
const PREMIUM_BG = "/Wzor do sekcji premium-1.png";

const moodboards = [
  "/moodboard-nowy.png",
  "/moodboard-1.png",
  "/moodboard-3.png",
  "/moodboard-4.png",
];

const categories = [
  {
    id: "lazienki",
    title: "Łazienki premium",
    subtitle: "Jasne, fotorealistyczne łazienki z kamieniem, światłem i detalem premium.",
    images: ["/lazienka-final.png", "/lazienka-1.png", "/lazienka-2.png"],
  },
  {
    id: "salony",
    title: "Salony",
    subtitle: "Eleganckie przestrzenie dzienne z klimatem nowoczesnego apartamentu.",
    images: ["/salon-1.png", "/salon-2.png"],
  },
  {
    id: "aneksy",
    title: "Salon z aneksem",
    subtitle: "Spójne wnętrza łączące kuchnię, salon i strefę wypoczynku.",
    images: ["/aneks-1.png", "/aneks-2.png"],
  },
  {
    id: "kuchnie",
    title: "Kuchnie",
    subtitle: "Nowoczesne kuchnie premium z realistycznym światłem i materiałami.",
    images: ["/kuchnia-1.png", "/kuchnia-2.png"],
  },
  {
    id: "sypialnie",
    title: "Sypialnie",
    subtitle: "Miękkie światło, spokój i hotelowy klimat wnętrza premium.",
    images: ["/sypialnia-1.png", "/sypialnia-2.png"],
  },
];

const beforeAfter = [
  "/przedpo-1.png",
  "/przedpo-2.png",
  "/przedpo-3.png",
  "/przedpo-4.png",
  "/przedpo-5.png",
  "/przedpo-6.png",
];

const slides = ["/kuchnia-2.png", "/salon-1.png", "/aneks-1.png", "/lazienka-1.png"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
function orderPackage(packageName: string) {
  const message = encodeURIComponent(
    `Dzień dobry, interesuje mnie ${packageName}. Proszę o więcej informacji.`
  );

  window.open(`${WHATSAPP}?text=${message}`, "_blank");
}
function Header({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      className="mb-16"
    >
      <p className="mb-5 inline-block border border-[#bfa37a]/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#bfa37a]">
        {tag}
      </p>
      <h2 className="font-serif text-5xl italic tracking-tight bg-gradient-to-r from-[#f7ead2] via-[#c6a27a] to-[#6b523b] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(198,162,122,0.16)] md:text-7xl">
        {title}
      </h2>
      <p className="mt-7 max-w-4xl text-xl leading-relaxed text-white/65">{subtitle}</p>
    </motion.div>
  );
}

function Gallery({
  id,
  title,
  subtitle,
  images,
  openImage,
}: {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  openImage: (src: string) => void;
}) {
  return (
    <section id={id} className="relative z-20 -mt-56 rounded-t-[44px]bg-[#141414] px-6 py-28 md:px-20">
      <div className="mx-auto max-w-7xl">
        <Header tag="portfolio" title={title} subtitle={subtitle} />

        <div className="grid gap-7 md:grid-cols-2">
          {images.map((image, index) => (
            <motion.article
className="break-inside-avoid overflow-hidden rounded-[34px]"
              key={image}
              initial={{ opacity: 0, y: 100, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.08 }}
              
            >
              <img
                src={image}
                alt=""
                onClick={() => openImage(image)}
                className="h-[550px] w-full cursor-pointer object-cover rounded-[32px] border border-white/10 shadow-[0_20px_120px_rgba(0,0,0,0.6)] transition duration-[2200ms] hover:scale-[1.02] hover:shadow-[0_30px_160px_rgba(212,175,55,0.18)] md:h-[780px]"
              />
            </motion.article>
          ))}
          {images.length % 2 !== 0 && (
  <div className="min-h-[420px] rounded-[34px] border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-10 text-center">
    <div>
      <p className="text-xs tracking-[0.35em] uppercase text-[#bfa37a] mb-4">
        Premium Interior Visuals
      </p>

      <h3 className="font-serif text-5xl italic text-white">
        AW HOUSE
        <br />
        STUDIO
      </h3>

      <p className="mt-6 text-white/55 leading-relaxed">
        Fotorealistyczne wizualizacje wnętrz tworzone z dbałością o światło,
        detal i atmosferę luksusu.
      </p>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden scroll-smooth bg-[#141414] text-white">
      <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 md:gap-6 rounded-full border border-white/10 bg-gradient-to-b from-[#2a241d]/80 to-black/40 px-8 py-4 backdrop-blur-2xl shadow-[0_15px_70px_rgba(0,0,0,0.55)]">
          <button onClick={() => scrollTo("start")} className="font-semibold text-white">awhouse.studio</button>
          
          <button onClick={() => scrollTo("wspolpraca")} className="text-[15px] tracking-wide transition-all duration-300 hover:text-[#d4af37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">Współpraca</button>
          <button onClick={() => scrollTo("cennik")} className="text-[15px] tracking-wide transition-all duration-300 hover:text-[#d4af37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">Cennik</button>
          <button onClick={() => scrollTo("kontakt")} className="text-[15px] tracking-wide transition-all duration-300 hover:text-[#d4af37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">Kontakt</button>
        </div>
      </nav>

      <section id="start" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <motion.img
          src={HERO}
          alt=""
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 10 }}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.25),#141414_96%)]" />

        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="relative z-10 max-w-6xl"
        >
          <img src={LOGO} alt="AWHOUSE Studio" className="mx-auto mb-10 h-36 object-contain opacity-95 md:h-52 drop-shadow-[0_0_45px_rgba(212,175,55,0.45)]" />
          <h1 className="font-serif text-6xl italic leading-[0.95] tracking-tight  md:text-8xl lg:text-9xlbg-gradient-to-r from-[#fff6d5] via-[#bfa37a] to-[#fff1b0] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]">
            awhouse.studio
          </h1>
          <p className="mx-auto mt-6 max-w-4xl rounded-2xl bg-black/20 px-6 py-4 text-lg leading-relaxed text-white/75 backdrop-blur-xl md:text-xl">
            Wizualizacje wnętrz tworzone z myślą o atmosferze, detalu i ponadczasowym designie.
          </p>

          
        </motion.div>
      </section>

      <section id="wspolpraca" className="bg-[#181818] px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Header tag="proces" title="Jak wygląda współpraca" subtitle="Trzy proste kroki — od zdjęć wnętrza do gotowej wizualizacji premium." />
          <div className="grid gap-7 md:grid-cols-3">
            {[
              ["1", "Wysyłasz zdjęcia wnętrza", "Dokumentujesz aktualne wnętrze i przesyłasz fotografie. Wystarczą zdjęcia telefonem, rzut, inspiracje lub krótki opis."],
              ["2", "Omawiamy styl i kierunek", "Dobieramy klimat, materiały, kolorystykę, światło i charakter przyszłego wnętrza."],
              ["3", "Otrzymujesz wizualizacje", "Dostajesz realistyczne ujęcia, które możesz pokazać wykonawcom, inwestorom lub klientom."],
            ].map(([n, title, text]) => (
              <motion.article key={n} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="border border-white/15 bg-[#1c1c1c] p-8">
                <div className="mb-7 bg-white/10 py-3 text-center font-serif text-5xl text-white/70">{n}</div>
                <h3 className="font-serif text-3xl text-white/90">{title}</h3>
                <p className="mt-5 text-xl leading-relaxed text-white/60">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.94 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
  className="bg-[#141414] px-6 py-32 md:px-20"
>
  <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

    <div>
      <p className="mb-5 inline-block border border-[#bfa37a]/40 px-5 py-2 text-[11px] md:text-sm uppercase tracking-[0.3em] text-[#bfa37a]">
        Najbardziej kompleksowa opcja
      </p>

      <h2 className="mb-8 font-serif text-5xl italic text-transparent bg-gradient-to-r from-[#d8cec2] via-[#bfa37a] to-[#fff3c4] bg-clip-text md:text-7xl">
        Pakiet Kompleksowy
      </h2>

      <p className="mb-12 text-2xl leading-relaxed text-white/65">
        Kompleksowa wizualizacja mieszkania wraz z listą materiałów,
        wyposażenia oraz linkami zakupowymi.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-[26px] bg-white/5 p-8 border border-white/10">
          <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
            Wizualizacja całego mieszkania
          </h3>

          <p className="text-lg leading-relaxed text-white/60">
            Spójny projekt wszystkich pomieszczeń w jednym stylu premium.
          </p>
        </div>

        <div className="rounded-[26px] bg-white/5 p-8 border border-white/10">
          <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
            Dobór materiałów i mebli
          </h3>

          <p className="text-lg leading-relaxed text-white/60">
            Gotowe propozycje wyposażenia dopasowane do wnętrza.
          </p>
        </div>

        <div className="rounded-[26px] bg-white/5 p-8 border border-white/10">
          <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
            Linki zakupowe
          </h3>

          <p className="text-lg leading-relaxed text-white/60">
            Kupujesz dokładnie to, co widzisz na wizualizacji.
          </p>
        </div>

        <div className="rounded-[26px] bg-white/5 p-8 border border-white/10">
          <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
            Premium prezentacja PDF
          </h3>

          <p className="text-lg leading-relaxed text-white/60">
            Profesjonalny dokument gotowy do przekazania wykonawcom.
          </p>
        </div>

      </div>
    </div>

    <div className="relative overflow-hidden rounded-[32px]">
  <img
    src={PREMIUM_BG}
    alt=""
    onClick={() => setSelectedImage(PREMIUM_BG)}
    className="cursor-pointer rounded-[32px] border border-white/10 shadow-[0_20px_120px_rgba(0,0,0,0.6)] transition duration-[2200ms] hover:scale-[1.03]"
  />
</div>

  </div>
</motion.section>

      <motion.section
  initial={{ opacity: 0, y: 90, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
  className="relative z-20 rounded-t-[44px] bg-[#141414] px-6 py-32 md:px-20"
>
  <div className="mx-auto max-w-7xl">
    
    <div className="mb-20">
      <p className="mb-6 inline-block border border-[#bfa37a]/40 px-5 py-2 text-sm uppercase tracking-[0.3em] text-[#bfa37a]">
        Wartości
      </p>

      <h2 className="font-serif text-5xl italic text-transparent bg-gradient-to-r from-[#d8cec2] via-[#bfa37a] to-[#fff3c4] bg-clip-text md:text-7xl">
        Dlaczego awhouse.studio
      </h2>
    </div>

    <div className="grid gap-14 md:grid-cols-3">

      <div>
        <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
          Realistyczna jakość premium
        </h3>

        <p className="text-xl leading-relaxed text-white/60">
          Tworzymy fotorealistyczne wizualizacje wnętrz z klimatem premium,
          światłem i detalem przypominającym prawdziwą fotografię.
        </p>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
          Szybka realizacja
        </h3>

        <p className="text-xl leading-relaxed text-white/60">
          Projekt otrzymujesz nawet w ciągu 48 godzin. Bez zbędnego
          oczekiwania i komplikacji.
        </p>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
          Pomoc przed remontem
        </h3>

        <p className="text-xl leading-relaxed text-white/60">
          Zobacz efekt końcowy jeszcze przed rozpoczęciem realizacji i
          podejmuj decyzje bez kosztownych błędów.
        </p>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
          Idealne dla inwestorów
        </h3>

        <p className="text-xl leading-relaxed text-white/60">
          Wizualizacje pomagają zwiększyć atrakcyjność nieruchomości i
          podnoszą wartość prezentacji inwestycji.
        </p>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
          Nowoczesne kierunki aranżacji
        </h3>

        <p className="text-xl leading-relaxed text-white/60">
          Minimalizm, japandi, modern luxury i premium interiors —
          dopasowujemy styl do charakteru wnętrza.
        </p>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-3xl text-[#f5f1e8]">
          Indywidualne podejście
        </h3>

        <p className="text-xl leading-relaxed text-white/60">
          Każdy projekt traktujemy indywidualnie, dopracowując klimat,
          światło i detale wnętrza.
        </p>
      </div>

    </div>
  </div>
</motion.section>

      {categories.map((cat) => (
        <Gallery key={cat.id} id={cat.id} title={cat.title} subtitle={cat.subtitle} images={cat.images} openImage={setSelectedImage} />
      ))}

      <section id="moodboardy" className="bg-[#181818] px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Header tag="moodboardy" title="Kierunki aranżacji" subtitle="Materiały, kolory i klimat wnętrza w spójnej prezentacji premium." />
          <div className="grid gap-7 md:grid-cols-2">
            {moodboards.map((image, index) => (
              <motion.article key={image} initial={{ opacity: 0, y: 100, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: index * 0.1 }} className="group overflow-hidden rounded-[34px] border border-white/10 bg-black/30 shadow-[0_20px_120px_rgba(0,0,0,0.55)] transition duration-700 hover:border-[#8a6a4a]/50 hover:shadow-[0_30px_140px_rgba(138,106,74,0.22)]">
                <img src={image} alt="" onClick={() => setSelectedImage(image)} className="h-[760px] w-full cursor-pointer object-cover transition-all duration-[2400ms] group-hover:scale-[1.045] group-hover:brightness-110 group-hover:saturate-[1.08]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Gallery id="przedpo" title="Przed i po" subtitle="Zobacz jak realistyczne wizualizacje pokazują pełny potencjał nieruchomości jeszcze przed remontem." images={beforeAfter} openImage={setSelectedImage} />

      <motion.section
  id="cennik"
  initial={{ opacity: 0, y: 120, scale: 0.94 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
  className="bg-[#181818] px-6 py-28 md:px-20"
>
        <div className="mx-auto max-w-7xl">
          <Header tag="cennik" title="Pakiety wizualizacji" subtitle="Transparentne wyceny i indywidualne podejście do każdego projektu." />
          <div className="grid gap-7 md:grid-cols-3">
            {[
              ["Pakiet Start", "399 zł", "Jedno pomieszczenie", "Jeden styl aranżacji", "Realizacja od 48h"],
              ["Pakiet Premium", "899 zł", "Do trzech pomieszczeń", "Spójny klimat wnętrza", "Wysoka jakość wizualizacji"],
              ["Pakiet Kompleksowy", "od 1999 zł", "Kompletne mieszkanie", "Moodboard i materiały", "Prezentacja PDF"],
            ].map((item, index) => (
              <article key={item[0]} className={`group rounded-[34px] border p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_35px_120px_rgba(138,106,74,0.22)] ${index === 2 ? "border-[#8a6a4a]/70 bg-gradient-to-br from-white/[0.09] to-white/[0.025] shadow-[0_25px_110px_rgba(138,106,74,0.18)]" : "border-white/10 bg-white/[0.035]"}`}>
                {index === 2 && <p className="mb-5 inline-block bg-[#5b4608] px-4 py-2 text-[#f1d982]">★ PREMIUM</p>}
                <h3 className="font-serif text-3xl text-white/90">{item[0]}</h3>
                <p className="mt-4 font-serif text-6xl text-white/80">{item[1]}</p>
                <ul className="mt-8 space-y-4 text-xl text-white/65">
                  <li>• {item[2]}</li>
                  <li>• {item[3]}</li>
                  <li>• {item[4]}</li>
                </ul>
                <button onClick={() => orderPackage(item[0])} className="mt-10 rounded-full border border-[#8a6a4a]/60 bg-gradient-to-b from-[#3a2d1d] to-[#1a1a1a] px-7 py-4 text-xl font-semibold text-[#f4e7d0] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37] hover:text-white hover:shadow-[0_20px_60px_rgba(212,175,55,0.35)]">
                  Zamów teraz
                </button>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="kontakt" className="bg-[#141414] px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Header tag="kontakt" title="Stwórzmy Twoją wizualizację" subtitle="Każdy projekt zaczyna się od rozmowy. Napisz lub zadzwoń." />
          <div className="grid gap-4 md:gap-3 md:gap-8 md:grid-cols-2">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] shadow-[0_20px_100px_rgba(0,0,0,0.45)] p-8">
              <h3 className="font-serif text-4xl text-[#bfa37a]">Skontaktuj się</h3>
              <p className="mt-7 text-xl leading-relaxed text-white/70">Odpowiadamy od poniedziałku do piątku.</p>
              <p className="mt-8 text-xl font-semibold">Telefon: <a className="text-[#f1d982] underline" href="tel:730692263">730 692 263</a></p>
              <p className="mt-4 text-xl font-semibold">Email: <a className="text-[#f1d982] underline" href="mailto:awhouse.studio@tuta.com">awhouse.studio@tuta.com</a></p>
             
            </div>
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_20px_100px_rgba(0,0,0,0.45)]">
              <h3 className="font-serif text-4xl text-[#bfa37a]">Opisz projekt</h3>
              <p className="mt-7 text-xl leading-relaxed text-white/70">Podaj podstawowe informacje o nieruchomości i oczekiwaniach.</p>
              <ul className="mt-8 space-y-5 text-xl text-white/70">
                <li>• Rodzaj nieruchomości</li>
                <li>• Planowany styl aranżacji</li>
                <li>• Inspiracje lub zdjęcia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a href={WHATSAPP} target="_blank" className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 font-semibold text-white shadow-2xl transition hover:scale-110">
        WhatsApp
      </a>

      <AnimatePresence>
        {selectedImage && (
          <motion.div onClick={() => setSelectedImage(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] flex cursor-pointer items-center justify-center bg-black/90 p-6 backdrop-blur-xl">
            <motion.img src={selectedImage} alt="" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.35 }} className="max-h-[92vh] max-w-[92vw] rounded-[24px] object-contain shadow-[0_20px_100px_rgba(0,0,0,0.8)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 px-6 py-12 text-white/45 md:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="italic">Wizualizacje, które inspirują do działania.</p>
          <p className="mt-6">© 2026 AWHOUSE.STUDIO</p>
        </div>
      </footer>
    </main>
  );
}