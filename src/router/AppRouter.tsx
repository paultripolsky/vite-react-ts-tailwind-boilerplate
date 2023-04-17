import React, {Suspense, FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "@/router/AppRouterConfig";

const AppRouter: FC = () => {
  return (
    <div>
      <Suspense fallback={'Loading...'}>
        <Routes>
          {Object.values(RouteConfig).map(({element, path}) => (
            <Route element={element} path={path}/>
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;