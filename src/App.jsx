import {
  FiWifi,
  FiVideo,
  FiCoffee,
  FiDroplet,
  FiTruck,
  FiCalendar,
  FiThermometer,
  FiUsers,
  FiCheck,
  FiPhone,
  FiMapPin,
  FiHome,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";
import { LuChefHat, LuUtensils } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function SSInnWebsite() {
  const gallery = [
    {
      title: "Modern Co-Live Rooms",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Comfortable Shared Living",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Clean & Spacious Rooms",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Facilities",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const features = [
    { label: "WiFi & Geyser", Icon: FiWifi },
    { label: "CC Camera Security", Icon: FiVideo },
    { label: "Self Cooking Facility", Icon: LuChefHat },
    { label: "Washing Machine", Icon: FiDroplet },
    { label: "Bike & Car Parking", Icon: FiTruck },
    { label: "Daily, Weekly & Monthly Stay", Icon: FiCalendar },
    { label: "South & North Indian Food", Icon: LuUtensils },
    { label: "24/7 Hot & Cold Drinking Water", Icon: FiCoffee },
    { label: "A/C & Non A/C Rooms", Icon: FiThermometer },
    { label: "1, 2, 3 & 4 Sharing Rooms", Icon: FiUsers },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="h-[90vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center h-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-red-600/95 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-lg">
                <FiHome size={14} />
                Premium PG &amp; Co-Live in Gopanpally
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
                SS. INN <span className="text-red-500">PG &amp; Co-Live</span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                Affordable and comfortable A/C &amp; Non A/C rooms with modern
                facilities, secure living, quality food, and flexible sharing
                options.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:7799619090"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-7 py-4 rounded-xl font-semibold text-base shadow-xl shadow-red-900/40"
                >
                  <FiPhone size={18} />
                  Call Now
                </a>

                <a
                  href="https://maps.app.goo.gl/7Vyoz5BjG7UiBGty5"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 hover:bg-white hover:text-black transition px-7 py-4 rounded-xl font-semibold text-base"
                >
                  <FiMapPin size={18} />
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold mb-3">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Welcome to <span className="text-red-500">SS. INN</span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6 font-light">
            SS. INN PG &amp; Co-Live provides safe, clean, and comfortable
            living spaces for students and working professionals. Located near
            Eedhamma Temple beside the flyover in Gopanpally, our property is
            designed to deliver a premium co-living experience at affordable
            prices.
          </p>

          <p className="text-gray-400 leading-8 font-light">
            We offer flexible sharing options with modern amenities including
            WiFi, CCTV security, food, parking, self-cooking facilities, and
            24/7 drinking water.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 md:p-10 rounded-3xl shadow-2xl shadow-red-900/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
            Quick Details
          </h3>

          <ul className="space-y-5 text-base md:text-lg">
            <li className="flex items-start gap-4">
              <FiMapPin className="shrink-0 mt-1" size={20} />
              <span className="font-light leading-7">
                H.No. 2-89/1/7/5, Near Eedhamma Temple, Beside Flyover,
                Gopanpally - 500019
              </span>
            </li>

            <li className="flex items-center gap-4">
              <FiPhone className="shrink-0" size={20} />
              <a
                href="tel:7799619090"
                className="hover:underline font-medium"
              >
                77 99 61 9090
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FiPhone className="shrink-0" size={20} />
              <a
                href="tel:7799629090"
                className="hover:underline font-medium"
              >
                77 99 62 9090
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FiThermometer className="shrink-0" size={20} />
              <span className="font-light">A/C &amp; Non A/C Rooms</span>
            </li>

            <li className="flex items-center gap-4">
              <FiUsers className="shrink-0" size={20} />
              <span className="font-light">
                1, 2, 3 &amp; 4 Sharing Available
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold mb-3">
              Amenities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why Choose <span className="text-red-500">SS. INN</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
              Everything you need for comfortable and secure co-living.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ label, Icon }, index) => (
              <div
                key={index}
                className="group bg-gray-800/60 border border-gray-700/70 rounded-2xl p-6 hover:border-red-500/50 hover:bg-gray-800 transition duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/15 text-red-500 mb-5 group-hover:bg-red-600 group-hover:text-white transition">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold mb-3">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Inside <span className="text-red-500">SS. INN</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Explore our modern rooms and facilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl group border border-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <a
          href="https://maps.app.goo.gl/7Vyoz5BjG7UiBGty5"
          target="_blank"
          rel="noreferrer"
          className="group block bg-gray-900 border border-gray-800 hover:border-amber-400/50 rounded-3xl p-8 md:p-10 transition"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-amber-400" size={18} />
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Loved by our guests
              </h3>
              <p className="text-gray-400 font-light">
                See what residents are saying about SS. INN on Google.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 bg-white text-black group-hover:bg-amber-400 transition px-6 py-3 rounded-xl font-semibold text-sm self-start md:self-auto whitespace-nowrap">
              Read Google Reviews <FiArrowRight size={16} />
            </span>
          </div>
        </a>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Looking for Comfortable PG &amp; Co-Living?
          </h2>

          <p className="text-lg md:text-xl mb-10 text-red-100 font-light">
            Contact us today and book your stay at SS. INN Co-Live.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7799619090"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 transition px-7 py-4 rounded-xl font-bold text-base shadow-xl"
            >
              <FiPhone size={18} />
              Call 77 99 61 9090
            </a>

            <a
              href="https://wa.me/917799619090"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 transition px-7 py-4 rounded-xl font-bold text-base"
            >
              <FiMessageCircle size={18} />
              WhatsApp Us
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-10 px-6 text-center border-t border-gray-900">
        <p className="text-sm font-light tracking-wide">
          &copy; 2026 SS. INN PG &amp; Co-Live &middot; Designed for modern
          co-living experience.
        </p>
      </footer>
    </div>
  );
}
