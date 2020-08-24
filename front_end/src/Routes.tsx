import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookmarkCon from "./Routes/Bookmark/BookmarkCon";
import ProfileCon from "./Routes/Profile/ProfileCon";
import EachGroupsCon from "./Routes/EachGroups/EachGroupsCon";
import HomeCon from "./Routes/Home/HomeCon";
import PostDetailCon from "./Routes/PostDetail/PostDetailCon";
import BlogCon from "./Routes/Blog/BlogCon";
import { useLoginCheck } from "./GlobalLib/Context/UserContext/IsLoggedIn";
import ChatCon from "./Routes/Chat/ChatCon";
import NotificationCon from "./Routes/Notification/NotificationCon";
import LogCon from "./Routes/Log/LogCon";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeCon} />
    <Route exact path="/post/detail/:post_id" component={PostDetailCon} />
    <Route exact path="/bookmark/:user_id" component={BookmarkCon} />
    <Route exact path="/profile" component={ProfileCon} />
    <Route exact path="/blog/:user_id" component={BlogCon} />
    <Route exact path="/group/:group_id" component={EachGroupsCon} />
    <Route exact path="/chat" component={ChatCon} />
    <Route exact path="/notification" component={NotificationCon} />
    <Route exact path="/log" component={LogCon} />
    <Redirect from="*" to="/" />
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeCon} />
    <Route exact path="/blog/:user_id" component={BlogCon} />
    <Route exact path="/post/detail/:post_id" component={PostDetailCon} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => {
  const { isLoggedIn } = useLoginCheck();
  if (isLoggedIn) {
    return <LoggedInRoutes />;
  } else {
    return <LoggedOutRoutes />;
  }
};
export default AppRouter;
