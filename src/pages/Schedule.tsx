import Header from "../components/Header";
import Events from "../components/UpcomingEvents";

export default function products() {
  return (
    <div className="p-3">
      <Header />
      <div>
        <Events />
      </div>
    </div>
  );
}
