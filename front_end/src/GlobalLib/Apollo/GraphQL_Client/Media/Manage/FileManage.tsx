import { gql, useQuery } from "@apollo/client";

export const FILE_MANAGE = gql`
  query FileManage {
    FileManage {
      images {
        count
        volume
      }
      musics {
        count
        volume
      }
      videos {
        count
        volume
      }
    }
  }
`;
export const FileManageRequest = () => useQuery(FILE_MANAGE);
