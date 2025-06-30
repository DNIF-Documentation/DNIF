---
title: "Webhook"
date: 2025-01-30
type: "epkb_post_type_1"
---

Webhook provides you with a simple interface to integrate DNIF with various third party application’s webhook/api. The Webhook plugin has a handy feature which allows you to use $Variables for substitution in the configuration. Check the Webhook example for Slack to understand its use case.

## **Pre-requisites**

You need to provide the following data depending on the third party webhook/api they intend to use.

- URL

- Headers

- Payload

## **Configuration**

1. Follow the initial configuration steps in [How to Configure Automation](/docs/documents/Platform-Services/Supported-Automation/Configuring-Automation.md).

![image 1-Dec-26-2023-10-44-12-9919-AM](./Images/webhook.webp)

- Click the edit icon to add details.

| **Field** | **Description** |
| --- | --- |
| Configuration Name | Name for the configuration |
| Request Method | Select the request method from the drop down |
| URL | URL for the webhook/api |
| Headers | Appropriate headers for the webhook/api in JSON format |
| Payload | Appropriate payload for the webhook/api in JSON/Text/XML format |

Variable substitution is supported in the configuration viz; URL, Headers and Payload

- Enter the above details and click **Save**.

To associate webhook automation config with investigate panel - it must provide exactly one substitution parameter - either $User or $Host.

## Examples

Listed below are few Webhook integration examples, these examples will help you to quickly get started with the configuration process by demonstrating practical use cases.

- [Slack Connector](/docs/documents/connect-extract-enrich/Connectors/SUPPORTED-CONNECTORS/slack.md)


- [Microsoft Teams Channel](/docs/documents/Platform-Services/Supported-Automation/microsoft-teams-channel.md)


- [ClickSend](/docs/documents/Platform-Services/Supported-Automation/clicksend.md)


- [PagerDuty](/docs/documents/Platform-Services/Supported-Automation/pagerduty.md)


- [Jira Service Desk](/docs/documents/Platform-Services/Supported-Automation/jiraservicedesk.md)

- [ServiceNow](/docs/documents/Platform-Services/Supported-Automation/servicenow.md)


- [New Relic](/docs/documents/Platform-Services/Supported-Automation/new-relic.md)


- [Opsgenie](/docs/documents/Platform-Services/Supported-Automation/opsgenie.md)


- [Trend Micro](/docs/documents/Platform-Services/Supported-Automation/trendmicro.md)

