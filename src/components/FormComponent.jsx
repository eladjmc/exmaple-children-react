import React from "react";

const FormComponent = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(e.target); // Collects all the form data

    // Converts FormData entries into a plain object
    const data = Object.fromEntries(formData.entries());

    console.log(data); // Logs the data to the console
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>My form</h2>
      {children}
      <button type="submit">submit form</button>
    </form>
  );
};

export default FormComponent;
