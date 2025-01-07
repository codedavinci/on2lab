export default function Hero() {
  return (
    <div className="hero min-h-[90vh] flex flex-col  items-center justify-center">
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-la w-[80%] sm:w-[50%] ">
          <h1 className="mb-2 font-poppins font-semibold text-white text-center tracking-tighter text-5xl sm:text-6xl md:text-5xl lg:text-xl xl:text-8xl">
            UNLEASH YOUY <i>MUSIC</i>
            <i className="text-secondary">ALITY</i>
          </h1>
          <p className="font-poppins text-bold text-white text-md">
            Thousands have discovered their rhythm with our proven method. 28+
            countries, 100+ cities, one passion and limitless possibilities.
          </p>
        </div>
      </div>
      <div className="h-5 w-[2px] mt-12 bg-secondary mx-4 hidden md:block"></div>
    </div>
  );
}
