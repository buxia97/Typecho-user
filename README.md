# Typecho会员中心

typecho开源博客程序，实现多用户会员中心。
不修改任何typecho重要文件，1.0+版本都可以使用，全响应式界面，原生js支持，代码仅仅十多KB，可以帮助博客网站快速的实现会员中心界面。**目前已经添加了对后台界面的支持，只需要简单的修改页面判断即可**。
更多typecho教程，反馈意见及问题，可以访问我的博客：[www.ruletree.club](https://www.ruletree.club "规则之树") 
下载最新稳定版本[点击此处](https://github.com/buxia97/Typecho-user/releases/download/v1.10/TypechoUser-release.tar.gz "TypechoUser-release.tar.gz") 

# 功能介绍

对于非管理员用户呈现会员中心界面，同时根据用户组判断显示的导航栏，对达到贡献者用户组级别以上的用户显示文章和评论的相关功能，对QQ邮箱进行验证，获取QQ头像，这一切都是通过js进行控制。本项目算不上模板和插件，相当于一个对于typecho后台的调整，通过js对dom层的操作改变后台界面，但是不对typecho原本的功能样式进行修改，所以使用者可以随意的还原文件或者重新添加代码，这不会影响程序的使用。
网站全局开启QQ头像调用，可以参考：https://www.ruletree.club/archives/1087/

# 安装教程

	1.备份原有的admin/header.php，将文件覆盖到根目录。
	2.访问域名/member.php进入会员中心入口。

# 更新日志

	2019/05/07：后台风格完美实现，发布稳定版本
	2019/04/10：对后台风格提供了支持，进入测试阶段
	2019/03/11：新增了对QQ邮箱的识别并生成QQ头像，在会员中心全局调用
	2019/03/09：修复了提示框被遮挡和错位的问题，美化了登录页面，新定义了网站logo
	2019/03/06：原始版本

# 主要实现代码

下列代码主要在admin/header.php的head标签对中，如果因为typecho更新导致该文件有很大变化，或者发现上传覆盖后出现报错，可以手动复制下发代码添加。
``` php
<?php if($user->group != "administrator"): ?>
<link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
<link rel="stylesheet" href="<?php $options->siteUrl(); ?>/user/user.css?v=1.10">
<script>
var UserLink="<?php $options->adminUrl('profile.php'); ?>";
var UserPic="<?php $email =$user->mail; if($email){if(strpos($email,'@qq.com') !==false){$email=str_replace('@qq.com','',$email);echo '//q1.qlogo.cn/g?b=qq&nk='.$email.'&';}else{$email= md5($email);echo '//cdn.v2ex.com/gravatar/'.$email.'?';}}else{echo '//cdn.v2ex.com/gravatar/null?';} ?>";
var AdminLink="<?php $options->adminUrl(); ?>";
var SiteLink="<?php $options->adminUrl(); ?>";
var UserName="<?php $user->screenName(); ?>";
var UserGroup="<?php $user->group(); ?>";
var SiteName="<?php $options->title(); ?>";
var MenuTitle="<?php $menu->title(); ?>";
</script>
<style>
<?php if($menu->title == "网站概要"): ?>
.typecho-page-main div:nth-child(4){display:none;}
.typecho-page-main .col-tb-4{width:50%;}
<?php endif; ?>
<?php if($menu->title == "登录到".$options->title): ?>
.popup{width:100% !important;
left:0px !important;
top:0px !important;}
<?php endif; ?>
</style>
<?php endif; ?>
```

另一部分在admin/fonter.php中，因为typecho自带了jquery，所以需要让它生效来节约代码。
``` php
<?php if($user->group != "administrator"): ?>
<script src="<?php $options->siteUrl(); ?>/user/user.js?v=1.02"></script>
<?php endif; ?>
```
下方的判断相当于是否开启后台模板，如果去掉如下代码，将会让界面风格在后台生效（目前还处于测试界面，需要更多反馈意见）
``` php
<?php if($user->group != "administrator"): ?>
<?php endif; ?>
```
# 相关截图
1.通用登录界面
![登录界面](https://github.com/buxia97/Typecho-user/blob/master/%E6%88%AA%E5%9B%BE/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png?raw=true)
2.贡献者权限发布文章界面
![贡献者权限发布文章](https://github.com/buxia97/Typecho-user/blob/master/%E6%88%AA%E5%9B%BE/%E6%BC%94%E7%A4%BA%E6%88%AA%E5%9B%BE.png?raw=true)
3.管理员权限发布文章界面
![管理员权限发布文章](https://github.com/buxia97/Typecho-user/blob/master/%E6%88%AA%E5%9B%BE/%E5%90%8E%E5%8F%B0%E6%A0%B7%E5%BC%8F.png?raw=true)
 
