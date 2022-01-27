const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const reset = () => {
  return {
    type: "RESET"
  };
};

const logIn = () => {
  return {
    type: "LOGIN"
  };
};

const logOut = () => {
  return {
    type: "LOGOUT"
  };
};

export { increment, decrement, reset, logIn, logOut };
