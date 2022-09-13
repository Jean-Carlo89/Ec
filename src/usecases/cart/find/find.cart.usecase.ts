import { Cart } from "../../../domain/cart/entity/cart";
import CartRepositoryInterface from "../../../domain/cart/repository/cart.repository.interface";
import { InputFindCartDto, OutputFindCartDto } from "./find.cart.dto";

export default class FindCartUseCase {
  private cartRepository: CartRepositoryInterface;
  //  Repository: CartRepositoryInterface;

  constructor(cartRepository: CartRepositoryInterface) {
    this.cartRepository = cartRepository;
  }

  async execute(input: InputFindCartDto): Promise<OutputFindCartDto> {
    const cart = await this.cartRepository.find(input.id);

    return {
      id: cart.id,
      price: cart.price,
    };
  }
}
