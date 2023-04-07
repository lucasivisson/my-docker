import express from 'express';
const PORT = 3000;

const app = express();

app.get('/', (request, response) => {
  response.send('Running Node.js')
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
});