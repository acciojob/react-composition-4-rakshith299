import React, {useState} from "react";
import ReactDOM from "react-dom";

const Form = ({onSubmit}) => {

    const [user, setUser] = useState({
                                    namee: "",
                                    email: "",
                                    password: ""
                                })

    function afterSubmit(){
        onSubmit(user)
    }

    return(
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type = "text" value = {user.namee} placeholder="Name" onChange={(event) => setUser({...user,namee:event.target.value})} id = "name"/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type = "email" placeholder="e@gmail.com" value = {user.email} id = "email" onChange={(event) => setUser({...user, email: event.target.value})}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type = "password" placeholder="password" id = "password" value = {user.password} onChange={(event) => setUser({...user,password : event.target.value})}/>
            </div>

            <div>
                <button onClick={afterSubmit}>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default Form;