import { useFetch } from "./net";

export function useTagListQuery() {
  const { data, loading } = useFetch("/api/tags");
  return loading ? [] : data.data;
}
