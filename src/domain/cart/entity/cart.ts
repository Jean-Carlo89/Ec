import { v4 as uuid } from "uuid";
export type CartProps = {
  id?: string;
  price: number;
};
export class Cart {
  id: string;
  price: number;
  created_at: Date;
  updated_at: Date;

  constructor(props: CartProps) {
    this.id = props?.id || uuid();
    this.price = props.price;
  }
}
