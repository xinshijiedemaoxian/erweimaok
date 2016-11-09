var qrcode = new QRCode(document.getElementById("qrcode"), {});
		$(function(){
			browserRedirect()
		});
		function browserRedirect() {
		        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
		             $(".button").on('touchstart',function(e){
		                $(".button")[0].style.border="5px solid orange";
		                event.preventDefault()
		            }).on('touchend ',function(e){
		                $(".button")[0].style.color="green";
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