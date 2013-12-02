package com.cun;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import twitter4j.Query;
import twitter4j.QueryResult;

import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.auth.AccessToken;

@ExposeToClient
public class Tweets extends JavaServiceSuperClass {
    private final static String CONSUMER_KEY = "JR00ivhbwIyDGR6Dd4sIg";
    private final static String CONSUMER_KEY_SECRET = "IMrj7uBSb3rLdQcxChWhG7QhJGOC3HvzlurButM5pY";
    
    public ArrayList<Tweet> start(String _user, String _lang) throws TwitterException, IOException {

        ArrayList<Tweet> MyTweets = new ArrayList();
        
        Twitter twitter = new TwitterFactory().getInstance();
        twitter.setOAuthConsumer(CONSUMER_KEY, CONSUMER_KEY_SECRET);
        
        String accessToken = getSavedAccessToken();
        String accessTokenSecret = getSavedAccessTokenSecret();
        AccessToken oathAccessToken = new AccessToken(accessToken, accessTokenSecret);
        twitter.setOAuthAccessToken(oathAccessToken);
        System.out.println("\nMy Timeline:");
        
        Query query = new Query(_user);       
        query.lang(_lang);
        query.setCount(300);
        
        try{
           QueryResult resultw = twitter.search(query);
           System.out.println("Count : " + resultw.getTweets().size());
           List<Status> tweets= resultw.getTweets();
           
           for (Status tweet : tweets){                        
             System.out.println("Full name : "+tweet.getUser().getName());
             System.out.println("@user : "+tweet.getUser().getScreenName());
             System.out.println("text : "+tweet.getText());   
             System.out.println("time zone : "+tweet.getUser().getTimeZone());   
             Tweet MyTweet  = new Tweet();
             MyTweet.setFullname(tweet.getUser().getName());
             MyTweet.setUserTweet(tweet.getUser().getScreenName());
             MyTweet.setText(tweet.getText());
             MyTweet.setTimezone(tweet.getUser().getTimeZone());
             MyTweets.add(MyTweet);             
           } 
        }catch(TwitterException e){
           e.printStackTrace();
        }       
        return MyTweets; 
    }
    
    private String getSavedAccessTokenSecret() {
        // consider this is method to get your previously saved Access TokenSecret
    return "lcDckRvxO0F4qw61KzI0zmYiL7c0TGkNzVw9jfPM6efUG";
    }

    private String getSavedAccessToken() {
        // consider this is method to get your previously saved Access Token
    return "2183105886-9pTpd9Knw1KjOFIpyES8QcmjsXsI5c6uZZ6Y5hF";
    }
}
