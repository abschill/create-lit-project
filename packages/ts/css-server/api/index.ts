import express from 'express';
import path from 'path';
const api = express();

api.use(express.static(path.join(process.cwd(), 'public')));

export { api };
