import React, { Component } from "react";
import { Teacher } from "../api/teacher";
import { TeacherForm } from "./TeacherForm";

export class TeacherNewPage extends Component {
  state = {
    errors: []
  };

  createTeacher(params) {
    Teacher.create(params).then(data => {
      if (!data.errors) {
        // The `history` prop is provide by the <Route>
        // component. It has a bunch of methods to manipulate
        // browser. You can use `push` to direct a user to any
        // page in our app.
        this.props.history.push(`/teachers/${data.id}`);
      } else {
        this.setState({
          errors: data.errors
        });
      }
    });
  }

  render() {
    return (
      <main className="Page">
        <h1>Create your lesson</h1>

        {/* <FormErrors errors={this.state.errors} /> */}

        <TeacherForm
          errors={this.state.errors}
          onSubmit={params => this.createTeacher(params)}
        />
      </main>
    );
  }
}
