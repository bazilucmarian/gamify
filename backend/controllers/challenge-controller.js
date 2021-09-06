import { challengeModel as Challenge } from "../models/challenge-model";

/*
Description:  Fetch all challenges
Route:   GET  /api/challenges
Access:  PUBLIC/ADMIN
*/
const getChallenges = async (req, res) => {
  const pageFromUrl = Number(req.query._page);
  const pageSize = Number(req.query._limit);

  try {
    const challenges = await Challenge.find({})
      .limit(pageSize)
      .skip(pageSize * (pageFromUrl - 1));

    const totalAvailableChallenges = await Challenge.find({});
    if (challenges) {
      const challengesModified = challenges.map((challenge) => ({
        credits: challenge.credits,
        description: challenge.description,
        status: challenge.status,
        title: challenge.title,
        xp: challenge.xp,
        id: challenge._id,
      }));

      res.status(200).json({
        allChallenges: challengesModified,
        totalAvailable: totalAvailableChallenges.length,
      });
    } else {
      res.status(400).json({ message: "Not available challenges❗❗" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  Get challenge using challenge id
Route:    GET /api/challenges/:challengeId
Access:  PUBLIC/ADMIN
*/

const getChallengeById = async (req, res) => {
  try {
    const challenge = Challenge.findById(req.params.id);
    if (challenge) {
      res.status(200).json(challenge);
    } else {
      res.status(400).json({ message: "Challenge Not Found ❗⛔" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:   delete challenge using challenge id
Route:    DELETE /api/challenges/:challengeId
Access:  ADMIN
*/

const deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (challenge) {
      await challenge.remove();
      res.status(200).json({ message: "Successfully remove challenge ✅✅" });
    } else {
      res.status(404).json({ message: "Challenge Not Found ❗⛔" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:    create new challenge
Route:     POST /api/challenges"
Access:  ADMIN
*/

const createChallenge = async (req, res) => {
  try {
    const newChallenge = new Challenge({
      userId: req.user._id,
      title: req.body.title,
      description: req.body.description,
      xp: req.body.xp,
      credits: req.body.credits,
    });
    const createdChallenge = await newChallenge.save();
    if (createdChallenge) {
      res
        .status(200)
        .json({ message: "Successfully created new challenge ! ✅✅" });
    } else {
      res.status(400).json({
        message: "Oups.. something wrong with new challenge created ❗",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:    Update a challenge
Route:    PUT /api/challenges/:id
Access:  ADMIN
*/

const updateChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (challenge) {
      challenge.title = req.body.title;
      challenge.xp = req.body.xp;
      challenge.credits = req.body.credits;
      challenge.description = req.body.description;

      const updatedChallenge = await challenge.save();
      res.status(200).json({
        updatedChallenge,
        message: "Successfully update challenge ✅✅",
      });
    } else {
      res.status(404).json({ message: "Oups.. challenge not found ❗" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getChallenges,
  getChallengeById,
  deleteChallenge,
  createChallenge,
  updateChallenge,
};
