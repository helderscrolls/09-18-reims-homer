import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "Yolo",
      name: "James",
      lastname: "Bond"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }
  updatePasswordbisField(event) {
    this.setState({ passwordbis: event.target.value });
  }
  updateNameField(event) {
    this.setState({ name: event.target.value });
  }
  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + JSON.stringify(this.state, 1, 1));
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>
          <h3>E-mail</h3>
          <input
            onChange={this.updateEmailField.bind(this)}
            type="email"
            name="email"
          />

          <h3>Password</h3>
          <input
            onChange={this.updatePasswordField.bind(this)}
            type="password"
            name="password"
          />
          <input
            onChange={this.updatePasswordbisField.bind(this)}
            type="password"
            name="passwordbis"
          />

          <h3>Name</h3>
          <input
            onChange={this.updateNameField.bind(this)}
            type="text"
            name="name"
          />

          <h3>LastName</h3>
          <input
            onChange={this.updateLastnameField.bind(this)}
            type="text"
            name="lastname"
          />
          <br />
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;
