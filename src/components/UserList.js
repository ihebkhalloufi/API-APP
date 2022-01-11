import './UserList.css';
import axios from "axios";
import { useState , useEffect } from "react";
const UserList = () => {
    const [add, SetAdd] = useState([]);
    useEffect (() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then ((add) => { 
            SetAdd (add.data);
        })
        .catch ((err) => console.error(err));
    }, [])
    return (
        <div>
            {add.map((adds) => {
                return(
                    <div className='us' key={adds.id}>
                    <h4 id='id'>Userid: #{adds.id}</h4>
                    <h4 id='name'> Name: {adds.name}</h4>
                    <h4 id='useName'>userName: {adds.username}</h4>
                    <h4 id='email'>email: {adds.email}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList
