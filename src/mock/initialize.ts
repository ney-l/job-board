import CONSTANTS from '@/constants';

import { seedDb } from './seed-db';

const initializeMocks = () => {
  if (CONSTANTS.IS_SERVER) {
    const { server } = require('./server');
    server.listen();
  } else {
    const { worker } = require('./browser');
    worker.start();
  }
  seedDb();
};

initializeMocks();
