//Main server file
require('module-alias/register');
const http             = require('http'),
      FreeForAllAPI    = require('@FreeForAllAPI'),
      FreeForAllServer = http.Server(FreeForAllAPI),
      FreeForAllPORT   = process.env.PORT || 3000,
      LOCAL            = '0.0.0.0';

FreeForAllServer.listen(FreeForAllPORT, LOCAL, () => console.log(`FreeForAllAPI running on ${FreeForAllPORT}`));