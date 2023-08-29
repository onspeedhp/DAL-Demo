import { supabase } from '../../../utils/supabaseClient';
import {
  setLastFetch,
  setOrgsInfo,
} from '../../redux/reducers/orginfo.reducer';

export const getDataOrgs = async ({
  params,
  cacheOption,
  dispatch,
  onSuccess,
  onError,
  reduxVar,
}: {
  params: any;
  cacheOption?: boolean;
  dispatch: any;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  reduxVar: any;
}) => {
  const { userId } = params;
  const { orgs, lastFetch } = reduxVar;
  const now = new Date().getTime();

  if (
    cacheOption &&
    lastFetch !== -1 &&
    now - lastFetch <= Number(process.env.REACT_APP_CACHE_TIME!)
  ) {
    return orgs;
  } else {
    const { data, error } = await supabase
      .from('user_org')
      .select('*')
      .eq('user_id', userId);
    if (!error) {
      onSuccess(data);
      dispatch(setOrgsInfo(orgs));
      dispatch(setLastFetch({}));
    } else {
      onError(error);
      return error;
    }
  }
};
