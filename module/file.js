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