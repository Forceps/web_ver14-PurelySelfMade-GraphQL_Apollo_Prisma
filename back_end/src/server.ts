import mergedSchema from "./GraphQL_API/LibForGQL/mergedSchema/mergedSchema";
import { GraphQLServer } from "graphql-yoga";
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

const PORT = 4002;
const pubSub = new PubSub();
const server = new GraphQLServer({
  schema: mergedSchema,
  context: ({ request }) => ({ request, isAuthenticated }),
}); //passport.js에서 request에 담긴 user정보가 위의 context 함수에 담기게 되어 전역으로 사용 가능해진다.

server.express.use(cors());
server.express.use(authenticateJwt); //서버에 전달되는 모든 요청은 authenticateJwt함수를 통과하게 된다.
server.express.use(logger("dev"));
server.express.post(
  "/api/upload",
  localUploadProcessByMulter,
  localUploadResponse
);
server.express.use("/api/assets", fileRouter);
server.express.use(helmet());

server.start({ port: PORT }, () =>
  console.log(`✅ Server is running on localhost:${PORT}`)
);
