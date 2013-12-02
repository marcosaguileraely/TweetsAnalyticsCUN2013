package com.cun;

public class Tweet {

	private String fullName;

	private String userTweet;

	private String text;
	
	private String timeZone;

	public void setFullname(String fullName) {
		this.fullName = fullName;
	}

	public void setUserTweet(String userTweet) {
		this.userTweet = userTweet;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setTimezone(String timeZone) {
		this.timeZone = timeZone;
	}

	public String getFullname() {
		return this.fullName;
	}

	public String getUserTweet() {
		return this.userTweet;
	}

	public String getText() {
		return this.text;
	}

	public String getTimezone() {
		return this.timeZone;
	}
}