
package com.tweetsdb.data;

import java.util.Date;


/**
 *  tweetsdb.Tweetslog
 *  12/01/2013 13:32:25
 * 
 */
public class Tweetslog {

    private Integer idtweetslog;
    private Date queryCreationDate;
    private String query;
    private String textQuery;
    private String fullnameuser;
    private String zone;
    private String language;
    private Integer polarity;

    public Integer getIdtweetslog() {
        return idtweetslog;
    }

    public void setIdtweetslog(Integer idtweetslog) {
        this.idtweetslog = idtweetslog;
    }

    public Date getQueryCreationDate() {
        return queryCreationDate;
    }

    public void setQueryCreationDate(Date queryCreationDate) {
        this.queryCreationDate = queryCreationDate;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getTextQuery() {
        return textQuery;
    }

    public void setTextQuery(String textQuery) {
        this.textQuery = textQuery;
    }

    public String getFullnameuser() {
        return fullnameuser;
    }

    public void setFullnameuser(String fullnameuser) {
        this.fullnameuser = fullnameuser;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Integer getPolarity() {
        return polarity;
    }

    public void setPolarity(Integer polarity) {
        this.polarity = polarity;
    }

}
