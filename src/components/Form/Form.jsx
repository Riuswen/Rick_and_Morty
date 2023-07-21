import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';

const Form = ({login}) => {

    const [userData, setUserData] = useState ({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState ({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData ({...userData, [property]: value});
        validation ({...userData, [property]: value}, errors, setErrors);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
      };
      
    return (
        <form onSubmit={submitHandler} className={style.form}>
            <div className={style.input}>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                name= "username" 
                value={userData.username}
                onChange = {handleInputChange}
                />
                <p>{errors.username}</p>
                
            </div>
            <div className={style.input}>
                
                <label htmlFor="password">Password:</label>
                <input type="password"
                name= "password" 
                value={userData.password}
                onChange = {handleInputChange}
                />
                <p>{errors.password}</p>
            </div>
            <button className={style.button}>LOGIN</button>
        </form>
    );
};

export default Form;