import { app } from "./app";
import { UserController } from "./user.controller";

app.component("user", {
    template: require("./user.html"),
    controller: UserController,
    bindings: {
        // all the bindings here are inputs for the home state service
        userId: "<"
    }
})

