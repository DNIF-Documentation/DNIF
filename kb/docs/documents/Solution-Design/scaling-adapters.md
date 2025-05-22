---
title: "Scaling Adapters"
date: 2025-01-17
type: "epkb_post_type_1"
---

- One of the hallmarks of DNIF Hyperscale SIEM is the ability to collect, parse and enrich logs reliable at high speeds using the lowest hardware footprint in the industry.

- Adapters support collection of logs from traditional on-premise models such as UDP/TCP/TLS Syslog as well as custom protocols and cloud APIs.

## **Recommendations**

- Our recommended minimum adapter configuration is 16 dedicated vCPUs with 32GB RAM enables reliable collection at upto 15K EPS.

- A single adapter can scale vertically and with tuning handle upto 100K EPS.

- Adapters have UDP Syslog and TLS PICO Connectors enabled out of the box.

- One needs to provision two vCPUs or a single physical core for every additional connector.

## **Parameter Tuning**

### **Active Time Windows**

- This parameter lets the system handle late or out of order message processing more efficiently.

- Tweaking this is not recommended unless one has multiple PICO components deployed to enable remote collection.

### **Adapter Pipelines**

- This parameter lets you scale the number of adapter pipelines from the default 2 upto 8 to more reliably handle larger EPS volumes.

- Tweaking this is not recommended unless one observes significant and sustained EPS load.
