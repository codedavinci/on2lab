import Header from "../components/Header";
import Card from "../components/Card";

const Data = [
  {
    id: 1,
    name: "Drop-in",
    price: 25,
    description: "This product is valid for a single class (1 hour)",
  },
  {
    id: 1,
    name: "4 Hour Package",
    price: 80,
    description: "This product is valid for 30 days",
  },
  {
    id: 1,
    name: "8 Hour Package",
    price: 150,
    description: "This product is valid for 30 days",
  },
  {
    id: 1,
    name: "8 Hour Newcomer Package",
    price: 140,
    validFor: "Deal",
    description: "This product is valid for 60 days",
  },
  {
    id: 1,
    name: "1 month - Unlimited",
    price: 180,
    description: "This product is valid for 30 days",
  },
  {
    id: 1,
    name: "2 month - Unlimited",
    price: 320,
    validFor: "Deal",
    description: "This product is valid for 60 days",
  },
];

export default function Products() {
  return (
    <div className="p-3">
      <Header />

      <div className="flex flex-col items-center min-w-[80%]">
        <h2 className="font-poppins text-6xl font-semibold m-8 tracking-tighter">
          <i>PACK</i>
          <i className="text-secondary">AGES</i>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {Data.map((product) => {
            return <Card {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
