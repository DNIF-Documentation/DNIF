---
title: "Search API"
date: 2025-01-20
type: "epkb_post_type_1"
---

The DNIF Search API lets you develop an application that can retrieve and display results with the desired DQL query programmatically. With this API, you can use Restful requests to get search results for multiple streams with desired start and end time.

###### **Prerequisites**

  
Ensure you have the following details before using the DNIF Search API

- Console IP address

- Cluster ID

- API Token

The API Token can be generated from the DNIF Console. To generate the token you can visit [Manage Token](https://dnif.it/kb/operations/manage-token/).

###### **API Overview**

  

| **Operation** | **Description** | **Rest HTTP mapping** |
| --- | --- | --- |
| invoke | Returns the requested id of the search for the DQL query | POST |
| get status | Returns the status of task execution of requested id | GET |
| get result | Return the result of the search for the dql query | GET |

##### **How to use API?**

######   
**Method Details**

| **Field** | **Description** |
| --- | --- |
| HTTP Method | POST |
| Response Format | JSON |
| Requires Authentication? | Yes |

######   
**Query Parameters**

| **Field** | **Value** |
| --- | --- |
| **Invoke** | You can retrieve the task\_id for a particular search by sending an HTTP POST request to its URL. You pass in the details of the search request as the query body. |
| **Call** | **/invoke** |

######   
**URL**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| URL | **https://**<**ipaddress**\>/<**cluster\_id**\>/**wrk/api/job/invoke** | Url should include the following parameters:      **ipaddress:** IP address of DNIF Console      **cluster\_id:** Cluster id of the cluster you want to query data |

###### **Request Header**

| **Field** | **Value** |
| --- | --- |
| Token | Specify the token generated from DNIF Console |
| Content-Type | application/json |

###### **Request Body**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| query\_timezone (string) | Asia/Kolkata | Specify the time\_zone in which you are executing the query |
| scope\_id (string) | default | Specify the scope from where you want to retrieve data |
| job\_type | dql | Specify the type of job you want to execute. **Note:** Only DQL is supported |
| job\_execution | on-demand | Specify the supported execution type **Note:** Only on\_demand executions are supported. |
| query (string) | `\_fetch \* from event where $Stream=FIREWALL AND $StartTime=2021-09-14T17:42:00 AND $EndTime=2021-09-14T18:13:32 limit 10` | Specify the DQL (DNIF Query Language) query to retrieve data |

  
All the above parameters fields are editable and are mandatory to invoke the call

###### **Curl Command**

```
curl -k --location --request POST 'https://<ipaddress>/<cluster_id>/wrk/api/job/invoke' \--header 'Token: <token>' \--header 'Content-Type: application/json' \--data-raw '{   "query_timezone": "Asia/Kolkata",   "scope_id": "default",   "job_type": "dql",   "job_execution": "on-demand",   "query": "_fetch * from event where $Stream=FIREWALL AND $StartTime=2021-09-14T17:42:00 AND $EndTime=2021-09-14T18:13:32 limit 10"}'
```

###### **Response**

Response contains all the details related to the invoked call, namely the status of the invoked call, the response results can be used to monitor progress, retrieve results, and/or delete it. Response will indicate whether the search is still being executed or it has completed or there was some error/failure.

###### **Success**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| Status\_code | 200 | This status indicates that the call invoked was successfully completed and the search results are displayed as per the query. |
| Status | Success |

###### **Response Value** 

```
{   "data": [       {           "id": "e646af00-66da-456f-a606-ca2b0a3dd19a-id-0",           "status": "PENDING"       }   ],   "status": "success"}
```

###### **Error**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| Status\_code | 200 | This status indicates that the call invoked could not be completed due to some syntax error in the query parameter. |
| Status | Error |

###### **Response Value** 

```
{   "message": "query --> _fetch * from event limit | Error --> SyntaxError in _fetch query must end with limit / first / last and a valid number",   "status": "error"}
```

###### **Failure**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| Status\_code | 200 | This status indicates that the call invoked could not be completed due to some parameter error. |
| Status | Failed |

##### **Response Value** 

```
{   "message": "Incorrect job_execution type",   "status": "failed"}
```

##### **Get Status**

###### **Method details**

| **Field** | **Description** |
| --- | --- |
| HTTP Method | GET |
| Response Format | JSON |
| Requires Authentication? | Yes |

| **Parameter** | **Description/Value** |
| --- | --- |
| **/state** | To get the status of the invoke call, you need to send an HTTP GET request to its URL. You pass the id received from the invoke call as the query parameter. |

###### **URL**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| **URL** | **https://**<**ipaddress**\>/<**cluster\_id**\>/**wrk/api/dispatcher/task/state/<task\_id**\> | Url should include the following parameters:      **ipaddress:** IP address of DNIF Console      **cluster\_id:** Cluster id of the cluster you want to query data |

###### **Header**

| **Field** | **Value** |
| --- | --- |
| **Token** | Specify the token generated from DNIF Console |

###### **Query parameter**

| **Field** | **Value** |
| --- | --- |
| task\_id: | Specify the id received from the invoke call |

###### **Curl Command**

```
 curl -k --location --request GET 'https://<ipaddress>/<cluster_id>/wrk/api/dispatcher/task/state/<task_id>' \--header 'Token: <token>'
```

###### **Response Status Code**

  
Response status indicates whether a specific request has been successfully completed/Pending/failures.

| **Response Code** | **Task Stage** | **Task State** |
| --- | --- | --- |
| 200 | EXECUTING | STARTED |
| 200 | EXECUTED | SUCCESS |
| 200 | PENDING | QUEUED |
| 200 | PENDING | QUERY\_WORKERS\_DOWN |
| 200 | FAILURE | FAILED |

###### **Response**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| Status\_code | 200 | This status indicates that the call invoked was successfully completed and the search results are displayed as per the query. |
| Status | Success |

###### **Response Value** 

```
{   "status": "success",   "task_stage": "EXECUTED",   "task_state": "SUCCESS"}
```

Check for the task\_state result as success. When you get success as the result, execute the Get Result api to get the desired result.

###### **Get Result**

###### **Method details**

| **Field** | **Description** |
| --- | --- |
| HTTP Method | GET |
| Response Format | JSON |
| Requires Authentication? | Yes |

| **Parameter** | **Description/Value** |
| --- | --- |
| **/result** | You retrieve the result for the invoke call by sending an HTTP GET request to its URL. You pass the id received from the invoke call as the query parameter. |

###### **URL**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| **URL** | **https://**<**ipaddress**\>/<**cluster\_id**\>/**wrk/api/dispatcher/task/result/<task\_id>?pagesize=**<**limit**\>**&pageno=**<**page\_no**\> | Url should include the following parameters:      **ipaddress:** IP address of DNIF Console      **cluster\_id:** Cluster id of the cluster you want to query data |

###### **Header**

| **Field** | **Value** |
| --- | --- |
| **Token** | Specify the token generated from DNIF Console |

###### **Query parameter**

| **Field** | **Value** |
| --- | --- |
| task\_id | Specify the id received from the invoke call |
| pagesize | Specify the number of records in one call |
| pageno | Specify the next page number (starts with 1) |

###### **Curl Command**

```
curl -k --location --request GET 'https://<ipaddress>/<cluster_id>/wrk/api/dispatcher/task/result/<task_id>?pagesize=<size>&pageno=<number>' \ --header 'Token: <token>'
```

###### **Response**

| **Field** | **Value** | **Description** |
| --- | --- | --- |
| Status\_code | 200 | This status indicates that the call invoked was successfully completed and the search results are displayed as per the query. |
| Status | Success |

###### **Response Value** 

```
{"apply_hidden":true,"execution_time":"1.7275 sec","fields_list":["$CNAMTime","$System","$SourceName","$SourceType","$Stream","$Action","$SrcIP","$SrcPort","$DstIP","$DstPort","$Proto","$TXLen","$RXLen","$SystemTstamp","$EvtLen","$EventName","$SrcType","$IntelReference","$Status","$Type","$DstType","$IntelURL","$App","$DevSrcIP","$DstLOC","$DstCN","$DstASN","$DstISP","$SrcLOC","$SrcCN","$SrcASN","$SrcISP","$ExtractorID","$EStatus","$PStatus"],"result":[{"$Action":"PACKET_BLOCKED","$App":null,"$CNAMTime":1630074479965,"$DevSrcIP":"10.139.128.73","$DstASN":"396212","$DstCN":"US","$DstIP":"71.39.18.125","$DstISP":"AIMS-COMMUNITY-COLLEGE","$DstLOC":"[40.3851,-104.6759]","$DstPort":"53413","$DstType":"PUBLIC","$EStatus":"EAD","$EventName":null,"$EvtLen":500,"$ExtractorID":"127","$IntelReference":null,"$IntelURL":null,"$PStatus":"PAD","$Proto":"UDP","$RXLen":0,"$SourceName":"FORTIGATE","$SourceType":"FIREWALL","$SrcASN":"-","$SrcCN":"CN","$SrcIP":"116.5.35.83","$SrcISP":"-","$SrcLOC":"[23.1057,113.2023]","$SrcPort":"13031","$SrcType":"PUBLIC","$Status":"FAILED","$Stream":"FIREWALL","$System":"gotham-fortigate","$SystemTstamp":"2016-08-06","$TXLen":0,"$Type":null,"$Xhour":"2021082714","$Xminute":"202108271427"}],"source_stream":"FIREWALL","status":"success","task_status":"Task Executed Successfully","total_count":1}
```
