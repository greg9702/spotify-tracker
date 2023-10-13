import { addUserUseCase } from "../use-cases/addUser";
import { getUserProfileUseCase } from "../use-cases/getUserProfile";
import handler from "./handler";
import { APIGatewayProxyEvent } from "aws-lambda";

export const addUser = handler(
  async (event: APIGatewayProxyEvent): Promise<any> => {
    if (event.body === null) {
      throw new Error("Null event path params.");
    }
    const body = JSON.parse(event.body);
    const result = await addUserUseCase(body.email);

    return result;
  }
);

export const getUser = handler(
  async (event: APIGatewayProxyEvent): Promise<any> => {
    if (event.body === null) {
      throw new Error("Null event path params.");
    }
    const userEmail = event.pathParameters.email;
    const result = await getUserProfileUseCase(userEmail);

    return result;
  }
);
