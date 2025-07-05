import { getPostDetail } from "../../api/posts";
import { queryKeys } from "../../constants/index";
import { useQuery } from "@tanstack/react-query";

function useGetPost(id: number) {
  return useQuery({
    queryKey: [queryKeys.POST, id],
    queryFn: () => getPostDetail(id),
    enabled: id !== null,
  });
}
export { useGetPost };
