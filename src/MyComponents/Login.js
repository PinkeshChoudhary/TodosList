import React, { useState } from "react";

export const Login = () => {
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [errormassage , setErrorMassage] = useState(false)
  const submithandler = (e) => {
    e.preventDefault();
    if(emailid&&password ===""){
        alert("fields can not be empty")
    }else{
      //  console.log( setEmailId("pinkesh"))

         }
  }
  const emailHandler = (e) => {
    setEmailId(e.target.value);
  
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder="emailid "
          value={emailid}
          onChange={emailHandler}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
