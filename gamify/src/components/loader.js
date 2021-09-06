import {useIsFetching, useIsMutating} from 'react-query';

import InfiniteIcon from '../icons/infinite-icon';

function Loading() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoaderVisible = !!(isFetching || isMutating);

  return isLoaderVisible && <InfiniteIcon />;
}

export default Loading;
