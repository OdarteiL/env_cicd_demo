import request from "supertest";
import app from "../src/app.js";

describe("ToDo API", () => {
  it("should return an empty list initially", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should add a new todo", async () => {
    const res = await request(app)
      .post("/api/todos")
      .send({ title: "Test Task" });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});
