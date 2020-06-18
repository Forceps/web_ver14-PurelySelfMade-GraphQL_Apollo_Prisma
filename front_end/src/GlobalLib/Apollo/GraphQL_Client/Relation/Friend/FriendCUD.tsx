import gql from "graphql-tag";

export const ADD_FRIEND = gql`
  mutation addFreind($respondent: Int!) {
    addFreind(respondent: $respondent)
  }
`;
