const { Router } = require("express");
const validateSession = require("../middleware/validate-session");
const { Meds } = require("../models");

const router = Router();

router.post("/create", validateSession, (req, res) => {
  const medsAdd = {
    medname: req.body.meds.medname,
    dose: req.body.meds.dose,
    frequency: req.body.meds.frequency,
    userId: req.user.id,
  };
  Meds.create(medsAdd)
    .then((meds) => res.status(200).json(meds))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/:id", validateSession, function (req, res) {
  const updateMeds = {
    medname: req.body.meds.medname,
    dose: req.body.meds.dose,
    frequency: req.body.meds.frequency,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id, userId: req.user.id } };

  Meds.update(updateMeds, query)
    .then((med) => res.status(200).json(med))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", validateSession, (req, res) => {
  Meds.findAll({ where: { userId: req.user.id } })
    .then((med) => res.status(200).json(med))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, userId: req.user.id } };

  Meds.destroy(query)
    .then(() => res.status(200).json({ message: "Entry Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
