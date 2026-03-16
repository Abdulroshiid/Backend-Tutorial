const express = require("express");
const app = express();
const PORT = 5000;
let { people } = require("./data");
// Static assets
app.use(express.static("./methods-public"));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res
      .status(200)
      .send(`Welcome, ${name}, your account have been created successfully.`);
  } else {
    res.status(401).send(`Please, enter a user name.`);
  }
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// THE POST METHOD

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, provide a user name.` });
  }
  res.status(201).send({ succcess: true, person: name });
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: `Please, providde a user name.` });
  }
  res.status(201).send({ succcess: true, data: [...people, name] });
});

// THE PUT METHOD

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id} exists.` });
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

app.delete("/api/people/:id", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});
