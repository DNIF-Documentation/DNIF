---
title: "Minimum Requirements"
date: 2025-01-17
type: "epkb_post_type_1"
---

DNIF a unified security solution the system, should meet the recommended minimum requirements for an optimal experience. To [get started](https://dnif.it/kb/getting-started/before-you-begin/) with DNIF, one needs three nodes, each node represents a DNIF component.

Each component should be installed/configured separately on three different servers, and should be configured in the following sequence.

- Core and DNIF Console (These two can be deployed on the same server)

- Datanode

- Adapter

- Pico

| **Host** | **Components** | **Minimum Configuration**   **(Test Environment)** | **Minimum Configuration**   **(Production Environment)** |
| --- | --- | --- | --- |
| Host 1 | Core and Console | 8vCPU, 16GB RAM and 500GB HDD Disk | 16vCPUs, 32GB RAM, 1TB SSD Disk |
| Host 2 | Datanode | 24vCPU, 48GB RAM and 500GB HDD Disk | 32vCPUs, 64GB RAM, 500GB SSD Disk |
| Host 3 | Adapter | 8vCPU, 16GB RAM and 320GB HDD Disk | 16vCPUs, 32GB RAM, 320GB SSD Disk |
| Host 4 | Pico | 8vCPU, 16GB RAM and 320GB HDD Disk | 16vCPUs, 32GB RAM, 320GB SSD Disk |
