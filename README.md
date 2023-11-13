
# Merge list




## Installation

Install dependencies for this project (typescript and unit testing)

```bash
  npm init 
  npm install --save-dev typescript
  npm install --save-dev jest ts-jest @types/jest
```
    
## Create `tsconfig.json` file and add these config for typescript 

```json
  {
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true
    }
  }
```

## add command to run the project and unit test in `package.json`

```json
"scripts": {
    "start": "npx ts-node index.ts",
    "test": "jest",
    "test:watch": "jest --watch"
  },
```
## create `jest.config.js` file and add these configs

```json
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
  }
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/znxxx/primo.git
```
Install dependencies

```bash
  npm install
```

Run the project

```bash
  npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm test
```
```bash
  npx jest
```
or
```bash
  npm run test:watch
```
```bash
  npx jest --watch
```


