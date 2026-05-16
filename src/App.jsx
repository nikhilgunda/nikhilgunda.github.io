import { useEffect, useState } from "react";
import {
  FiWifi,
  FiVideo,
  FiDroplet,
  FiTruck,
  FiCalendar,
  FiThermometer,
  FiUsers,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiMessageCircle,
  FiMenu,
  FiX,
  FiCoffee,
} from "react-icons/fi";
import { LuChefHat, LuUtensils } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

import heroRoom from "./assets/images/IMG_4847.jpeg";
import building from "./assets/images/IMG_4850.jpeg";
import room1 from "./assets/images/IMG_4860.jpeg";
import room2 from "./assets/images/IMG_4861.jpeg";
import room3 from "./assets/images/IMG_4855.jpeg";
import room4 from "./assets/images/IMG_4858.jpeg";
import lounge from "./assets/images/IMG_4864.jpeg";
import bathroom from "./assets/images/IMG_4856.jpeg";

const MAPS_URL = "https://maps.app.goo.gl/jvSAir54EBCQnucMA?g_st=ic";
const PHONE_PRIMARY = "7799619090";
const PHONE_SECONDARY = "7799629090";
const PHONE_PRIMARY_DISPLAY = "77 99 61 9090";
const PHONE_SECONDARY_DISPLAY = "77 99 62 9090";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Logo({ className = "" }) {
  return (
    <a href="#top" className={`flex items-center gap-2 group ${className}`}>
      <span className="grid place-items-center w-9 h-9 rounded-full bg-emerald-800 text-cream-50 font-serif-display text-base font-bold tracking-tight">
        S
      </span>
      <span className="font-serif-display text-xl font-semibold text-stone-900 tracking-tight">
        SS. INN
      </span>
    </a>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/85 backdrop-blur-md border-b border-stone-200/70 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-emerald-800 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-cream-50 transition px-5 py-2.5 rounded-full font-medium text-sm"
          >
            <FiPhone size={15} />
            Call us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden p-2 -mr-2 text-stone-800"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cream-100/95 backdrop-blur-md border-t border-stone-200">
          <nav className="px-6 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-stone-700 hover:text-emerald-800 border-b border-stone-200/70 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-800 text-cream-50 px-5 py-3 rounded-full font-medium text-sm"
            >
              <FiPhone size={15} />
              Call {PHONE_PRIMARY_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function SSInnWebsite() {
  const gallery = [
    { title: "Spacious Premium Room", image: room1 },
    { title: "Comfortable Bedroom", image: room2 },
    { title: "Bright Single Room", image: room3 },
    { title: "Cozy Sharing Room", image: room4 },
    { title: "Sitting & Study Area", image: lounge },
    { title: "Clean, Modern Bathroom", image: bathroom },
  ];

  const features = [
    { label: "High-speed WiFi & Geyser", Icon: FiWifi },
    { label: "24/7 CCTV Security", Icon: FiVideo },
    { label: "Self Cooking Facility", Icon: LuChefHat },
    { label: "Washing Machine", Icon: FiDroplet },
    { label: "Bike & Car Parking", Icon: FiTruck },
    { label: "Daily, Weekly & Monthly Stay", Icon: FiCalendar },
    { label: "South & North Indian Food", Icon: LuUtensils },
    { label: "Hot & Cold Drinking Water", Icon: FiCoffee },
    { label: "A/C & Non A/C Rooms", Icon: FiThermometer },
    { label: "1, 2, 3 & 4 Sharing Rooms", Icon: FiUsers },
  ];

  return (
    <div
      id="top"
      className="min-h-screen bg-cream-100 text-stone-900 font-sans antialiased"
    >
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-emerald-800/10 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              Premium PG &amp; Co-Live, Gopanpally
            </div>

            <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-stone-900 mb-7">
              A modern home,{" "}
              <em className="not-italic text-emerald-800 italic font-serif-display">
                made comfortable.
              </em>
            </h1>

            <p className="text-lg text-stone-600 leading-8 max-w-xl mb-9 font-light">
              Thoughtfully-designed A/C &amp; Non A/C rooms with high-speed WiFi,
              home-style meals, secure 24/7 facilities, and flexible sharing —
              for students and working professionals.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-cream-50 transition px-6 py-3.5 rounded-full font-medium text-sm shadow-sm"
              >
                <FiPhone size={16} />
                Book a Tour
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-cream-50 transition px-6 py-3.5 rounded-full font-medium text-sm text-stone-900"
              >
                <FiMapPin size={16} />
                View Location
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-stone-500">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-amber-500" size={13} />
                ))}
                <span className="ml-1 text-stone-700 font-medium">
                  Loved on Google
                </span>
              </div>
              <span className="text-stone-300">·</span>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="hover:text-emerald-800 transition"
              >
                {PHONE_PRIMARY_DISPLAY}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-950/10">
              <img
                src={heroRoom}
                alt="Spacious, well-lit room at SS. INN"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -left-6 bg-cream-50 border border-stone-200 rounded-2xl px-5 py-4 shadow-xl items-center gap-4 max-w-[280px]">
              <div className="w-11 h-11 rounded-full bg-emerald-800/10 grid place-items-center text-emerald-800">
                <FiUsers size={20} />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                  Sharing
                </p>
                <p className="text-sm font-semibold text-stone-900">
                  1, 2, 3 &amp; 4 options
                </p>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-6 -right-6 bg-cream-50 border border-stone-200 rounded-2xl px-5 py-4 shadow-xl items-center gap-4 max-w-[280px]">
              <div className="w-11 h-11 rounded-full bg-amber-500/15 grid place-items-center text-amber-700">
                <FiThermometer size={20} />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                  Rooms
                </p>
                <p className="text-sm font-semibold text-stone-900">
                  A/C &amp; Non-A/C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-cream-200/60 border-y border-stone-200/70"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-emerald-950/10">
              <img
                src={building}
                alt="SS. INN building exterior in Gopanpally"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -right-6 bg-stone-900 text-cream-50 rounded-2xl px-5 py-4 shadow-xl items-center gap-4 max-w-[260px]">
              <div className="w-11 h-11 rounded-full bg-cream-50/10 grid place-items-center text-amber-400">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] text-cream-100/60 font-medium uppercase tracking-wider">
                  Find us
                </p>
                <p className="text-sm font-semibold">Gopanpally, 500019</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-800 font-semibold mb-4">
              About SS. INN
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-semibold leading-[1.1] text-stone-900 mb-7">
              A safe, warm,{" "}
              <em className="not-italic text-emerald-800 italic">
                second home
              </em>{" "}
              in Gopanpally.
            </h2>

            <p className="text-stone-600 text-lg leading-8 mb-6 font-light">
              SS. INN PG &amp; Co-Live offers students and working professionals
              a place to stay that feels less like a hostel and more like a
              well-run home. Located near Eedhamma Temple beside the Gopanpally
              flyover, our property pairs thoughtful amenities with affordable
              pricing.
            </p>

            <p className="text-stone-500 leading-8 font-light mb-8">
              From high-speed WiFi and CCTV-secured corridors to home-style
              meals and 24/7 drinking water, every detail is built around
              everyday comfort.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-3 bg-cream-50 border border-stone-200 hover:border-emerald-800/40 rounded-xl px-4 py-3.5 transition"
              >
                <span className="w-9 h-9 rounded-full bg-emerald-800/10 grid place-items-center text-emerald-800 shrink-0">
                  <FiPhone size={16} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                    Primary
                  </span>
                  <span className="block text-sm font-semibold text-stone-900">
                    {PHONE_PRIMARY_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${PHONE_SECONDARY}`}
                className="inline-flex items-center gap-3 bg-cream-50 border border-stone-200 hover:border-emerald-800/40 rounded-xl px-4 py-3.5 transition"
              >
                <span className="w-9 h-9 rounded-full bg-emerald-800/10 grid place-items-center text-emerald-800 shrink-0">
                  <FiPhone size={16} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                    Secondary
                  </span>
                  <span className="block text-sm font-semibold text-stone-900">
                    {PHONE_SECONDARY_DISPLAY}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-800 font-semibold mb-4">
              Amenities
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-semibold leading-[1.1] text-stone-900 mb-5">
              Everything taken care of.
            </h2>
            <p className="text-stone-600 text-lg font-light leading-8">
              The little things that make daily life easy — quietly handled, so
              you can focus on what matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ label, Icon }, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 bg-cream-50 border border-stone-200 rounded-2xl p-6 hover:border-emerald-800/40 hover:shadow-md transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-800/8 text-emerald-800 grid place-items-center group-hover:bg-emerald-800 group-hover:text-cream-50 transition">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-medium text-stone-900 leading-snug">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="bg-cream-200/60 border-y border-stone-200/70 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-800 font-semibold mb-4">
                Gallery
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl font-semibold leading-[1.1] text-stone-900">
                A look around.
              </h2>
            </div>
            <p className="text-stone-600 font-light max-w-sm leading-7">
              Bright, well-kept rooms and shared spaces designed to feel calm
              and clutter-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((item, index) => (
              <figure
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-cream-50 border border-stone-200"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-stone-900/85 via-stone-900/40 to-transparent text-cream-50">
                  <h3 className="text-sm font-medium tracking-tight">
                    {item.title}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="group block bg-cream-50 border border-stone-200 hover:border-amber-500/60 hover:shadow-xl rounded-3xl p-10 md:p-12 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-amber-500" size={18} />
                  ))}
                  <span className="ml-2 text-sm font-medium text-stone-600">
                    Loved by our guests
                  </span>
                </div>
                <h3 className="font-serif-display text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-3">
                  Hear it from the people who&rsquo;ve stayed.
                </h3>
                <p className="text-stone-600 font-light leading-7">
                  Read every review and rating on Google for the most current
                  feedback from our residents.
                </p>
              </div>

              <span className="inline-flex items-center gap-2 bg-stone-900 group-hover:bg-emerald-800 text-cream-50 transition px-6 py-3.5 rounded-full font-medium text-sm self-start md:self-auto whitespace-nowrap">
                Read Google Reviews{" "}
                <FiArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition"
                />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="relative bg-emerald-900 text-cream-50 py-24 px-6 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,#ffffff,transparent_60%)]"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-400 font-semibold mb-5">
            Get in touch
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-semibold leading-[1.1] mb-6">
            Ready to make SS. INN your{" "}
            <em className="not-italic text-amber-400 italic">next home</em>?
          </h2>

          <p className="text-lg md:text-xl mb-10 text-cream-100/80 font-light leading-relaxed">
            Call us or message on WhatsApp — we&rsquo;d love to show you around.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center gap-2 bg-cream-50 text-emerald-900 hover:bg-amber-400 transition px-7 py-4 rounded-full font-semibold text-sm"
            >
              <FiPhone size={16} />
              Call {PHONE_PRIMARY_DISPLAY}
            </a>

            <a
              href={`https://wa.me/91${PHONE_PRIMARY}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-cream-50/30 hover:bg-cream-50/10 transition px-7 py-4 rounded-full font-semibold text-sm"
            >
              <FiMessageCircle size={16} />
              WhatsApp Us
              <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <Logo />
            <p className="text-stone-500 text-sm mt-4 leading-6 font-light max-w-xs">
              A modern, comfortable PG &amp; co-living home in Gopanpally,
              Hyderabad.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500 font-semibold mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="hover:text-emerald-800 transition"
                >
                  {PHONE_PRIMARY_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_SECONDARY}`}
                  className="hover:text-emerald-800 transition"
                >
                  {PHONE_SECONDARY_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-800 transition"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500 font-semibold mb-3">
              Address
            </p>
            <p className="text-sm text-stone-700 leading-6 font-light">
              H.No. 2-89/1/7/5,
              <br />
              Near Eedhamma Temple, Beside Flyover,
              <br />
              Gopanpally — 500019
            </p>
          </div>
        </div>

        <div className="border-t border-stone-200">
          <p className="max-w-7xl mx-auto px-6 py-6 text-xs text-stone-500 text-center font-light tracking-wide">
            &copy; 2026 SS. INN PG &amp; Co-Live. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
