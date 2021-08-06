/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
// import EmptyPlaceholder from '../../components/empty-placeholder';
import {getInProgressOrCompletedChallenges, getItemsAddedToShoppingList} from '../../services/services';
import {changeStatusRequest} from '../../services/services-utils';
import ShopSection from '../../components/shop-section';
// import {getTotalXpAndCredits} from '../../utils';

function OverviewPage({loggedInUserId, setLoggedInUser}) {
  const [inProgressOrPendingChallenges, setInProgressOrPendingChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  // const {xpTotal, creditsTotal} = getTotalXpAndCredits(completedChallenges);

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

  // if (inProgressOrPendingChallenges.length === 0 && completedChallenges.length === 0) {
  //   return <EmptyPlaceholder message="Sorry... You have no challenge in progress or completed 😔" />;
  // }
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
  loggedInUserId: PropTypes.number.isRequired
};

export default OverviewPage;
