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
This command will build the client folder prior to building the app, and moving the build folder to main distribution folder

npm run build:server
This will build the server after the client is done


DEPLOY

Can be deployed easily into Heroku, for instance. Build first, then deploy
npm run build:client && npm run build:server && git add . && git commit -a && git push heroku master


// ISSUES:
- To preserve create-react-app settings and avoid ejecting, build:client command erases dist folder, bundles client in it's folder then creates a new empty /dist and moves build there as dist/public. I could not get Heroku to comply with this, probably because