import { useDispatch, useSelector } from 'react-redux';
import { getDataOrgs } from './middleware/data/orgs';
import { useEffect, useState, useMemo } from 'react'; // Import useMemo

interface UseGetDataHookProps<T> {
  params: T;
  configInfo: {
    getterFunction: string;
    reduxObjectPath: string;
  };
  cacheOption: boolean;
}

export function useGetDataHook<T>({
  params,
  configInfo,
  cacheOption,
}: UseGetDataHookProps<T>) {
  const reduxVar = useSelector(
    (state: any) => state[configInfo.reduxObjectPath]
  );
  const clonedParams: T = structuredClone(params);
  const dispatch = useDispatch();
  let [data, setData] = useState<any[]>([]);
  let [error, setError] = useState<any>(null);
  const instance = useMemo(() => new GetterFunction(), []);

  useEffect(() => {
    if (typeof instance[configInfo.getterFunction] === 'function') {
      instance[configInfo.getterFunction]({
        params: clonedParams,
        cacheOption,
        dispatch,
        onSuccess: (data: any) => {
          setData(data);
        },
        onError: (error: any) => {
          setError(error);
        },
        reduxVar,
      });
    }
  }, []);

  return { data, error };
}

class GetterFunction {
  [key: string]: any;

  getDataOrgs(props: any) {
    getDataOrgs(props);
  }
}
