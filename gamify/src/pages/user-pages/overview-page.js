import React from 'react';
import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import EmptyPlaceholder from '../../components/empty-placeholder';
import useStatusChangeMutation from '../../hooks/mutations/use-status-change-mutation';
import {USER_CHALLENGES_PAGE_ROUTE_LINK} from '../../constants/routes';
import useInProgressOrCompletedChallenges from '../../hooks/queries/use-in-progress-or-completed-challenges';
import ChallengeCard from '../../components/challenge-card';
import useShoppingCart from '../../hooks/queries/use-shopping-cart';
import ShopCard from '../../components/shop-card';
import ShopSection from '../../components/shop-section';
import useRemoveFromShoppingCartMutation from '../../hooks/mutations/use-remove-from-shopping-cart';
import {emptyMessage} from '../../constants/messages';

function OverviewPage({user}) {
  // mutation
  const {mutate: handleChangeStatus} = useStatusChangeMutation(user);

  const changeStatusHandler = challenge => newStatus => {
    handleChangeStatus({challengeId: challenge.id, userId: challenge.userId, newStatus});
  };

  // mutation
  const {mutate: removeFromShoppingCartHandler} = useRemoveFromShoppingCartMutation(user);

  // query
  const {
    data,
    isLoading: getChallengesLoading,
    isError: isErrorGetChallenges,
    error
  } = useInProgressOrCompletedChallenges(user);
  const {data: shopData, isLoading: shopDataLoading} = useShoppingCart(user);

  if (getChallengesLoading || shopDataLoading) {
    return null;
  }
  if (isErrorGetChallenges) {
    return <EmptyPlaceholder message={error.response.data.message} />;
  }
  if (!data.inProgressOrPendingChallenges.length && !data.completedChallenges.length) {
    return <EmptyPlaceholder message={emptyMessage.overviewPage} pathRedirect={USER_CHALLENGES_PAGE_ROUTE_LINK} />;
  }
  return (
    <div className="home-page">
      {/* in progress challenges section */}
      <ChallengesSection
        title="In progress Challenges"
        hasData={data.inProgressOrPendingChallenges.length}
        isScrollable
      >
        {data.inProgressOrPendingChallenges.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} onChangeStatus={changeStatusHandler(challenge)} />
        ))}
      </ChallengesSection>
      {/* completed challenges section (validated/denied) */}
      <ChallengesSection title="Completed Challenges" hasData={data.completedChallenges.length} isScrollable>
        {data.completedChallenges.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} onChangeStatus={changeStatusHandler(challenge)} />
        ))}
      </ChallengesSection>
      {/* shop section (user can see the products he bought ) */}

      <ShopSection title="Purchased Products" hasData={shopData.shoppingCart.length}>
        {shopData.shoppingCart.map(shopItem => (
          <ShopCard
            key={shopItem.title}
            shopItem={shopItem}
            isAdmin={user.role === 'Admin'}
            onRemoveFromShoppingCart={() => removeFromShoppingCartHandler(shopItem.id)}
          />
        ))}
      </ShopSection>
    </div>
  );
}

OverviewPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default OverviewPage;
