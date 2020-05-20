import filter from "lodash/filter";
import flow from "lodash/flow";
import map from "lodash/map";
import toPairs from "lodash/toPairs";

export default function transformFormError(error) {
  return flow(
    (errors) => toPairs(errors),
    (errors) =>
      map(errors, ([name, message]) => ({
        name,
        message,
        type: "remote",
      })),
    (errors) => filter(errors, ({ message }) => message),
    (errors) => filter(errors, ({ name }) => name !== "__typename")
  )(error);
}
