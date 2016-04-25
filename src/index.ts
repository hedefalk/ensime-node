let Client = require('./client');
let InstanceManager = require('./ensime-instance-manager');

import types = require('./types')
import formatting = require('./formatting');
let ensimeServerUpdate = require('./ensime-server-update-coursier');
import dotEnsimeUtils = require('./dotensime-utils');
import ensimeServerStartup = require('./ensime-server-startup');
import ensimeClientStartup = require('./ensime-client-startup');

console.log("index running")

const Instance = types.EnsimeInstance

export default {
  Client,
  InstanceManager,
  Instance,
  formatting,
  ensimeServerUpdate,
  dotEnsimeUtils,
  startServerFromAssemblyJar: ensimeServerStartup.startServerFromAssemblyJar,
  startServerFromFile: ensimeServerStartup.startServerFromFile,
  ensimeClientStartup
}
  

  