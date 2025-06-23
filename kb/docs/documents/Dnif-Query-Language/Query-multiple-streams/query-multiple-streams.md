---
title: "Query multiple streams"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
The DNIF Query Language lets you query multiple streams separated by a comma.

## **Syntax**

The syntax for querying multiple streams is as follows:

`stream = stream_name1,stream_name2, stream_name3`

Here, 

The keyword stream is a standard DQL keyword used to retrieve data

stream\_name1, stream\_name2, and stream\_name3 are the names of the streams from which the data will be retrieved. These stream names are separated by commas. Let’s now look at a practical example

`stream = AUTHENTICATION, FIREWALL,THREAT`

The above DQL query retrieves all fields for each event in the FIREWALL, AUTHENTICATION, and THREAT streams.

## **Querying multiple streams in DQL Block**

<figure>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kr0t4vNdZeI?si=3xTEuRxxAQp7MqzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</figure>

## **Querying multiple streams in Search Block**

<iframe width="560" height="315" src="https://www.youtube.com/embed/8PkNQ2dNZiM?si=8L0WlPzIz4hTrZr7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>