---
title: "Cloudflare Logpull Connector Setup Guide"
date: 2025-01-21
type: "epkb_post_type_1"
---

The Cloudflare Logpull Connector allows you to stream logs containing crucial data about the connecting client, request paths through the Cloudflare network, and responses from the origin web server. This guide outlines the prerequisites, how to retrieve them, and the necessary configurations to set up the connector.

* * *

###### **Prerequisites**

Before proceeding with the setup, ensure you have the Enterprise Cloudflare account:

- **Super Administrator Role:** Only a user with this role can complete the setup.

- **Cloudflare Login Email:** This is the email used to access Cloudflare, where the zone and API are created.

- **Zone ID:** The unique identifier of the website or application added to Cloudflare.

- **Cloudflare API Token:** This token must have the appropriate permissions to pull logs.

* * *

###### **Steps to Retrieve Prerequisites**

Follow the steps below to gather the required details from Cloudflare:

1. **Log in to Cloudflare:**
    - Use your Cloudflare account to access the Cloudflare Dashboard.
    
    - Note down your **email**.

3. **Get the Zone ID:**
    - Open the website or application for which you want to pull logs from the dashboard.
    
    - Copy the **Zone ID** from the page.

![Cloudflare-Logpull-Connector-Setup-Guide-1-761x1024](./images/Cloudflare-Logpull-Connector-Setup-Guide-1-761x1024.png)

3. **Generate Clouflflare API Token**

- Navigate to the API token section by clicking "Get your API token."

- Select Create Token.

- Choose the Read Analytics and Logs template by clicking Use Template.

![unnamed-4-1](./images/unnamed-4-1.png)

- Adjust the permissions as needed or use the default settings.  
    

![Cloudflare-Logpull-Connector-Setup-Guide-1-1-1024x166](./images/Cloudflare-Logpull-Connector-Setup-Guide-1-1-1024x166.png)

- (Optional) Define the token's TTL (Time to Live), which determines how long it will stay active.  
    

![Cloudflare-Logpull-Connector-Setup-Guide2-1024x166](./images/Cloudflare-Logpull-Connector-Setup-Guide2-1024x166.png)

- Continue by clicking Continue to Summary and then Create Token.

- Copy the generated API token.

![Cloudflare-Logpull-Connector-Setup-Guide3-1024x542](./images/Cloudflare-Logpull-Connector-Setup-Guide3-1024x542.png)

###### **Cloudflare Connector Configuration**

After collecting all prerequisites, follow these steps to configure the Cloudflare Logpull Connector in DNIF:

| **Field** | **Description** |
| --- | --- |
| **Connector Name** | Enter a suitable name for the connector. |
| **Auth Email** | Enter the Cloudflare login email. |
| **Cloudflare API   Token** | Paste the Cloudflare API token generated earlier. |
| **Cloudflare Zone ID** | Enter the Zone ID(s). You can input multiple Zone IDs, separated by commas (,). |

###### **Configuration Steps**

1. **Save the Details  
    **Once you have entered all required fields, click Save.

3. **Test the Connection:  
    **A Connection successful message will appear with a timestamp if the configuration is correct.

5. **Troubleshoot if Necessary:**  
    If the connection fails, you will see an error message. For more information on

7. resolving errors, refer to the [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) page.

###### **Configurations**

The following are the configurations to forward Cloudflare Logpull Connector logs to DNIF.
