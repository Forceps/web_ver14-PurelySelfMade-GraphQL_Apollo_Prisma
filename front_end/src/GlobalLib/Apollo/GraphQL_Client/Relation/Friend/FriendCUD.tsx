import { gql } from "@apollo/client";

export const ADD_FRIEND = gql`
  mutation addFreind($respondent: Int!) {
    addFreind(respondent: $respondent)
  }
`;
