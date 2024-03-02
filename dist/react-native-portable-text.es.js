import { PortableText as f, mergeComponents as u } from "@portabletext/react";
export * from "@portabletext/react";
import t, { useCallback as y } from "react";
import { StyleSheet as c, Text as o, Linking as h, View as a } from "react-native";
const k = c.create({
  normal: { marginBottom: 16 },
  blockquote: {
    paddingHorizontal: 14,
    borderLeftWidth: 3.5,
    borderLeftColor: "#dfe2e5",
    marginBottom: 16
  },
  h1: { marginVertical: 22 },
  h2: { marginVertical: 20 },
  h3: { marginVertical: 18 },
  h4: { marginVertical: 18 },
  h5: { marginVertical: 18 },
  h6: { marginVertical: 18 }
}), s = c.create({
  list: {
    marginVertical: 16
  },
  listDeep: {
    marginVertical: 0
  },
  listItem: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  bulletListIcon: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold"
  },
  listItemWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
}), d = c.create({
  h1: {
    fontWeight: "bold",
    fontSize: 32
  },
  h2: {
    fontWeight: "bold",
    fontSize: 24
  },
  h3: {
    fontWeight: "bold",
    fontSize: 18
  },
  h4: {
    fontWeight: "bold",
    fontSize: 16
  },
  h5: {
    fontWeight: "bold",
    fontSize: 14
  },
  h6: {
    fontWeight: "bold",
    fontSize: 10
  },
  normal: {},
  blockquote: {}
}), i = c.create({
  strong: {
    fontWeight: "bold"
  },
  em: {
    fontStyle: "italic"
  },
  link: {
    textDecorationLine: "underline"
  },
  underline: {
    textDecorationLine: "underline"
  },
  strikeThrough: {
    textDecorationLine: "line-through"
  },
  code: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: "rgba(27, 31, 35, 0.05)",
    color: "#24292e"
  }
}), g = c.create({
  hidden: {
    display: "none"
  }
}), b = ({ children: e, value: n }) => {
  const l = n == null ? void 0 : n.href, m = y(() => l ? h.openURL(l) : void 0, [l]);
  return /* @__PURE__ */ t.createElement(o, { onPress: m, style: i.link }, e);
}, w = {
  em: ({ children: e }) => /* @__PURE__ */ t.createElement(o, { style: i.em }, e),
  strong: ({ children: e }) => /* @__PURE__ */ t.createElement(o, { style: i.strong }, e),
  code: ({ children: e }) => /* @__PURE__ */ t.createElement(o, { style: i.code }, e),
  underline: ({ children: e }) => /* @__PURE__ */ t.createElement(o, { style: i.underline }, e),
  "strike-through": ({ children: e }) => /* @__PURE__ */ t.createElement(o, { style: i.strikeThrough }, e),
  link: b
}, r = ({ children: e, value: n }) => {
  const l = n.style || "normal";
  return /* @__PURE__ */ t.createElement(a, { style: k[l] }, /* @__PURE__ */ t.createElement(o, { style: d[l] }, e));
}, E = {
  normal: r,
  blockquote: r,
  h1: r,
  h2: r,
  h3: r,
  h4: r,
  h5: r,
  h6: r
}, L = ({ value: e, children: n }) => {
  const l = e.level > 1 ? s.listDeep : s.list, m = { paddingLeft: 16 * e.level };
  return /* @__PURE__ */ t.createElement(a, { style: [l, m] }, n);
}, p = {
  bullet: ({ children: e }) => /* @__PURE__ */ t.createElement(a, { style: s.listItemWrapper }, /* @__PURE__ */ t.createElement(o, { style: s.bulletListIcon }, "·"), /* @__PURE__ */ t.createElement(o, { style: s.listItem }, e)),
  number: ({ children: e, index: n }) => /* @__PURE__ */ t.createElement(a, { style: s.listItemWrapper }, /* @__PURE__ */ t.createElement(o, { style: s.bulletListIcon }, n + 1, ". "), /* @__PURE__ */ t.createElement(o, { style: s.listItem }, e))
}, S = p.bullet || a, D = ({ value: e }) => {
  const n = `Unknown block type "${e._type}", specify a component for it in the \`components.types\` prop`;
  return console.warn(n), /* @__PURE__ */ t.createElement(o, { style: g.hidden }, n);
}, I = ({
  markType: e,
  children: n
}) => (console.warn(
  `Unknown mark type "${e}", please specify a component for it in the \`components.marks\` prop`
), /* @__PURE__ */ t.createElement(o, null, n)), x = ({
  value: e,
  ...n
}) => {
  const l = e.style || "normal";
  return console.warn(
    `Unknown block style "${l}", please specify a component for it in the \`components.block\` prop`
  ), /* @__PURE__ */ t.createElement(r, { ...n, value: { ...e, style: "normal" } });
}, W = ({
  children: e,
  value: n
}) => (console.warn(
  `Unknown list style "${n.listItem || "bullet"}", please specify a component for it in the \`components.list\` prop`
), /* @__PURE__ */ t.createElement(a, null, e)), U = ({
  value: e,
  ...n
}) => {
  const l = e.listItem || "bullet";
  return console.warn(
    `Unknown list item style "${l}", please specify a component for it in the \`components.list\` prop`
  ), /* @__PURE__ */ t.createElement(S, { ...n, value: { ...e, style: "bullet" } });
}, V = () => /* @__PURE__ */ t.createElement(o, null, `
`), z = {
  types: {},
  block: E,
  marks: w,
  list: L,
  listItem: p,
  hardBreak: V,
  unknownType: D,
  unknownMark: I,
  unknownList: W,
  unknownListItem: U,
  unknownBlockStyle: x
};
function $(e) {
  return /* @__PURE__ */ t.createElement(
    f,
    {
      ...e,
      components: u(z, e.components ?? {})
    }
  );
}
export {
  $ as PortableText,
  z as defaultComponents
};
//# sourceMappingURL=react-native-portable-text.es.js.map
