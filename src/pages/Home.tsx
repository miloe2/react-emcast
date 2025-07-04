import { Toolbar } from '@mui/material';
import Navigation from '../components/Navigation';
import PostListContainer from '../components/PostListContainer';
import { useLocation } from 'react-router-dom';
import PostSearchResult from '../components/PostSearchResult';

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get('search') ?? '';

  return (
    <>
      <Navigation />
      <Toolbar />
      {!keyword ? <PostListContainer /> : <PostSearchResult keyword={keyword} />}
    </>
  );
}

export default Home;
