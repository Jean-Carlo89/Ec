type CartModelProps = {
  id: string;

  price: number;
  updated_at: Date;
  created_at: Date;
};

export class CartModel {
  constructor(props: CartModelProps) {
    this.id = props.id;
    this, (this.price = props.price);
    this.created_at = props.created_at;
  }

  id: string;
  price: number;
  updated_at: Date;
  created_at: Date;
}
