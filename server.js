const Express = require("express")
    , App     = Express()

const Server  = require("http").Server(App)
    , Io      = require("socket.io")(Server)

Server.listen(1337)

App.use(Express.static("dist"))

App.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

App.listen(3001)
