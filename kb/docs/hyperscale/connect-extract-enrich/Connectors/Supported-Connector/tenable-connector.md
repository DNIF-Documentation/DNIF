---
title: "Tenable Connector"
date: 2025-01-31
type: "epkb_post_type_1"
---

Tenable connector pulls the Tenable Vulnerability Management logs directly from the Tenable Vulnerability Management API.

###### **Prerequisites**  

- Tenable Account

- Access Key

- Secret Key

###### **How do we derive the prerequisites?**

- Login to [Tenable.](https://cloud.tenable.com/)

- Select the **Vulnerability Management product.**

- Click **Settings >** **Access Control.**

- Click on **Create User.**

- In the user creation form, enter the **name**, **email**, and **password** as per your organization’s standards.

- Choose the **Scan Operator** role and click on **Next.**

- On the **User Group’s** page, select the appropriate user group(s) such as **All Users,** and click on **Next.**

- On the **Permissions page**, choose **Asset Discovery** and click on **Save.**

- Edit the newly created user by clicking on it.

- Click on **More,** then click on the **API Keys section > Generate API Keys > Replace & Generate.**

- Please make note of your **Access key** and **Secret key**, as you will need them in the next step.

###### **Configurations**

- Enter the **Access key** and **Secret key** generated in the previous step.  
    

- The following are the configurations to forward Tenable Vulnerability data to DNIF.‌  
    

| **Field**  | **Description** |
| --- | --- |
|  Connector Name | Enter a name for the connector |
|  Access Key | Enter your Tenable Access Key |
|  Secret Key | Enter your Tenable Secret Key |

- The following optional configurations can be done based on requirements.

| **Field** | **Description** |
| --- | --- |
|  Log Level | Set the loglevel   0: DEBUG   1: INFO   4: WARNING   5: ERROR   6: CRITICAL |
|  Number of Threads  | Number of threads to publish logs. |
|  Size limit  | Size limit for creating bunching of logs to be sent. |
|  Wait Time | Max time to wait for log bunching in seconds. |
