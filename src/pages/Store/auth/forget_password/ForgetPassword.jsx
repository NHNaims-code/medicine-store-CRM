import React, {Component} from "react";
import { ForgotPasswordForm } from "../../../../components/store";

class ForgotPassword extends Component{
  render(){
    return(
      <div style={{backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <ForgotPasswordForm/>
      </div>
    )
  }
}

export default ForgotPassword;