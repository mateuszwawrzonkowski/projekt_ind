import Contact from "components/Contact";
import Models from "components/Models";
import Games from "components/Games";
import Profile from "components/Profile";
import Statistics from "components/Statistics";
import Cart from "components/Cart";
export const staticRoutes = [
  {
    path: "/contact",
    label: "Kontakt",
    component: <Contact />,
  },
  {
    path: "/models",
    label: "Kontakt",
    component: <Models />,
  },
  {
    path: "/profile",
    label: "Profil",
    component: <Profile />,
  },
  {
    path: "/games",
    label: "Kontakt",
    component: <Games />,
  },
  {
    path: "/contact",
    label: "Kontakt",
    component: <Contact />,
  },
  {
    path: "/stats",
    label: "Kontakt",
    component: <Statistics />,
  },
  {
    path: "/cart",
    label: "Koszyl",
    component: <Cart />,
  },
];
