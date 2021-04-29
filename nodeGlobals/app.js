const { countReset } = require("console");
const {inc, dec, getCount} = require("./myModule");

inc();
inc();
inc();
inc();
dec();

console.log(getCount());