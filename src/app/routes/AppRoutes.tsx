import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const CreatePost = React.lazy(
  () => import("../../pages/CreatePost/CreatePost")
);

export enum Paths {
  HOME = "/",
  CREATE_POST = "/post/create",
}

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={Paths.HOME} element={<Home />} />
        <Route path={Paths.CREATE_POST} element={<CreatePost />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
