const isLoginHandler = () => {
  const islogin = localStorage.getItem("islogin");
  return Boolean(islogin);
};

export default isLoginHandler;
