let user = {
  login(instance, credentials) {
    return instance.post("/login", credentials);
  },
  loginByToken(instance, token) {
    return instance.post("/login/byToken", '"' + token + '"');
  },
  getUserProfiles(instance, id) {
    return instance.get("/users/" + id + "/profiles");
  }
};
export default user;
