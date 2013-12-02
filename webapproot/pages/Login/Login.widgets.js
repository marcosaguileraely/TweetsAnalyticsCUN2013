Login.widgets = {
	phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
	loginVariable1: ["wm.LoginVariable", {}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
		input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"hashInput.dataValue","targetProperty":"hash"}, {}]
			}]
		}]
	}],
	loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionWidth":"100px"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox: ["wm.Layout", {}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"right","padding":"10","styles":{"backgroundColor":"#ffffff","borderRadius":"0px 0px 5px 5px"},"verticalAlign":"center","width":"100%"}, {}, {
			picture1: ["wm.Picture", {"height":"131px","source":"http://telecampus.cun.edu.co:8086/moodle/login/img/logo.png","styles":{"backgroundColor":"#ffffff","borderRadius":"5px 5px 0px 0px"},"width":"390px"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["rounded"]},"border":"2","borderColor":"#ffffff","desktopHeight":"250px","deviceType":null,"enableTouchHeight":true,"height":"250px","horizontalAlign":"center","margin":"0,0,0,0","mobileHeight":"290px","padding":"10","styles":{"color":"","backgroundColor":"#ffffff","borderRadius":"0px 0px 5px 5px"},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
				panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"72px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					usernameInput: ["wm.Text", {"caption":"Usuario","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","width":"100%"}, {}],
					passwordInput: ["wm.Text", {"caption":"Clave","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","password":true,"width":"100%"}, {}],
					hashInput: ["wm.Text", {"dataValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"TweetsAnalytics\",\"deviceType\":\"desktop\"}}","displayValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"TweetsAnalytics\",\"deviceType\":\"desktop\"}}","showing":false}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"borderColor":"#000000","caption":"Acceder","height":"100%","imageIndex":17,"imageList":"app.silkIconList","margin":"4","width":"107px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"loginVariable1"}]
				}],
				label1: ["wm.Label", {"caption":"Usar los siguientes detalles de acceso:<br><br>Usuario: admin Clave: admin<br>Usuario: admin\t Clave: 12345<br>Usuario: user Clave: user<br>Usuario: user Clave: 12345","height":"100px","padding":"4","singleLine":false,"width":"100%"}, {}]
			}]
		}]
	}]
}