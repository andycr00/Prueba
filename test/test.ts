import { clientExceptions } from "../exceptions/clients";

clientExceptions;
test("Invalid Final Code", () => {
  expect(clientExceptions("1", "")).toStrictEqual(["finalCode"]);
});

clientExceptions;
test("Invalid Initial Code", () => {
  expect(clientExceptions("asd", "10")).toStrictEqual(["initialCode"]);
});
