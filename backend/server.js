import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const port = Number(process.env.PORT || 3001);
const host = process.env.HOST || "127.0.0.1";

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    name: "testing-petezahs",
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
  });
});

app.get("/api/config", (_req, res) => {
  res.json({
    title: "testing-petezahs",
    features: {
      gameLibrary: true,
      localGameHosting: true,
      proxyLab: false
    }
  });
});

if (process.env.NODE_ENV === "production") {
  const dist = path.join(root, "dist");
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

app.listen(port, host, () => {
  console.log(`testing-petezahs API listening at http://${host}:${port}`);
});
