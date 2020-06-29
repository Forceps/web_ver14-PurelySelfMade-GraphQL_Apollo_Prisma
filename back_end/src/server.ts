import mergedSchema from "./GraphQL_API/LibForGQL/mergedSchema/mergedSchema";
import { GraphQLServer, Options } from "graphql-yoga";
import { PubSub } from "graphql-subscriptions";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import { authenticateJwt } from "./GlobalLib/authSystem/passport";
import { isAuthenticated } from "./REST_API/middleware/authVerify";
import {
  localUploadProcessByMulter,
  localUploadResponse,
} from "./REST_API/middleware/LocalUpload";
import fileRouter from "./REST_API/fileResponse/sendFile";
import decodeJWT from "./GlobalLib/authSystem/decodeJWT";

const PORT = 4002;
export const pubSub = new PubSub();
const server = new GraphQLServer({
  schema: mergedSchema,
  context: (req) => {
    const { connection: { context = null } = {} } = req;
    return {
      req: req.request,
      isAuthenticated,
      context,
    };
  },
}); //passport.js에서 request에 담긴 user정보가 위의 context 함수에 담기게 되어 전역으로 사용 가능해진다.
const appOptions: Options = {
  port: PORT,
  subscriptions: {
    onConnect: async (param) => {
      const token = param.Authorization.split(" ")[1];
      if (token && token !== "null") {
        const user = await decodeJWT(token);
        if (user) {
          return {
            user,
          };
        }
        throw new Error("JWT exists. But user not found");
      } else {
        throw new Error("No JWT. Can't subscribe");
      }
    },
  },
};

server.express.use(helmet());
server.express.use(cors());
server.express.use(authenticateJwt); //서버에 전달되는 모든 요청은 authenticateJwt함수를 통과하게 된다.
server.express.use(logger("dev"));
server.express.post(
  "/api/upload",
  localUploadProcessByMulter,
  localUploadResponse
);
server.express.use("/api/assets", fileRouter);

server.start(appOptions, () =>
  console.log(`✅ Server is running on localhost:${PORT}`)
);
