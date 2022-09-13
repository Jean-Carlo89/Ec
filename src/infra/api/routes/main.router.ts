import { Router } from "express";
import { CreateCartUsecase } from "../../../usecases/cart/create/create.cart.usecase";
import FindCartUseCase from "../../../usecases/cart/find/find.cart.usecase";
import CartRepository from "../../models/cart/cart.repository";

const MainRouter = Router();

MainRouter.post("/create", async (req, res) => {
  // console.log("here");
  //return;
  try {
    const { price } = req.body;
    const repo = new CartRepository();
    const usecase = new CreateCartUsecase(repo);

    const response = await usecase.execute({ price });

    return res.status(201).send(response);
  } catch (e) {
    console.error(e);
    return res.status(500).send("There was an error");
  }

  //await
});

MainRouter.get("/find", async (req, res) => {
  try {
    const { id } = req.body;

    const repo = new CartRepository();
    const usecase = new FindCartUseCase(repo);

    const result = await usecase.execute({ id });

    return res.status(200).send(result);
  } catch (e) {
    console.error(e);
    return res.status(500).send("There was an error");
  }
});

export { MainRouter };
