import { Toolbar } from "@mui/material";
import Navigation from "../components/Navigation";
import PostList from "../components/PostList";

function Home() {
  return (
    <>
      <Navigation />
      <Toolbar />
      <PostList />
    </>
  );
}

export default Home;
