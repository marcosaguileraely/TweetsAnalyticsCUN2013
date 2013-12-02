Main.widgets = {
	templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	varTemplateUsername: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	varTemplateLogout1: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	varTemplateLogout2: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	varTemplateLogout3: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	Tweets: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"start","service":"Tweets"}, {"onResult":"TweetsResult","onSuccess":"TweetsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"startInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usuario.dataValue","targetProperty":"_user"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"idioma.dataValue","targetProperty":"_lang"}, {}]
			}]
		}]
	}],
	lang: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Español\",\"dataValue\":\"es\"},{\"name\":\"Ingles\",\"dataValue\":\"en\"}]","type":"EntryData"}, {}],
	tweetVariable1: ["wm.Variable", {"isList":true,"json":"[]","type":"EntryData"}, {}],
	insertTweets: ["wm.Variable", {"type":"com.tweetsdb.data.Tweetslog"}, {}],
	setter: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","operation":"insert","startUpdate":false,"type":"com.tweetsdb.data.Tweetslog"}, {"onPrepareSetData":"setterPrepareSetData","onSuccess":"cargador1.hide"}, {
		liveView: ["wm.LiveView", {"dataType":"com.tweetsdb.data.Tweetslog","view":[
{"caption":"Idtweetslog","sortable":true,"dataIndex":"idtweetslog","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"QueryCreationDate","sortable":true,"dataIndex":"queryCreationDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Query","sortable":true,"dataIndex":"query","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"TextQuery","sortable":true,"dataIndex":"textQuery","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Fullnameuser","sortable":true,"dataIndex":"fullnameuser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Zone","sortable":true,"dataIndex":"zone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Language","sortable":true,"dataIndex":"language","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Polarity","sortable":true,"dataIndex":"polarity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
	}],
	getMetrics: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.tweetsdb.data.Tweetslog"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"usuario.dataValue","targetProperty":"filter.fullnameuser"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"idioma.dataValue","targetProperty":"filter.language"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.tweetsdb.data.Tweetslog","view":[
{"caption":"Idtweetslog","sortable":true,"dataIndex":"idtweetslog","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"QueryCreationDate","sortable":true,"dataIndex":"queryCreationDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Query","sortable":true,"dataIndex":"query","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"TextQuery","sortable":true,"dataIndex":"textQuery","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Fullnameuser","sortable":true,"dataIndex":"fullnameuser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Zone","sortable":true,"dataIndex":"zone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Language","sortable":true,"dataIndex":"language","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Polarity","sortable":true,"dataIndex":"polarity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
	}],
	queryMetrics: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"metrics","service":"tweetsdb"}, {}, {
		input: ["wm.ServiceInput", {"type":"metricsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usuario.dataValue","targetProperty":"puser"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"idioma.dataValue","targetProperty":"plang"}, {}]
			}]
		}]
	}],
	metricsServiceVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"resultTweets","service":"tweetsdb"}, {}, {
		input: ["wm.ServiceInput", {"type":"resultTweetsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usuario.dataValue","targetProperty":"user"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"idioma.dataValue","targetProperty":"lang"}, {}]
			}]
		}]
	}],
	offlineResults: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.tweetsdb.data.Tweetslog"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"usuario.dataValue","targetProperty":"filter.fullnameuser"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"idioma.dataValue","targetProperty":"filter.language"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.tweetsdb.data.Tweetslog","view":[
{"caption":"Idtweetslog","sortable":true,"dataIndex":"idtweetslog","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"QueryCreationDate","sortable":true,"dataIndex":"queryCreationDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Query","sortable":true,"dataIndex":"query","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"TextQuery","sortable":true,"dataIndex":"textQuery","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Fullnameuser","sortable":true,"dataIndex":"fullnameuser","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Zone","sortable":true,"dataIndex":"zone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Language","sortable":true,"dataIndex":"language","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Polarity","sortable":true,"dataIndex":"polarity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
	}],
	cargador1: ["wm.LoadingDialog", {"caption":"Realizando volcado de datos a base de datos local...","styles":{}}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"panel_tweets","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","height":"15px"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		body_app: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5,20,5,20","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel_tweets: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
				menu: ["wm.Panel", {"height":"100%","horizontalAlign":"right","lock":true,"padding":"5","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
					usuario: ["wm.Text", {"caption":"@Usuario / #hashTag","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","placeHolder":"@ejemplo / #ejemplo","width":"100%"}, {}],
					idioma: ["wm.SelectMenu", {"caption":"Idioma","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"lang","targetProperty":"dataSet"}, {}]
						}]
					}],
					nowDate: ["wm.Date", {"caption":"Fecha auto","displayValue":"12/1/2013","readonly":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
						}]
					}],
					go: ["wm.Button", {"caption":"Buscar Tweets Online","desktopHeight":"41px","height":"41px","imageIndex":60,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#880d0d"},"width":"100%"}, {"onclick":"online","onclick1":"Tweets"}],
					offlineButton: ["wm.Button", {"caption":"Buscar Tweets Offline","desktopHeight":"41px","height":"41px","imageIndex":61,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#1205a3"},"width":"100%"}, {"onclick":"offline","onclick1":"offlineResults"}],
					chartGen: ["wm.Button", {"caption":"Generar indicadores","desktopHeight":"41px","height":"41px","imageIndex":23,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#016cd0"},"width":"100%"}, {"onclick":"indicadores","onclick1":"queryMetrics","onclick2":"metricsServiceVar"}],
					insertLog: ["wm.LiveForm", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}],
					middle_text: ["wm.Label", {"caption":"Información importante: <br><br>La polaridad se define como el resultado del analisis semántico realizado por el API de http//:www.Sentiment140.com, donde:<br><br>-4 :: Positivo<br>-2 :: Neutro<br>-0 :: Negativo. <br><br>Fuente consultada: <u>http://help.sentiment140.com/api</u>","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}]
				}],
				container: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"70%"}, {}, {
					tabLayers1: ["wm.TabLayers", {"headerWidth":"100px","layoutKind":"left-to-right","verticalButtons":true}, {}, {
						online: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Busqueda Online","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							tweetsDataGrid: ["wm.DojoGrid", {"border":"0","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Timezone: \" + ${timezone} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Text: \" + ${text}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fullname: \" + ${fullname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"UserTweet: \" + ${userTweet}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"timezone","title":"Timezone","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":true,"field":"text","title":"Text","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":true,"field":"fullname","title":"Fullname","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":true,"field":"userTweet","title":"UserTweet","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""}
],"dsType":"com.cun.Tweet","height":"100%","localizationStructure":{},"margin":"1","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontWeight":"lighter","fontSize":"11px"}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"Tweets","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						offline: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Busqueda Offline","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							offlineGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idtweetslog","title":"id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fullnameuser","title":"@/#","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"queryCreationDate","title":"Feccha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"query","title":"@usuario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"textQuery","title":"Texto","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"zone","title":"Zone","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"language","title":"Language","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"polarity","title":"Polarity","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${idtweetslog} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"@/#: \" + ${fullnameuser}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Feccha: \" + ${wm.runtimeId}.formatCell(\"queryCreationDate\", ${queryCreationDate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"@usuario: \" + ${query}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Texto: \" + ${textQuery}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.tweetsdb.data.Tweetslog","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"offlineResults","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						indicadores: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Medidores","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							charts_panel: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								polarityChartPie: ["wm.DojoChart", {"borderColor":"#333333","chartType":"Pie","height":"100%","padding":"4","width":"100%","xAxis":"polarity","xdisplay":"Percent","yAxis":"name,total_polar"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"queryMetrics","targetProperty":"dataSet"}, {}]
									}],
									xformat: ["wm.PercentFormatter", {"digits":1,"divideBy100":true}, {}]
								}],
								polarityChart: ["wm.DojoChart", {"borderColor":"#333333","height":"100%","padding":"4","styles":{},"width":"100%","xAxis":"polarity","yAxis":"total_polar","yAxisTitle":"Idioma","ydisplay":"Number"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"queryMetrics","targetProperty":"dataSet"}, {}]
									}],
									yformat: ["wm.NumberFormatter", {}, {}]
								}]
							}],
							analysisGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fullname","title":"Fullname","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"user","title":"User","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"polar","title":"Polar","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"text","title":"Text","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fullname: \" + ${fullname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"User: \" + ${user}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Polar: \" + ${polar}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Text: \" + ${text}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.tweetsdb.data.output.ResultTweetsRtnType","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"metricsServiceVar","targetProperty":"dataSet"}, {}]
								}]
							}]
						}]
					}],
					counter_tweets: ["wm.Label", {"align":"right","caption":"Tweets retornados:","padding":"4","width":"100%"}, {}]
				}]
			}],
			panel_bienvenida: ["wm.Panel", {"height":"502px","horizontalAlign":"center","lock":true,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel1: ["wm.Panel", {"height":"160px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					logo_twitter: ["wm.Picture", {"aspect":"h","height":"158px","source":"http://static.squarespace.com/static/51bff997e4b0b7d8b4aee8ca/t/5261d5c5e4b0c5267bb2d1be/1382143429695/twitter_newbird_white.png","width":"213px"}, {}]
				}],
				container_text: ["wm.Panel", {"height":"283px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					title_h1: ["wm.Label", {"align":"center","caption":"Tweeter Analytics<br>","height":"48px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}],
					titleh2: ["wm.Label", {"align":"center","caption":"Corporación Unificada Nacional <br>de Educación Superior Cun","height":"48px","padding":"4","singleLine":false,"width":"100%"}, {}],
					title4: ["wm.Label", {"align":"center","caption":"Análisis semántico de mensajes en Twitter para el mejoramiento <br>de mercado de una marca comercial","height":"48px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}],
					por_label: ["wm.Label", {"align":"center","caption":"Marcos Aguilera Ely","height":"41px","padding":"4","width":"100%"}, {}],
					title3: ["wm.Label", {"align":"center","caption":"Proyecto de Grado III","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
					panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						github: ["wm.Picture", {"aspect":"h","height":"48px","source":"http://sisyphus-js.herokuapp.com/assets/github_icon-224de83a21f067b21c5d3ef55c3c0d61.png","width":"65px"}, {}],
						start_app: ["wm.Picture", {"aspect":"h","height":"100%","source":"http://designmodo.github.io/Flat-UI/images/icons/svg/retina.svg"}, {"onclick":"start_appClick"}]
					}]
				}]
			}]
		}]
	}]
}