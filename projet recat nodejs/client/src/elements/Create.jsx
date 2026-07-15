import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
function Create() {
    const [values,setValues]=useState({
        nom: '',
        email: '',
        age: '',
        gender: ''
})
        const navigate = useNavigate()
function handlesubmit(e) {
    e.preventDefault()

    axios.post('/add_user',values)
    .then((res)=>{

        navigate('/')
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
    return(
        <div className='container vh-100 bg-primary'>
            <div className='row'>
                <h3>add student</h3>
                <div className='d-flex justify-content-end'>
                    <Link to='/' class='btn btn-success'>Home</Link>
                </div>
                <form action="" onSubmit={handlesubmit} >
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" name='nom' required onClick={(e)=>setValues({...values,nom:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' required onClick={(e)=>setValues({...values,email:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" name='age' required onClick={(e)=>setValues({...values,age:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" name='gender' required onClick={(e)=>setValues({...values,gender:e.target.value})} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create