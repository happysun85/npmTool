var chalk = require('chalk')
var fs = require('fs');
var path = require('path');

var log = function(txt) {
  console.log(chalk.magenta.bold(txt))
}

function createProject(name, type) {

  var p = process.cwd();
  cd(p)

  if (fs.existsSync(name)) {
    log('project exists,please rename it')
    process.exit()
  }

  var np = path.join(__dirname, 'project', type)
  cp('-R', np + '/', name)
  log('复制' + type + '项目原文件成功!')

  cd(name)
  log('设置淘宝镜像----npm config set registry http://registry.npm.taobao.org')
  exec('npm config set registry http://registry.npm.taobao.org')
  log('安装模块---npm install')
  log('安装模块时间较长，请耐心等候，您也可以CRTL+C停止安装，手动npm install安装')
  log('npm模块安装中....')
  exec('npm install')
  exec('gulp init')
  log('bower模块安装中....')
  exec('bower install')

  exec('gulp')
}

module.exports = createProject
