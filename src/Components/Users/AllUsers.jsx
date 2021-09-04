import { useEffect, useState } from "react";


import SingleUser from "./ListUsers/SingleUser";
import { getUsers } from "../../services/getUsers";



const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().
            then(users => setUsers(users))
    }, [])
    console.log(users)

    return (
        <div>
            {
            users.map((user, index) => <SingleUser userData={user} key={index} />)
            }
        </div>
    )
};

export default AllUsers;