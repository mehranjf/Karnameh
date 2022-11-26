import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeList } from "./routerList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
