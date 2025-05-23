// components/Hero.tsx

export default function Hero() {
  return (
    <section className=""> {/* Optional: Add background */}
      <div className="max-w-7xl mx-auto px-20 mt-8">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 text-white">
          Find your next stay
        </h1>
        <h3 className="text-white font-sans text-xl md:text-xl mb-8">
          Search deals on hotels, homes, and much more...
        </h3>
      </div>
    </section>
  );
}
