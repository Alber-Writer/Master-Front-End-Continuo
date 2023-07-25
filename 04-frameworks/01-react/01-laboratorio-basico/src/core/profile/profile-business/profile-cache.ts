export const setCacheLogin = (isLogged:boolean, username:string) => {
  localStorage.setItem("isLogged", `${isLogged}`);
  localStorage.setItem("username", `${username}`);
};
export const getCacheLogin = () => {
  return [localStorage.getItem("isLogged"), localStorage.getItem("username")];
};
export const removeCacheLogin = () => {
  localStorage.removeItem("isLogged");
  localStorage.removeItem("username");
};

//TODO:refactor cache methods