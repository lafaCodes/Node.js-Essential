const path = require("path"); //path = core module - helps us create path
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());