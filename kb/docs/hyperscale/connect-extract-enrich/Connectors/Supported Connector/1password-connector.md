---
title: "1Password Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

1Password connector utilizes the pull method to retrieve Dropbox Logs through the 1Password events API.

###### **Prerequisites**

- 1Password Account.

- Base URL

- Log Types

- Access Token

###### **How to derive the prerequisites?**

- Get your Base URL  by referring to the [Servers](https://developer.1password.com/docs/events-api/reference/#servers) section in the 1Password Docs.

![image 1-Apr-10-2024-09-39-10-9176-AM](./1Password-img/1Password-Connector-1.webp)

- Sign in to your 1Password account using the following link [https://start.1password.com/signin](https://github.com/login)

![image 2-Apr-10-2024-09-42-27-8875-AM](./1Password-img/1Password-Connector-2.webp)

- Click **Integration** in the sidebar.  
      
    ![](./1Password-img/1Password-Connector-3.webp)  
      
    

- Click **Directory** at the top of the page.

![image 4-Apr-10-2024-09-45-54-2223-AM](./1Password-img/1Password-Connector-3.webp)

- Scroll down to the **Events Reporting** section then click **Other**

![image 5-Apr-10-2024-09-47-19-4013-AM](./1Password-img/1Password-Connector-4.webp)

- Enter a **System Name** for the integration, then click **Add Integration**.  
      
    ![image 6-4](./1Password-img/1Password-Connector-5.webp)  
      
    

- Enter a name for the token and choose token expiration.  
    

![image 7-4](./1Password-img/1Password-Connector-6.webp)

- Select the event types your token will have access to and click the **Issue Token** to generate the access token key.  
      
    ![image 8-4](./1Password-img/1Password-Connector-7.webp)  
    

- Copy and securely store the token. Click **Save in 1password** and choose which vault to save to.  
      
    ![image 9-4](./1Password-img/1Password-Connector-8.webp)

###### **Configurations**

- The following are the configurations to forward 1Password Connector logs to DNIF.‌  
      
    ![image 10-1](./1Password-img/1Password-Connector-10.webp)

| **Field**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Base URL | Select the Base URL for 1Password API |
| Log Types | Select the log types |
| Access Token | Enter the Access Token |

The following optional configurations can be done based on requirement

| **Field** | **Description** |
| --- | --- |
|   | Set the loglevel   0: DEBUG   1: INFO   4: WARNING   5: ERROR   6: CRITICAL |
| Number of Threads | Number of threads to publish logs |
| Size limit  | Size limit for creating bunching of logs to be sent |
| Wait Time | Max time to wait for log bunching in second |
