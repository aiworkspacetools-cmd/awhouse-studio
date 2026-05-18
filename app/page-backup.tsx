'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: 'awhouse.studio',
    subtitle:
      'Fotorealistyczne wizualizacje wnętrz premium dopasowane do Twojego stylu.',
     image: '/moodboard-1.png',
  },
  {
    title: 'Moodboardy',
    subtitle:
      'Tworzymy kierunek aranżacji zanim powstanie finalna wizualizacja.',
    image: '/moodboard-2.png',
  },
  {
    title: 'Premium Design',
    subtitle:
      'Luxury interiors inspirowane nowoczesną architekturą i stylem Apple.',
    image: '/moodboard-3.png',
  },
  {
  title: 'Moodboard Premium',
  subtitle:
    'Materiały, kolory i klimat wnętrza dobrane pod Twoją nieruchomość.',
  image: '/moodboard-4.png',
},
]

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
  <div className="absolute inset-0 bg-black" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4 }}
    className="relative z-10 px-6"
  >
    <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
      awhouse.studio
    </h1>

    <p className="mt-6 text-zinc-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
      Fotorealistyczne wizualizacje wnętrz premium tworzone dla nowoczesnych nieruchomości.
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <a
        href="#kontakt"
        className="rounded-full bg-white text-black px-8 py-4 font-medium hover:scale-105 transition"
      >
        Zamów wizualizację
      </a>

      <a
        href="#realizacje"
        className="rounded-full border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition"
      >
        Zobacz projekty
      </a>
    </div>
  </motion.div>
</section>
      <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xlbackdrop-blur-xl bg-black/30">
  <div className="flex items-center gap-6 text-sm text-white/80">
    <span className="font-semibold text-white">awhouse.studio</span>
    <a href="#realizacje" className="hover:text-white">Realizacje</a>
    <a href="#cennik" className="hover:text-white">Cennik</a>
    <a href="#kontakt" className="hover:text-white">Kontakt</a>
  </div>
</nav>

<section
  id="realizacje"
  className="relative z-10 px-6 md:px-16 py-32 bg-black"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
      Wybrane realizacje
    </h2>

    <p className="text-zinc-400 text-xl max-w-2xl mb-20">
      Fotorealistyczne wizualizacje wnętrz premium tworzone dla apartamentów,
      domów i nowoczesnych inwestycji.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="group overflow-hidden rounded-[32px] bg-zinc-900">
        <img
          src="/moodboard-1.png"
          className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="p-8">
          <h3 className="text-3xl font-semibold mb-3">
            Apartament Modern Bronze
          </h3>

          <p className="text-zinc-400">
            Luksusowa wizualizacja wnętrza inspirowana nowoczesnym minimalizmem.
          </p>
        </div>
      </div>
<div className="group overflow-hidden rounded-[32px] bg-zinc-900">
  <img
    src="/moodboard-2.png"
    className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-8">
    <h3 className="text-3xl font-semibold mb-3">
      Soft Beige Interior
    </h3>

    <p className="text-zinc-400">
      Moodboard premium z naturalnymi materiałami i ciepłym światłem.
    </p>
  </div>
</div>
      <div className="group overflow-hidden rounded-[32px] bg-zinc-900">
        <img
          src="/moodboard-4.png"
          className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="p-8">
          <h3 className="text-3xl font-semibold mb-3">
            Soft Beige Interior
          </h3>

          <p className="text-zinc-400">
            Moodboard premium z naturalnymi materiałami i ciepłym światłem.
          </p>
        </div>
      </div>

    </div>
  </div>
  
  <img
    src="/moodboard-3.png"
    className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-8">
    <h3 className="text-3xl font-semibold mb-3">
      Luxury Kitchen Concept
    </h3>

    <p className="text-zinc-400">
      Elegancka kuchnia premium z kontrastującymi materiałami i światłem ambient.
    </p>
  </div>



