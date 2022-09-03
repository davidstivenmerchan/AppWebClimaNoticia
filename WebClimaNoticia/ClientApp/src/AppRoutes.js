import Historial from "./components/Historial";
import Ciudad from "./components/Ciudad";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/historial',
    element: <Historial />
  },
  {
    path: '/ciudad',
    element: <Ciudad />
  }
];

export default AppRoutes;
