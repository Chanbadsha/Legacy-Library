import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import AllArtifacts from "../Pages/AllArtifacts";
import AddArtifacts from "../Pages/AddArtifacts";
import PrivateRoutes from "../Hooks/PrivateRoutes";
import ArtifactDetails from "../Pages/ArtifactDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoutes>
            <MyArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/liked-artifacts",
        element: <LikedArtifacts />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts></AllArtifacts>,
        loader: async () => {
          const data = await fetch("http://localhost:5000/artifactsData");
          const cards = await data.json();

          return cards;
        },
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRoutes>
            <AddArtifacts></AddArtifacts>
          </PrivateRoutes>
        ),
      },
      {
        path: `/artifactsDetail/:id`,
        element: (
          <PrivateRoutes>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const data = await fetch(
            `http://localhost:5000/artifactsData/${params.id}`
          );
          const cards = await data.json();

          return cards;
        },
      },
    ],
  },
]);

export default router;
