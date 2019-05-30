import React from "react";
// import { FormErrors } from "./FormErrors";

export const TeacherForm = props => {
  const { data = {}, errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const formNode = event.currentTarget;
    const formData = new FormData(formNode);

    console.log("props.onSubmit", props.onSubmit);
    if (typeof props.onSubmit === "function") {
      props.onSubmit({
        description: formData.get("description"),
        price: formData.get("price"),
        area: formData.get("area")
      });
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>

       <div>
        <label htmlFor="description">Description</label> <br />
        {/* <FormErrors forField="description" errors={errors} /> */}
        <textarea
          name="description"
          id="description"
          cols="60"
          rows="4"
          defaultValue={data.description}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label> <br />
        {/* <FormErrors forField="price" errors={errors} /> */}
        <input name="price" id="price" defaultValue={data.price} />
      </div>
      <div>
        <label htmlFor="area">Area</label> <br />
        {/* <FormErrors forField="area" errors={errors} /> */}
        <input name="area" id="area" defaultValue={data.area} />
      </div>



      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
