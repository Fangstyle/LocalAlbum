/**
 * Created by baocheng on 2017/2/22.
 */
var file = require('../module/file.js');
exports.showIndex = (req,res)=>{
    file.readLocalDir(function (dirList) {
        res.render('index.ejs',{"ablum":dirList},function (err,html) {
        res.send(html);
    });
});

}
exports.showAlbum = (req,res)=>{
    var currentDir = req.params.albumName.toString();
    file.readPicture(currentDir,(picList)=>{
        res.render('detail.ejs',{"picList":picList},function (err,html) {
            res.send(html);
    });
});
}