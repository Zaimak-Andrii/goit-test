import { LinkButton } from '@/components/common/buttons';
import { RoutePath } from '@/constants/routes';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Welcome to the home page of the GoIT test-task.</h1>
      <LinkButton to={RoutePath.TWEETS} state={{ from: location }}>
        Tweets &rarr;
      </LinkButton>
    </section>
  );
};

export default MainPage;
