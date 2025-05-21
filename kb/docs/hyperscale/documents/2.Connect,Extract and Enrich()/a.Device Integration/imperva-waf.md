---
title: "Imperva WAF"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
To configure log integration:

- Log into your [my.imperva.com](https://authentication-management.service.imperva.com/login) account and navigate to the Logs Setup page:
    - **New UI**: On the top menu bar, click **Account > Account Management**. On the sidebar, click **SIEM Logs Setup > Logs Setup**.
    
    - **Classic UI**: On the sidebar, click **Logs > Log Setup**.  
          
        ![](./Imperva-WAF-image/image%201-Dec-27-2023-08-07-02-5689-AM.jpg)
          
          
        

- Select a connection mode.

- Select the format for the log files: CEF (default).

- Click Save to save all changes.

- On the sidebar, click Log Levels. The following window is displayed  
      
    ![](./Imperva-WAF-image/image%202-Dec-27-2023-08-07-17-5314-AM.jpg)
      
    

Select a log level for each site to enable logging, or leave disabled.

[Official Documentation](https://docs.imperva.com/bundle/cloud-application-security/page/settings/log-integration.htm)

Verify logs on DNIF:

```
<_fetch * from event where $Duration=5m AND $DevSrcIP=10.0.X.X limit 100>
```

![image 2-Dec-27-2023-08-07-12-9751-AM](./Imperva-WAF-image/image%202-Dec-27-2023-08-07-12-9751-AM.jpg)
