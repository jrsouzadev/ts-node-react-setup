"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const publicFolder = _path.default.join(__dirname, 'public');

console.log(__dirname, publicFolder);
console.log();

if (process.env.NODE_ENV === 'production') {
  app.use(_express.default.static(publicFolder));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});