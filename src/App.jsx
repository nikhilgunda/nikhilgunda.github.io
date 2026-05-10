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
    "WiFi & Geyser",
    "CC Camera Security",
    "Self Cooking Facility",
    "Washing Machine",
    "Bike & Car Parking",
    "Daily, Weekly & Monthly Stay",
    "South & North Indian Food",
    "24/7 Hot & Cold Drinking Water",
    "A/C & Non A/C Rooms",
    "1, 2, 3 & 4 Sharing Rooms",
  ];
 
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="h-[90vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
 
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center h-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Premium PG & Co-Live in Gopanpally
              </div>
 
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                SS. INN <span className="text-red-500">PG & Co-Live</span>
              </h1>
 
              <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Affordable and comfortable A/C & Non A/C rooms with modern
                facilities, secure living, quality food, and flexible sharing
                options.
              </p>
 
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:7799619090"
                  className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl"
                >
                  Call Now
                </a>
 
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="border border-white/40 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl font-semibold text-lg"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-red-500">
            Welcome to SS. INN
          </h2>
 
          <p className="text-gray-300 text-lg leading-8 mb-6">
            SS. INN PG & Co-Live provides safe, clean, and comfortable living
            spaces for students and working professionals. Located near
            Eedhamma Temple beside the flyover in Gopanpally, our property is
            designed to provide a premium co-living experience at affordable
            prices.
          </p>
 
          <p className="text-gray-400 leading-8">
            We offer flexible sharing options with modern amenities including
            WiFi, CCTV security, food, parking, self-cooking facilities, and
            24/7 drinking water.
          </p>
        </div>
 
        <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">Quick Details</h3>
 
          <div className="space-y-5 text-lg">
            <div>
              📍 H.No. 2-89/1/7/5, Near Eedhamma Temple, Beside Flyover,
              Gopanpally - 500019
            </div>
 
            <div>📞 77 99 61 9090</div>
            <div>📞 77 99 62 9090</div>
            <div>🏠 A/C & Non A/C Rooms</div>
            <div>👥 1, 2, 3 & 4 Sharing Available</div>
          </div>
        </div>
      </section>
 
      {/* Features */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-red-500">SS. INN</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need for comfortable and secure co-living.
            </p>
          </div>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl"
              >
                <div className="text-3xl mb-4">✔️</div>
                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Photo <span className="text-red-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our modern rooms and facilities.
          </p>
        </div>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-gray-900 shadow-2xl group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />
 
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* CTA */}
      <section className="bg-red-600 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Looking for Comfortable PG & Co-Living?
          </h2>
 
          <p className="text-lg md:text-xl mb-8 text-red-100">
            Contact us today and book your stay at SS. INN Co-Live.
          </p>
 
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="tel:7799619090"
              className="bg-white text-red-600 hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-xl"
            >
              Call 7799619090
            </a>
 
            <a
              href="https://wa.me/917799619090"
              target="_blank"
              className="bg-black hover:bg-gray-900 transition px-8 py-4 rounded-2xl font-bold text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-6 text-center border-t border-gray-800">
        <p>
          © 2026 SS. INN PG & Co-Live • Designed for modern co-living
          experience.
        </p>
      </footer>
    </div>
  );
}