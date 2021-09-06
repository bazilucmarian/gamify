import { userChallengesModel } from "../models/user-challenges-model";
import { challengeModel } from "../models/challenge-model";
import { userModel as User, userModel } from "../models/user-model";
import {
  filterChallengesByStatuses,
  getChallengesWithStatus,
  getUserChallengesIds,
} from "../utils";

/*
Description:  Fetch all challenges available
Route:        GET /api/user-challenges/available"
Access:   Public
*/

const getAvailableChallenges = async (req, res) => {
  const pageNumber = Number(req.query._page);
  const pageSize = Number(req.query._limit);

  try {
    const [{ challenges: userChallenges }] = await userChallengesModel.find({
      userId: req.user._id,
    });

    const userChallengesIds = userChallenges
      .filter(({ status }) => status !== "available")
      .map(({ challengeId }) => challengeId);

    const allChallengesFromDatabase = await challengeModel.find({});

    const availableChallengesPaginated = allChallengesFromDatabase
      .filter(({ _id }) => !userChallengesIds.includes(_id))
      .map((challenge) => ({
        ...challenge._doc,
        status: "available",
        userId: req.user._id,
        id: challenge._id,
      }))
      .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

    const totalAvailableChallenges = allChallengesFromDatabase.filter(
      ({ _id }) => !userChallengesIds.includes(_id)
    ).length;

    res.status(200).json({
      challenges: availableChallengesPaginated,
      totalAvailable: totalAvailableChallenges,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  Fetch in in pending and in progress challenges
Route:        GET /api/user-challenges/progress-pending"
Access:   Public
*/

const getInProgressOrCompletedChallenges = async (req, res) => {
  try {
    const [{ challenges: userChallenges }] = await userChallengesModel.find({
      userId: req.user._id,
    });

    const allChallengesFromDatabase = await challengeModel.find({});

    const userChallengesIds = getUserChallengesIds(userChallenges);

    const filteredChallengesWithStatus = getChallengesWithStatus(
      allChallengesFromDatabase,
      userChallenges,
      userChallengesIds,
      req.user._id
    );

    const inProgressOrPendingChallenges = filterChallengesByStatuses(
      filteredChallengesWithStatus,
      ["inPending", "inProgress"]
    );
    const completedChallenges = filterChallengesByStatuses(
      filteredChallengesWithStatus,
      ["validated", "denied"]
    );
    res
      .status(200)
      .json({ inProgressOrPendingChallenges, completedChallenges });
  } catch (error) {
    res.status(500).json({
      message:
        "Server problem 💻: Cannot fetch in in progress or completed challenges ",
    });
    console.error(error);
  }
};

/*
Description:  Get in pending challenges in admin section for validate them
Route:        GET /api/user-challenges/validation"
Access:   ADMIN
*/

const getChallengesForValidation = async (req, res, next) => {
  try {
    const allChallengesFromDatabase = await challengeModel.find({});
    const userChallenges = await userChallengesModel.find({});

    const challengesToBeValidated = userChallenges.map(
      async (userChallenge) => {
        const [userDetails] = await User.find({
          _id: userChallenge?.userId,
        });
        const {
          _id: userId,
          username,
          job,
          profilePicture,
        } = userDetails || {};

        const userChallengesIds = userChallenge?.challenges?.map(
          ({ status, challengeId }) => status === "inPending" && challengeId
        );

        return allChallengesFromDatabase
          .filter(({ _id }) => userChallengesIds.includes(_id.toString()))
          .map(({ _id, ...restOfChallengeProps }) => ({
            ...restOfChallengeProps._doc,
            status: "inPending",
            userId,
            userName: username,
            jobTitle: job,
            profilePicture,
            id: _id,
          }));
      }
    );

    const challengesToBeValidatedResponse = await Promise.all(
      challengesToBeValidated
    ).then((challenges) => challenges.flat());
    res.status(200).json(challengesToBeValidatedResponse);
  } catch (error) {
    res.status(500).json({
      message:
        "Server problem 💻: Cannot fetch challenges which must be validated",
    });
    console.error(error);
  }
};

/*
Description:   Change status for a challenge ("availabe/inPending/inProgress/validated/denied")
Route:       PUT /api/user-challenges/:challengeId/:userId?newStatus=?"
Access:   PUBLIC/ADMIN
*/

const updateUserChallenge = async (req, res) => {
  try {
    const [userChallenge] = await userChallengesModel.find({
      userId: req.params.userId,
    });

    const singleChallengeIndex = userChallenge.challenges.findIndex(
      ({ challengeId }) => challengeId === req.params.challengeId
    );

    if (singleChallengeIndex !== -1) {
      userChallenge.challenges[singleChallengeIndex].status =
        req.query.newStatus;
    } else {
      userChallenge.challenges.push({
        challengeId: req.params.challengeId,
        status: req.query.newStatus,
      });
    }
    const userChallengesUpdated = await userChallenge.save();
    userChallengesUpdated &&
      res
        .status(200)
        .json({ message: `Your challenge is ${req.query.newStatus} now 😀` });

    // just for admin validation
    if (req.query.newStatus === "validated") {
      const [user] = await userModel.find({
        _id: req.params.userId,
      });
      const [challengeValidated] = await challengeModel.find({
        _id: req.params.challengeId,
      });

      user.xp += Number(challengeValidated.xp);
      user.credits += Number(challengeValidated.credits);
      const userUpdated = await user.save();
      userUpdated &&
        res.status(200).json({
          message: `Successfully validate challenge for ${userUpdated.username} ✅✅ `,
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server problem 💻: Cannot update challenge" });
  }
};

export {
  getAvailableChallenges,
  getInProgressOrCompletedChallenges,
  updateUserChallenge,
  getChallengesForValidation,
};
