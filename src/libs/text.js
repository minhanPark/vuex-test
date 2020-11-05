const state = {
  accessToken: getTokenFromCookie() || "",
  loginUser: getUserFromCookie() || {
    code: "",
    name: "",
    phone: "",
    role: "",
    team: "",
    username: "",
    connectionTime: new Date().toLocaleDateString(),
  },
};
