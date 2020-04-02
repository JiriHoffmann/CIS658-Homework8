import React, { useEffect, useState } from "react";
import NewUser from "./NewUser";
import UserList from "./UserList";
import bugsAPI from "../bugsAPI";

const emptyUser = {
  fname: "",
  lname: "",
  email: ""
};

export default function Users() {
  const [users, setUsers] = useState([]);
  const [createMode, setCreateMode] = useState(0);
  const [edittedUser, setEdittedUser] = useState(emptyUser);

  useEffect(() => {
    updateUsers();
  }, []);

  const updateUsers = () => {
    bugsAPI.fetchUsers().then(res => {
      setUsers(res);
    });
  };

  const onDeleteClick = id => {
    bugsAPI.deleteUser(id).then(res => {
      updateUsers();
    });
    setCreateMode(0);
    setEdittedUser({
      fname: "",
      lname: "",
      email: ""
    });
  };

  const onEditClick = user => {
    setEdittedUser(user);
    setCreateMode(1);
  };

  return (
    <>
      <NewUser
        update={updateUsers}
        mode={createMode}
        setMode={setCreateMode}
        setEdittedUser={setCreateMode}
        user={edittedUser}
      />
      <div className="pb-4" />
      <UserList
        users={users}
        onDeleteClick={d => onDeleteClick(d)}
        onEditClick={e => {
          onEditClick(e);
        }}
      />
    </>
  );
}
