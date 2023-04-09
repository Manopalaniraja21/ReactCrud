import { useState } from "react"
import UserTable from "./UserTable"
import AddUserForm from "./Forms/AddUsersForm";
import EditUserForm from "./Forms/EditUserForm";


function App() {
  const usersData = [
    { id: 1, name: 'Mano', username: 'manoA' },
    { id: 2, name: 'Palani', username: 'manopalani' },
    { id: 3, name: 'Raja', username: 'manopalaniraja' }
  ];
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const intialFormState = {
    id: null, name: "", username: ""
  };
  const [currentUser, setCurrentUser] = useState(intialFormState);
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => { user.id == id ? updatedUser : user }))
  }

  return (
    <div className="container">
      <h1>Crud apps with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (<div>
            <h2>Edit User</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>) : (<div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>)}

        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>

    </div>
  )
}

export default App
