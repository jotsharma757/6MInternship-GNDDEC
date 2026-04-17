import React, { useState } from "react";

function Validation(){
    const[formname, setName] = useState({
        name : "",
        email : "",
    });
    const [error, setErrors] = useState({})

    const handleChange = (e)=>{
       const {name,value} = e.target;

       setName({
        ...formname, 
        [name] : value,
       });
    };
    const validate = () =>{
        let newErrors = {};

        if(!formname.name){
            newErrors.name = "Name is required";
        }
        if(!formname.email.includes("@gmail.com")){
            newErrors.email = "Enter valid email";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);
    }
    else{
        alert("Form submitted")
    }
};

return(
    <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Type..."
        name="name"
        value={formname.name}
        onChange={handleChange} />
        <p style={{ color: "red" }}>{error.name}</p>

        <br />

        <input type="text"
        placeholder="Type email"
        name="email"
        value={formname.email}
        onChange={handleChange} />
        <p>{error.email}</p>

<br />
        <button type="submit">Submit</button>
    </form>
)
};
export default Validation;
