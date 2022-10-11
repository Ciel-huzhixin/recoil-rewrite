const nodes = new Map();
const atom = (options) => {
  let value = options.default;
  const node = {
    key: options.key,
    get() {
      return value;
    },
    set(newVal) {
      value = newVal;
    }
  }
  nodes.set(node.key, node);
  return node;
}

export default atom;