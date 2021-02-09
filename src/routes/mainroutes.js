import { lazy } from "react";

export const mainRoutes = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: lazy(() => import("../pages/HomePage")),
        isPrivate: false,
        restricted: false,
    },
    {
        path: "/phonebook",
        name: "Phonebook",
        exact: false,
        component: lazy(() => import("../pages/PhonebookPage")),
        isPrivate: true,
        restricted: false,
    },
    {
        path: "/signup",
        name: "SignUp",
        exact: false,
        component: lazy(() => import("../components/auth/AuthForm")),
        isPrivate: false,
        restricted: true,
    },
    {
        path: "/signin",
        name: "SignIn",
        exact: false,
        component: lazy(() => import("../components/auth/AuthForm")),
        isPrivate: false,
        restricted: true,
    },
];