export type Product = {
  validFor?: string;
  name: string;
  _id: number;
  price: number;
  description: string;
  paymentLink: string;
};

export type IClass = {
  _id: string;
  teacher: string;
  schedule: string;
  location: string;
  photo: string;
  className: string;
  level: string;
};
