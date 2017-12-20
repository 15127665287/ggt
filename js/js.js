var ul = document.getElementById('ul3');
var li = ul.getElementsByTagName('li');
var num = 0;
var box = document.getElementById('box');



aaa=setInterval(function(){
	num++;
	if(num==2)
	{
		num=0;
	}
	ul.style.left = -16*num + 'rem';
},2000)

box.onmouseover = function()
{
	clearInterval(aaa);
}
box.onmouseout = function()
{
	clearInterval(aaa);

	aaa=setInterval(function(){
	num++;
	if(num==2)
	{
		num=0;
	}
	ul.style.left = -16*num + 'rem';
},2000)

}


var img1 = document.getElementById('img1');
var content = document.getElementById('content');
var logo = document.getElementById('logo');
img1.onclick = function()
{	
	logo.style.left = 11+'rem';
	logo.style.top = 3.625+'rem';
	content.style.left = 11+'rem';
	content.style.top = 3.625+'rem';
	
	
}
content.onclick = function()
{
	logo.style.left = 0+'rem';
	logo.style.top = 0+'rem';
	content.style.left = 0+'rem';
	content.style.top = 0+'rem';
}





