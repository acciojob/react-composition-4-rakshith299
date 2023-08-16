import React, {useState} from "react";
import ReactDOM from "react-dom";

const Form = ({onSubmit}) => {

    const [user, setUser] = useState({
                                    name: "",
                                    email: "",
                                    password: ""
                                })

    function afterSubmit(event){
        event.preventDefault();
        onSubmit(user)
    }

    return(
        <form onSubmit = {(e) => afterSubmit(e)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type = "text" value = {user.name} placeholder="Name" onChange={(event) => setUser({...user,name:event.target.value})} id = "name"/>
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
                <button>
                    Submit
                </button>
            </div>

        </form>
    )
}

export default Form;