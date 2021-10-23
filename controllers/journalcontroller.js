// const { Router } = require("express");
// const validateSession = require("../middleware/validate-session");
// const { Journal } = require("../models/journal");

// const router = Router();

// router.post("/create", validateSession, (req, res) => {
//   const journalAdd = {
//     date: req.body.journal.date,
//     title: req.body.journal.title,
//     entry: req.body.journal.entry,
//     userId: req.user.id,
//   };
//   Journal.create(journalAdd)
//     .then((journals) => res.status(200).json(journals))
//     .catch((err) => res.status(500).json({ error: err }));
// });

// router.put("/journal/:id", validateSession, function (req, res) {
//   const updateJournal = {
//     date: req.body.journal.date,
//     title: req.body.journal.title,
//     entry: req.body.journal.entry,
//     userId: req.user.id,
//   };

//   const query = { where: { id: req.params.id } };

//   Journal.update(updateJournal, query)
//     .then((journals) => res.status(200).json(journals))
//     .catch((err) => res.status(500).json({ error: err }));
// });

// router.get("/journal/:id", validateSession, (req, res) => {
//   Journal.findAll({ where: { userId: req.user.id } })
//     .then((journals) => res.status(200).json(journals))
//     .catch((err) => res.status(500).json({ error: err }));
// });

// router.delete("/journal/:id", validateSession, function (req, res) {
//   const query = { where: { id: req.params.id, userId: req.user.id } };

//   Journal.destroy(query)
//     .then(() => res.status(200).json({ message: "Entry Deleted" }))
//     .catch((err) => res.status(500).json({ error: err }));
// });

// module.exports = router;