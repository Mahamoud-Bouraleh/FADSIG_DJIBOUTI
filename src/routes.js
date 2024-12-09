// Importation des layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Importation des icônes Material UI
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Resources Humaines",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
    collapse: [
      {
        name: "Formation et certifications",
        route: "/tables/formation",
      },
      {
        name: "Planification et gestion des horaires",
        route: "/tables/planification",
      },
      {
        name: "Gestion des employés",
        route: "/tables/employees",
      },
      {
        name: "Gestion des Opérations Militaires",
        route: "/tables/operations",
      },
    ],
  },
  {
    type: "collapse",
    name: "Payrol",
    key: "billing",
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/billing",
    component: <Billing />,
    collapse: [
      {
        name: "Générer Payrol",
        route: "/billing/generate",
      },
      {
        name: "Tax réduction",
        route: "/billing/tax-reduction",
      },
    ],
  },
  {
    type: "collapse",
    name: "Cartographie(GIS)",
    key: "rtl",
    icon: <Icon fontSize="small">map</Icon>,
    route: "/rtl",
    component: <RTL />,
    collapse: [
      {
        name: "Map générale",
        route: "/rtl/general-map",
      },
      {
        name: "Carte interactive des installations et infrastructures",
        route: "/rtl/interactive-map",
      },
      {
        name: "Localisation des véhicules",
        route: "/rtl/vehicle-location",
      },
      {
        name: "Zones de contrôle",
        route: "/rtl/control-zones",
      },
    ],
  },
  {
    type: "collapse",
    name: "Controle",
    key: "notifications",
    icon: <Icon fontSize="small">check_circle</Icon>,
    route: "/notifications",
    component: <Notifications />,
    collapse: [
      {
        name: "Enregistrement des véhicules",
        route: "/notifications/vehicle-registration",
      },
      {
        name: "Gestion des autorisations de sortie et d’entrée",
        route: "/notifications/permissions",
      },
      {
        name: "Maintenance préventive",
        route: "/notifications/maintenance",
      },
    ],
  },
  {
    type: "collapse",
    name: "Suivi des Stocks et Matériel",
    key: "profile",
    icon: <Icon fontSize="small">check_circle</Icon>,
    route: "/profile",
    component: <Profile />,
    collapse: [
      {
        name: "Inventaire des équipements",
        route: "/profile/equipment-inventory",
      },
      {
        name: "Alertes de renouvellement",
        route: "/profile/renewal-alerts",
      },
      {
        name: "Suivi des mouvements de matériel",
        route: "/profile/material-movements",
      },
      {
        name: "Analyse des besoins en matériel",
        route: "/profile/material-needs-analysis",
      },
      {
        name: "Enregistrement matériels",
        route: "/profile/material-registration",
      },
    ],
  },
  {
    type: "collapse",
    name: "Rapport et Analyse",
    key: "sign-in",
    icon: <Icon fontSize="small">analytics</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    collapse: [
      {
        name: "Rapports de performance",
        route: "/authentication/performance-reports",
      },
      {
        name: "Statistiques de sécurité",
        route: "/authentication/security-statistics",
      },
      {
        name: "Suivi des interventions et des opérations militaires",
        route: "/authentication/interventions-tracking",
      },
    ],
  },
  {
    type: "collapse",
    name: "Paramètres",
    key: "sign-up",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    collapse: [
      {
        name: "Gestion des utilisateurs et rôles",
        route: "/authentication/user-management",
      },
      {
        name: "Paramètres de la carte",
        route: "/authentication/map-settings",
      },
      {
        name: "Configuration des alertes et notifications",
        route: "/authentication/alerts-settings",
      },
      {
        name: "Configuration GIS",
        route: "/authentication/gis-settings",
      },
    ],
  },
];

export default routes;
