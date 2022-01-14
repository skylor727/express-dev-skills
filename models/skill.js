let skills = [
  { skill: "Javascript", id: 1, mastered: true },
  { skill: "Html", id: 2, mastered: false },
  { skill: "CSS", id: 3, mastered: false },
  { skill: "Express", id: 4, mastered: false },
  { skill: "Node", id: 5, mastered: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function create(skill) {
  skill.id = skills.length + 1;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((s) => s.id === id);
}

function deleteOne(id) {
  id = parseInt(id);
  skills = skills.filter((skill) => skill.id !== id);
}
