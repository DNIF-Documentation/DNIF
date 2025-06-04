---
title: "Before You Begin"
date: 2025-01-20
type: "epkb_post_type_1"
---

Before you install DNIF, ensure that the following requirements are met

## **Operating System**

- Supports 64-bit 20.04 LTS version of Ubuntu.

## **Port Configurations**

| **Origin** | **Destination** | **Port** | **Description** |
| --- | --- | --- | --- |
| Console | hog.dnif.it | 443/TCP | Required for licensing and software updates |
| Core | hog.dnif.it | 443/TCP | Required for licensing and software updates |
| Public | DNIF Console | 443/TCP | Required for console access from browsers |
| Public | Adapter, PICO | 514/UDP, TCP | Required for log forwarding to adapters and PICO over syslog |
| Public | Adapter, PICO | 7426/TCP | Required for log forwarding from PICO to Adapters |
| Internal | Internal | All Ports | Required for inter-component communication. Recommended that all components of the DNIF tenant (previously known as cluster) excluding remote collection agents reside in the same subnet. |
| DN, AD, CO, PICO | NTP Server | 123/UDP or any other | NTP server is used for clock sync between servers over packet-switched, variable-latency data networks. |
| DN, AD, CO, PICO | SMTP Server | 25/TCP, 465/TCP, 587/TCP, or any other | Required local SMTP server to send out reports, alerts, and updates to the configured email address. |
| AD,DN,CO,PICO | \*.docker.com, \*.docker.io | 443/TCP | Required to install docker packages and their dependencies. |
| AD,DN,CO,PICO | raw.githubusercontent.com, \*.github.com | 443/TCP | It helps to prepare the host operating system, installs the required dependencies, downloads container images and boots up fresh new containers. |
| PICO | CO | 1443/TCP | Required to download connectors from Core |
| PICO | CO | 8086/TCP | Required for onboarding of Pico |
| PICO | CO | 8765/TCP | Required for connection check with Core |
| PICO | Adapter, PICO | 7426/TCP | Required for log forwarding from PICO to Adapters |

It is mandatory for PICO to have a VPN connectivity to Core private interface i.e. the CORE\_IP mentioned while bringing up the component.

## **Hostname Resolution**

The host names of all active DNIF components should resolve with each other.  
You can use a hosts file or a domain name server to resolve hostnames and IP addresses on a DNIF deployment.

## **Clock sync with NTP**

If you have an NTP Server configured already on your network, then configure its services accordingly on all DNIF active components.

## **Storage Mounts**

DNIF is installed within /DNIF folder, to mount a SSD storage separately, then you have to create a /DNIF directory and mount your SSD storage on it.
