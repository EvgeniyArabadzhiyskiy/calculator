import Settings from 'components/Settings';
import { Link, Outlet, useLocation } from 'react-router-dom';

const SettingsPage = () => {
  const location = useLocation();
  // console.log("SettingsPage", location);
  return (
    <div>
      <Settings />
      <Link to="products/256/slon"
       state={{ from: location }}
       >TO PRODUCT</Link>

      <Outlet />
    </div>
  );
};
export default SettingsPage;
