<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Playwright_Logo.svg" alt="Playwright logo" width=370>
<h3 align="center">Playwright Typescript Boilerplate</h3>
<p align="center">
Boilerplate project for Web Test Automation</p>
</p>

## Tests architecture

For automation tests architecture we use Page Object Pattern. All necessary files are placed in `tests` directory, which primarily includes:

- `tests` directory with test cases for UI tests,
- `components` with implementation for reusable components,
- `pages` with implementation for pages,
- `types` with types for tests,
- `shared` with shared files/data for tests.

To run all tests, use the following command:

## Tests

To install Playwright and it's browsers

```bash
npm install
npx playwright install
```

To run all tests

```bash
npm run test
```

To run smoke tests, use the following command:

```bash
npm run test:e2e:smoke
```

To run all tests with the browser opened, use the following command:

```bash
npm run test:headed
```

To generate a report of the tests, use the following command:

```bash
npm run test:report
```

## Contributors

<a href="https://github.com/wasylmowczan/playwright-typescript-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wasylmowczan/playwright-typescript-boilerplate" />
</a>
