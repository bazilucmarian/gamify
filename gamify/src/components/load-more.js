import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

function LoadMore({hasNextPage, isFetchingNextPage, onFetchNextPage}) {
  return (
    <div className="load-more">
      {hasNextPage ? (
        <Button
          variant="outlined-secondary"
          color="secondary"
          size="md"
          onClick={() => onFetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          LOAD MORE ...
        </Button>
      ) : (
        <Button disabled title="There are no other products 😢">
          No more products
        </Button>
      )}
    </div>
  );
}

LoadMore.propTypes = {
  hasNextPage: PropTypes.bool.isRequired,
  isFetchingNextPage: PropTypes.bool.isRequired,
  onFetchNextPage: PropTypes.func.isRequired
};
export default LoadMore;
