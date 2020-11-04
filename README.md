MERN Stack App Setup by João Ricardo de Souza, October 2020
Using create-react-app for client and node-typescript-structure by Rocketseat (https://github.com/rocketseat-content/node-typescript-structure)

Stack:
- Typescript
- Node
- Express
- React (create-react-app)
- Babel
- ESLint
- Jest


DEVELOP

npm run dev:server (server)
npm run dev:client (client)
npm run dev (both)

When not in production, server will not serve static assets


TEST

npm run test
Run tests with Jest


BUILD

npm run build:client
This command will build the client folder
CRA was ejected and teaked so the client will be built in dist/public

npm run build
This will build the server after the client is done


START

npm run start
client must be built for distribution
will start node in dist/index.js in production mode


DEPLOY

Can be deployed easily into Heroku, for instance
heroku-prebuild command will build the client for you once in their server
git add . && git commit -a && git push heroku master