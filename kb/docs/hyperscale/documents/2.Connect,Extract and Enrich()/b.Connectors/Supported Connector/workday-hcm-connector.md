---
title: "Workday HCM Connector"
date: 2025-02-04
type: "epkb_post_type_1"
---

Workday Human Capital Management (HCM) is a cloud-based system that helps businesses manage their people. It's a suite of HR solutions that can help businesses streamline processes, improve productivity, and engage their employees. The Workday HCM connector utilises the User Activity Logging REST API to retrieve log entries that contain information about Workday user activities.

###### **Pre-requisites**

- Client ID - Workday API client ID.

- Client Secret - Workday API client secret.

- Refresh Token - Workday API refresh token.

- Tenant Details – The tenant name and tenant hostname.

**The following steps describe how to generate the neccessary key values:**

1. Run "Create Integration System User" task and create user "ISU - REST  
      
      
    **![](images/AD_4nXeiLCDT8PNlssBfo8WSxbf7sNeq7D_0qv0ISi1VgBZk1lr6QHpcmzNzApOJ6TLdUReySZuge7BRL7WzqrOVIXXm4g9q97xPZ0Nj-d1hwr-5dkzh2h7F5QgyTxGOUt1OhIjQa-I?key=nPVHeOxmpmAJFMNufKRN0pZd)**  
      
    

3. Run "Register API Client for Integrations" task and create client "RESTAPI". Please refer to [admin guide](https://doc.workday.com/r/Z9lz_01hqDMDg6NSf7wCBQ/D96dPzDVCDuBJaUyJzN~kw) for "Scope" field:
    - Select the functional areas to which your OAuth 2.0 client requires access.
    
    - Select the functional areas for domains of any custom objects to which you might require access.
    
    - Use caution to expose only those functional areas that you specifically require access to.
    
    - If your OAuth 2.0 client requires access to core Workday domains that aren't in any functional areas, select the Include Workday Owned Scope check.
    
    - Make sure to save the "Client Secret" value as it is invisible from here on. However, if you do forgot it, you may click the related action to this API client > Generate New Client Secret to get a new one.

5. Associate the API client with your ISU user - "ISU - REST":
    - Search for "View API Clients" report -> Click "API Clients for Integrations" tab.
    
    - Click the related action for your API client > Manage Refresh Tokens for Integrations.
    
    - Search for your user from Step 1 in the "Workday Account" text box.

7. Click Ok, then check "Generate New Refresh Token" and click Ok again.

9. From "View API Clients" report, you will be able to see the "Token Endpoint" and "Workday REST API Endpoint" from the top of this page.

11. From "View API Clients" report, you will be able to see the "Token Endpoint" and "Workday REST API Endpoint" from the top of this page.

13. Open SoapUI application to generate access token using the created API client above.

15. Click REST Project with URI of token endpoint.

17. Update the Method to "POST", and change media type to "Text/XML". Then fill the querystring as (please replace the parameters with the correct value generated in your tenant):  
    `grant_type=refresh_token&refresh_token=&lt;Refresh Token&gt;&client_id=&lt;Client ID&gt;&client_secret=&lt;Client Secret&gt;`

19. The access token is generated when you submit the request**.**  
      
    **![](images/AD_4nXffs4wnhkAzz0sHsAxWprShexqgB-Bsv-fwAwvKiof_eo1rE3JN8fG3Fui20B8vK8gQVV-HGA1a2VeVzjBnHe9tTU1CDClGPkN3gAJEHx72qe1CyauZKxyDDIpxFdoNbXp_RxSimA?key=nPVHeOxmpmAJFMNufKRN0pZd)**  
      
    

###### **Grant Integration User Access to System Auditing**

1. Access the Create Security Group task.

3. Type of Tenanted Security Group: Integration System Security Group (Unconstrained)

5. Name: Specify an appropriate name (e.g. ISSG XX RESTAPI_SIEM_TCS)

7. Access the Edit Integration System Security Group (Unconstrained) task for the group you just created.

9. Integration System Users: Specify the user created in the previous "Create Integration User and OAuth Token" (e.g. ISU XX RESTAPI_SIEM_TCS)

11. Access the View Domain task for the domain System Auditing.

13. Select Domain > Edit Security Policy Permissions from the System Auditing related actions menu.

15. Add the group you created, Remote Security Monitoring, to both tables:

17. Report/Task Permissions table: View access

19. Integration Permissions table: Get access

21. Access the Activate Pending Security Policy Changes task and activate the changes that you made.  
      
    **![](images/AD_4nXfF0eg-tKyhor86qH91YPE4sbIqh2cuwHnT0sIqQ_hBf4oQX-9V8_6CzOIzpoIPbvh-casQvlX7qgB2OM22DVlmmggEuwzYFvYHkPj_B6htd_KM_718kXSsHHcRygIeB55nWgTBIw?key=nPVHeOxmpmAJFMNufKRN0pZd)**  
      
    

- User Activity Logging REST API
    - The User Activity Logging REST API enables developers and administrators to retrieve log entries that contain information about Workday user activities. This REST API provides access to the User Activity report data source.
    
    - Before submitting User Activity Logging REST API requests, begin logging the user activity in the tenant:
    
    - Access the Edit Tenant Setup – System task.
    
    - Select the Enable User Activity Logging option.

- For reference information about the User Activity Logging REST API, see the activity Logging resource in the Privacy REST web service documentation.

- URL Base Path
    - The User Activity Logging REST API uses this base path:

```
https://<tenantHostname>/api/privacy/<version>/<tenantName> 
```

- Example:

```
https://company.tenant.com/api/privacy/v1/gms
```

- Retrieving User Activity Instances
    - To retrieve user activity instances within a given time frame, use this endpoint:

```
GET /activityLogging?from={fromDateTime}&to={toDateTime}&instancesReturned={instancesReturned}
```

- Where:
    - **{fromDateTime}:**
        - The required date and time of the earliest log entry. Use the UTC time zone.
    
    - **{toDateTime}:**
        - The required date and time of the latest log entry. Use the UTC time zone.
    
    - **{instancesReturned}**
        - A number between 1 and 25 for fine-tuning the retrieval mechanism. Workday recommends a value of 1, which gives the best performance.
        
        - instancesReturned=1 retrieves 10,000 instances. If there are more than 10,000 instances, iteratively call the endpoint using the datetime of the last record as the {fromDateTime} parameter. For details about the iterative calls, see Retrieve All User Activities in a Time Period .  
            

###### **Configurations**

![](images/AD_4nXfg7qZG9F6O1Gdi87Ke6jYGiWbbv0A70ZhrM7aqGZp36LbMIw0pAJ27BMMxdHU4ds5ai0cPjkoeZKvgKWdIvHIhEWjGq6rMGJv_66bQnAbbC9kkQyU80cRI9Z0q4JCLVFM3xiq4?key=5vvn0NIKHHZ3FMLelof0ijIZ)

The following are the configurations to forward Workday HCM connector logs to DNIF.‌

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Client ID | Enter Workday API client ID |
| Client Secret | Enter Workday API Refresh Token |
| REST API Endpoint | Enter REST API Endpoint of the Workday server |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.

1. Fill in all the required information as per the screenshot given below:

   - **Client ID:** Add &lt;Client ID&gt;
   - **Client Secret:** Add &lt;Client Secret&gt;
