import React from 'react';
import { useRoutes } from 'react-router-dom';

import CalculatorFC from '../components/Calculator';
import CalculatorCC from '../components/CalculatorCC';
import PageNotFound from '../components/Common/PageNotFound';
import Layout from '../components/Layout/Layout';
import Settings from '../components/Settings';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
        children: [
        { element: <CalculatorFC />, index: true },
        // { path: 'homecc', element: <CalculatorCC /> },
        // { path: 'settings', element: <Settings /> },
        // { path: '*', element: <PageNotFound /> },
      ]
    }
  ]);

}

export default Router;