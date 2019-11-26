import React from "react";
import {Redirect} from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      password:'',
      loggedIn: '',
    };
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e=>{
    e.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.username=="hruday@gmail.com")
    console.log(this.state.password =="hruday123")
    if((this.state.username=="hruday@gmail.com") && (this.state.password =="hruday123")){
        console.log("inside")
        // return <Redirect to="/dashboard/" />
        this.props.history.push('/dashboard');
    }else{
        alert("Please enter coorect username and password")
    }

  
  }

  render() {
    const {username, password}=this.state
   
    return (
          <div className="form">
          <form onSubmit={this.submitHandler}>
            <div >
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"  value= {username} onChange={this.changeHandler}/>
            </div>
            <div >
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
            </div>
          <div >
          <button type="submit">
            Login
          </button>
        </div>
        </form>
        </div>

    );
    
  }
}

export default Login;
