// RouteMapper.js
import Custom404 from '@/commons/Custom404';
import UserList from './users/page';
import Landing from './landing';

const routeMap = {
  '/': Landing,
  '/users': UserList,
};

const RouteMapper = ({ path }) => {
  const Component = routeMap[path];

  if (!Component) {
    return (
      <Custom404 />
    )
  }

  return <Component />;
};

export default RouteMapper;
