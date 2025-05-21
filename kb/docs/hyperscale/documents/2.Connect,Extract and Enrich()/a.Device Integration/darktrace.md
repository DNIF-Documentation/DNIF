---
title: "Darktrace"
date: 2025-01-17
type: "epkb_post_type_1"
---

This article describes the steps to configure syslog forwarding for Darktrace.

###### **Prerequisites**

- Configure Darktrace to send logs.

- Ensure you are a Darktrace Administrator with access to the User Interface.

###### **To configure syslog forwarding for Darktrace:**

1. Log in to the **Darktrace** interface.

3. Expand the top left menu and select **Admin**. A second menu appears.

5. Select the **System Config** page.  
      
    ![](./Darktrace-img/image-png-Sep-21-2022-12-49-59-50-PM.png)  
      
    

7. In the **Alerting** section, click **Verify Alert Settings**.

9. Set the following parameters:
    - **CEF Syslog Alerts** as **True**.
    
    - The **syslog server** to the **IP address of the DNIF Adapter**.
    
    - Set a **unique port.**
    
    - **CEF Syslog TCP Alerts** as **True**.  
          
        ![image 1-Dec-04-2023-09-11-58-6567-AM](./images/image%201-Dec-04-2023-09-11-58-6567-AM.jpg)  
          
        

11. Darktrace will automatically save your changes.

13. In the **Alerting** section, click **Verify Alert Settings**.  
      
    ![image 1-Dec-04-2023-09-11-58-6567-AM](./images/image%201-Dec-04-2023-09-11-58-6567-AM.jpg)  
      
    

15. You will view **1 Alert Sent. IMAP settings are valid** message, on validating.

###### Configure System Health Notifications

1. Click the gear icon (System Config) > System > Modules > System Health.

3. Toggle Syslog Health Message to ON.

![image 1-Dec-04-2023-06-08-05-0688-AM](./Darktrace-img/image%201-Dec-04-2023-06-08-05-0688-AM.jpg)

**Configure Audit Log Messages**

1. Click the gear icon (System Config) > System > Modules > Enhanced Syslog.

**Verify logs on DNIF**

Sample Logs:

```
<_fetch * from event where $Duration=5m AND $DevSrcIP=10.0.X.X limit 100>
```

![image 2-Dec-04-2023-06-08-14-6350-AM](./images/image%202-Dec-04-2023-06-08-14-6350-AM.jpg)
