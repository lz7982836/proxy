# git 是什么

集中式版本控制系统（vcs）=> svn
分布式版本控制系统（dvcs）=> git

# git 的作用

在项目开发的进程中 对值得记录的时间节点进行一个“备份” 方便后期恢复（后悔药）
方便团队协作开发

# git 管理文件的三种状态

git 有三种状态 你的文件可能处于其中之一：
已修改（modified）：表示修改（新增、更新、删除）了文件但是还没保存数据 （红色）
已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中
已提交（committed）：表示数据已经安全保存在本地数据库中
这回让我们的 git 项目由三个阶段：工作区、暂存区以及 git 目录

# 初次运行 git 前的配置

配置用户名和邮箱
git config --global user.name "自定义"
git config --global user.email "邮箱"

\_查看配置信息 123456789
git config --list

# 获取 git 仓库（repo）

- 自动初始化 git 仓库 git init
- 克隆远程(服务器)仓库 git clone [repo_url]

U （Untracked）未跟踪（新增）
A （added）跟踪
M （modified） 跟踪之后被修改

# 创建快照（备份）

git add . 将所有文件放到暂存区（经常做的）
git commit -m '提交' 将暂存区文件提交到仓库（某一个功能完成的时候）

[工作区]---git add. 【暂存区】 ---git commit -m 'xxx' 【repo】
[工作区]---git commit -a -m 'xxx'【repo】(vim 编辑器操作)

git reset --soft commit_id/HEAD^ 回滚一次^ (将当前版本的内容回退到暂存区)
git reset --hard commit_id 将当前版本的内容删除
git reset mixed(默认可不写) commit_id (将当前版本的内容回退到工作区 )

HEAD^ =>当前版本的上一个版本
HEAD~n => 当前版本的上 n 个版本

[暂存区]<--- git reset -- soft commit_id ---[repo]
[工作区]<--- git reset commit_id ---[repo]
[移除]<--- git reset --hard commit_id ---[repo]

把第三次提交回炉重做
