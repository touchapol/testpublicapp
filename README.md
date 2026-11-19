# testpublicapp

Minimal Node.js app for testing NodeCloud deploys. No dependencies.

- Listens on `PORT` (default `3000`)
- `GET /` shows a status page
- `GET /health` returns JSON

```bash
npm start
```

Deploys automatically on NodeCloud when `main` gets a new commit.
