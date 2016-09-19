/* eslint-env node */

module.exports = function (options, modified, total, next) {
    for (var i = modified.length - 1; i >= 0; i--) {
        //如果没有定义tag,跳出本次循环
        if (modified[i].extra == undefined) continue;
        //源文件extra.separate的tag和定义的tag相同则复制文件
        if (modified[i].extra.separate === options.tag) {
            fis.util.copy(modified[i].realpath, options.toLocal + modified[i].basename);
            modified.splice(i, 1);
        }
    }
    next();

};