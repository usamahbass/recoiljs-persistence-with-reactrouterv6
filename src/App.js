import React from "react";
import { useRoutes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isData } from "./store";
import routes from "./routes";

const App = () => {
  const [data] = useRecoilState(isData);

  const routing = useRoutes(routes(data));
  return <div>{routing}</div>;
};

export default App;
