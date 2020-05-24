import { LOCAL_STORAGE_KEY_TOKEN } from "~/web/constants";
import CurrentUserQuery from "~/web/graphql/CurrentUserQuery";

export default async function saveTokenAndRefetchCurrentUser(client, token) {
  await window.localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, token);
  await client.query({ query: CurrentUserQuery });
}
