const app = require('./app.js');

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`App in localhost:${PORT}`);
});
