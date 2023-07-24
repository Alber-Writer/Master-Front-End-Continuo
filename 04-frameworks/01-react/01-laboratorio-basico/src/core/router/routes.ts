import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string,
  list: string,
  details: string,
}

export const SWICHTROUTES: SwitchRoutes = {
  root: "/",
  list: "/list/:urlOrganization",
  details: "/detail/:urlOrganization/:id/",
}

interface Routes extends Omit<SwitchRoutes, "list" | "details"> {
  list: (urlOrganization: string) => string,
  details: (urlOrganization:string, id:string) => string,
}

export const routes: Routes = {
  ...SWICHTROUTES,
  list: (urlOrganization) => {
    //alert(generatePath(SWICHTROUTES.list, urlOrganization));
    return generatePath(SWICHTROUTES.list, {urlOrganization})},
  details: (urlOrganization, id) => generatePath(SWICHTROUTES.details, {urlOrganization, id}),
}