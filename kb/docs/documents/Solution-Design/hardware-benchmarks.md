---
title: "Hardware Benchmarks"
date: 2025-01-17
type: "epkb_post_type_1"
---

Benchmarks help us in testing and quantification of our hardware infrastructure. Consistently performant hardware infrastructure forms the base of a high performance data structure. A cloud deployment or an on-prem high density virtualisation platform shares its compute and storage across multiple hosts. This typically causes hot and cold patches in performance.

This document discusses standard hardware testing and benchmarking tools that can be used to benchmark hardware before a deployment.

## **Testing Process**

When to test, how to ensure consistent performance.

1. Test and benchmark your hardware before you install, to ensure the underlying hardware fulfils expecations. Initial results must satisfy or exceed the performance benchmarks indicated in [scaling datanodes](https://dnif.it/kb/solution-design/scaling-datanodes/) or your custom solution design document.

3. Repeat tests if you find performance related issues while in operations and compare the results with the initial benchmarking.

## **Benchmarking**

This section will cover in detail the tools and the commands used to benchmark hardware.

## **Testing tool**

Choosing the right tool that will remain consistent across tests is extremely important, for DNIF we have selected [sysbench](http://manpages.ubuntu.com/manpages/trusty/man1/sysbench.1.html) which has been available and trusted for years. Sysbench is also a part of the standard linux stack so it can be installed using the following command.

```
sudo apt install sysbench
```

## **CPU Benchmarking**

CPU Benchmarking using a single thread

```
sysbench --test=cpu --num-threads=1 --cpu-max-prime=20000 run
```

CPU Benchmarking using multiple (we will use 8) threads

```
sysbench --test=cpu --num-threads=8 --cpu-max-prime=20000 run
```

The test metric to be measured are

- Total run time in seconds

- Total number of events executed

- CPU events executed

## **Memory Benchmarking**

Benchmarking memory using a single thread

```
sysbench --test=memory --num-threads=1 run
```

Benchmarking memory using multiple (we will use 8) threads

```
sysbench --test=memory --num-threads=8 run
```

The test metric to be measured are

- Operations per second

- Throughput

## **File IO Benchmarking**

Benchmarking file IO is done in three parts - create a test file for a specific size, conduct your test on the file and finally delete the file to return the used disk space back to operations.  
Preparing for benchmarking

```
sysbench --test=fileio --file-total-size=150G prepare
```

Conducting the test

```
sysbench --test=fileio --file-total-size=150G --file-test-mode=rndrw --max-requests=0 run
```

Cleaning up after the test

```
sysbench --test=fileio --file-total-size=150G cleanup
```

The test metric to be measured are

- Write speed during test prepare

- Read and write operations per second

- Read and write throughput

## **Benchmark samples**

We have collected some samples to indicate what the results of these tests look like on available cloud infrastructures.

The samples have been generated from the following test setups

- [DigitalOcean](https://www.digitalocean.com/) (DO) REF 16vCPU

- [DigitalOcean](https://www.digitalocean.com/) (DO) REF 32vCPU

| Test | Metric | DO REF 16vCPU | DO REF 32vCPU | AWS Netmon | Azure Netmon(SSD) | Azure Netmon (Standard SSD) | DO 4 shared vCPU | DO 8 shared vCPU | Azure Cloud Internal16(B-series) | Azure Cloud Internal 32(F-seriesv2) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CPU Single Thread | Total time (s) | 10.0014 ✅ | 10.0016 ✅ | 10.0002 | 10.0004 | 10.0009s | 10.0024 | 10.0011 | 10.0012s | 10.0011s |
|   | Total events | 4658 ✅ | 4607 ✅ | 4612 | 3236 | 3316 | 2580 | 2500 | 3062 | 4347 |
|   | CPU Events / sec | 465.65 ✅ | 460.56 ✅ | 461.13 | 323.53 | 331.49 | 257.87 | 249.91 | 306.08 | 434.59 |
| CPU Multi Thread | Total time (s) | 10.0012 ✅ | 10.0019 ✅ | 10.0029 | 10.0032 | 10.0022 | 10.0061 | 10.004 | 10.0029s | 10.0021s |
|   | Total events | 35158 ✅ | 36426 ✅ | 25634 | 24593 | 25209 | 10498 | 18848 | 24518 | 34156 |
|   | CPU Events / sec | 3514.82 ✅ | 3641.14 ✅ | 2562.18 | 2457.93 | 2519.77 | 1048.93 | 1883.61 | 2450.51 | 3414.22 |
| Memory Single Thread | Throughput (MB/s) | 4969.27 ✅ | 5298.52 ✅ | 5772.9 | 9608.49 | 4082.95 | 2816.15 | 2889.8 | 4013.92 | 5196.55 |
|   | Operations / sec | 5088537.19 ✅ | 5425685.2 ✅ | 59122793 | 9839093.85 | 4180224.62 | 28845219 | 2959155.46 | 4110249.09 | 5321272.09 |
| Memory Multi Thread | Throughput (MB/s) | 7217.27 ✅ | 7791.13 ✅ | 7435.38 | 8192.92 | 8338.35 | 5893.93 | 8673.99 | 8422.64 | 7045.25 |
|   | Operations / sec | 7390489.56 ✅ | 7978120.44 ✅ | 76149504 | 8389545.66 | 8538467.96 | 6035383.23 | 8882162.08 | 8624780.2 | 7214336.11 |
| File IO Operations (Random Read Write) | Read / sec | 2745.78 ✅ | 5252.33 ✅ | 1468.03 | 4065.71 | 324.99 | 449.06 | 760.13 | 365.45 | 310.50 |
|   | Write / sec | 1830.52 ✅ | 3501.56 ✅ | 978.69 | 2710.47 | 216.59 | 299.37 | 506.76 | 243.63 | 207.00 |
|   | fsyncs / sec | 5868.46 ✅ | 11205.08 ✅ | 3138.09 | 8684.41 | 702.03 | 970.57 | 1627.41 | 788.41 | 664.59 |
| File IO Throughput (Random Read Write) | Read MB / sec | 42.90 ✅ | 82.07✅ | 22.94 | 63.53 | 5.08 ❌ | 7.02❌ | 11.88 ❌ | 5.71❌ | 4.85 ❌ |
|   | Write MiB / sec | 28.60✅ | 54.71✅ | 15.29 | 42.35 | 3.38 ❌ | 4.68 ❌ | 7.92 ❌ | 3.81 ❌ | 3.23 ❌ |
| Disk Write Speed | Write MB/sec | 836.41 ✅ | 847.68 ✅ |   |   |   |   |   | 46.67 | 233.23 |
