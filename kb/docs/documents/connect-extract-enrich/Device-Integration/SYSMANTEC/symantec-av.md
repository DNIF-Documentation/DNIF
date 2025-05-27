---
title: "Symantec AV"
date: 2025-01-20
type: "epkb_post_type_1"
---

Symantec Endpoint Protection, developed by Symantec, is a security software suite that includes anti-malware, intrusion prevention, and firewall capabilities for both servers and desktops.

## **Integration of Symantec AV with DNIF**

To forward Symantec AV logs to the DNIF Adapter, follow the configuration steps below:

1. Log in to **Symantec AV** using the web interface.
2. On the console, click **Admin Servers**.
3. Select the **local site** or **remote site** from which you want to export log data.
4. Click **Configure External Logging**.

### General Tab Settings

- In the **Update Frequency** dropdown, choose how frequently to send log data.
- In the **Master Logging Server** dropdown, select the management server responsible for sending logs.
  > If you're using SQL Server with multiple management servers, only **one** should be designated as the Master Logging Server.
- Check the option **Enable Transmission of Logs**.

### Syslog Configuration

Provide the following information:

| **Field**           | **Description**                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| **Syslog Server**   | Enter the IP address of the DNIF Adapter.                                      |
| **Destination Port**| Choose the protocol and specify the port on which DNIF listens for syslog logs.|
| **Log Facility**    | Enter the log facility number (default: `7`). Valid range: 0–23.               |

### Log Filter Settings

- Go to the **Log Filter** tab.
- Select the types of logs you wish to export.
- Click **OK** to save the settings.

Once complete, **Symantec AV logs will be streamed to DNIF**.

