---
title: " Cortex XDR"
date: 2025-01-20
type: "epkb_post_type_1"
---

Cortex XDR is a detection and response app that natively integrates network, endpoint, and cloud data to stop sophisticated attacks. It accurately detects threats with behavioral analytics and reveals the root cause to speed up investigations. It provides access to raw logs of incidents.

An attack can affect several hosts or users and raise different alert types stemming from a single event. All artifacts, assets, and alerts from a threat event are gathered into an Incident. Using this SIEM Connector, you can seamlessly ingest Cortex XDR Incident Logs into DNIF.

This integration empowers your Security Information and Event Management (SIEM) system with enriched threat intelligence, enhancing overall visibility and aiding in comprehensive security analytics.

## **Pre-requisites**

- ### **FQDN**  
  The FQDN is a unique host and domain name associated with each tenant. When you generate the API Key and Key ID, you are assigned an individual FQDN.

- ### **API Key**  
  The API Key is your unique identifier used as the `Authorization:{key}` header required for authenticating API calls.  
  Depending on your desired security level, you can generate two types of API keys: _Advanced_ or _Standard_, from your Cortex XDR app.

- ### **API Key ID**  
  The API Key ID is your unique token used to authenticate the API Key. The header used when running an API call is `x-xdr-auth-id:{key_id}`.

## **Reference Document:**  
[https://docs-cortex.paloaltonetworks.com/r/Cortex-XDR/Cortex-XDR-API-Reference/Get-Started-with-APIs](https://docs-cortex.paloaltonetworks.com/r/Cortex-XDR/Cortex-XDR-API-Reference/Get-Started-with-APIs)

---

## Steps to Derive Prerequisites

### 1. **Get your Cortex XDR API Key**

![Image 1](./images-Cortex%20XDR/Cortex-XDR-1.webp)

- In Cortex XDR, navigate to **Settings → Configurations → Integrations → API Keys**.
- Select **+ New Key**.
- Choose the type of API Key (Advanced or Standard) based on your desired security level.
- If using the Advanced API key, you can optionally enable an expiration date and provide a comment.
- Select the desired level of access for the key.
- Generate the API Key.
- Copy the API key, and then click **Done**.  
  **Note:** You will not be able to view the API Key again, so ensure you copy it before closing the notification.

### 2. **Get your Cortex XDR API Key ID**

- In the API Keys table, locate the **ID** field.
- Note the corresponding ID number. This value is used in the `x-xdr-auth-id:{key_id}` header.

### 3. **Get your FQDN**

- Select your API key and click **Copy URL**.  
  Cortex XDR API URIs are composed of your unique FQDN, the API name, and the endpoint.  
  For example:  
  `https://api-{fqdn}/public_api/v1/{name_of_api}/{name_of_call}/`

Replace the example variables with your actual API key, API key ID, and FQDN.

---

## Authentication Examples

### **Standard Key cURL Example:**

```bash
curl -X POST https://api-{fqdn}/public_api/v1/{name_of_api}/{name_of_call}/ \
-H "x-xdr-auth-id:{key_id}" \
-H "Authorization:{key}" \
-H "Content-Type:application/json" \
-d '{}'
