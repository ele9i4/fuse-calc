import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { config } from 'dotenv';

config();
const { PORT, NODE_ENV, FOLDER } = process.env;
const dev = NODE_ENV === 'development';

polka()
  .use(FOLDER,
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
