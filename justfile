# List available recipes
default:
    @just --list

# Build packages
build:
    @printf "\033[0;32m>>> Build packages\033[0m\n"
    pnpm build

# Install dependencies
install:
    @printf "\033[0;32m>>> Installing dependencies\033[0m\n"
    pnpm -r install

# Lint code
lint:
    @printf "\033[0;32m>>> Lint code\033[0m\n"
    pnpm lint

# Lint code and fix issues
lint-fix:
    @printf "\033[0;32m>>> Lint code\033[0m\n"
    pnpm lint:fix

# Check for outdated dependencies
outdated:
    @printf "\033[0;32m>>> Check for outdated dependencies\033[0m\n"
    pnpm -r outdated

# Release a package by tagging origin/main as <package>/v<version>, e.g. `just release eslint-config 1.2.3`
release package version:
    @printf "\033[0;32m>>> Release {{ package }} {{ version }}\033[0m\n"
    git fetch -q origin main
    git tag "{{ package }}/v{{ version }}" origin/main
    git push origin "{{ package }}/v{{ version }}"

# Sort package.json files
sort-package:
    @printf "\033[0;32m>>> Format package.json\033[0m\n"
    pnpm sort-package

# Run tests
test:
    @printf "\033[0;32m>>> Running tests\033[0m\n"
    pnpm test

# Run unit tests
test-unit:
    @printf "\033[0;32m>>> Running unit tests\033[0m\n"
    pnpm turbo run test:unit

# Type check code
typecheck:
    @printf "\033[0;32m>>> Running Type check\033[0m\n"
    pnpm typecheck
