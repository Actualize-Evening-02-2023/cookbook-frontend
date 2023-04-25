import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(response => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(error => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Name:
          <input
            className="form-control"
            maxLength={20}
            value={name}
            onChange={event => setName(event.target.value)}
            name="name"
            type="text"
          />
        </div>
        <small>{20 - name.length} characters remaining</small>
        <div className="form-group">
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="form-group">
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div className="form-group">
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <button type="submit" className="btn btn-secondary mt-3">
          Signup
        </button>
      </form>
    </div>
  );
}
