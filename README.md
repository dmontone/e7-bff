# E7 BFF

This repository is a sample implementation of a BFF architecture using Node.js and Express.js.

## Endpoints

- `/` - Simple healthcheck endpoint implementation
- `/jobs` - Empty jobs endpoint implementation
- `/status` - Monitor tool implementation ([express-status-monitor](https://github.com/RafalWilinski/express-status-monitor))

### How to use this repository

To use this repository follow the instructions:

1. Clone the repository
```bash
git clone https://github.com/dmontone/e7-bff.git
```

2. Install dependencies (the example uses `npm` but feel free to use `yarn` instead)
```bash
cd e7-bff
npm install
```

3. Start the server
```bash
  npm start
```
The server will start on port 3000

### How to make a production build

Same as steps 1 and 2 above. Starting from 3rd step:

3. Create the build
```bash
npm run build
```

4. Serve from production build
```bash
npm run serve
```
The server will start on port 3000 with production bundle