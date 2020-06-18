import gql from "graphql-tag";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password)
  }
`;
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;
export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
export const SET_AVATAR = gql`
  mutation setAvatar($avatar: String!) {
    setAvatar(avatar: $avatar)
  }
`;
export const SET_BACKIMG = gql`
  mutation setBackImg($back_img: String!) {
    setBackImg(back_img: $back_img)
  }
`;
