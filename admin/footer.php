<?php if(!defined('__TYPECHO_ADMIN__')) exit; ?>
		<?php if($user->group != "administrator"): ?>
		<script src="<?php $options->siteUrl(); ?>/user/user.js?v=1.02"></script>
		<?php endif; ?>
    </body>
</html>
<?php
/** 注册一个结束插件 */
Typecho_Plugin::factory('admin/footer.php')->end();
