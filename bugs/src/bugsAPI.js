const baseURL = "http://localhost:3000";

export default class API {
  static fetchUsers = () => {
    return fetch(`${baseURL}/users`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Got a ${res.status} status.`);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  static createUser = user => {
    return fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Got a ${res.status} status.`);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  static deleteUser = id => {
    return fetch(`${baseURL}/users/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error(`Got a ${res.status} status.`);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  static editUser = (id,user) => {
    return fetch(`${baseURL}/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(user)
      })
      .then(res => {
          console.log(res)
        if (res.ok) {
          return res;
        } else {
          throw new Error(`Got a ${res.status} status.`);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
}
