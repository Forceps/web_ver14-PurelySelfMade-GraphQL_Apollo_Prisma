export default () => {
  prisma.watched.create({
    data: {
      user_userTowatched: {
        connect: {
          user_id: req.user.user_id,
        },
      },
      post_postTowatched: {
        connect: {
          post_id,
        },
      },
    },
  });
};
