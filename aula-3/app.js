import express from "express";

const app = express();
app.use(express.json()); // middleware para converter o body em json

let listUsers = [];

app.get("/users", (request, response) => {
  response.status(200).json(listUsers);
});

app.post("/users", (request, response) => {
  const user = request.body;
  listUsers.push(user);
  response.status(201).send(listUsers);
});

app.delete("/users/:id", (request, response) => {
  const { id } = request.params; // Destructing

  const userToDelete = listUsers.find((user) => user.id === Number(id));

  if (!userToDelete) {
    response.status(404).json({ message: "User not found" });
    return;
  }

  listUsers = listUsers.filter((user) => user.id != id);
  response.status(204).end();
});

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const userToUpdate = listUsers.find((user) => user.id === Number(id));

  if (!userToUpdate) {
    response.status(404).json({ message: "User not found" });
    return;
  }

  const updatedUser = request.body;

  if (newData.name) {
    userToUpdate.name = newData.name;
  }

  if (newData.age) {
    userToUpdate.age = newData.age;
  }

  if (newData.married !== undefined && newData.married !== null) {
    user.married = newData.married;
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
