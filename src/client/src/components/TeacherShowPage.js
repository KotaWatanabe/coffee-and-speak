import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { ReviewDetails } from "./ReviewDetails";
// import { ReviewList } from "./ReviewList";
import { TeacherDetails } from "./TeacherDetails";
import { Teacher } from "../api/teacher";

export class TeacherShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teacher: null
      // reviews: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    Teacher.one(id).then(teacher => {
      this.setState({
        teacher
      });
    });
  }

  // deleteQuestion() { <-- Prototype method
//   deleteQuestion = () => {
//     // <-- Instance method (Method on `this`)
//     // This is for less efficient, only use when the method must
//     // be passed as a callback and `this` is needed.
//     if (window.confirm("Are you sure?")) {
//       Question.delete(this.state.question.id).then(data => {
//         this.props.history.push(`/questions`);
//       });
//     }
//   };

//   deleteAnswer(id) {
//     this.setState({
//       question: {
//         ...this.state.question,
//         answers: this.state.question.answers.filter(a => a.id !== id)
//       }
//     });
//   }

  render() {
    if (!this.state.teacher) {
      return (
        <main className="Page">
          <h2>Teacher doesn't exist!</h2>
        </main>
      );
    }

    return (
      <main className="Page">
        <TeacherDetails {...this.state.teacher} />

        {/* <div> */}
          {/* <Link to={`/questions/${this.state.question.id}/edit`}>Edit</Link> */}
          {/* <PrimaryButton
            text="Edit"
            iconProps={{ iconName: "edit" }}
            onClick={() =>
              this.props.history.push(
                `/questions/${this.state.question.id}/edit`
              )
            }
          />

          <PrimaryButton
            text="Delete"
            iconProps={{ iconName: "delete" }}
            onClick={this.deleteQuestion}
          />
        </div> */}

        <h2>Reviews</h2>
        {/* <AnswerList
          onAnswerDeleteClick={id => this.deleteAnswer(id)}
          answers={this.state.question.answers}
        /> */}
      </main>
    );
  }
}
