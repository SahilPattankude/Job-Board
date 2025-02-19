import express from "express";

import authenticateToken from "../middleware/isAuth.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/post").post(authenticateToken, postJob);
router.route("/get").get(authenticateToken, getAllJobs);
router.route("/getadminjobs").get(authenticateToken, getAdminJobs);
router.route("/get/:id").get(authenticateToken, getJobById);
export default router;