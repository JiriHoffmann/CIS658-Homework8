import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function UserList({ users, onEditClick, onDeleteClick }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <h5>{user.fname}</h5>
              </td>
              <td>
                <h5>{user.lname}</h5>
              </td>
              <td>
                <h5>{user.email}</h5>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <Button onClick={() => onEditClick(user)}>Edit</Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      onDeleteClick(user.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
