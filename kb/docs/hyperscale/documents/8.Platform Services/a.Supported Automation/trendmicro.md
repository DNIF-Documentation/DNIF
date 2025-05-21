---
title: "Trend Micro"
date: 2025-01-30
type: "epkb_post_type_1"
---

Trend Micro is a cloud-client content security infrastructure that delivers global threat intelligence to protect from online threats, such as data stealing malware, phishing attacks, and other web, email, and mobile threats. It helps to deliver continuously updated protection to stop phishing, ransomware, Business Email Compromise (BEC) scams, spam and other advanced email threats before they reach your network. It provides advanced protection for Microsoft™ Exchange Server, Microsoft Office 365, Google™ Gmail, and other cloud or on-premises email solutions.

###### **Examples**

Listed below are some of the examples to configure a Webhook connection for the following use cases:

- TrendMicro XDR: Block IP

- TrendMicro XDR: Block URL

- TrendMicro XDR: Block Domain

- TrendMicro XDR: Block Email

- TrendMicro XDR: Block FileHash

###### **TrendMicro XDR: Block IP**

- In the **Configuration Box**, enter the **Configuration Name** to uniquely identify this configuration.

- Identify the [content of headers and payload](https://automation.trendmicro.com/xdr/api-v2#tag/Common/paths/~1v2.0~1xdr~1response~1block/post) that you need to provide in the Configuration Box.

- Ensure you enable the integration, once it is [configured and validated](https://dnif.it/kb/uncategorized/configuring-automation/).

Below is an example on how you can leverage this integration to block an IP using TrendMicro

**URL**

```
https://api.xdr.trendmicro.com/v2.0/xdr/response/block
```

**Header**

```
{"Authorization": "Bearer [token]" , "Content-Type": "application/json;charset=utf-8"}
```

**Payload**

```
{  "valueType":"ip",   "targetValue":"$SrcIP",   "productId":"DNIF",   "description":"Blocking malicious IP"}
```

![image 1-Dec-21-2023-08-56-08-3020-AM](./images-TrendMicro/TrendMicro-1.webp)

TrendMicro: Block IP, blocks the resource i.e IP on your TrendMicro account based on the values given in the payload.

![image 2-Dec-21-2023-08-57-23-4819-AM](./images-TrendMicro/TrendMicro-2.webp)

In the above figure, a workbook named **Suspicious Remote Desktop Network Activity** is executed which contains the following blocks:

![image 3-Dec-21-2023-08-57-56-7246-AM](./images-TrendMicro/TrendMicro-3.webp)

- **SQL Block:** Displays two suspicious Destination IPs on execution of the workbook

![image 4-Dec-21-2023-09-03-51-2678-AM](./images-TrendMicro/TrendMicro-4.webp)

- **Signal Block:** This will raise a signal on detecting the suspicious IPs.

![image 5-Dec-21-2023-09-04-19-4812-AM](./images-TrendMicro/TrendMicro-5.webp)

- **DQL block with \_trigger query:** Using **Webhook integration for TrendMicro: Block IP**, the IP is blocked on your TrendMicro account based on the values given in the payload.

![image 6-Dec-21-2023-09-05-19-9292-AM](./images-TrendMicro/TrendMicro-6.webp)

###### **TrendMicro XDR: Block URL**

- In the **Configuration Box**, enter the **Configuration Name** to uniquely identify this configuration.

- Identify the [content of headers and payload](https://automation.trendmicro.com/xdr/api-v2#tag/Common/paths/~1v2.0~1xdr~1response~1block/post) that you need to provide in the Configuration Box.

- Ensure you enable the integration, once it is [configured and validated](https://dnif.it/kb/uncategorized/configuring-automation/).

Below is an example on how you can leverage this integration to block an URL using TrendMicro.

**URL**

```
https://api.xdr.trendmicro.com/v2.0/xdr/response/block
```

**Header**

```
{"Authorization": "Bearer [token]" , "Content-Type": "application/json;charset=utf-8"}
```

**Payload**

```
{   "valueType":"url",   "targetValue":"$URL",   "productId":"DNIF",   "description":"Blocking malicious URL"}
```

![705](./images-TrendMicro/TrendMicro-7.webp)

TrendMicro: Block URL, blocks the resource i.e URL on your TrendMicro account based on the values given in the payload.

![image 7-Dec-21-2023-09-20-42-8300-AM](./images-TrendMicro/TrendMicro-8.webp)

In the above figure, a workbook named **Threat Malicious URL** is executed which contains the following blocks:

![image 9-Dec-21-2023-09-23-22-4822-AM](./images-TrendMicro/TrendMicro-9.webp)

- **SQL Block:** Displays a malicious URL which is considered as threat.

![image 10-Dec-21-2023-09-24-12-7619-AM](./images-TrendMicro/TrendMicro-10.webp)

- **DQL block with \_trigger query:** Using **Webhook integration for TrendMicro: Block URL**, the URL is blocked on your TrendMicro account based on the values given in the payload.

![image 11-Dec-21-2023-09-26-59-9480-AM](./images-TrendMicro/TrendMicro-11.webp)

###### **TrendMicro XDR: Block Domain**

- In the **Configuration Box**, enter the **Configuration Name** to uniquely identify this configuration.

- Identify the [content of headers and payloads](https://automation.trendmicro.com/xdr/api-v2#tag/Common/paths/~1v2.0~1xdr~1response~1block/post) that you need to provide in the Configuration Box.

- Ensure you enable the integration, once it is [configured and validated](https://dnif.it/kb/uncategorized/configuring-automation/).

Below is an example on how you can leverage this integration to block an domain using TrendMicro

**URL**

```
https://api.xdr.trendmicro.com/v2.0/xdr/response/block
```

**Header**

```
{"Authorization": "Bearer [token]" , "Content-Type": "application/json;charset=utf-8"}
```

**  
Payload**

```
{   "valueType":"domain",   "targetValue":"$Domain",   "productId":"DNIF",   "description":"Blocking malicious Domain"}
```

![image 12-Dec-21-2023-09-46-51-4499-AM](./images-TrendMicro/TrendMicro-12.webp)

TrendMicro: Block Domain, blocks the resource i.e Domain on your TrendMicro account based on the values given in the payload.

![image 13-Dec-21-2023-09-47-02-8153-AM](./images-TrendMicro/TrendMicro-13.webp)

In the above figure, a workbook named **Threat Malicious URL** is executed which contains the following blocks:

![image 14-Dec-21-2023-09-53-14-3862-AM](./images-TrendMicro/TrendMicro-14.webp)

- **SQL Block:** Displays one malicious URL which is considered as threat.

![image 14-Dec-21-2023-09-53-14-3862-AM](./images-TrendMicro/TrendMicro-15.webp)

- **Code Block:** This will extract the domain from that URL and save it in column $Domain.

![image 16-Dec-21-2023-09-56-13-1518-AM](./images-TrendMicro/TrendMicro-16.webp)

- **DQL block with \_trigger query:** Using **Webhook integration for TrendMicro: Block Domain**, the domain is blocked on your TrendMicro account based on the values given in the payload.

![image 17-Dec-21-2023-09-57-26-0572-AM](./images-TrendMicro/TrendMicro-17.webp)

###### **TrendMicro XDR: Block Email**

- In the **Configuration Box**, enter the **Configuration Name** to uniquely identify this configuration.

- Identify the [content of headers and payload](https://automation.trendmicro.com/xdr/api-v2#tag/Common/paths/~1v2.0~1xdr~1response~1block/post) that you need to provide in the Configuration Box.

- Ensure you enable the integration, once it is [configured and validated](https://dnif.it/kb/uncategorized/configuring-automation/).

Below is an example on how you can leverage this integration to block an Email using TrendMicro

**URL**

```
https://api.xdr.trendmicro.com/v2.0/xdr/response/block
```

**Header**

```
{"Authorization": "Bearer [token]" , "Content-Type": "application/json;charset=utf-8"}
```

**Payload**

```
{   "valueType":"mailbox",   "targetValue":"$Sender",   "productId":"DNIF",   "description":"Blocking malicious Email"}
```

![image 18-4](./images-TrendMicro/TrendMicro-18.webp)

TrendMicro: Block Email, blocks the resource i.e Email on your TrendMicro account based on the values given in the payload.

![image 19-1](./images-TrendMicro/TrendMicro-19.webp)

In the above figure, a workbook named **Email Threats** is executed which contains the following blocks:

![image 20-2](./images-TrendMicro/TrendMicro-20.webp)

- **SQL Block:** Displays five emails that are considered as threats.

![image 21-1](./images-TrendMicro/TrendMicro-21.webp)

- **DQL block with \_trigger query:** Using **Webhook integration for TrendMicro: Block Email**, all the emails are blocked on your TrendMicro account based on the values given in the payload.

![image 22-2](./images-TrendMicro/TrendMicro-22.webp)

###### **TrendMicro XDR: Block FileHash**

- In the **Configuration Box**, enter the **Configuration Name** to uniquely identify this configuration.

- Identify the content of [headers and payload](https://automation.trendmicro.com/xdr/api-v2#tag/Common/paths/~1v2.0~1xdr~1response~1block/post) that you need to provide in the Configuration Box.

- Ensure you enable the integration, once it is [configured and validated](https://dnif.it/kb/uncategorized/configuring-automation/).

Below is an example on how you can leverage this integration to block an File Hash SHA1 using TrendMicro.

**URL**

```
https://api.xdr.trendmicro.com/v2.0/xdr/response/block
```

**Header**

```
{"Authorization": "Bearer [token]" , "Content-Type": "application/json;charset=utf-8"}
```

**Payload**

```
{   "valueType":"file_sha1",   "targetValue":"$ConfigurationFileHash",   "productId":"DNIF",   "description":"Blocking malicious File Hash"}
```

![image 23-1](./images-TrendMicro/TrendMicro-23.webp)

TrendMicro: Block FileHash, blocks the resource i.e FileHash on your TrendMicro account based on the values given in the payload.

![image 24-1](./images-TrendMicro/TrendMicro-24.webp)

In the above figure, a workbook named **Hash value WB** is executed which contains the following blocks:

![image 25-1](./images-TrendMicro/TrendMicro-25.webp)

- **Search Block:** Displays a File Hash value which is considered a threat.

![image 26](images/image%2026.jpg)

- **DQL block with \_trigger query:** Using **Webhook integration for TrendMicro: Block FileHash**, the File Hash is blocked on your TrendMicro account based on the values given in the payload.

![image 27](images/image%2027.jpg)
