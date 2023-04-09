import { useState } from "react";
const AddUserForm = (props) => {
    const intialFormState = {
        id: null, name: "", username: ""
    };
    const [user, setUser] = useState(intialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!user.name || !user.username) return;

            props.addUser(user);
            setUser(intialFormState)
        }}>
            <label>Name</label>
            <input type='text' name='name' onChange={handleInputChange} value={user.name} />
            <label>UserName</label>
            <input type='text' name='username' onChange={handleInputChange} value={user.username} />
            <button >Add User</button>
        </form>

    )
}
export default AddUserForm