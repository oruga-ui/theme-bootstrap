module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-prettier", 
    "stylelint-scss",
  ],
  rules: {
    "prettier/prettier": true,
    "rule-empty-line-before": "always-multi-line",
  },
};
