import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  specificProducts: string;
  generalProducts:string;
  checkout: string;
}

export const SWICHTROUTES: SwitchRoutes = {
  root: "/",
  specificProducts: "/products/:category/:pageId/",
  generalProducts: "/products/",
  checkout: "/checkout/",
};

interface Routes extends Omit<SwitchRoutes, "products"> {
  products: (category: string, pageId: string) => string;
}

export const routes: Routes = {
  ...SWICHTROUTES,
  products: (category, pageId) =>
    generatePath(SWICHTROUTES.specificProducts, { category, pageId }),
};
