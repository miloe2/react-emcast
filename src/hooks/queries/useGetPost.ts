import { getPostDetail } from "../../api/post";
import { queryKeys } from "../../constants/index";
import { useQuery } from "@tanstack/react-query";

function useGetPost(id: number) {
  return useQuery({
    queryKey: [queryKeys.POST, id],
    queryFn: () => getPostDetail(id),
    enabled: Boolean(id),
  });
}
export { useGetPost };
