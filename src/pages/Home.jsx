import heroImage from "../assets/hero.jpg";

function Home() {
  return (
    <section className="bg-[#fff8f3] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-6xl text-[#c48a9a] mb-10"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            AL-SAFA
          </h1>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            Luxury Modest Fashion, Designed for Modern Women
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Discover luxury abayas designed for women who embrace
            modesty with style.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={heroImage}
            alt="Al-Safa Abaya"
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;