export const isAuthenticated = (req: any) => {
  if (!req.user) {
    throw Error(`You need to log in to perform this action`);
  }
  return;
};
