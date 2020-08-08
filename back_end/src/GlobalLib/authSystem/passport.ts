import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
//passport의 JWT인증방식
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PrismaClient, user } from "@prisma/client";
const prisma = new PrismaClient();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const verifyUser = async (payload: any, done: any) => {
  //토큰을 해석해 사용자 정보가 payload에 담기게 되고 그 정보를 가지고 어떻게 할 것인가에 대한 함수는 done을 통해 실현된다. (2)
  try {
    const user = await prisma.user.findOne({ where: { user_id: payload.id } });
    if (user !== null) {
      return done(null, user); //user 리턴(3)
    } else {
      return done(null, false);
    }
  } catch (e) {
    return done(e, false);
  }
};

export const authenticateJwt = async (req: any, res: any, next: any) =>
  await passport.authenticate("jwt", { session: false }, (error, user) => {
    //이 콜백함수를 통해 사용자가 로그인 된 상태인지 검사하게 된다. (4)
    if (user) {
      req.user = user as user; //로그인이 됐으면 user를 request 객체에 붙임.
    }
    error && console.log(error);
    next();
  })(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser)); // Strategy를 활용하여 jwt토큰을 추출한다. (1)
passport.initialize();
