import { p2pUrl } from 'web/src/api/config';
import { useUser } from 'web/src/components/app/AppContext';
import { FetchError, fetchWithCreds } from 'web/src/helpers/fetch';
import { AdvertParams } from 'web/src/modules/p2p/types';
import { useFetch } from './useFetch';

export const useFetchP2PLastFilter = () => {
  const user = useUser();

  return useFetch<Partial<AdvertParams>>(
    user ? `${p2pUrl()}/profile/last-filter/` : null,
    async (url) => {
      try {
        const response = await fetchWithCreds(url);

        return response;
      } catch (error: unknown) {
        if (
          error instanceof FetchError &&
          error.code === 404 &&
          error.payload.code === 'ObjectNotFound'
        ) {
          return {};
        }

        throw error;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
