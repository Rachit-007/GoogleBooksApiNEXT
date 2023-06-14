const userApi = {
  addUser: `${process.env.BACKEND_URL}/users/add`,
};

export const path = {
  root: "/",
  ...userApi,
};
