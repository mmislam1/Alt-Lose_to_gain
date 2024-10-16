import React from "react";
import { useForm } from "react-hook-form";


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    try {
    const response= async(data)=>await fetch('',{method:"POST",body: JSON.stringify({
        email: data.email,
        password: data.password,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }})
  } catch (e) {
    console.log("Error")
  }
  };

    return (
        <div className="">
            <h1 className=""> Login Form</h1>

    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label>Email</label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="">
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
            </div>
        </div>
  );
}