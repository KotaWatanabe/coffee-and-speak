import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Teacher } from "../api/teacher";

export class TeacherIndexPage extends Component {
  state = {
    teachers: []
  };

  componentDidMount() {
    Teacher.all().then(teachers => {
      this.setState({ teachers });
    });
  }

  // deleteQuestion(id) {
  //   // To change state in a React component, you must use the
  //   // `setState()` method on `this`. It takes an object that gets
  //   // merged in the current state at React's convenience.
  //   // The properties in `setState()` replace the same name properties
  //   // in the current state.
  //   // This happens asynchronously and will eventually trigger an update
  //   // to the DOM if there's any change.

  //   this.setState({
  //     questions: this.state.questions.filter(q => q.id !== id)
  //   });
  // }

  render() {
    return (
        <>
      <main className="Page">
        <h2>Teachers</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.teachers.map(teacher => (
            <li key={teacher.id}>
            {console.log(teacher)}
              <Link to={`/teachers/${teacher.id}`}>{teacher.user.first_name}</Link>{" "}
              {/* buttonNode.addEventListener("click", event => ...) */}
              {/* <button onClick={() => this.deleteQuestion(question.id)}>
                Delete
              </button> */}
              <p>{teacher.price}</p>
              <p>{teacher.area}</p>
            </li>
          ))}
        </ul>
      </main>
      </>
    );
  }
}
