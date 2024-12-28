import Hero from "../components/Hero";
import Header from "../components/Header";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div
      className=" p-3 relative  bg-cover bg-center sm:bg-contain"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center -50px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
