import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { GraphQLSchema } from "graphql";

const fileSpecific = (extension: string) =>
  fileLoader(path.join(__dirname, "/..".repeat(2), "/API/**/" + extension));

const allTypes: GraphQLSchema[] = fileSpecific("*.gql");
const allResolvers: any[] = fileSpecific("*.r.*");

const schema: any = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
