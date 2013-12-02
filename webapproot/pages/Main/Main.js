dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	start_appClick: function(inSender) {
		this.panel_bienvenida.hide();
        this.panel_tweets.show();
	},
	TweetsResult: function(inSender, inDeprecated) {
		var totalTweets= this.Tweets.getCount();
        this.counter_tweets.setCaption("Tweets retornados: "+totalTweets);
	},
	TweetsSuccess: function(inSender, inDeprecated) {
		var totalTweets= this.Tweets.getCount();
        var lang= this.idioma.getDataValue(); 
        for(i=0; i<=totalTweets; i++){
           var json= main.Tweets.getItem(i);   
           var textmessage= json.data.text;
           console.log(textmessage);
           var geozone= json.data.timezone;
           console.log(geozone);
           var userhash= json.data.userTweet;
           console.log(userhash);
           var metrics = {};
           var stats  = [];
           var urlp= "http://www.sentiment140.com/api/classify?text="+textmessage+"&language="+lang+"&query="+userhash;
           $.ajax({
                 url : urlp,
                 dataType : 'jsonp',
                 type: "GET",
                 contentType: "application/x-www-form-urlencoded",
                 success: function(data) {
                    var tweetobject= data;
                    console.log(tweetobject);
                    var polaridad  = tweetobject.results.polarity;
                    var texto  = tweetobject.results.text;
                    var mencion= tweetobject.results.query;
                    main.insertTweets.setValue("query", mencion);
                    main.insertTweets.setValue("textQuery", texto);
                    main.insertTweets.setValue("polarity", polaridad);
                    main.insertTweets.setValue("zone", geozone);
                    main.insertTweets.setValue("queryCreationDate", main.nowDate.getDataValue());
                    main.insertTweets.setValue("fullnameuser", main.usuario.getDataValue());
                    main.insertTweets.setValue("language", main.idioma.getDataValue());
                    main.setter.setOperation("insert");
                    main.setter.sourceData.setData(main.insertTweets);
                    main.setter.update();
                  },
                  error: function(e) {
                    console.log(e.message);
                  }                   
               });         
        }
	},
    
    listado : new Array(),
    
	setterPrepareSetData: function(inSender, inData) {
		this.cargador1.show();
	},
	setterSetData: function(inSender) {
		this.cargador1.hide();
	},
	_end: 0
});


