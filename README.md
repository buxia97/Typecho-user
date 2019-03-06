# Typecho-user

typecho开源博客程序，实现多用户会员中心。
不修改任何typecho重要文件，1.0+版本都可以使用，全响应式界面，原生js支持，代码仅仅十多KB，可以帮助博客网站快速的实现会员中心界面。
更多typecho教程，反馈意见及问题，可以访问我的博客：www.ruletree.club

# 安装教程

1.备份原有的admin/header.php，将文件覆盖到根目录。
2.访问域名/member.php进入会员中心入口。

#主要实现代码

	<?php if($user->group != "administrator"): ?>
        <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
        <link rel="stylesheet" href="<?php $options->siteUrl(); ?>/user/user.css?v=1.0">
        <script>
          var UserLink="<?php $options->adminUrl('profile.php'); ?>";
          var UserPic="<?php echo Typecho_Common::gravatarUrl($user->mail, 100, 'X', 'mm', $request->isSecure()); ?>";
          var SiteLink="<?php $options->siteUrl(); ?>";
          var UserName="<?php $user->screenName(); ?>";
          var UserGroup="<?php $user->group(); ?>";
          var SiteName="<?php $options->title(); ?>";
        </script>
        <script src="<?php $options->siteUrl(); ?>/user/user.js?v=1.0"></script>
        <?php if($menu->title == "网站概要"): ?>
          <style>
          .typecho-page-main div:nth-child(4){display:none;}
          </style>
        <?php endif; ?>
	<?php endif; ?>
 
 
