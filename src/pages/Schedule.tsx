import Header from "../components/Header";
import Events from "../components/UpcomingEvents";

export default function products() {
  return (
    <div className="p-3">
      <Header />
      <div className="flex flex-col items-center min-w-[80%] border-solid">
        <h2 className="font-poppins text-6xl font-semibold m-8 tracking-tighter">
          <i>CLA</i>
          <i className="text-secondary">SSES</i>
        </h2>
        <Events />
      </div>
    </div>
  );
}
