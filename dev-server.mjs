import { createServer } from 'vite';

const host = '0.0.0.0';
const port = 5173;

const server = await createServer({
  server: {
    host,
    port,
    strictPort: true,
  },
});

await server.listen();

console.log(`Vite dev server listening on http://localhost:${port}/`);

process.on('SIGINT', async () => {
  await server.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await server.close();
  process.exit(0);
});
