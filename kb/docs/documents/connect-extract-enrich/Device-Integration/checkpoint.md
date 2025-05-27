---
title: "CheckPoint"
date: 2025-01-17
type: "epkb_post_type_1"
---

Firewall includes the CheckPoint IPS Software Blade, which secures your network by inspecting packets traversing through the gateway.

## **Prerequisites**

\* [Log exporter](https://supportcenter.checkpoint.com/supportcenter/portal?action=portlets.SearchResultMainAction&eventSubmit_doGoviewsolutiondetails=&solutionid=sk122323) for CheckPoint version specific.

## **Configuration**

Run all commands under EXPERT mode. In CLI, enter Expert, then enter the specific password.

- To add a new target, run the following command on the log server:

```
cp_log_export add name <name> [domain-server <domain-server>] target-server <DNIF Adapter IP Address> target-port <target-port> protocol <(udp|tcp)> format <syslog> [optional arguments]```
---
```
**Example** :
```
cp_log_export add name DNIF target-server x.x.x.x target-port 514 protocol tcp format syslog```
---
```
- To start the new log exporter, execute the following command:```
---
```
cp_log_export restart
