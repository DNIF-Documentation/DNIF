---
title: "Pre-Requisites Audit"
date: 2025-01-20
type: "epkb_post_type_1"
---

This document includes a [script](https://github.com/dnif/helpers) to conduct an audit to assure that all the pre-requisites are met for the successful deployment of DNIF. The following checks can be performed using the script.

1. Hardware prerequisites check.
    - Provisioned RAM
    
    - Provisioned CPU
    
    - Provisioned Disk (Root and DNIF partition)

3. NTP synchronization
    - Localtime
    
    - UniversalTime

5. Network Interface check

7. Connectivity check between Core, Datanode and Adapter

9. Hostname resolution between Core, Datanode and Adapter

11. Inter component open port check

13. Connectivity check to domains: github.com, google.com, raw.github.com, hub.docker.com,hog.dnif.it.

## **How to use this script**

1. Unzip the DNIF-Prerequisites-Check.sh file

3. Execute the following command

```
$ bash DNIF-Prerequisite-Check.sh
```

3. The following inputs should be provided in the script.
    - Customer name
    
    - Component name
    
    - Core Server IP
    
    - Core Server Hostname
    
    - Number of Datanode
    
    - Datanode IP
    
    - Datanode Hostname
    
    - Number of Adapter
    
    - Adapter IP
    
    - Adapter Hostname
    
    - DNIF Team Proposed RAM in GB
    
    - DNIF Team Proposed Root partition size in GB
    
    - DNIF Team Proposed DNIF partition size in GB
    
    - DNIF Team Proposed CPU (vcpu)

## **Output**

The output of this script will show you the status of hardware and network prerequisites as **passed** or **failed**. The script will create an additional file using the name specified within "**Customer Name**" and "**Component Name**". For example: "**Netmonastery\_Core\_hardwarecheck.txt**

Review the checks marked as **failed** and resolve the same with the help of your System or Network Administrators. Once all the checks are marked as **passed** you can consider pre-requisites to be ready and initiate the Deployment process.
