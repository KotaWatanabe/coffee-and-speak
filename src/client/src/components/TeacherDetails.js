import React from "react";

export function TeacherDetails(props) {
  return (
    <div>
      <h2>{props.first_name}</h2>
      <p>
        {props.description}
      </p>
      <p>
        {props.price}
      </p>
      <p>
        {props.area}
      </p>
    </div>
  );
}
