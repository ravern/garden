**_This is a work in progress._**

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

[Fly](https://fly.io) is used for deployment, although any service that supports deploying Docker containers should work. Run the following commands to get the app and environment set up with Fly.

```bash
flyctl apps create
flyctl secrets set BCRYPT_SALT_ROUNDS=10
# set the rest of the secrets from the `.env` file
```

To deploy the app, clean the current directory first and then initiate the deployment to Fly.

```bash
yarn clean
flyctl deploy
```
