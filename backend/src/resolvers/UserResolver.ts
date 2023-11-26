import { Mutation, Query, Resolver, Arg } from "type-graphql";
import { User } from "../models/User";
import crypto from "node:crypto"

@Resolver()
export class UserResolver {
  private data: User[] = [];
    
  @Query(() => [User])
    async users() {
      return this.data
    }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = { id: crypto.randomUUID(), name}
    this.data.push(user)

    return user;
  }
}