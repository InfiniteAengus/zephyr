import React, { Suspense } from "react";
import { Outlet, RouterProvider, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
const MainLayout = React.lazy(() => import("./layouts/Layout"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const Category = React.lazy(() => import("./pages/CategoryPage"));
const SubCollection = React.lazy(() => import("./pages/SubCollectionPage"));
const Product = React.lazy(() => import("./pages/ProductDetailPage"));

const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense>
      <MainPage />
    </Suspense>
  ),
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$categorySlug",
  component: () => (
    <Suspense>
      <Category />
    </Suspense>
  ),
});

const subCollectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$categorySlug/$subCollectionSlug",
  component: () => (
    <Suspense>
      <SubCollection />
    </Suspense>
  ),
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$categorySlug/$subCollectionSlug/$productSlug",
  component: () => (
    <Suspense>
      <Product />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([mainRoute, categoryRoute, subCollectionRoute, productDetailRoute]);
const router = createRouter({ routeTree, defaultPreload: "intent" });

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
