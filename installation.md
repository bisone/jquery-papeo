#安装 nodejs
 1. 下载安装文件,下载地址：官网http://www.nodejs.org/download/ 
 2. 下载完成之后，双击 node-v0.8.16-x86.msi，开始安装nodejs，默认是安装在C:\Program Files\nodejs下面
 3. 安装相关环境
    打开C:\Program Files\nodejs,里面自带了npm,直接用npm安装相环境既可
    进入node.js command prompt 命令窗口
	进入nodejs 安装目录 C:\Program Files\nodejs. 键入命令：cd C:\Program Files\nodejs 既可 安装需要的包 例如：npm install jquery
 4. npm config ls -l 命令显示npm所有的配置信息，如下载包缓存路径等。
    Windows下的Nodejs npm路径是appdata。可以通过以下命令进行修改
	npm config set cache "D:\nodejs\node_cache"
	npm config set prefix "D:\nodejs\node_global"
	也可以在nodejs的安装目录中找到node_modules\npm\.npmrc文件
	修改如下即可：
	prefix = D:\nodejs\node_global
	cache = D:\nodejs\node_global
	
#安装Github for window

 1. https://windows.github.com/ 下载安装包
 2. 登陆，安装好后打开GitHub，用你的GitHub账号登陆。
 3. 点击上面的 “+Add” ,在弹出窗口中左侧选中bisone 库，点击右侧上边"clone"标签，在项目列表中选择jquey-papeo 点击clone 按钮。
