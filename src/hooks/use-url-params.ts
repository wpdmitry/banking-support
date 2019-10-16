import useRouter from "./use-router";

function useUrlParams<T>() {
  const { match } = useRouter();
  return match.params as T;
}

export default useUrlParams;
