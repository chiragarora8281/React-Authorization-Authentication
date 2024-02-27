import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./pages/navbar/Home";
import NotFound from "./pages/navbar/NotFound";
import CreateCourse from "./components/courses/CreateCourse";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";
import AllUsers from "./users/AllUsers";
import SingleUser from "./users/Singleuser";
import Register from "./auth/Register";
import Login from "./auth/Login";
import PublicRoute from "./helpers/PublicRoute";
import PrivateRoute from "./helpers/PrivateRoute";
import Modal from "./helpers/modals/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        // index: true,
        element: <Home />,
        children: [
          {
            index: true,
            element: <AllCourses />,
          },
          {
            path: "create-course",
            element:(
                <PrivateRoute>
                <CreateCourse />,
                </PrivateRoute>
            )
          },
          {
            path: ":id",
            element: (<PrivateRoute>
                <CourseDetails />
              </PrivateRoute> )
          },
          {
            path: "/edit/:id",
            element: (<PrivateRoute>
                <EditCourse />
              </PrivateRoute> )
          },
          {
            path: "users",
            element:(<PrivateRoute>
               <SingleUser />
              </PrivateRoute> ) 
          },
          {
            path: "/users/:id",
            element:(<PrivateRoute>
                    <SingleUser />
                  </PrivateRoute> )
          },
        ],
      },
      {
        path: "/signup",
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        ),
      },
      {
        path: "/login",
        element:(<PublicRoute>
          <Modal>
            <Login />
          </Modal>
            </PublicRoute>) 
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
