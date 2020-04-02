import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bugsAPI from "../bugsAPI";

export default function NewUser({
  user,
  setMode,
  update,
  mode,
  setEdditedUser
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  //make sure all fields are filled
  useEffect(() => {
    if (!firstName || !lastName || !email) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [firstName, lastName, email]);

  useEffect(() => {
    setFirstName(user.fname);
    setLastName(user.lname);
    setEmail(user.email);
  }, [user]);

  //create a new user
  const handleCreateUser = () => {
    bugsAPI
      .createUser({ fname: firstName, lname: lastName, email: email })
      .then(cleanTextFields);
  };

  const handleEditUser = () => {
    bugsAPI
      .editUser(user.id, {
        fname: firstName,
        lname: lastName,
        email: email
      })
      .then(cleanTextFields);
  };

  const cancelEditUser = () => {
    setMode(0);
    cleanTextFields();
  };

  const cleanTextFields = () => {
    update();
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Group>
      </Form>
      {mode === 0 ? (
        <Button
          className="px-2"
          disabled={disabledButton}
          variant="secondary"
          onClick={() => handleCreateUser()}
        >
          Create
        </Button>
      ) : (
        <>
          <Button
            className="mr-3"
            disabled={disabledButton}
            variant="secondary"
            onClick={() => handleEditUser()}
          >
            Edit
          </Button>
          <Button   className="px-2" variant="secondary" onClick={() => cancelEditUser()}>
            Cancel
          </Button>
        </>
      )}
    </>
  );
}
