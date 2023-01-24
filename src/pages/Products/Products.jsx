import { BackLink } from 'components/BackLink/BackLink.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';


const Products = () => {
    const location = useLocation();
    const params = useParams()
    console.log("Products ~ params", params);
    // console.log("Products", location.state?.from.state?.from.pathname);

    const toBack = location.state?.from.state?.from || "/settings"
    console.log("TO:", toBack);



  return (
    <div>
      <h1>PRODUCTS</h1>
      <BackLink to={toBack}>BACK LINK</BackLink>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        voluptatibus, suscipit aliquid quia nisi est voluptate sit quam rerum
        at? Quo commodi porro eligendi perspiciatis quod amet molestiae officiis
        illum eveniet repellendus nobis, neque dolorem iure nemo ab voluptates
        non aut nisi est modi obcaecati maiores. Reiciendis reprehenderit
        eveniet molestias eum est eius vero corrupti inventore, explicabo, modi
        laborum libero!
      </p>
      <div style={{ height: '100px' }}></div>
      <Link to="allitems"
      state={{ from: location }}
      >ALL Products
      </Link>
      <Outlet />
    </div>
  );
};

export default Products;
