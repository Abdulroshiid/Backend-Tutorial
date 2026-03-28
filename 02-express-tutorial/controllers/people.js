let { people } = require("../data");

const getUser = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const post = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, provide a user name.` });
  }
  res.status(201).send({ succcess: true, person: name });
};

const postUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, providde a user name.` });
  }
  res.status(201).send({ succcess: true, data: [...people, name] });
};

const updateUser = (req, res) => {
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
};

const deleteUser = (req, res) => {
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
};

module.exports = { getUser, post, postUser, updateUser, deleteUser };
