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

# Publish packages
publish:
    @printf "\033[0;32m>>> Publish packages\033[0m\n"
    pnpm run publish

# Prepare packages for release
release:
    @printf "\033[0;32m>>> Prepare packages for release\033[0m\n"
    @git remote remove origin-with-token 2>/dev/null || true
    pnpm release

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
