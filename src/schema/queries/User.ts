import { GraphQLList } from "graphql";
import { Users } from "../../entities/Users";
import { UserType } from "../typedef/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
