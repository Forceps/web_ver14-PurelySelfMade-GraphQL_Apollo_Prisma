export default async (ranks: any[]) => {
  let postProsed: any[] = [];
  for (let i = 0; i < ranks.length; i++) {
    const {
      post_postTopost_relevance_post1,
      post_postTopost_relevance_post2,
    } = ranks[i];
    postProsed = postProsed
      .concat(post_postTopost_relevance_post2)
      .concat(post_postTopost_relevance_post1);
  }

  return postProsed;
};
