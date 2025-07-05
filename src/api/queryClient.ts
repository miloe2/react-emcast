import { QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 20 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

queryClient.getQueryCache().subscribe(event => {
  const query = event.query;
  if (query?.state.status === 'error') {
    console.error("Query Error:", query.state.error);
    toast.error(query.state.error?.message || "데이터 로딩 실패");
  }
});

queryClient.getMutationCache().subscribe(event => {
  const mutation = event.mutation;
  if (mutation?.state.status === 'error') {
    console.error("Mutation Error:", mutation.state.error);
    toast.error(mutation.state.error?.message || "요청 실패");
  }
});


export default queryClient;
