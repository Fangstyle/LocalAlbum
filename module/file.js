/**
 * Created by baocheng on 2017/2/22.
 */
const fs = require('fs');
const path  = require('path');
exports.readLocalDir = (callback)=>{
    fs.readdir(path.join(__dirname,'../uploads'),function (err, files) {
        if(err){
            console.log(err);
        }
        callback(files);
        return;
    });
}
exports.readPicture = (currentDir,callback)=>{
    fs.readdir(path.join(__dirname,'../uploads',currentDir),(err,data)=>{
        if(err){
            console.log(err);
        }
        var pictureList = [];
        /*强制性将异步变成同步*/
        (function intorator(i) {
            if(i==data.length){
                console.log(pictureList.toString());
                callback(pictureList);
                return;
            }
            fs.stat(path.join(__dirname,'../uploads',currentDir,data[i]),(err,stat)=>{
                if(err){
                    console.log("文件不存在 28"+err);
                }
                if(stat.isFile()){
                    pictureList.push(data[i]);
                }
                intorator(i+1);
            });
        })(0);
    });
}