</section>
      
      <section className="relative z-10 px-6 md:px-16 py-32 bg-[#0a0a0a]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-20">
      Jak wygląda współpraca
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-[32px] bg-zinc-900 p-8">
        <span className="text-zinc-500 text-sm">01</span>
        <h3 className="text-3xl font-semibold mt-8 mb-4">
          Wysyłasz materiały
        </h3>
        <p className="text-zinc-400">
          Przesyłasz zdjęcia, rzut, inspiracje lub opis wnętrza.
        </p>
      </div>

      <div className="rounded-[32px] bg-zinc-900 p-8">
        <span className="text-zinc-500 text-sm">02</span>
        <h3 className="text-3xl font-semibold mt-8 mb-4">
          Tworzymy kierunek
        </h3>
        <p className="text-zinc-400">
          Dobieramy styl, moodboard, materiały i klimat wizualizacji.
        </p>
      </div>

      <div className="rounded-[32px] bg-zinc-900 p-8">
        <span className="text-zinc-500 text-sm">03</span>
        <h3 className="text-3xl font-semibold mt-8 mb-4">
          Otrzymujesz wizualizację
        </h3>
        <p className="text-zinc-400">
          Dostajesz gotowe, fotorealistyczne ujęcia wnętrza.
        </p>
      </div>
    </div>
  </div>
</section>
<section
  id="cennik"
  className="relative z-10 px-6 md:px-16 py-32 bg-black"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
      Pakiety wizualizacji
    </h2>

    <p className="text-zinc-400 text-xl max-w-2xl mb-20">
      Wybierz zakres wizualizacji dopasowany do Twojej nieruchomości.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-[32px] bg-zinc-900 p-8 border border-white/10">
        <h3 className="text-3xl font-semibold mb-4">
          Start
        </h3>

        <p className="text-zinc-400 mb-8">
          Jedno pomieszczenie, szybki kierunek wizualny.
        </p>

        <p className="text-4xl font-semibold mb-8">
          od 499 zł
        </p>

        <a
          href="#kontakt"
          className="inline-block rounded-full bg-white text-black px-7 py-3 font-medium"
        >
          Zamów teraz
        </a>
      </div>

      <div className="rounded-[32px] bg-white text-black p-8 scale-105">
        <p className="text-sm mb-4">
          Najczęściej wybierany
        </p>

        <h3 className="text-3xl font-semibold mb-4">
          Premium
        </h3>

        <p className="text-zinc-700 mb-8">
          Moodboard, styl, materiały i fotorealistyczna wizualizacja.
        </p>

        <p className="text-4xl font-semibold mb-8">
          od 999 zł
        </p>

        <a
          href="#kontakt"
          className="inline-block rounded-full bg-black text-white px-7 py-3 font-medium"
        >
          Zamów teraz
        </a>
      </div>

      <div className="rounded-[32px] bg-zinc-900 p-8 border border-white/10">
        <h3 className="text-3xl font-semibold mb-4">
          Investment
        </h3>

        <p className="text-zinc-400 mb-8">
          Pakiet dla apartamentów, sprzedaży i inwestycji premium.
        </p>

        <p className="text-4xl font-semibold mb-8">
          indywidualnie
        </p>

        <a
          href="#kontakt"
          className="inline-block rounded-full bg-white text-black px-7 py-3 font-medium"
        >
          Zapytaj o wycenę
        </a>
      </div>

    </div>
  </div>
</section>
      <section
  id="kontakt"
  className="relative z-10 px-6 md:px-16 py-40 bg-black"
>
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
      Stwórzmy Twoją wizualizację
    </h2>

    <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-14">
      Skontaktuj się z nami i otrzymaj indywidualną wycenę wizualizacji wnętrza premium.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4">

      <a
        href="mailto:awhouse.studio@tuta.com"
        className="rounded-full bg-white text-black px-8 py-4 font-medium hover:scale-105 transition"
      >
        Zadaj pytanie
      </a>

      <a
        href="#"
        className="rounded-full border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition"
      >
        Zamów teraz
      </a>

    </div>

  </div>
</section>
<a
  href="https://wa.me/48730692263"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 text-white shadow-2xl hover:scale-105 transition"
>
  WhatsApp
</a>
<footer className="relative z-10 px-6 md:px-16 py-12 bg-[#0a0a0a] border-t border-white/10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-zinc-400">
    <div>
      <p className="text-white font-semibold">awhouse.studio</p>
      <p className="mt-2">Fotorealistyczne wizualizacje wnętrz premium.</p>
    </div>

    <div>
      <p>Telefon: 730 692 263</p>
      <p>Email: awhouse.studio@tuta.com</p>
    </div>

    <p>© 2025 AWHOUSE.STUDIO</p>
  </div>
</footer>
    </main>
  )
}