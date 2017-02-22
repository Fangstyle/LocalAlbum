/**
 * Created by baocheng on 2017/2/22.
 */
var express = require('express');
var app = express();
var router = require("./controller/router.js")

//设置模板引擎
app.set("views engine", "ejs");

app.use('/',express.static('./public'));
app.get('/',router.showIndex);
app.get("/:albumName", router.showAlbum);

app.listen(8090);
