# 🧪 Tests

Test are written using Playwright and are located in the `tests` folder. Before running the tests, you need to install Playwright browsers:

```bash
npm install
npx playwright install
```

## Tests architecture

For automation tests architecture we use Page Object Pattern. All necessary files are placed in `tests` directory, which primarily includes:

- `tests` directory with test cases for UI tests,
- `components` with implementation for reusable components,
- `pages` with implementation for pages,
- `types` with types for tests,
- `shared` with shared files/data for tests.

To run all tests, use the following command:

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
