import { Router } from "express";

import { ConvertCurrencyController } from "../../../../modules/currencies/useCases/convertCurrency/ConvertCurrencyController";
import { CreateCurrencyController } from "../../../../modules/currencies/useCases/createCurrency/CreateCurrencyController";
import { CreateFictionalCurrencyController } from "../../../../modules/currencies/useCases/createFictionalCurrency/CreateFictionalCurrencyController";
import { DeleteCurrencyController } from "../../../../modules/currencies/useCases/deleteCurrency/DeleteCurrencyController";

const currenciesRoutes = Router();

const createCurrencyController = new CreateCurrencyController();
const createFictionalCurrencyController =
  new CreateFictionalCurrencyController();
const deleteCurrencyController = new DeleteCurrencyController();
const convertCurrencyController = new ConvertCurrencyController();

currenciesRoutes.get("/convert", convertCurrencyController.handle);

currenciesRoutes.post("/", createCurrencyController.handle);
currenciesRoutes.post("/fictional", createFictionalCurrencyController.handle);

currenciesRoutes.delete("/:currencyCode", deleteCurrencyController.handle);

export { currenciesRoutes };
