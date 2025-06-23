---
title: "Working with Services"
date: 2025-01-20
type: "epkb_post_type_1"
---

This section helps you to manage and monitor the services of PICO.

## **How to view PICO Services?**  

- Hover on the **Administration** icon on the left sidebar of the Home screen, from the option displayed select **Manage Components**, the following screen will be displayed.

<!-- ![Working with services](Images%20Working%20with%20services/image201-Dec-21-2023-04-30-50-5447-AM.webp) -->

- Click the **Component name** to view the Health page of that particular Component.

<!-- ![Working with services](Images%20Working%20with%20services/image202-Dec-21-2023-04-31-01-7064-AM.webp) -->

- Services can be managed using the **Manage** icon displayed on the top right corner of the PICO Health screen.

You can edit the name of the component on the top left corner of the screen using the **Edit** icon and then click **Save**, to save the component name.

| **Icon** | **Description** |
| --- | --- |
| <!-- ![Working with services](Images%20Working%20with%20services/image-3-Dec-21-2023-04-31-16-6050-AM-2.webp) --> | Click this icon to list the services of the PICO component. Each service listed can be enabled/disabled. |
| <!-- ![Working with services](Images%20Working%20with%20services/image-4-Dec-21-2023-04-31-28-3562-AM.webp) --> | Indicates that the services is up and running |
| <!-- ![Working with services](Images%20Working%20with%20services/image-5-.webp) --> | Indicates that the particular service is stopped |
| <!-- ![Working with services](Images%20Working%20with%20services/image-6-Dec-21-2023-04-31-59-6657-AM.webp) --> | Click this to restart the service |

PICO services can be individually restarted from the following screen

<!-- ![image 7-Dec-21-2023-04-32-59-0430-AM](Images%20Working%20with%20services/image207-Dec-21-2023-04-32-59-0430-AM.webp) -->

The PICO component displays the following services:

| Field Name | Description |
| --- | --- |
| Filter Engine | **Log Level:** Used to know the status of the logs updated before forwarding to the next queue.The logging level can be set with below integer values:      DEBUG   INFO   WARNING   ERROR   CRITICAL      **Device Source IP Policy:** The valid values are:      **Allow:** When configured to allow, it will allow all the host-addresses except the ones mentioned in Device Source IP List.      **Deny:** When configured to deny, it will deny all the host-addresses except the ones mentioned in Device Source IP List.**Note:** Multiple IP Addresses can be added as comma separated values.      **Device Source IP List:** Enter the list of host IP addresses of the devices from which log forwarding should be allowed or denied.      **Event Policy:** The valid values are:      **Allow:** When configured to allow, it will allow all the event string matches except the ones mentioned in the event list      **Deny:** When configured to deny, it will deny all the event string matches except the ones mentioned in the event list.   **Note:** Multiple events can be added as comma separated values.   **Event List:** A list of event string filters to be allowed or denied based on the configuration value in DefaultPolicy.      **System Processes:** Number of services or instances running in the Filter Engine of Pico. The more the number of Filter Engine Processes, the better is the performance of filtering. The minimum value is 1. **Event Filter Mode:** The valid values are:      **Term:** Used for searching exact term match across log events (default mode)      **Wildcard:** Used for bash-style wildcard filtering |
| Native Forwarder | **Log Level:** Used to know the status of the logs updated before forwarding to the next queue.The logging level can be set with below integer values:      DEBUG   INFO   WARNING   ERROR   CRITICAL      **Scope:** Lists all the scopes available in the tenant (previously known as cluster), select to assign PICO to a particular scope      **Primary Adapter(s):** Select the IP address of the primary Adapter to which the filtered logs will be forwarded.      **Failover Adapter(s)**: Select the IP address of the failover Adapter to which the filtered logs will be forwarded.      **System Processes:** The number of services or instances running in multiple Native Forwarders. The more the number of processes, the better is the performance of filtering. The minimum value is 1. |
| Raw Forwarder | **Log Level:** Used to know the status of the logs updated before forwarding to the next queue. The logging level can be set with below integer values:      DEBUG   INFO   WARNING   ERROR   CRITICAL      **Destination IP:** Enter an IP address to forward logs through Raw Forwarder.      **Spoof Mode:** Select True or False. This is used to spoof the IP address from the source.      **System Processes:** The number of services or instances running in multiple Raw Forwarders. The more the number of processes, the better is the performance of filtering. The minimum value is 1. |
