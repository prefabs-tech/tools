# [0.9.0](https://github.com/prefabs-tech/tools/compare/v0.8.7...v0.9.0) (2026-10-01)

### Breaking Changes

* Node.js >= 22.12.0 is now required (`engines` was not set before)
* the Vue config now requires `postcss-html` (>= 2.0.0) and `stylelint-config-html` (>= 2.0.0) to be installed alongside `stylelint-config-recommended-vue`, which is updated to 2.0.0

### Features

* **tsconfig:** add support for typescript 7; fixed husky node path ([#66](https://github.com/prefabs-tech/tools/issues/66)) ([bf8b0ee](https://github.com/prefabs-tech/tools/commit/bf8b0eee8f06f96d89360d987e98145b336f2dae))
