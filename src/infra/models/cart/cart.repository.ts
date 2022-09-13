import { Cart } from "../../../domain/cart/entity/cart";
import CartRepositoryInterface from "../../../domain/cart/repository/cart.repository.interface";
import { ApiMongoRepository } from "../../database/main.repository";
import { CartModel } from "./cart.model";

export default class CartRepository extends ApiMongoRepository implements CartRepositoryInterface {
  async create(entity: Cart): Promise<void> {
    const document: CartModel = {
      id: entity.id,
      price: entity.price,
      updated_at: new Date(),
      created_at: new Date(),
    };

    await super.save("Cart", document);
  }

  async update(entity: Cart): Promise<void> {}

  async find(id: string): Promise<Cart> {
    const result = await super.get("Cart", id);

    const cart = new Cart(result as any);

    return cart;
  }

  async findAll(): Promise<Cart[]> {
    throw new Error("Not implemented");
  }
}
