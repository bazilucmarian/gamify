import PropTypes from 'prop-types';

import ChallengesSection from '../../components/challenges-section';
import EmptyPlaceholder from '../../components/empty-placeholder';
import useValidationChallenges from '../../hooks/queries/use-validation-challenges';
import useStatusChangeMutation from '../../hooks/mutations/use-status-change-mutation';
import ChallengeCard from '../../components/challenge-card';
import {emptyMessage} from '../../constants/messages';

function ValidationPageAdmin({user}) {
  // query
  const {data: challengesToBeValidated, isLoading} = useValidationChallenges(user);

  // mutation
  const {mutate: handleChangeStatus} = useStatusChangeMutation(user);
  const changeStatusHandler = challenge => newStatus => {
    handleChangeStatus({challengeId: challenge.id, userId: challenge.userId, newStatus});
  };

  if (isLoading) {
    return null;
  }

  if (!challengesToBeValidated.length) {
    return <EmptyPlaceholder message={emptyMessage.validationPage} />;
  }
  return (
    <ChallengesSection title="Challenges to be validated" hasData={challengesToBeValidated.length}>
      {challengesToBeValidated.map(challenge => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
          isAdmin
          onChangeStatus={changeStatusHandler(challenge)}
        />
      ))}
    </ChallengesSection>
  );
}

ValidationPageAdmin.propTypes = {
  user: PropTypes.object.isRequired
};

export default ValidationPageAdmin;
