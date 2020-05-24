# Garden

Working notes for everyone.

## Development

Just run the following commands for a quick setup.

```bash
yarn install
cp web/.env.example web/.env
cp collab/.env.example collab/.env
yarn dev
```

To run each package separately, run each of the commands in separate shell instances.

```bash
cd collab && yarn dev
cd web && yarn dev
cd models && yarn dev
```

## Deployment

Firstly, ensure that shared packages like `models` are published somewhere. Ensure that your `.npmrc` file is configured to point to the correct registry. The rest of this section assumes GitHub Package Registry is being used.

`web` should be deployed on [Vercel](https://vercel.com). The `.npmrc` file must be passed as an environment variable so Vercel can have access to the packages. Log in via the command-line and run the following commands to deploy to production. Remember to set the rest of the environment variables specified in the `.env.example` file.

```bash
vercel env add NPM_RC production < ~/.npmrc
vercel
```

`collab` is deployed to [OpeNode](https://openode.io). The `.npmrc` file must be created locally, and deployments are run locally (for now). Run the following commands to deploy to production.

```bash
cp .env.production .env
yarn build
openode set-config DOTENV_FILEPATH .env.production
openode deploy
```
