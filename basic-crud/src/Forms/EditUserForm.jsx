import { useState } from "react"

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }
    return (
        <form onSubmit={(e) => {
            if (!user.name || !user.username) return;
            e.preventDefault();
            props.updateUser(user.id, user);
            // setUser(intialFormState)
        }}>
            <label>Name</label>
            <input type='text' name='name' onChange={handleInputChange} value={user.name} />
            <label>UserName</label>
            <input type='text' name='username' onChange={handleInputChange} value={user.username} />
            <button>Update User</button>
            <button className="btn btn-success" onClick={() => { props.setEditing(false) }}>Cancel</button>
        </form>
    )
}
export default EditUserForm;