---
title: "Cyble Vision"
date: 2025-01-21
type: "epkb_post_type_1"
---

Cyble Vision is a cloud-based threat intelligence platform that delivers real-time insights into emerging cyber threats. It empowers organizations to proactively identify, track, and mitigate potential risks. One of its key features is brand monitoring, which generates alerts upon detecting instances of brand misuse.

Leveraging AI, Cyble Vision offers businesses a comprehensive view of their external threat landscape by gathering intelligence from the dark web, deep web, and surface web. This allows organizations to stay ahead of cyber threats and enhance their overall security posture.

To fetch the alert data for the Cyble Vision platform you need to generate an API access key. This document guides you through the process of creating an API access key.

###### **Pre-requisites:**

Admin user access is required for creating the API Access Key.

###### **Step-by-Step Guide to Generate API Access Key**

1. **Login:  
    ****URL :** https://cyble.ai  
    Sign in to your Cyble Vision account using admin credentials.

3. **Navigate to Utilities Section:  
    ** After logging in, go to the \`Utilities\` section of the platform, which provides options for API access management.  
      
      
    ![](images/AD_4nXdJ_yZ6zjxngj6TZUM9b16o_0ACkpT4m36Jao4EeoXDnG1hZxXVWsJWg0vyWuyZG6gzwuWp9428OvN1r6ni5KIdYz4Us9Vso5P_CpT-OoPL_cIe0dNXR1XGaOVaf1oToMb0rt9EpVWBWdkYiX82Iu1Vdt4?key=gFypGuMem_Ll46mDYbP8Zg)  
      
    

5. **Access API Key Generation:**    
    Navigate to \`Utilities > Access API\`.  
      
      
    ![](images/AD_4nXd1icrb-qBINEbzLTmhIcye_23h32O0kY_ayBnJEmhbyldUHBT3mDUC2rLrPi7HKXiWyCRIUoz-2ChpyOOshFHyFC4OR48kVT3-RAKaQToQ4_trvyWpTjD-jdd0-G_4FJlRHCAliEC2BrkcJ0RTGBQOSCE?key=gFypGuMem_Ll46mDYbP8Zg)  
      
    

7. **Create Access Key (Alias Name):**  A window will appear prompting you to provide an alias name for the API key.This name helps to identify the key's purpose or user.Once an alias is entered, click "Generate."  
      
      
    ![](images/AD_4nXcli-ISWk2EylNtxf16RtCSpzsiUtHJk6UTbUktZfUveN0oCpqn3-wjjBj88QYHV1hGE50HSE3L0qEc3uHDG4B44FmZm8PiosjXvgM67kYfkQxpUz6ETBzRp28ZA1Bw1Y4rSWYMEZUsypIiZVzUF7bIeOA?key=gFypGuMem_Ll46mDYbP8Zg)  
      
    

9. **Access Key Generation:**  After clicking "Generate," a new window will pop up displaying the access key. Copy the key immediately and store it securely, as this access key will used in the connector configuration.

###### **Configurations**

![image 1-Nov-16-2023-10-41-05-1935-AM](./images/image%201-Nov-16-2023-10-41-05-1935-AM.jpg)

The following are the configurations to forward Cyble Vision logs to DNIF.‌

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Access Key | Enter the Access key Obtained |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on the screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer to [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under the **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with the status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
