import { RoutePath } from '@/constants/routes';
import { Link, useLocation } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();
  return (
    <div>
      MainPage
      <Link to={RoutePath.TWEETS} state={{ from: location }}>
        Tweets
      </Link>
    </div>
  );
};

export default MainPage;
