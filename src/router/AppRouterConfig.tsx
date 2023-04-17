import {RouteProps} from "react-router-dom";
import {AboutPageAsync as AboutPage} from "@/pages/AboutPage/AboutPage.async";
import {MainPageAsync as MainPage} from "@/pages/MainPage/MainPage.async";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'error-page'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths["error-page"],
    element: 'Page not found'
  }
}