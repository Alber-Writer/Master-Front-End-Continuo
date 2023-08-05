import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  productsAndCart: string;
  checkout: string;
}

export const SWICHTROUTES: SwitchRoutes = {
  root: "/",
  productsAndCart: "/products/:category/:pageId/",
  checkout: "/checkout/",
};

interface Routes extends Omit<SwitchRoutes, "productsAndCart"> {
  productsAndCart: (category: string, pageId: string) => string;
}

export const routes: Routes = {
  ...SWICHTROUTES,
  productsAndCart: (category, pageId) =>
    generatePath(SWICHTROUTES.productsAndCart, { category, pageId }),
};
