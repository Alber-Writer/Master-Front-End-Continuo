import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  specificProducts: string;
  checkout: string;
}

export const SWICHTROUTES: SwitchRoutes = {
  root: "/",
  specificProducts: "/products/:category/:pageId/",
  checkout: "/checkout/",
};

interface Routes extends Omit<SwitchRoutes, "specificProducts"> {
  specificProducts: (category: string, pageId: string) => string;
}

export const routes: Routes = {
  ...SWICHTROUTES,
  specificProducts: (category, pageId) =>
    generatePath(SWICHTROUTES.specificProducts, { category, pageId }),
};