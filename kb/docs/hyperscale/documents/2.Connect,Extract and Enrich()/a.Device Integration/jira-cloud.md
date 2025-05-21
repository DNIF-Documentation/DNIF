---
title: "JIRA CLOUD"
date: 2025-01-20
type: "epkb_post_type_1"
---

Jira Cloud Integration enables you to create Jira issues directly in the Jira Cloud Platform using the JIRA REST API via webhooks. The following guide demonstrates how to create an issue ticket in Jira based on detections made in the DNIF console. These detections can include raised signals or any fields identified in log events. 

To create an issue in Jira using the JIRA REST API via webhooks, you need to ensure the following prerequisites are met.

###### **Webhook Configuration :**

The webhook configuration requires the following fields:

- **Name of the Configuration:** The name of the configuration you want to assign.

- **HTTP Request Method:** According to the Jira documentation, the "POST" method is used to create an issue.

- **URL:** The endpoint for the Jira REST API.

- **Headers:** Necessary headers for the HTTP request.

- **Payload:** The data to be sent with the request.

Here's a detailed explanation of each field:

- **Name of the Configuration:**This field specifies the name you want to give to the webhook configuration.  
      
    ![](./jira-cloud-img/AD_4nXemQZNZJqaJa9WrsJoeCRUzA6czjW3aXaoJdZoc1reVjF4VdlMtRHP8pPB755iJ9yqe-Bfu5RmkHamaful04ibp3wFdZkby00Gv8MT0YgGaEKOtzyJQalGLycr8htVETDo1kQQKtMup_ltBacRr2xsxK3au)

- **Request Method ( Http Request Method ) :** The HTTP method used to create an issue in Jira. As per Jira's documentation, the "POST" method is required for this purpose.  
      
    ![](./jira-cloud-img/AD_4nXdW8Rz8qktn_Mty39d1sXSef83UVN4ov-wJuWdHFEQ9ui_cTFZ-wgltdPCULmpNlRMSIcZ1zC_xF6Fwo7huY7AlZVnwhFw-n4ze6zAvoDzYEavRS8paMUv9HfcSKJrS1MUuaAnfUouShbvbH1tRXj-wD5oC)
      
    

- **URL :** The Jira Cloud REST API endpoint to which the request is sent.  
      
    ![](./jira-cloud-img/AD_4nXcGveQ0DQmx8eLV5Z7iAAHnITF_apyanHy7Hv6VCoAFcIDFzs7ufD-v6PIltD4NO3eY-GpiMR2bK5W4bgTdt3N-QRkW9FAxx3Vy5tCyUPFE7-qGYwr83EuQtBh3ivVi1pjBGr1KdPY-eGqi0mIzho0pX1NP)
      
    

- **Authentication :** Define the authentication method for API calls, such as providing a username and password. For further details, refer to the Jira documentation.  
      
    ![](./jira-cloud-img/AD_4nXck0bY6f0W_4X0eK542jVf4o-m9f9e7p_hD3U3N3I8s_9x_Tz_Q6A5R_Yw_1X_O7j_H3M2q_N_L4K1J0i_G8F_E9D_C_B_A)
      
    

- **Headers :** Specify the required headers for the API request, adhering to Jira's specifications.  
      
    ![](./jira-cloud-img/AD_4nXf9x_K0H2L4M6N8O1P0Q2R4S6T8U0V2W4X6Y8Z_A1B3C5D7E9F1G3H5I7J9K1L3M5N7O9P_R_S_T_U_V_W_X_Y_Z)
      
    

- **Payload :** Provide the JSON payload containing the necessary data for creating a Jira issue, as specified in the Jira documentation.

- **Using Variable in Payload to Create Jira Issues**
    - The payload field allows you to define the contents of the issue raised in Jira. You can populate fields from search results or signal details using the "Variable" feature available in the DNIF console. This feature enables you to use specific field names as variables in your payload.
    
    - To use a particular field as a variable, prefix the field name with a "$" symbol. For example, **$detectionseverity**. You can use this variable in place of the value in a "key":"value" pair.  
        

![](./jira-cloud-img/Using-Variable-in-Payload-to-Create-Jira-Issues.webp)

- **Explanation of Payload Fields :**

- **Custom Fields :**  
    **customfield\_&lt;id&gt;:**Custom fields created by the Jira admin

- **Using Variables :**

- To utilize the variables, replace **&lt;id&gt;** in **customfield\_&lt;id&gt;** with the actual custom field ID created by the Jira admin.

- For instance, if the custom field ID for detection severity is **10010**, you would use **customfield\_10010**: "**$detectionseverity**".

- By leveraging these variables in your payload, you can dynamically populate issue fields with relevant data from DNIF detections, making issue creation in Jira more efficient and tailored to your needs.

- Below screenshots illustrate how query results for signals raised in DNIF will be displayed in the Jira tickets.  
    

###### **Screenshot Examples:**

1. **Query Result Display:  
    **Shows how the query results are populated into the Jira ticket.  
      
    ![](./jira-cloud-img/AD_4nXdIO45qShZTqdMC1iVKgsaZokpPdCVITYZ8fNJhIzt2RBaMzfC5vkzKZtOOtDJd9TksSeJImzzTdZoBjbvtYwogdWJWFdmKWUzzzTUThbSpUoY-fd-0AUl41krCLAlE49J19FHRKBmFU_pWGVUD8ugoZs2p)
      
    

3. **Signal Details Display:**  
    Displays signal details in query results integrated into the Jira ticket fields.  
      
    ![](./jira-cloud-img/AD_4nXeqEtkDudrL1Yz2TMY1p20uu1Ur8ccZIG-QvGwMFQdZpbv900RWIzBiMCXbmjfna6pclS_e2Xoz7WDKDBrQbgDt8e9zLlZ14tUY_i3Y5qFwLw8uHK15dnCffUlVW_BdMf2k8n3O_WrgN2Kk2s5IFUr1a435)
    

Please find the Reference Documentation below: [create issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post) 

By following the above documentation, you can integrate DNIF with Jira Cloud, automatically creating detailed and relevant issues based on detected signals and search results.
