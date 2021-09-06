import React from 'react';

import NotFound from '../assets/imgs/notFound.svg';
import EmptyPlaceholder from '../components/empty-placeholder';
import {emptyMessage} from '../constants/messages';
import {USER_CHALLENGES_PAGE_ROUTE_LINK} from '../constants/routes';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <EmptyPlaceholder
        message={emptyMessage.notFound}
        image={NotFound}
        pathRedirect={USER_CHALLENGES_PAGE_ROUTE_LINK}
      />
    </div>
  );
}

export default NotFoundPage;
