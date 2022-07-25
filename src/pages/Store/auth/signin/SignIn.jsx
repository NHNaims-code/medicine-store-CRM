import React, {Component} from "react";
import { SignInForm } from "../../../../components/store";

class SignIn extends Component{
  render(){
    return(
      <div style={{backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <SignInForm/>
      </div>
    )
  }
}

export default SignIn;