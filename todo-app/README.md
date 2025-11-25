# Todo App

A simple REST API for managing todos built with Express.js.

## Features

- Get all todos
- Add a new todo
- Delete a todo by ID

## Installation

```bash
npm install
```

## Usage

### Start the server
```bash
npm start
```

The server will run on port 3000 by default.

### Run tests
```bash
npm test
```

### Run linter
```bash
npm run lint
```

## API Endpoints

### GET /api/todos
Returns all todos.

**Response:**
```json
[
  {
    "id": 1234567890,
    "title": "Sample todo"
  }
]
```

### POST /api/todos
Creates a new todo.

**Request body:**
```json
{
  "title": "New todo item"
}
```

**Response:**
```json
{
  "id": 1234567890,
  "title": "New todo item"
}
```

### DELETE /api/todos/:id
Deletes a todo by ID.

**Response:**
```json
{
  "message": "Deleted"
}
```

## Example Usage

```bash
# Get all todos
curl http://localhost:3000/api/todos

# Add a new todo
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries"}'

# Delete a todo (replace 123 with actual ID)
curl -X DELETE http://localhost:3000/api/todos/123
```
