import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';

const Form = ({login}) => {

    const [userData, setUserData] = useState ({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState ({
        email: "",
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
                <label htmlFor="email">Username:</label>
                <input type="text" 
                name= "email" 
                value={userData.email}
                onChange = {handleInputChange}
                />
                <p>{errors.email}</p>
                
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
            <button onClick={submitHandler}type='submit' className={style.button}>LOGIN</button>
        </form>
    );
};

export default Form;