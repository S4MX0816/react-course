import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { id: Math.random().toString(), name: uName, age: uAge },
    ]);
  };

  return (
    <>
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
