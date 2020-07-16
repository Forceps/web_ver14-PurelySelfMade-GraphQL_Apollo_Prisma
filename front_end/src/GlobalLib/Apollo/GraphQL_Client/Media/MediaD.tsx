import { gql } from "@apollo/client";

export const DELETE_FILE = gql`
  mutation deleteFile($image_id: Int!) {
    deleteFile(image_id: $image_id)
  }
`;
