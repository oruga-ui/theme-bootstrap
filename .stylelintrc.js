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
    "no-duplicate-selectors": [true, { "severity": "warning" }],
    "no-descending-specificity": [true, { "severity": "warning" }],
    "scss/at-extend-no-missing-placeholder": null,
  },
};
