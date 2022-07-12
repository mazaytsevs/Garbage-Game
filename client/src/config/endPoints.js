const { REACT_APP_HOST: host } = process.env;

// console.log(host);
export const signUp = () => `${host}/auth/reg`;
export const signIn = () => `${host}/auth/login`;
export const signOut = () => `${host}/auth/logout`;
export const checkAuth = () => `${host}/auth/check`;
export const getUser = (id) => `${host}/users/${id}`;
