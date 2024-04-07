import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PaginationPage from "./pages/PaginationPage/PaginationPage";
const LazyPage = React.lazy(() => import("./pages/LazyLoadedPage/LazyPage"));

function App() {
    return (
        <>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <>
                            <PaginationPage />
                            <NavLink to={"/lazy"}>Lazy loaded page</NavLink>
                        </>
                    }
                />
                <Route
                    path={"/lazy"}
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <LazyPage />
                        </React.Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
