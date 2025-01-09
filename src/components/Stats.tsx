const stats = [
  { stat: "25+", desc: "Years of Experience" },
  { stat: "2K+", desc: "Satisfied Dancers" },
  { stat: "6K+", desc: "Classes Taught" },
  { stat: "28+", desc: "Countries Visited" },
];

export default function Hero() {
  return (
    <div className="hero min-h-[90vh] items-center justify-center">
      <div className="hero-content text-neutral-content">
        <div className=" max-w-la flex items-center justify-between w-[80%] sm:w-[50%] border-2 ">
          {stats.map((s) => {
            return (
              <div>
                <h1 className="mb-2 font-poppins font-semibold text-secondary text-center tracking-tighter text-5xl sm:text-6xl md:text-5xl lg:text-xl xl:text-8xl">
                  {s.stat}
                </h1>
                <p className="font-poppins text-bold text-white text-md">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
