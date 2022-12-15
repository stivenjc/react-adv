import { lazy, LazyExoticComponent } from "react";
import { LaziPage1, LaziPage2, LaziPage3, NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

//*! aqui creamos en efecto de lazyload
const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: 'lazyPage1' */ "../01-lazyload/pages/LaziPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: 'lazyPage2' */ "../01-lazyload/pages/LaziPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: 'lazyPage3' */ "../01-lazyload/pages/LaziPage3")
);

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: 'lazyLayout' */ "../01-lazyload/layout/LazyLayout"
    )
);

export const router: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "lazy-3",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "no-lazy",
  },
  {
    to: "/lazyLayout",
    //** para que otro router siga rendereizando las rutas pero con esta al principio
    path: "lazyLayout/*",
    Component: LazyLayout,
    name: "lazyLayout",
  },
];
