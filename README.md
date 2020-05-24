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
