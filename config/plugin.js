'use strict';

// had enabled by egg
// exports.static = true;
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.io = {
  enable: true,
  package: 'egg-socket.io',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.graphql = {
  enable: true,
  package: 'egg-graphql',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.oss = {
  enable: true,
  package: 'egg-oss',
};