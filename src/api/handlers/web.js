import next from "next";
import { parse as parseURL } from "url";

const app = next({
  dev: process.env.NODE_ENV !== "production",
  conf: {
    env: {
      COLLAB_API_URL: process.env.COLLAB_API_URL,
    },
  },
});

export const prepareWeb = app.prepare.bind(app);

const handler = app.getRequestHandler();

export default function web(req, res) {
  const parsedURL = parseURL(req.url, true);
  handler(req, res, parsedURL);
}
