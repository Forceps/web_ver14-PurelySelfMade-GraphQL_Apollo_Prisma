import st1_myNearbyUser from "./st1_myNearbyUser";

export default async (user_id: number) => {
  const preFind = await st1_myNearbyUser(user_id);

  let find: userBowl[] = [];
  for (let i = 0; i < preFind.length; i++) {
    const { user1, user2, degree } = preFind[i];
    if (user1 === user_id) {
      find = find.concat({
        user: user2,
        degree,
      });
    } else {
      find = find.concat({
        user: user1,
        degree,
      });
    }
  }

  if (find.length > 1) {
    find = find.sort((a, b) => {
      return b.degree - a.degree;
    });
  }

  return find;
};

interface userBowl {
  user: number;
  degree: number;
}
