import { Toolbar } from "@mui/material";
import Navigation from "../components/Navigation";
import PostListContainer from "../components/PostListContainer";
import { useLocation } from "react-router-dom";
import PostSearchResult from "../components/PostSearchResult";
import WriteButton from "../components/WriteButton";
import { useStore } from "../stores";

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get("search") ?? "";
  const { user } = useStore();

  return (
    <>
      <Navigation />
      <Toolbar sx={{ marginBottom: 6 }} />
      {!keyword ? (
        <PostListContainer />
      ) : (
        <PostSearchResult keyword={keyword} />
      )}
      {user?.role === "admin" || user?.role === "user" ? <WriteButton /> : null}
    </>
  );
}

export default Home;
