// custom animations 
// author - Arsh
// github - https://github.com/Arsh23/


var controller = new ScrollMagic.Controller();



//animate sub headings code start -
//------------------------------------------------------------------------------------------------
function random_char()
{
	var string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&**';
	var rndnum = Math.floor(Math.random() * 68);
	return string.charAt(rndnum);
}

function random_string(len)
{
	var i;
	var string = '';

	for(i=0;i<len;i++)
	{
		string += random_char();
	}

	return string;

}

function return_arr(str)
{
	var i,j;
	var array = [];
	var len = str.length,tempstr = '';

	for(i=1;i<=5;i++)
	{
		array.push(random_string(1));
	}


	for(i=1;i<=len;i++)
	{
		array.push(random_string(i));
	}

	for(i=0;i<len;i++)
	{
		for(j=1;j<=3;j++)
		{
			tempstr = str.substring(0,i) + random_string(len-i-1);
			array.push(tempstr);
			tempstr = str.substring(0,i) + random_string(len-i-1);
			array.push(tempstr);

		}		
	}
	
	array.push(str);
	array.push(str);
	array.push(str);
	array.push(str);

	return array;
}
var timer = 20;
var delay = 200;
var ids = [0,0,0,0,0];
var array = [[],[],[],[],[]];
var counter = [0,0,0,0,0];


function animate_heading_1(elem)
{
	var $elem = $(elem);
	if(counter[0] == array[0].length - 1)
	{
		clearInterval(ids[0]);
	}
	$elem.html(array[0][counter[0]])
	counter[0] += 1
}

function animate_heading_2(elem)
{
	var $elem = $(elem);
	if(counter[1] == array[1].length - 1)
	{
		clearInterval(ids[1]);
	}
	$elem.html(array[1][counter[1]])
	counter[1] += 1
}
function animate_heading_3(elem)
{
	var $elem = $(elem);
	if(counter[2] == array[2].length - 1)
	{
		clearInterval(ids[2]);
	}
	$elem.html(array[2][counter[2]])
	counter[2] += 1
}
function animate_heading_4(elem)
{
	var $elem = $(elem);
	if(counter[3] == array[3].length - 1)
	{
		clearInterval(ids[3]);
	}
	$elem.html(array[3][counter[3]])
	counter[3] += 1
}
function animate_heading_5(elem)
{
	var $elem = $(elem);
	if(counter[4] == array[4].length - 1)
	{
		clearInterval(ids[4]);
	}
	$elem.html(array[4][counter[4]])
	counter[4] += 1
}
//------------------------------------------------------------------------------------------------
//animate sub headings code ends

//.on parameters - change update progress start end enter leave
//animate first headings
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-hdg-1",triggerHook: 'onEnter',offset: 50, duration: 0})
					.addTo(controller)
					.addIndicators({name: "first heading"})
					.on("start", function (e) {	
						if(ids[0] == 0)
						{
							counter[0] = 0
							array[0] = return_arr('ABOUT')
							setTimeout(function(){ids[0] = setInterval( function() { animate_heading_1('.sub-heading-1'); }, timer);},delay);
						}

					});
//animate second headings
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-hdg-2",triggerHook: 'onEnter',offset: 50, duration: 0})
					.addTo(controller)
					.addIndicators({name: "second heading"})
					.on("start", function (e) {	
						if(ids[1] == 0)
						{
							counter[1] = 0
							array[1] = return_arr('SCHEDULE')
							setTimeout(function(){ids[1] = setInterval( function() { animate_heading_2('.sub-heading-2'); }, timer);},delay);
						}

					});
//animate third headings
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-hdg-3",triggerHook: 'onEnter',offset: 50, duration: 0})
					.addTo(controller)
					.addIndicators({name: "third heading"})
					.on("start", function (e) {	
						if(ids[2] == 0)
						{
							counter[2] = 0
							array[2] = return_arr('FAQ')
							setTimeout(function(){ids[2] = setInterval( function() { animate_heading_3('.sub-heading-3'); }, timer);},delay);	
						}

					});
//animate fourth headings
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-hdg-4",triggerHook: 'onEnter',offset: 50, duration: 0})
					.addTo(controller)
					.addIndicators({name: "fourth heading"})
					.on("start", function (e) {	
						if(ids[3] == 0)
						{
							counter[3] = 0
							array[3] = return_arr('SPONSORS')
							setTimeout(function(){ids[3] = setInterval( function() { animate_heading_4('.sub-heading-4'); }, timer);},delay);	
						}

					});
//animate fifth headings
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-hdg-5",triggerHook: 'onEnter',offset: 50, duration: 0})
					.addTo(controller)
					.addIndicators({name: "fifth heading"})
					.on("start", function (e) {	
						if(ids[4] == 0)
						{
							counter[4] = 0
							array[4] = return_arr('CONTACT')
							setTimeout(function(){ids[4] = setInterval( function() { animate_heading_5('.sub-heading-5'); }, timer);},delay);	
						}

					});															