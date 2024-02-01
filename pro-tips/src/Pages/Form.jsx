// import "./App.css";
import { useState } from "react";

function Form() {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Number: "",
  });
  const [valid, setValid] = useState(false);
  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (field.firstName && field.lastName && field.Email && field.Number) {
      setValid(true);
    }
    setSubmit(true);
  }
  return (
    <>
<div className="container">
      <form className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {submit && valid ? <div><h1 id='register'>Registration Successful!!</h1></div> : null}
        <br></br>

        <div className="Input-section">
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter first name" 
          className="input"
          onChange={(e) => {
            setField({ ...field, firstName: e.target.value });
          }}
          value={field.firstName}
        ></input>
        {submit && !field.firstName ? (
          <span>Please enter your first name</span>
        ) : null}
        <br></br>


        <label> Last name </label>
        <input
          type="text"
          placeholder="Enter last name" 
          className="input"
          onChange={(e) => {
            setField({ ...field, lastName: e.target.value });
          }}
          value={field.lastName}
        ></input>
        {submit && !field.lastName ? (
          <span>Please enter your last name</span>
        ) : null}
        <br></br>


        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          className="input"
          onChange={(e) => {
            setField({ ...field, Email: e.target.value });
          }}
          value={field.Email}
        ></input>
        {submit && !field.Email ? <span>Please enter your Email</span> : null}
        <br></br>


        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Number"
          className="input"
          onChange={(e) => {
            setField({ ...field, Number: e.target.value });
          }}
          value={field.Number}
        >
        </input>
        {submit && !field.Number ? <span>Please enter your Number</span> : null}
        <br></br>


        <button type="submit" className='btn' onSubmit={handleSubmit}>
          Register
        </button>
        </div>
      </form>
      </div> 
    </>
  );
}

export default Form;
