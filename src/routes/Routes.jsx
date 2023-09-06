import ReadMe from "../pages/ReadMe";
import SearchPage from "../pages/SearchPage";

import { Route } from "react-router-dom";

const route = [
  <Route path="/" key={"landing"} element={<SearchPage />} />,
  <Route path=":username/:repos" key={"search"} element={<ReadMe />} />,
];

export default route;
