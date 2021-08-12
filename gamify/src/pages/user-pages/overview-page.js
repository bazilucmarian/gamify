import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import EmptyPlaceholder from '../../components/empty-placeholder';
import {getInProgressOrCompletedChallenges, getItemsAddedToShoppingList} from '../../services/services';
import {changeStatusRequest} from '../../services/services-utils';
import ShopSection from '../../components/shop-section';
import {USER_CHALLENGES_PAGE_ROUTE_LINK} from '../../constants/routes';

function OverviewPage({loggedInUserId}) {
  const [inProgressOrPendingChallenges, setInProgressOrPendingChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  const handleChangeStatus = async (challengeId, newStatus, userId = loggedInUserId, operation) => {
    const newUpdatedState = await changeStatusRequest(
      inProgressOrPendingChallenges,
      challengeId,
      newStatus,
      userId,
      operation
    );
    setInProgressOrPendingChallenges(newUpdatedState);
  };

  useEffect(() => {
    const getUserChallenges = async () => {
      const getFilteredUserChallenges = await getInProgressOrCompletedChallenges(loggedInUserId);
      setInProgressOrPendingChallenges(getFilteredUserChallenges.inProgressChallenges);
      setCompletedChallenges(getFilteredUserChallenges.completedChallenges);
    };

    getUserChallenges();

    const getShopItems = async () => {
      const shopItems = await getItemsAddedToShoppingList(loggedInUserId);
      setShoppingList(shopItems);
    };
    getShopItems();
  }, [loggedInUserId]);

  if (!inProgressOrPendingChallenges.length && !completedChallenges.length) {
    return (
      <EmptyPlaceholder
        message="Sorry... You have no challenge in progress or completed 😔"
        pathRedirect={USER_CHALLENGES_PAGE_ROUTE_LINK}
      />
    );
  }
  return (
    <div className="home-page">
      <ChallengesSection
        title="In progress Challenges"
        filteredChallenges={inProgressOrPendingChallenges}
        handleChangeStatus={handleChangeStatus}
        isScrollable
      />
      <ChallengesSection
        title="Completed Challenges"
        filteredChallenges={completedChallenges}
        handleChangeStatus={handleChangeStatus}
        isScrollable
      />

      <ShopSection title="Purchased products" shopItems={shoppingList} />
    </div>
  );
}

OverviewPage.propTypes = {
  loggedInUserId: PropTypes.number
};

OverviewPage.defaultProps = {
  loggedInUserId: 123
};
export default OverviewPage;
