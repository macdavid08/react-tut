import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./Layouts/MainLayout";
import { JobPage } from "./pages/JobPage";
import { PageNotFound } from "./pages/PageNotFound";

export const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
  )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
};
