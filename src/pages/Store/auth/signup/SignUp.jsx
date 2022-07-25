import React, { Component } from "react";
import { SignUpForm } from "../../../../components/store";

class SignUp extends Component{
  render(){
    return(
      <div style={{backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <SignUpForm/>
      </div>
    )
  }
}

export default SignUp;