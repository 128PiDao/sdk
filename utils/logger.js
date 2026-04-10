function log(message) {
  console.log(`[128Pi] ${new Date().toISOString()} - ${message}`);
}

module.exports = {
  log
};
