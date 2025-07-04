---
title: "June 13, 2025 Content Update"
date: 2025-07-03
type: "epkb_post_type_1"
---

We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** fortnightly releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

Each fortnight, we deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This fortnight, we are excited to announce a significant update focused on Windows and PCI-DSS Compliance.

Below is a summary of the new additions and improvements:

### **Summary of Fortnightly Improvements**

| Content Type | Actions | Count |
| ----- | ----- | ----- |
| **Detections** | New | 15 |
|  | Enhanced | 19 |
| **Dashboards** | New | 4 |
| **Reports** | New | 4 |

### **New Detections**

| \# | Name | Description | Run Type | Active / Inactive |
| ----- | ----- | ----- | ----- | ----- |
| 1 | Powershell Obfuscated Command Execution Detected | This use case detects execution of PowerShell commands containing non-ASCII (obfuscated) characters. Adversaries often use encoded or obfuscated PowerShell to bypass detection and evade defenses, especially for downloading payloads or executing malicious code. | off | Active |
| 2 | Network Connection Initiated From Users Public Folder | This detection identifies network connections initiated by executables located within theC:\\Users\\Publicdirectory. This folder is commonly writable by all users and may be abused by attackers to store and execute payloads or tools that communicate externally. Legitimate applications rarely launch from this location with active outbound connections, making such behavior suspicious and worth investigation. | off | Active |
| 3 | Network Connection Initiated By PowerShell Process To Non-Local IP Address | This use case detects when a PowerShell process initiates a successful network connection to a non-local (public) IP address. This behavior is often seen in malicious activity such as downloading payloads, command and control (C2) communication, or data exfiltration attempts. | off | Active |
| 4 | Potentially Suspicious Azure Front Door Connection | This detection identifies network connections to Azure Front Door domains (azurefd.net) that may be potentially suspicious. Azure Front Door is a Microsoft global service for web application acceleration and security, but attackers may abuse these domains as anonymizing proxies or command-and-control infrastructure. This detection filters out common legitimate Azure Front Door endpoints and common browsers to focus on unusual or suspicious usage. | off | Active |
| 5 | Dllhost EXE Initiated Network Connection To Non-Local IP Address | This detection identifies network connections initiated bydllhost.exe(COM Surrogate) to public, non-local IP addresses.Dllhost.exeis a legitimate Windows binary often used to host DLLs or COM objects outside of the original process. However, if it initiates network connections, especially to public IPs, it may indicate malicious behavior such as proxy execution or component hijacking by threat actors. | off | Active |
| 6 | Remote Thread Creation Via PowerShell | This detection identifies instances wherepowershell.exeorpwsh.exehas created a remote thread in another process. This behavior is often associated with advanced attack techniques such as process injection or memory manipulation. While there are legitimate use cases for PowerShell, remote thread creation is rare in benign scripts and is a strong indicator of post-exploitation activity. | off | Active |
| 7 | Create Remote Thread API and Load Library | This detection identifies suspicious use of theCreateRemoteThreadAPI in conjunction with theLoadLibraryAfunction fromkernel32.dll. This technique is commonly used in DLL injection attacks, where an attacker injects a DLL into another process to execute arbitrary code in its context. It is a widely used post-exploitation tactic in malware and red team operations. | off | Active |
| 8 | Dfsvc EXE Network Connection To Non-Local IPs | This detection identifies network connections initiated byDfsvc.exe(ClickOnce Application Deployment Support Library) to external, non-local IP addresses. WhileDfsvc.exeis a legitimate Windows binary used for application updates, it is rarely expected to initiate outbound communication to non-local IPs unless part of a trusted deployment mechanism. Abuse ofDfsvc.execan be a sign of LOLBIN (Living-off-the-Land Binary) exploitation by adversaries. | off | Active |
| 9 | Microsoft Excel AddIn Loaded | This detection identifies when Microsoft Excel loads add-ins or DLL modules such as.xll,add-in,exceladdin, or other DLL files. Malicious actors often use Excel add-ins to execute code, persist, or load malicious payloads, so monitoring these loads helps detect potential exploitation or abuse. | Off | Active |
| 10 | Microsoft Word Add-In Loaded | This detection identifies scenarios where Microsoft Word (winword.exe) loads add-ins with the.wllor.dllextension, especially from suspicious directories such asAppData,Temp,Downloads,Desktop, orProgramData. Attackers commonly use these techniques to gain persistence or execute malicious code within Word. | Off | Inactive |
| 11 | System Drawing DLL Load | This detection identifies when theSystem.Drawing.dll library is loaded by any process. While this DLL is commonly used by legitimate applications for graphics and imaging operations, unexpected or unusual loading of this DLL, especially by uncommon or suspicious processes, could indicate potential misuse or malicious activity. | Off | Inactive |
| 12 | Amsi DLL Load By Uncommon Process | This detection identifies when the AMSI (Antimalware Scan Interface) DLL is loaded by uncommon or suspicious processes. AMSI is a security feature used by Windows to help detect malicious scripts and payloads. Loading ofamsi.dllby unexpected processes can indicate attempts to bypass or manipulate security controls. | Off | Inactive |
| 13 | WMI Module Loaded By Uncommon Process | This detection identifies instances where Windows Management Instrumentation (WMI) related DLLs are loaded by processes that are not typically associated with legitimate WMI activity. Threat actors may abuse WMI modules to perform reconnaissance, persistence, or lateral movement while attempting to evade detection. | Off | Inactive |
| 14 | Dbghelp or Dbgcore DLL Loaded By UncommonSuspicious Process | This detection identifies the loading of Dbghelp.dll or Dbgcore.dll—Windows debugging libraries—by processes not commonly associated with debugging operations. This may indicate an attempt to perform process memory inspection, debugging, or credential dumping via suspicious or abused executables. | Off | Inactive |
| 15 | Task Scheduler DLL Loaded By Application Located In Potentially Suspicious Location | This detection identifies instances where the Task Scheduler DLL (taskschd.dll) is loaded by an application that resides in a potentially suspicious directory such as Temp, Public, Desktop, or Downloads. These locations are often used by attackers to store and execute payloads due to their permissive access controls. | Off | Inactive |

