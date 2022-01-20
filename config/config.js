import router from "../src/routes/index.js";
import path from "path";

export default function config(app, express) {
  
  //express configurations
  app.set("views", `src/views/`);
  app.set("view engine", "ejs");
  app.use(express.static(`public`));
  app.use(express.json({ type: "application/json" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(router);

  //all dependencies of application
  const dependencies = ["bootstrap", "socket.io"];

  dependencies.forEach((dependencie) => {
    app.use(
      `/${dependencie}`,
      express.static(path.join(`node_modules/${dependencie}`))
    );
  });
}
