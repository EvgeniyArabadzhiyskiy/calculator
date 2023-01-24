import CalculatorFC from 'components/Calculator';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link
        to="/settings/products/256/slon/registration"
        style={{
          fontSize: '24px',
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        Registration
      </Link>
      <CalculatorFC />;
    </>
  );
};

export default Home;
