import st1_retrieveWatchingLog from "./st1_retrieveWatchingLog";
import st2_existRelevanceCheck from "./st2_existRelevanceCheck";
import st3_1_updatePostRelevance from "./st3_1_updatePostRelevance";
import st3_2_createPostRelevance from "./st3_2_createPostRelevance";

export const PostInterconnection = async (
  user_id: number,
  post_id: number,
  latest: Latest
) => {
  const old = await st1_retrieveWatchingLog(user_id);

  for (let i = 1; i < old.length; i++) {
    if (old[i].post !== post_id) {
      const exiCheck = await st2_existRelevanceCheck(old[i].post, post_id);

      if (exiCheck.length !== 0) {
        const exiCheckEl = exiCheck[0];
        await st3_1_updatePostRelevance(exiCheckEl, latest, old[i].interest, i);
      } else {
        await st3_2_createPostRelevance(post_id, old[i].post, latest, i);
      }
    }
  }
};

export interface Latest {
  interest: number;
}
