const util = require('util')
const glob = util.promisify(require('glob'))
const shell = require('shelljs')
const fse = require('fs-extra')
const fs = require('fs')
const filePath = `js/*.*`
glob(filePath).then((distFiles)=>{
    Promise.all(distFiles.map((file) => {
        console.log('file', file)
    //   const extraname = path.extname(file)
    //   if (extraname === '.html') {
    //     // await fse.copy(file, projectPath)
    //     shell.cp(file, projectPath)
    //   } else {
    //     // await fse.copy(file, `${projectPath}/static`)
        // shell.cp(file, `haha/asd/static`)
        // 此方法拷贝，不需要一层一层构建文件夹
        fse.copy(file,`haha/asd/${file}`)
    //   }
    }))
})
fs.readdir('js', (err, files)=>{
    console.log('files', files)
})