//import ApacDashboard from "@material-ui/icons/ApacDashboard";
//import { LibraryBooks } from '@material-ui/icons/LibraryBooks'
//import BubbleChart from '@material-ui/icons/BubbleChart'
//import LocationOn from "@material-ui/icons/LocationOn"
//import Notifications from "@material-ui/icons/Notifications"
//import Unarchive from "@material-ui/icons/Unarchive"
//import Language from "@material-ui/icons/Language"
import Dashboard from "./views/Dashboard/Dashboard";
import LandingPage from "./views/LandingPage/LandingPage";
import Setup from "./views/Setup/Setup"
import Reports from "./views/Reports/Reports";

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "/dashboard"
  },
  {
    path: "/setup",
    component: Setup,
    layout: "/setup"
  },
  {
    path: "/reports",
    component: Reports,
    layout: "/reports"
  },
]

export default dashboardRoutes;
