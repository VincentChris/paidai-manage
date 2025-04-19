import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono!');
});

const port = parseInt(process.env.PORT || '8000');

// eslint-disable-next-line no-console
console.log(`Server is running on port ${port}`);

export default {
  port,
  fetch: app.fetch
};
