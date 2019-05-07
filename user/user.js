// typecho user V1.10
// 不暇 QQ1378283361
// www.ruletree.club
function getElementsClass(classnames){ 
	var classobj= new Array();
	var classint=0;
	var tags=document.getElementsByTagName("*"); 
	for(var i in tags){
		if(tags[i].nodeType==1){
		if(tags[i].getAttribute("class") == classnames){
			classobj[classint]=tags[i];
			classint++;
			} 
		}
	}
	return classobj;
} 
$(function(){
	var UserInfo = "<div class=\"user-info\"><a href=\""+AdminLink+"\"><img src=\""+UserPic+"s=100\" /></a><p>欢迎您，<a href=\""+AdminLink+"\">"+UserName+"</a></p></div>";
  	if(UserGroup == "administrator"){
		var HtmlText="<div class=\"user-nav\"><ul><li><a href=\""+AdminLink+"index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-paper-plane\"></i>全局模块</a><ul class=\"menu-ul\"><li><a href=\""+AdminLink+"profile.php\">个人设置</a></li><li><a href=\""+AdminLink+"plugins.php\">插件控制</a></li><li><a href=\""+AdminLink+"themes.php\">模板外观</a></li><li><a href=\""+AdminLink+"backup.php\">数据备份</a></li></ul></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-pencil\"></i>快捷操作</a><ul class=\"menu-ul\"><li><a href=\""+AdminLink+"write-post.php\">撰写文章</a></li><li><a href=\""+AdminLink+"write-page.php\">创建页面</a></li><li><a href=\""+AdminLink+"user.php\">新增用户</a></li></ul></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-cube\"></i>内容管理</a><ul class=\"menu-ul\"><li><a href=\""+AdminLink+"manage-posts.php\">内容文章</a></li><li><a href=\""+AdminLink+"manage-pages.php\">独立页面</a></li><li><a href=\""+AdminLink+"manage-comments.php\">用户评论</a></li><li><a href=\""+AdminLink+"manage-categories.php\">分类管理</a></li><li><a href=\""+AdminLink+"manage-tags.php\">标签管理</a></li><li><a href=\""+AdminLink+"manage-medias.php\">文件管理</a></li><li><a href=\""+AdminLink+"manage-users.php\">用户管理</a></li></ul></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-gear\"></i>网站设置</a><ul class=\"menu-ul\"><li><a href=\""+AdminLink+"options-general.php\">基本设置</a></li><li><a href=\""+AdminLink+"options-discussion.php\">评论设置</a></li><li><a href=\""+AdminLink+"options-reading.php\">阅读设置</a></li><li><a href=\""+AdminLink+"options-permalink.php\">永久链接</a></li></ul><li></ul></div>";
	}else if(UserGroup == "editor"||UserGroup == "contributor"){
		var HtmlText="<div class=\"user-nav\"><ul><li><a href=\""+AdminLink+"index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li><a href=\""+AdminLink+"profile.php\"><i class=\"fa fa-gear\"></i>个人设置</a></li><li><a href=\""+AdminLink+"write-post.php\"><i class=\"fa fa-pencil\"></i>创建文章</a></li><li><a href=\""+AdminLink+"manage-posts.php\"><i class=\"fa fa-cube\"></i>管理文章</a></li><li><a href=\""+AdminLink+"/manage-comments.php\"><i class=\"fa fa-comments-o\"></i>管理评论</a></li></ul></div>";
    }else{
		var HtmlText="<div class=\"user-nav\"><ul><li><a href=\""+AdminLink+"index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li><a href=\""+AdminLink+"profile.php\"><i class=\"fa fa-gear\"></i>个人设置</a></li></ul></div>";
    }
	var NavHtml = UserInfo+HtmlText;
	var Nav = document.getElementById('typecho-nav-list');
	if(UserGroup != ""){
		$('#typecho-nav-list').html(NavHtml);
      	var ToMain=getElementsClass("operate")[0];
        var Main=getElementsClass("main")[0];
        var ToNav=document.createElement('a');
        var width=document.body.clientWidth;
        ToNav.id="tonav";
        ToNav.href='javascript:;';
        ToNav.innerHTML='<i class="fa fa-bars"></i>'; 
        ToMain.appendChild(ToNav);
        var ToggleNav=document.createElement('tonav');
        tonav.onclick=function(){
            if(width>1000){
                if(Nav.style.display == "block"){
                    Nav.style.display="none";
                    ToMain.style.width="calc(100% - 15px)";
                    Main.style.width="100%";
                } else if(Nav.style.display == "none") {
                    Nav.style.display="block";
                    ToMain.style.width="calc(100% - 265px)";
                    Main.style.width="calc(100% - 270px)";
                } else{
                    Nav.style.display="none";
                    ToMain.style.width="calc(100% - 15px)";
                    Main.style.width="100%";
                }
            }else{
                if(Nav.style.display == "block"){
                    Nav.style.display="none";
                    ToMain.style.width="100%";
                    Main.style.width="100%";
                } else if(Nav.style.display == "none") {
                    Nav.style.display="block";
                    ToMain.style.width="100%";
                    Main.style.width="100%";
                } else{
                    Nav.style.display="block";
                    ToMain.style.width="100%";
                    Main.style.width="100%";
                }
            }
        }
	if (MenuTitle == "个人设置"){
		var avatar=getElementsClass("profile-avatar")[0];
		avatar.setAttribute("src",UserPic+"s=640");
		avatar.style.width="220px";
	}
    }else{
        var LoginMain=getElementsClass("i-logo")[0];
      	var Body=getElementsClass("body-100")[0];
      	var Cover=document.createElement('div');
      	Cover.id="cover";
        Body.appendChild(Cover);
        LoginMain.innerHTML="<img src=\""+SiteLink+"user/logo.png\" alt=\""+SiteName+"\"/>";
    }
	$("body").on("click",".menu-li",function () {
		$(this).find(".menu-ul").slideToggle(200);
	});
});
