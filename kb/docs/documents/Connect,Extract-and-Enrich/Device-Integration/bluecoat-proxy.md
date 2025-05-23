---
title: "Bluecoat Proxy"
date: 2025-01-17
type: "epkb_post_type_1"
---

Configure logging in your Blue Coat ProxySG appliance in the Key-Value format  
Work with your Blue Coat ProxySG administrator to create a custom format for this type of data collection. Follow the steps below:

- Log in to the Blue Coat Management Console.
- Select **Configuration > Access Logging > Formats**.
- Select **New**.
- Type a format name for the custom format and paste the following configs:

```{'
<111>1 $(date)T$(x-bluecoat-hour-utc):$(x-bluecoat-minute-utc):$(x-bluecoat-second-utc).000z $(s-computername) bluecoat - dnif - c-ip=$(c-ip) rs-Content-Type=$(quot)$(rs(Content-Type))$(quot)  cs-auth-groups=$(cs-auth-groups) cs-bytes=$(cs-bytes) cs-categories=$(cs-categories) cs-host=$(cs-host) cs-ip=$(cs-ip) cs-method=$(cs-method) cs-uri-port=$(cs-uri-port) cs-uri-scheme=$(cs-uri-scheme) cs-User-Agent=$(quot)$(cs(User-Agent))$(quot) cs-username=$(cs-username) dnslookup-time=$(dnslookup-time) duration=$(duration) rs-status=$(rs-status) rs-version=$(rs-version) s-action=$(s-action) s-ip=$(s-ip) service.name=$(service.name) service.group=$(service.group) s-supplier-ip=$(s-supplier-ip) s-supplier-name=$(s-supplier-name) sc-bytes=$(sc-bytes) sc-filter-result=$(sc-filter-result) sc-status=$(sc-status) time-taken=$(time-taken) x-exception-id=$(x-exception-id) x-virus-id=$(x-virus-id) c-url=$(quot)$(url)$(quot) cs-Referer=$(quot)$(cs(Referer))$(quot) c-cpu=$(c-cpu) connect-time=$(connect-time) cs-auth-groups=$(cs-auth-groups) cs-headerlength=$(cs-headerlength) cs-threat-risk=$(cs-threat-risk) r-ip=$(r-ip) r-supplier-ip=$(r-supplier-ip) rs-time-taken=$(rs-time-taken) rs-server=$(rs(server)) s-connect-type=$(s-connect-type) s-icap-status=$(s-icap-status) s-sitename=$(s-sitename) s-source-port=$(s-source-port) s-supplier-country=$(s-supplier-country) sc-Content-Encoding=$(sc(Content-Encoding)) sr-Accept-Encoding=$(sr(Accept-Encoding)) x-auth-credential-type=$(x-auth-credential-type) x-cookie-date=$(x-cookie-date) x-cs-certificate-subject=$(x-cs-certificate-subject) x-cs-connection-negotiated-cipher=$(x-cs-connection-negotiated-cipher) x-cs-connection-negotiated-cipher-size=$(x-cs-connection-negotiated-cipher-size) x-cs-connection-negotiated-ssl-version=$(x-cs-connection-negotiated-ssl-version) x-cs-ocsp-error=$(x-cs-ocsp-error) x-cs-Referer-uri=$(x-cs(Referer)-uri) x-cs-Referer-uri-address=$(x-cs(Referer)-uri-address) x-cs-Referer-uri-extension=$(x-cs(Referer)-uri-extension) x-cs-Referer-uri-host=$(x-cs(Referer)-uri-host) x-cs-Referer-uri-hostname=$(x-cs(Referer)-uri-hostname) x-cs-Referer-uri-path=$(x-cs(Referer)-uri-path) x-cs-Referer-uri-pathquery=$(x-cs(Referer)-uri-pathquery) x-cs-Referer-uri-port=$(x-cs(Referer)-uri-port) x-cs-Referer-uri-query=$(x-cs(Referer)-uri-query) x-cs-Referer-uri-scheme=$(x-cs(Referer)-uri-scheme) x-cs-Referer-uri-stem=$(x-cs(Referer)-uri-stem) x-exception-category=$(x-exception-category) x-exception-category-review-message=$(x-exception-category-review-message) x-exception-company-name=$(x-exception-company-name) x-exception-contact=$(x-exception-contact) x-exception-details=$(x-exception-details) x-exception-header=$(x-exception-header) x-exception-help=$(x-exception-help) x-exception-last-error=$(x-exception-last-error) x-exception-reason=$(x-exception-reason) x-exception-sourcefile=$(x-exception-sourcefile) x-exception-sourceline=$(x-exception-sourceline) x-exception-summary=$(x-exception-summary) x-icap-error-code=$(x-icap-error-code) x-rs-certificate-hostname=$(x-rs-certificate-hostname) x-rs-certificate-hostname-category=$(x-rs-certificate-hostname-category) x-rs-certificate-observed-errors=$(x-rs-certificate-observed-errors) x-rs-certificate-subject=$(x-rs-certificate-subject) x-rs-certificate-validate-status=$(x-rs-certificate-validate-status) x-rs-connection-negotiated-cipher=$(x-rs-connection-negotiated-cipher) x-rs-connection-negotiated-cipher-size=$(x-rs-connection-negotiated-cipher-size) x-rs-connection-negotiated-ssl-version=$(x-rs-connection-negotiated-ssl-version) x-rs-ocsp-error=$(x-rs-ocsp-error) cs-uri-extension=$(cs-uri-extension) cs-uri-path=$(cs-uri-path) cs-uri-query=$(quot)$(cs-uri-query)$(quot) c-uri-pathquery=$(c-uri-pathquery)
'}```
---
```
- Select **TCP transport option** and save your format.
- Click **OK**
- Specify the **IP address** for the Adapter/PICO that is receiving the logs.
- Click **Apply.**
