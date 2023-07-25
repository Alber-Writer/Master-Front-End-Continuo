export const checkAuth = (
  username: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    let result = false;
    setTimeout(() => {
      if (username === "admin" && password === "test") {
        result = true;
      }
      return resolve(result);
    }, 2000);
  });
};
