import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  }

  schema = {
    username: Joi.string()
      .required()
      .label("用户名"),
    password: Joi.string()
      .required()
      .label("密码")
  }

  doSubmit = () => {
    //调用后端服务
    console.log("Submitted")
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "用户名")}
          {this.renderInput("password", "密码", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    )
  }
}

export default LoginForm
