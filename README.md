Full Stack App Setup by João Ricardo de Souza, October 2020<br>
Using create-react-app for client and node-typescript-structure by Rocketseat<br>
(https://github.com/rocketseat-content/node-typescript-structure)

Stack:
- Typescript
- Node
- Express
- React (create-react-app)
- Socket IO
- Babel
- ESLint
- Jest


DEVELOP

npm run dev:server (server)<br>
npm run dev:client (client)<br>
npm run dev (both)<br>
When not in production, server will not serve static assets


TEST

npm run test<br>
Run tests with Jest


BUILD

npm run build:client<br>
This command will build the client folder<br>
CRA was ejected and tweaked so the client will be built in dist/public

npm run build<br>
This will build the server after the client is done


START

npm run start<br>
client must be built for distribution<br>
will start node in dist/index.js in production mode


DEPLOY

Can be deployed easily into Heroku, for instance<br>
heroku-prebuild command will build the client automatically for you once in their server<br>
git add . && git commit -a && git push heroku master