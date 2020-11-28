# economic-analysis-dashboard 
#VUE  经济大数据分析

#API:https://github.com/xghjbvvg/economic-analysis.git

# 本系统将Elementui+Axios+Vuex+Router进行再封装
![avatar](https://github.com/xghjbvvg/economic-analysis-dashboard/blob/main/layout.png)

## view 组件页面

### * home 首页，显示上交所与深交所总貌

### * stockAccount 分析师详情

### * layout 布局

### * login 模拟登入



解决github图片不显示问题

解决方法，打开路径C:\Windows\System32\drivers\etc下的hosts文件

在最后加上
``` markdown
# GitHub Start 
192.30.253.112    github.com 
192.30.253.119    gist.github.com
151.101.184.133    assets-cdn.github.com
151.101.184.133    raw.githubusercontent.com
151.101.184.133    gist.githubusercontent.com
151.101.184.133    cloud.githubusercontent.com
151.101.184.133    camo.githubusercontent.com
151.101.184.133    avatars0.githubusercontent.com
151.101.184.133    avatars1.githubusercontent.com
151.101.184.133    avatars2.githubusercontent.com
151.101.184.133    avatars3.githubusercontent.com
151.101.184.133    avatars4.githubusercontent.com
151.101.184.133    avatars5.githubusercontent.com
151.101.184.133    avatars6.githubusercontent.com
151.101.184.133    avatars7.githubusercontent.com
151.101.184.133    avatars8.githubusercontent.com
 # GitHub End
 ```
git报错ssh: connect to host github.com port 22: Connection timed out

打开终端并打开存放ssh的目录
查看是否存在这些文件 若不存在，则可能是ssh没配置对，首先需要配置ssh（自行百度）很简单
若存在则在继续在终端输入以下命令新建一个文件
vim config

接着输入下面内容
```
Host github.com
User 注册github的邮箱
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```
