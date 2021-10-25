const { Router } = require("express");
const validateSession = require("../middleware/validate-session");
const { Calendar } = require("../models");

const router = Router();

router.post("/create", validateSession, (req, res) => {
  const calendarAdd = {
    event: req.body.calendar.event,
    date: req.body.calendar.date,
    time: req.body.calendar.time,
    userId: req.user.id,
  };
  Calendar.create(calendarAdd)
    .then((calendar) => res.status(200).json(calendar))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/:id", validateSession, function (req, res) {
  const updateCalendar = {
    event: req.body.calendar.event,
    date: req.body.calendar.date,
    time: req.body.calendar.time,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id, userId: req.user.id } };

  Calendar.update(updateCalendar, query)
    .then((events) => res.status(200).json(events))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", validateSession, (req, res) => {
  Calendar.findAll({ where: { userId: req.user.id } })
    .then((events) => res.status(200).json(events))
    .catch((err) => res.status(500).json(events));
});

router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, userId: req.user.id } };

  Calendar.destroy(query)
    .then(() => res.status(200).json({ message: "Entry Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;
