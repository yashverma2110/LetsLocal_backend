import { GraphQLString } from "graphql";
import { Users } from "../../entities/Users";
import { UserType } from "../typedef/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, email, password } = args;

    await Users.insert({ name, email, password });

    return args;
  },
};
