import CONSTANTS from '@/constants';

const initializeMocks = () => {
  if (CONSTANTS.IS_SERVER) {
    const { server } = require('./server');
    server.listen();
  } else {
    const { worker } = require('./browser');
    worker.start();
  }
};

initializeMocks();
