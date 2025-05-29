---
title: "Scaling Datanodes"
date: 2025-01-17
type: "epkb_post_type_1"
---

## **Considerations**

- DNIF Datanodes are designed such that compute is decoupled from the storage requirement.

- DNIF leverages data compaction and compression techniques to achieve near 10:1 compression over your event data including the raw log, processed and enriched fields. This lets you retain all your data online at no extra cost.

- DNIF does not cap the storage on a datanode so we only need to size for compute requirements.

- All datanodes in your tenant (previously known as cluster) must be of identical hardware specifications.

## **Recommendations**

- Our recommended minimum datanode configuration is 32vCPUs with 64GB RAM per datanode and no caps on storage. This configuration will enable effective search and correlation over upto 1TB of daily log ingestion.

- You will need 32vCPUs for every additional TB of your daily log volume.

- It is preferable to have fewer datanodes with higher CPU density.

| **Average EPS** | **Daily Raw Volume** | **vCPUs** | **Disk Speed** | **Memory** | **Disk Space** |
| --- | --- | --- | --- | --- | --- |
| 15K EPS | ITB | 32 vCPUs | 400 MBps | 64GB | 18TB |
| 25K EPS | I.7TB | 64vCPUs | 400 MBps | 128GB | 30.6TB |
| 50K EPS | 3.5TB | 128 vCPUs | 2000 MBps | 256GB | 63TB |
| 100K EPS | 7TB | 224vCPUs | 3000 MBps | 448GB | 126TB |
| 500K EPS | 35TB | 1120vCPUs | 5000 MBps | 2240GB | 630TB |
| **Note:**For Daily Raw volume an average log size is of 800 bytesFor Disk Space we are considering three month retention period and zero replications |  |  |  |  |  |

## **15K EPS / 1TB Daily Ingestion**

- 15K EPS at an average raw log size of 800 bytes equates to around 1TB of daily log ingestion.

- This setup will require a minimum of 32 vCPUs which can be met by a single 32vCPU datanode.

- Recommend use of storage with minimum read/write speed of 400 MBps.

## **25K EPS / 1.7TB Daily Ingestion**

- 25K EPS at an average raw log size of 800 bytes equates to around 1.7TB of daily log ingestion.

- This setup will require a minimum of 64vCPUs which can be met by 2x 32vCPU datanoes or a single 64vCPU datanode.

- Recommend use of storage with minimum read/write speed of 400 MBps.

## **50K EPS / 3.5TB Daily Ingestion**

- 50K EPS at an average raw log size of 800 bytes equates to around 3.5TB of daily log ingestion.

- This setup will require a minimum of 128 vCPUs which can be met by 4x 32vCPU or around 2x 64vCPU datanodes.

- Recommend use of storage with minimum read/write speed of 2000 MBps.

## **100K EPS / 7TB Daily Ingestion**

- 100K EPS at an average raw log size of 800 bytes equates to around 7TB of daily log ingestion.

- This setup will require a minimum of 224 vCPUs which can be met by 7x 32vCPU or around 4x 64vCPU datanodes.

- Recommend use of storage with minimum read/write speed of 3000 MBps.

## **500K EPS / 35TB Daily Ingestion**

- 500K EPS at an average raw log size of 800 bytes equates to around 35TB of daily log ingestion.

- This setup will require a minimum of 1120 vCPUs which can be met by 18x 64vCPU or around 12x 96vCPU datanodes.

- Recommend use of storage with minimum read/write speed of 5000 MBps.
