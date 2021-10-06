import React ,{useState} from 'react'
import "../css/login.css"
import HomePage from './HomePage';
const Login = () => {
    const [showingLogin,setShowingLogin]=useState(true);
    const [inputData,setInputData]=useState({
        username:"",
        password:""
    })
    const [members,setMembers]=useState([])
    const handleInput=(event)=>{
       setInputData({...inputData,[event.target.name]:event.target.value});
     
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(inputData)

        
     
            setMembers([...members,inputData])
            setShowingLogin(false)
            console.log("members ",members)
    
    }
  
    return (<>
    {showingLogin ? 
        <div className="login">
            <div className="login_mainDiv">
                <h1>Sign In</h1>
                <hr />
                <form className="form" onSubmit={handleLogin}>
                <div className="login_inputDiv">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="username" value={inputData.username} onChange={handleInput} name="username" required/>
                </div>
                <div className="login_inputDiv">
                <i className="fas fa-key"></i>
                    <input type="password" placeholder="password" value={inputData.password} onChange={handleInput} name="password" required/>
                </div>

                <button className="login_btn" type="submit">Login</button>
                </form>
            </div>
        </div>

        :
        <HomePage members={members}/>
    
    }
        
        </>
    )
}

export default Login
