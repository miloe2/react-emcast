import { Toolbar } from "@mui/material";
import Navigation from "../components/Navigation";
import PostListContainer from "../components/PostListContainer";

function Home() {
  return (
    <>
      <Navigation />
      <Toolbar />
      <PostListContainer />
    </>
  );
}

export default Home;
