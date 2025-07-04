---
title: "May 21, 2025 Content Update"
date: 2025-07-03
type: "epkb_post_type_1"
---
We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** fortnightly releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

Each fortnight, we deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This fortnight, we are excited to announce a significant update focused on Fortinet Firewall and Windows.

Below is a summary of the new additions and improvements:

### **Summary of Fortnightly Improvements**

| Content Type | Actions | Count |
| ----- | ----- | ----- |
| **Detections** | New | 19 |
|  | Enhanced | \- |
| **Dashboards** | New | 2 |
| **Reports** | New | 2 |

### **New Detections**

| \# | Name | Description | Run Type | Active / Inactive |
| ----- | ----- | ----- | ----- | ----- |
| 1 | Compress-Archive Cmdlet Execution | This detection identifies the execution of theCompress-ArchivePowerShell cmdlet, which is commonly used to create ZIP archives. While this may be part of legitimate activity, it can also be used by attackers to compress and exfiltrate data. | Streamed | Active |
| 2 | Potential Registry Reconnaissance Via PowerShell Scripts | This detection identifies potential registry reconnaissance activities performed via PowerShell script execution. Such behavior is commonly observed in the early stages of attacks where adversaries explore the system registry to gather information or identify persistence opportunities. | Streamed | Active |
| 3 | Potential Data Exfiltration Over SMTP Via Send-MailMessage | This detection identifies potential data exfiltration attempts over SMTP by monitoring for the use of PowerShell’sSend-MailMessagecommand with file attachments. This method may be used by attackers to exfiltrate sensitive data via email using built-in tools. | Streamed | Active |
| 4 | WinAPI Function Calls Via PowerShell Scripts | This detection identifies PowerShell scripts that attempt to invoke low-level Windows API (WinAPI) functions. These behaviors may indicate attempts to evade detection, perform process injection, or manipulate system-level privileges often associated with malware or red team tools. | Streamed | Active |
| 5 | Use Of Remove-Item to Delete File \- ScriptBlock | This detection identifies PowerShell script activity that may be attempting to configure or interact with SMB over QUIC. SMB over QUIC is a protocol that enables encrypted SMB connections over UDP/443, commonly used in modern Windows environments. Adversaries may abuse this protocol to bypass traditional network monitoring or firewall controls. | Streamed | Active |
| 6 | Local Firewall Rules Enumeration Via NetFirewallRule | This detection identifies attempts to enumerate local Windows Firewall rules using PowerShell cmdlets likeGet-NetFirewallRuleorShow-NetFirewallRule. This behavior is often observed during the reconnaissance phase of an attack to assess existing firewall policies and identify potential lateral movement paths. | Streamed | Active |
| 7 | Windows Mail App Mailbox Access Via PowerShell Script | This detection identifies PowerShell script activity attempting to access mailbox data via the Windows Mail App, which may indicate data exfiltration, unauthorized mailbox access, or reconnaissance activity through scripting interfaces. | Streamed | Active |
| 8 | SMB over QUIC Via PowerShell Script | This detection identifies PowerShell script activity that may be attempting to configure or interact with SMB over QUIC. SMB over QUIC is a protocol that enables encrypted SMB connections over UDP/443, commonly used in modern Windows environments. Adversaries may abuse this protocol to bypass traditional network monitoring or firewall controls. | Streamed | Active |
| 9 | Potential Msiexec Abuse for Malicious File Execution \- Win-Audit | This use case identifies potential abuse ofmsiexec.exeto execute malicious MSI files. Attackers often usemsiexecwith specific command-line arguments to silently download and execute malware. | Standard | Active |
| 10 | WinAPI Library Calls Via PowerShell Scripts | This detection monitors for the use of key Windows API (WinAPI) libraries being referenced within PowerShell scripts. Malicious actors often invoke these libraries to perform low-level operations, bypassing higher-level logging and security controls. | Streamed | Active |
| 11 | Windows Firewall Rule Added Via New-NetFirewallRule | This detection identifies the addition of new Windows Firewall rules using the PowerShell cmdletNew-NetFirewallRule. Allow rules added via scripts may indicate attempts to open ports for unauthorized communication or lateral movement. | Streamed | Active |
| 12 | bXOR Operator Usage In PowerShell Command Line | This detection identifies the use of the bXOR operator in PowerShell command lines. The bXOR operator is commonly used in obfuscation techniques to evade detection by security monitoring tools and can be indicative of malicious activity or advanced evasion tactics in PowerShell scripts. | off | Active |
| 13 | Detect Cloudflared Installed as a Service | This detection identifies when the Cloudflared binary is registered as a service on a system via Windows registry modifications. Adversaries may install Cloudflared as a service to maintain persistence and establish a tunnel (e.g., Argo Tunnel) that bypasses network defenses and provides covert remote access. | off | Active |
| 14 | Potential Large Data Transfer Over Cloudflared Tunnel | This detection identifies potentially large data transfers over Cloudflared Argo Tunnel (port 7844). Cloudflared is used to create encrypted tunnels to Cloudflare’s edge network, and while it has legitimate use cases, excessive data transfer through it may indicate data exfiltration or covert communications by threat actors. | off | Active |
| 15 | Potential Cloudflared Network Communication | This detection identifies network communication from Cloudflared (Argo Tunnel) to known Cloudflare IP ranges. Cloudflared is used for secure tunneling, but unauthorized use may indicate data exfiltration, stealthy persistence, or bypassing security controls. | off | Active |
| 16 | Potential Cloudflared Persistence via Registry Modification | This detection identifies potential persistence mechanisms involving Cloudflared by monitoring registry modifications. Threat actors may leverage registry keys likeRunorRunOnceto ensure Cloudflared executes at startup, allowing for persistent tunneling or remote access. | off | Active |
| 17 | Detect Suspicious Cloudflared Launch | This detection identifies suspicious launches of the Cloudflared binary with command-line arguments commonly associated with Cloudflare Argo Tunnel or DNS proxy functionality. When initiated from script interpreters or unusual parent processes, it could indicate abuse by adversaries to establish covert network tunnels or bypass perimeter defenses. | off | Active |
| 18 | Potential Cloudflared Argo Tunnel Execution | This detection identifies the execution of Cloudflared (Argo Tunnel), a tool used to create secure tunnels from a local machine to Cloudflare’s network. While Cloudflared is used for legitimate remote access and proxying, unauthorized usage can indicate potential data exfiltration, persistence mechanisms, or security bypass attempts. | off | Active |
| 19 | Suspicious Python Package Installation | This detection identifies potential misuse of thepipandpythoncommands for installing specific Python packages, particularly targeting arguments such as--pre,python-json-logger, andmsgspec-python313. It monitors command-line operations related to package installations and any anomalous patterns in the execution of these commands. This behavior may be linked to unauthorized package installations or attempts to exploit vulnerabilities in Python packages. Investigation is recommended to prevent potential security risks or misuse. | off | Active |

### 

### 

### 

### **New Dashboards**

| Name |
| :---- |
| Fortinet \- Fortigate \- Monitoring Insights |
| Fortinet \- Fortigate \- Security Insights |
|  |
|  |

### **New Reports**

| Name |
| :---- |
| Fortinet \- Fortigate \- Monitoring Insights |
| Fortinet \- Fortigate \- Security Insights |
|  |
|  |

