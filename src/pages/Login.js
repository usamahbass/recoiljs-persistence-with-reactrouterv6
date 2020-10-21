import React, { useState } from "react";
import {
  useSetRecoilState,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";
import { isData } from "../store";

const Login = () => {
  PersistenceObserver();
  const [values, setValues] = useState("");
  const setData = useSetRecoilState(isData);

  const handleLogin = (e) => {
    e.preventDefault();

    // setdata to store
    setData(true);
    localStorage.setItem("user", values);
  };
  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        onChange={(e) => {
          setValues(e.target.value);
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
