const engine = require('../core/engine');

function runProcessor(payload) {
  return engine.process(payload);
}

module.exports = {
  runProcessor
};
