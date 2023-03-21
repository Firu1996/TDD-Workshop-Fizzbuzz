import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("axios", () => {
  var mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  it("get", async () => {
    mock.onGet("/users").reply(200, {
      users: [{ id: 1, name: "Chayakorn" }],
    });
    const result = await axios.get("/users");
    expect(result.data.users[0].id).toEqual(1);
  });

  xit("get2 should failed", async () => {
    const result = await axios.get("/users");
    expect(result.data.users[0].id).toEqual(1);
  });

  it("post", async () => {
    mock.onPost("/users", { id: 1, name: "foo" }).reply(200, {
      users: [{ id: 1, name: "Chayakorn" }],
    });
    const param = { id: 1, name: "foo" };
    const result = await axios.post("/users", param);
    expect(result.status).toEqual(200);
    expect(result.data.users[0].name).toEqual("Chayakorn");
  });

  it("post", async () => {
    mock.onPost("/users", { id: 1, name: "foo" }).reply(200, {
      users: [{ id: 1, name: "Chayakorn" }],
    });
    axios
      .post("/users", { id: 2, name: "foo" })
      .then(() => {
        expect(false).toBeTruthy();
      })
      .catch((error) => {
        expect(error.message).toEqual("Request failed with status code 404");
      });
  });
});
