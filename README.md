# @prefabs.tech/tools

## Packages

## Requirements

- [Node.js](https://nodejs.org/) `>=24` for development (24.15.0 or later on the 24.x line). The published packages support Node 22 and later; CI tests on Node 22, 24 and 26.
- [pnpm](https://pnpm.io/) `12.8.1`, as pinned in the `packageManager` field of `package.json`
- [just](https://github.com/casey/just) to run the tasks defined in the `justfile`

The recommended way to get these is [mise](https://mise.jdx.dev/). The exact versions are pinned in `mise.toml`; run this from the repo root to install them:

```bash
mise install
```

## Installation & Usage

Run `just` to list all available recipes.

### Install dependencies

Install dependencies recursively with this command

```bash
just install
```

### Lint code

```bash
just lint
```

### Typecheck code

```bash
just typecheck
```

### Test

```bash
just test
```

## Developing locally & testing

You can test these libraries locally without releasing using the `pnpm link` command. This allows your application to use the local version of the library instead of the published one. [More on pnpm link](https://pnpm.io/cli/link).

To link a library locally, run this command from the respective app directory:

```bash
pnpm link ./<path_to_libraries_monorepo>/packages/<library_name>
```

To unlink the library:

```bash
pnpm unlink ./<path_to_libraries_monorepo>/packages/<library_name>
```

## Troubleshooting

- Make sure that `package.json` and `pnpm-lock.yml` are synchronized.
- You may need to restart your apps before link and unlink to see the changes.
- All the libraries that defines or uses context has to be linked in order to link one libraries that use the context or defines it.
