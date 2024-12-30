import { Product } from "../types ";
type CardProps = {
  product: Product;
};

export default function ProductCard(props: CardProps) {
  const { validFor, name, price, description, paymentLink } = props.product;

  return (
    <div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-96 shadow-xl">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full h-48 object-cover"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="font-poppins card-title text-3xl">
          {name}
          {validFor && (
            <div className="badge badge-secondary badge-lg">{validFor}</div>
          )}
        </h2>
        <i className="font-poppins text-md ">{description}</i>
        <br />

        <div className="card-actions justify-between">
          <div className="text-3xl md:text-5xl text-black font-bold tracking-tighter">
            ${price}
          </div>
          <a
            target="_blank"
            href={paymentLink}
            className="btn btn-primary text-sm rounded-full px-4 py-2 sm:text-base md:btn-md lg:text-lg"
          >
            <p className="text-white">BUY NOW</p>
          </a>
        </div>
      </div>
    </div>
  );
}
