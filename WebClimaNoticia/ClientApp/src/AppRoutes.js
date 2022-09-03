import Historial from "./components/Historial";
import Ciudad from "./components/Ciudad";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/ciudad',
    element: <Historial />
  },
  {
    path: '/historial',
    element: <Ciudad />
  }
];

export default AppRoutes;
