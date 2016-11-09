var qrcode = new QRCode(document.getElementById("qrcode"), {});
		$(function(){
			$("#desc").focus(function(){
            	$("#desc").val("");
        	});
			browserRedirect();
		});
		function browserRedirect() {
		        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
		             $(".button").on('touchstart',function(e){
		                hechen();
		                event.preventDefault()
		            }).on('touchend ',function(e){
		                makeCode();
		                event.preventDefault()
		            });
		        } else {
		            $(".button").on('mousedown',function(e){
		       			makeCode();
		            }).on('mouseup ',function(e){
		                 hechen();
		            });
		        }
		    };
			function makeCode() {
				/*document.getElementById("result_content").style.display = "block";*/
				$("#result_content").show(300);
				var name = document.getElementById("companyname").value;
				var identifier = document.getElementById("identifier").value;
				var address = document.getElementById("address").value;
				var bank = document.getElementById("bank").value;
				var elText = document.getElementById("text").value;
				elText = "1:" + name + "\r\n2:" + identifier + "\r\n3:" + address + "\r\n4:" + bank + "\r\n"

				var elText2 = "公司名称:北京华夏聚龙自动化股份公司\r\n纳税人识别号:911101097481361512\r\n地址：北京市丰台区南四环西路188号" +
					"（总部基地）十区27号楼电话:010-52256809\r\n开户行及账号:交通银行北京丰台支行110061242018010079265";
				qrcode.makeCode(elText);

			}
			function closeResult() {
				/*document.getElementById("result_content").style.display = "none";*/
				$("#result_content").hide(300);
//				location.reload()
			}
			$("#text").
			on("blur", function() {
				makeCode();
			}).
			on("keydown", function(e) {
				if(e.keyCode == 13) {
					makeCode();
				}
			});
			//canvas
			function hechen(){
        var mainCtx = getCanvasContext('main');

        var maxWidth = mainCtx.width;
        var maxHeight = mainCtx.height;
        mainCtx.fillStyle='#fff';
        mainCtx.fillRect(0,0,276,290);
        //获取二维码生成图片
        var codeImg = $("#qrcode").children("img")[0].src;
        $('#starImg').attr('src',codeImg);
        var codeImg = new Image();
        codeImg.src=$('#starImg').attr('src');
        codeImg.onload=function(){
            //把二维码图片绘制在这里
            mainCtx.drawImage(codeImg,10,10);
        };
        //读取用户的文本
        if($('#desc').val()){
            mainCtx.font = "16px Arial";
            //设置字体填充颜色
            mainCtx.fillStyle = "#1c1c1c";
            mainCtx.lineWidth=1;
            //从坐标点(50,50)开始绘制文字
            mainCtx.fillText($('#desc').val(),10,285);

        }
    }
    function getCanvasContext(id){
        return document.getElementById(id).getContext("2d");
    }
    function setWidthHeight(img,maxWidth,maxHeight){
        var imgWidth = img.width;
        var imgHeight = img.height;
        if(imgWidth <= maxWidth &&imgHeight <= maxHeight){
        }
    }