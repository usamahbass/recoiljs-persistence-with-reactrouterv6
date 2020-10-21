import React, { useState } from "react";
import {
  useSetRecoilState,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";
import { usePrompt, useBlocker } from "react-router-dom";
import { isData } from "../store";

const Login = () => {
  PersistenceObserver();
  const [values, setValues] = useState("");
  let [isBlocking, setBlocking] = useState(false);
  const setData = useSetRecoilState(isData);

  /*
    example using usePrompt()
  */

  usePrompt(
    "Hello from usePrompt -- Are you sure you want to leave?",
    isBlocking
  );

  /*
    example using useBlocker()
  */

  // useBlocker(
  //   () => "Hello from usePrompt -- Are you sure you want to leave?",
  //   isBloc king
  // );

  const handleLogin = (e) => {
    e.preventDefault();

    // setdata to store
    setData(true);
    setBlocking(false);
    localStorage.setItem("user", values);
  };
  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        onChange={(e) => {
          setValues(e.target.value);
          setBlocking(e.target.value.length > 0);
        }}
      />
      <button onClick={handleLogin}>Masuk</button>
    </form>
  );
};

export default Login;

function PersistenceObserver() {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    const loadable = snapshot.getLoadable(isData);

    if (loadable.state === "hasValue") {
      return localStorage.setItem(
        isData.key,
        JSON.stringify({
          isLogin: loadable.contents,
        })
      );
    }
  });
}
