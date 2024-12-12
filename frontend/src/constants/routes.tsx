import { RouteType, RouteGroups } from "../types/Troutes"
import { AboutPage } from "../pages/AboutPage"
import { ArticlesPage } from "../pages/ArticlesPage"
import { ProjectPage } from "../pages/ProjectPage"
import { ContactPage } from "../pages/ContactPage"
import { ReadingPage } from "../pages/ReadingPage"



export const ALL_ROUTES: RouteType[] = [
    {
        group: RouteGroups.PUBLIC,
        name: "About", 
        path: "/", 
        offcanvas: true,
        element: <AboutPage />,
    },
    {
        group: RouteGroups.PUBLIC,
        name: "Articles", 
        path: "/articles", 
        element: <ArticlesPage />,
        offcanvas: true
    },
    {
        group: RouteGroups.PUBLIC,
        name: "Project", 
        path: "/project", 
        element: <ProjectPage />,
        offcanvas: true
    },
    {
        group: RouteGroups.PUBLIC,
        name: "Contact", 
        path: "/contact", 
        element: <ContactPage />,
        offcanvas: true
    },
    {
        group: RouteGroups.PRIVATE,
        name: "Reading", 
        path: "/reading", 
        element: <ReadingPage />,
        offcanvas: true
    }
]

export const ALL_ROUTES_PUBLIC: RouteType[] = ALL_ROUTES.filter((route) => route.group === RouteGroups.PUBLIC)

export const ALL_ROUTES_PRIVATE: RouteType[] = ALL_ROUTES.filter((route) => route.group === RouteGroups.PRIVATE)

export const ALL_ROUTES_ADMIN: RouteType[] = ALL_ROUTES.filter((route) => route.group === RouteGroups.ADMIN)

export const ALL_ROUTES_AUTH: RouteType[] = ALL_ROUTES.filter((route) => route.group === RouteGroups.AUTH)