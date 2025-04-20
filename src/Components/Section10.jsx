import React from 'react';

const performanceData = [
  {
    title: "Just 0.5 seconds!",
    description:
      "Astra’s optimized performance allows your website to load in just 0.5 seconds, ensuring a smooth and seamless user experience.",
    icon: "⚡️",
  },
  {
    title: "Less than 50 KB",
    description:
      "With less than 50 KB of resources, Astra ensures your website’s code stays lean, resulting in improved performances.",
    icon: "📦",
  },
  {
    title: "Vanilla JavaScript",
    description:
      "Astra utilizes pure, unadulterated JavaScript, optimizing performance and compatibility across browsers.",
    icon: "📜",
  },
  {
    title: "Lazy Loading",
    description:
      "Reduce page load time and thus improve your website speed by loading media files only when your visitors need them.",
    icon: "🌀",
  },
  {
    title: "Prepared for HTTP/2",
    description:
      "Astra is fully compatible with HTTP/2, which helps Astra websites use less resources and thus load faster than competitors.",
    icon: "🔗",
  },
  {
    title: "Zero Bloating",
    description:
      "Astra prioritizes lean code, eliminating unnecessary bloat and ensuring fast and responsive performance.",
    icon: "🚫",
  },
];

const stats = [
  { value: "92%", label: "Speed Grade", source: "pingdom" },
  { value: "94%", label: "Speed Grade", source: "Google Developers" },
  { value: "450ms", label: "Speed Grade", source: "GTmetrix" },
  { value: "98%", label: "Speed Grade", source: "UPTIME" },
];

export default function Section10() {
  return (
    <section className="bg-[#0f0f3e] text-white px-6 py-20">
       <h2 className='text-4xl text-white' id='Section10'>Known for Its Unmatched Performance and Reliability</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {performanceData.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-2xl">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white text-center text-black p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-green-600">{stat.value}</div>
              <div className="text-sm text-gray-700">{stat.label}</div>
              <div className="mt-2 text-xs text-gray-500">{stat.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
