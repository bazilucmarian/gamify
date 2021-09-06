import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';

function Pagination({page, itemsLength, path}) {
  const history = useHistory();
  const nrPages = Math.ceil(itemsLength / 6);
  const totalProducts = itemsLength;

  useEffect(() => {
    if (page < 1) {
      history.push(`${path}?page=1`);
    } else if (page > nrPages) {
      history.push(`${path}?page=${nrPages}`);
    }
  }, [history, nrPages, page, path]);

  return (
    <div className="pagination">
      <Link to={`${path}?page=${page - 1}`} className={page <= 1 ? 'link-disabled' : ''}>
        ⬅Prev
      </Link>
      <p>
        Page {page} of {nrPages}{' '}
      </p>
      <p>{totalProducts} Products Total</p>
      <Link to={`${path}?page=${page + 1}`} className={page >= nrPages ? 'link-disabled' : ''}>
        Next➡
      </Link>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired
};
export default Pagination;
