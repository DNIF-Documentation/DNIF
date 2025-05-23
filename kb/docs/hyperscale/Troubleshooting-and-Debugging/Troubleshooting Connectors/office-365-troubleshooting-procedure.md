---
title: "Office 365 (Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure the following prerequisites are met.
    - Verify Office 365 management API credentials. The credentials include Tenant Id, Client key, Secret key, and Tenant domain.
    
    - Navigate through Azure Management Portal > Azure Active Directory > Manage > Properties, to find Tenant ID.
    
    - Verify if the Tenant domain name is valid. The domain resembling Office 365 tenant name will end with .**onmicrosoft.com**.
    
    - Check if application is registered on Azure Management Portal using the tenant credentials.
    
    - Verify the ownership roles assigned to access Microsoft Office 365 Management APIs.
    
    - In the API permissions window, check if **Grant admin consent for `<tenant name>`** is enabled.
    
    - Check if Client secret has been generated successfully.
    
    - Verify if **auditing** is enabled under the compliance center.

3. Verify if a firewall or network is blocking the traffic to O365.

5. Check the credentials entered while configuring O365 connector.

**Verify Office 365 API Permissions**

- Check if the required permissions are granted to the application registered in Azure AD:

 - Log in to the Azure portal (portal.azure.com).
 - Navigate to **Azure Active Directory > App registrations.**
 - Select the application used for Office 365 integration.
 - Go to **API permissions** and verify that the necessary permissions (e.g., ActivityFeed.Read, ServiceHealth.Read.All) are granted and have admin consent.

**Validate Office 365 Subscription and Licensing**

- Ensure that the Office 365 subscription associated with the **&lt;tenant ID&gt;** is active and includes the necessary licenses for accessing audit logs and service health information.

**Check Office 365 Service Health**
