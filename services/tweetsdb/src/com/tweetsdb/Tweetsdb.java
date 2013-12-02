
package com.tweetsdb;

import java.util.List;
import com.tweetsdb.data.output.MetricsRtnType;
import com.tweetsdb.data.output.ResultTweetsRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "tweetsdb"
 *  12/01/2013 14:18:42
 * 
 */
@SuppressWarnings("unchecked")
public class Tweetsdb
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public com.tweetsdb.data.Tweetslog getTweetslogById(Integer id, PagingOptions pagingOptions) {
        List<com.tweetsdb.data.Tweetslog> rtn = ((List<com.tweetsdb.data.Tweetslog> ) dsMgr.invoke(taskMgr.getQueryTask(), (TweetsdbConstants.getTweetslogByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<MetricsRtnType> metrics(String puser, String plang, PagingOptions pagingOptions) {
        return ((List<MetricsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (TweetsdbConstants.metricsQueryName), puser, plang, pagingOptions));
    }

    public List<ResultTweetsRtnType> resultTweets(String user, String lang, PagingOptions pagingOptions) {
        return ((List<ResultTweetsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (TweetsdbConstants.resultTweetsQueryName), user, lang, pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