### 

### **Enhanced Detections**

| \# | Name | Description | Run Type | Active / Inactive |
| ----- | ----- | ----- | ----- | ----- |
| 1 | PowerShell Execution | This detection identifies the execution of PowerShell by monitoring the loading ofSystem.Management.Automation, a core PowerShell module. Attackers frequently use PowerShell for reconnaissance, privilege escalation, and executing malicious scripts. | Off | Active |
| 2 | Schtasks scheduling job on remote system | This detection identifies instances where theschtasks.execommand is used to create scheduled tasks on remote systems. Attackers commonly use this technique to establish persistence or execute commands across multiple systems in a network. | Off | Active |
| 3 | Possible Compromised PasswordState Software | This detection identifies potential compromise ofPasswordState, a widely used enterprise password management solution. Attackers may attempt to exploit the software by loading malicious or unauthorized DLLs, such asmoserware.secretsplitter.dll, to manipulate or extract stored credentials. | Off | Active |
| 4 | Scheduled Task Created on Multiple Hosts | This detection identifies the creation of scheduled tasks on multiple hosts within a short time frame. Adversaries often use scheduled tasks for persistence and lateral movement across an environment. | Off | Active |
| 5 | Scheduled Task Created on a Compromised Host | This detection identifies the creation of scheduled tasks on systems that have been previously marked as compromised. Adversaries often use scheduled tasks for persistence, privilege escalation, or executing malicious commands at predefined intervals. | Off | Active |
| 6 | Scheduled Task Creation via Microsoft Office Application | This detection identifies attempts to create scheduled tasks using Microsoft Office applications such as Word, Excel, PowerPoint, or Outlook. Attackers may exploit Office applications to establish persistence by scheduling malicious tasks. | Off | Active |
| 7 | Schtasks used for forcing a reboot | This detection identifies instances whereschtasks.exeis used to schedule a system reboot. While administrators may use this command for maintenance, attackers can exploit it to disrupt operations or finalize malware execution. | Off | Active |
| 8 | Shadow Copies Deletion Using Operating Systems Utilities | This detection identifies the deletion of shadow copies using system utilities such as PowerShell, WMIC, or VSSAdmin. Threat actors, including ransomware operators, commonly use this technique to prevent system recovery by deleting backup copies. | Off | Active |
| 9 | Screen Capture using Scripting Interpretor | This detection identifies instances where scripting interpreters such as PowerShell, CMD, Python, or HTA are used to execute screen capture tools or commands. Attackers often abuse these methods to exfiltrate sensitive data by capturing screenshots without user consent. | Off | Active |
| 10 | Remote PowerShell Session | This detection identifies the execution of a remote PowerShell session on an endpoint. Attackers often use remote PowerShell to execute commands on compromised machines, move laterally, or perform remote administration without triggering traditional security alerts. | Off | Active |
| 11 | Powershell Process Observed On A Compromised Host | This detection identifies PowerShell execution on a system that has already been flagged as compromised. Attackers frequently use PowerShell for post-exploitation activities such as reconnaissance, persistence, and lateral movement. | Off | Active |
| 12 | Possible Applocker Bypass | This detection identifies potential bypass attempts against AppLocker, a Windows feature used to enforce application control policies. Attackers may use legitimate Windows utilities (LOLBins) to execute code from untrusted directories, bypassing security restrictions. | Off | Active |
| 13 | Renamed SysInternals Debug View | This detection identifies instances where the SysInternals DebugView utility has been renamed. Attackers may rename tools like DebugView to evade security controls and avoid detection. | Off | Active |
| 14 | Meterpreter or Cobalt Strike Getsystem Service Start Detected \- NEW DQL | This detection identifies potential privilege escalation attempts using Meterpreter or Cobalt Strike'sgetsystemmethod, which involves launching a process as SYSTEM viaservices.exe. Attackers often use this technique to escalate privileges and execute malicious commands with high privileges. | Off | Active |
| 15 | PsExec Process Observed on a Compromised Host | PsExec Process Observed on a Compromised Host refers to a cybersecurity incident or observation where a specific process named PsExec has been identified running on a computer or server that has been compromised. PsExec is a legitimate Windows command-line utility developed by Microsoft's Sysinternals suite, used for executing processes on remote systems | Off | Active |
| 16 | Remote Process Instantiation via WMI | This detection identifies remote process instantiation using Windows Management Instrumentation (WMI). Attackers often leverage WMI for stealthy remote execution, persistence, or lateral movement within an environment. | Off | Active |
| 17 | Scheduled Task Process Execution | This detection identifies suspicious scheduled task executions where common scripting engines or execution utilities are launched. Attackers often use scheduled tasks to establish persistence or execute malicious payloads. | Off | Active |
| 18 | New Driver File Creation Detected | This detection identifies the creation of new driver (.sys) files in critical system directories, which may indicate the installation of a new kernel-mode driver. Threat actors often drop malicious drivers to gain persistence, disable security tools, or execute code with high privileges. | Off | Active |
| 19 | Cryptocurrency mining network communication | This detection identifies potentially unauthorized cryptocurrency mining activities on the network. Monitoring for mining traffic is essential as it may indicate compromised systems being used for cryptomining, which can adversely affect system performance and security. | Off | Active |

### 

### 

### 

### **New Dashboards**

| Name |
| :---- |
| PCI DSS Configuration Changes Monitor |
| PCI DSS Monitoring Insights |
| PCI DSS Network Security |
| PCI DSS Threat Insights |

### **New Reports**

| Name |
| :---- |
| PCI DSS Configuration Changes Monitor |
| PCI DSS Monitoring Insights |
| PCI DSS Network Security |
| PCI DSS Threat Insights |

