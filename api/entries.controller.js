import EntriesDAO from "../dao/entriesDAO.js"

export default class EntriesController {
  static async apiGetEntries(req, res, next) {
    const entriesPerPage = req.query.entriesPerPage ? parseInt(req.query.entriesPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { entriesList, totalNumEntries } = await entriesDAO.getentries({
      filters,
      page,
      entriesPerPage,
    })

    let response = {
      entries: entriesList,
      page: page,
      filters: filters,
      entries_per_page: entriesPerPage,
      total_results: totalNumEntries,
    }
    res.json(response)
  }
  static async apiGetEntryById(req, res, next) {
    try {
      let id = req.params.id || {}
      let entry = await entriesDAO.getEntryByID(id)
      if (!entry) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(entry)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetEntryCuisines(req, res, next) {
    try {
      let cuisines = await entriesDAO.getCuisines()
      res.json(cuisines)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}