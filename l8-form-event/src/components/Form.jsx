import React, { useEffect, useRef, useState } from 'react'

const Form = () => {

    const [form, setForm]= useState({})
    // useState({"username":"","email":"","password":"","age":"","isIndian":false})

    const ref =useRef();
    const passref =useRef();

    const handleOnChange=(e) => {
        var {type,name,value,checked,files}=e.target;

        if(type==="checkbox")
        {
            setForm({...form, [name]:checked})
        }
         else if (type==="file")
        {
            setForm({...form, [name]:files})
        }
        else
        {
            setForm({...form, [name]:value})
        }
        
        console.log(e)
    }


    const handleOnSubmit = (e) => {
      e.preventDefault();

      if(!form.username){
          ref.current.focus();
      }else if(! form.password){
        passref.current.focus();
      }
      console.log(form);
    }
    // useEffect(() => {
    //     console.log(form);
    // },[form])

  return (

    <div>Form
        
        <form onSubmit={handleOnSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Enter name..."
              value={form.username}
              onChange={handleOnChange}
              name="username"
              ref={ref}
            /><br/>

            <label>Email</label>
            <input type="email" placeholder="Enter email..."
                value={form.email}
                onChange={handleOnChange}
                name="email"
            /><br/>

            <label>Password</label>
            <input type="password" placeholder="Enter password..."
                 value={form.password}
                 onChange={handleOnChange}
                 name="password"  
                 ref={passref}   
            /><br/>

            <label>Age</label>
            <input type="number"
                  value={form.age}
                  onChange={handleOnChange}
                  name="age"
            /><br/>

            <label>City:</label>
            <select name="city" value={form.city} onChange={handleOnChange}>
                <option value="Bangluru">Bangluru</option>
                <option value="Delhi">Delhi</option>
                <option value="Patna">Patna</option>
                <option value="Pune">Pune</option>
            </select><br/>

         
            <input type="checkbox"
                  checked={form.isIndian}
                  onChange={handleOnChange}
                  name="isIndian"

            />
            <label>Is Indian</label><br/>

            <input type="radio"
                  value="male"
                  onChange={handleOnChange}
                  name="gender"

            />
            <label>Male</label><br/>

            <input type="radio"
                  value="female"
                  onChange={handleOnChange}
                  name="gender"

            />
            <label>Female</label><br/>

            <label>User Resume :</label>
            <input type="file"
                  files={form.resume}
                  onChange={handleOnChange}
                  name="resume"
            /><br/>

            <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Form