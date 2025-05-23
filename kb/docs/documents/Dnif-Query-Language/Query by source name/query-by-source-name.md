---
title: "Query by source name"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
The DNIF Query Language supports querying by source name. Data from a specific source is written to one or more streams, and when you query by source name, all streams associated with that source are included in the query.

## **Syntax**

The syntax for querying by source name is as follows:

`sourcename = source_name`

Here, `sourcename` is the standard DQL keyword to retrieve data

Source\_name is the name of the source from where the data will be retrieved. Please note that only one source name can be queried at any given time. Let’s now look at a practical example

`sourcename = ZSCALER`

If data from ZSCALER is written into the FIREWALL, AUTHENTICATION, and THREAT streams, executing the above DQL query will retrieve all fields for each event within these three streams.

## **Querying by source name in DQL Block**

<iframe width="560" height="315" src="https://www.youtube.com/embed/_rsDp1Exans?si=VRpUSIW-2hUT86qa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## **Querying by source name in Search Block**

<iframe width="560" height="315" src="https://www.youtube.com/embed/C7vuHNGR7PU?si=1d24tz-7tFpLTpoP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## **Disclaimer:**

Please note that when querying by source name, your query might not return any data, even if a significant volume of data is shown for scanning. This can occur if the underlying streams linked to the selected source name include data from other sources too.
