import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(
  path.join(__dirname, "/..", "/GraphQL_API/API/**/*.gql")
);
const allResolvers = fileLoader(
  path.join(__dirname, "/..", "/GraphQL_API/API/**/*.ts")
);

const schema: any = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
