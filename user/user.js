// typecho user V1.0
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
window.onload=function (){
  	if(UserGroup != "subscriber"){
		var HtmlText="<div class=\"user-info\"><a href=\""+UserLink+"\"><img src=\""+UserPic+"\" /></a><p>欢迎您，<a href=\""+UserLink+"\">"+UserName+"</a></p></div><div class=\"user-nav\"><ul><li><a href=\""+SiteLink+"admin/index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li><a href=\""+SiteLink+"admin/profile.php\"><i class=\"fa fa-gear\"></i>个人设置</a></li><li><a href=\""+SiteLink+"admin/write-post.php\"><i class=\"fa fa-pencil\"></i>创建文章</a></li><li><a href=\""+SiteLink+"admin/manage-posts.php\"><i class=\"fa fa-cube\"></i>管理文章</a></li><li><a href=\""+SiteLink+"admin/manage-comments.php\"><i class=\"fa fa-comments-o\"></i>管理评论</a></li></ul></div><div class=\"copy-links\"><p>版权链接</p><div class=\"links-mian\"><a href=\"\">typecho</a><a href=\"\">规则之树</a><a href=\"\">QQ群</a></div></div>";
    }else{
    	var HtmlText="<div class=\"user-info\"><a href=\""+UserLink+"\"><img src=\""+UserPic+"\" /></a><p>欢迎您，<a href=\""+UserLink+"\">"+UserName+"</a></p></div><div class=\"user-nav\"><ul><li><a href=\""+SiteLink+"admin/index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li><a href=\""+SiteLink+"admin/profile.php\"><i class=\"fa fa-gear\"></i>个人设置</a></li></ul></div><div class=\"copy-links\"><p>版权链接</p><div class=\"links-mian\"><a href=\"\">typecho</a><a href=\"\">规则之树</a><a href=\"\">QQ群</a></div></div>";
    }
	var Nav = document.getElementById('typecho-nav-list');
	if(UserGroup != ""){
		Nav.innerHTML = HtmlText;
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
    }else{
        var LoginMain=getElementsClass("i-logo")[0];
      	var Body=getElementsClass("body-100")[0];
      	var Cover=document.createElement('div');
      	Cover.id="cover";
        Body.appendChild(Cover);
        LoginMain.innerHTML="<img src=\""+SiteLink+"user/logo.png\" alt=\""+SiteName+"\"/>";
    }
}
