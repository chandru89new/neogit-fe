module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "error",
    "no-empty": "error",
    "semi": ["error", "never"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
