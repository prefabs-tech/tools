export default {
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-order",
  ],
  rules: {
    "custom-property-pattern": null,
    "keyframes-name-pattern": null,
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": null,
  },
};
