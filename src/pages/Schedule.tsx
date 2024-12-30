import Header from "../components/Header";
import Events from "../components/UpcomingEvents";

export default function products() {
  return (
    <div className="p-3">
      <Header />

      <div className="flex flex-col">
        <div className="self-center">
          <h2 className="font-poppins text-6xl font-semibold m-8 tracking-tighter">
            <i>CLA</i>
            <i className="text-secondary">SSES</i>
          </h2>
        </div>
        <div className="">
          <Events />
        </div>
      </div>
    </div>
  );
}
