import React from "react";
import LazyComponent from "./components/LazyComponent";

const LazyPage = () => {
    return (
        <>
            <div>Lazy loaded page</div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </React.Suspense>
        </>
    );
};

export default LazyPage;
