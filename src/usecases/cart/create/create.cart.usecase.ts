import { Cart } from "../../../domain/cart/entity/cart";
import CartRepositoryInterface from "../../../domain/cart/repository/cart.repository.interface";
import { InputCreateCartDto, OutputCreateCartDto } from "./create.cart.dto";

export class CreateCartUsecase {
  private repository: CartRepositoryInterface;

  constructor(repo: CartRepositoryInterface) {
    this.repository = repo;
  }

  async execute(input: InputCreateCartDto): Promise<OutputCreateCartDto> {
    console.log(input);
    const cart = new Cart(input);
    console.log(cart);
    await this.repository.create(cart);

    return {
      id: cart.id,
      price: cart.price,
    };
  }
}
