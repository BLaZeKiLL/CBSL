module.exports = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [{
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "#7C7C7C"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "#82AAFF"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "#FFCB6B"
    }
  }, {
    types: ["variable"],
    style: {
      color: "#E06C75"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)"
    }
  }, {
    types: ["keyword"],
    style: {
      color: "#C792EA",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(241, 250, 140)"
    }
  }]
};