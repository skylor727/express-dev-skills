const skills = [
  { id: 1, skill: "Get" },
  { id: 2, skill: "Post" },
  { id: 3, skill: "Put" },
  { id: 4, skill: "Delete" },
  { id: 5, skill: "Crud" },
];

module.exports = {
  getAll,
  getOne,
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}
