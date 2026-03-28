const express = require("express");
const router = express.Router();

let { people } = require("./data");

router.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// THE POST METHOD

router.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, provide a user name.` });
  }
  res.status(201).send({ succcess: true, person: name });
});

router.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, providde a user name.` });
  }
  res.status(201).send({ succcess: true, data: [...people, name] });
});

// THE PUT METHOD

router.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `The person with id ${id} does not exists.`,
    });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// THE DELETE METHOD

router.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res.status(404).json({
      succcess: false,
      msg: `No person with id ${req.params.id} exists.`,
    });
  }
  const newPerson = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  return res.status(200).json({ success: true, data: newPerson });
});

module.exports = router;
