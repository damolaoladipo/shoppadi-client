import React, { useState, useEffect, useContext } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FaUserEdit } from 'react-icons/fa';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  // Fetch user data from API (replace with your actual API call)
  const fetchData = async () => {
    try {
      const response = await fetch('/api/users'); // Replace with your API endpoint
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchData();
}, []);

return (
    <>
  <Container>
    <h2>All Users</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}> 
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td> 
            <td>
              <Button variant="primary" size="sm">
                <FaUserEdit /> Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
        </>
    );
};

export default UserList;