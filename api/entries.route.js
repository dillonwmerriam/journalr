import express from "express"
import EntriesCtrl from "./entries.controller.js"
import DeletedEntriesCtrl from "./deletedEntries.controller.js"

const router = express.Router()

router.route("/").get(entriesCtrl.apiGetentries)
router.route("/id/:id").get(entriesCtrl.apiEntryById)
router.route("/entries").get(entriesCtrl.apiGetEntries)

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router