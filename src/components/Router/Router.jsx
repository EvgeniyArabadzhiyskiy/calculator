import Layout from 'components/Layout/Layout';
import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import Products from 'pages/Products/Products';
import Registration from 'pages/Registration/Registration';
import SettingsPage from 'pages/SettingsPage/SettingsPage';

import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="settings" element={<SettingsPage />}>
                <Route index element={<About />} />

                <Route path="products/:id/:animal" element={<Products />}>
                    <Route path="allItems" element={<h1>ITEMS</h1>} />
                </Route>
            </Route>

          <Route path="registration" element={<Registration />} >
            {/* <Route index element={<About />} /> */}
            <Route path='about' element={<About />} />
          </Route>
        </Route>
    </Routes>
  );
};
export default Router;




// import Layout from 'components/Layout/Layout';
// import About from 'pages/About/About';
// import Home from 'pages/Home/Home';
// import Products from 'pages/Products/Products';
// import SettingsPage from 'pages/SettingsPage/SettingsPage';

// import { useRoutes } from 'react-router-dom';

// const Router = () => {
//   let element = useRoutes([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         { index: true, element: <Home /> },
//         {
//           path: 'settings',
//           element: <SettingsPage />,

//           children: [
//             { index: true, element: <About /> },
//             {
//               path: 'products/:id/:animal',
//               element: <Products />,

//               children: [{ path: 'allItems', element: <h1>ITEMS</h1> }],
//             },
//           ],
//         },
//         { path: 'registration', element: <h1>REGISTRATION</h1> },
//       ],
//     },
//   ]);

//   return element;
// };

// export default Router;
