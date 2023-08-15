import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  products: string;
  productsTease:string;
  checkout: string;
}

export const SWICHTROUTES: SwitchRoutes = {
  root: "/",
  products: "/products/:category/:pageId/",
  productsTease: "/products/",//TODO: delete... only helper
  checkout: "/checkout/",
};

interface Routes extends Omit<SwitchRoutes, "products"> {
  products: (category: string, pageId: string) => string;
}

export const routes: Routes = {
  ...SWICHTROUTES,
  products: (category, pageId) =>
    generatePath(SWICHTROUTES.products, { category, pageId }),
};
