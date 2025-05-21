---
title: "AWS CloudTrail"
date: 2025-02-04
type: "epkb_post_type_1"
---

AWS CloudTrail is a service that provides governance, compliance and operational and risk auditing for your AWS account. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.

###### **Prerequisites**

- AWS Access key

- AWS Secret key

- AWS Region

###### **How to Derive the Prerequisites**

- Log in to the AWS Management Console
    - Navigate to [AWS Management Console](https://aws.amazon.com/console/).

- Go to the IAM Dashboard - In the search bar, type IAM and select the IAM service.  
      
    ![](images/AD_4nXf1dch-PuofT3jLjRN0cvG35ZwKO7Rm21SMucFME7l0qWlYAdnF4hykZ8QdXbS_q4FtB1zMxneCQoSTlhoagMaIsWox2SerQX1a6c7kOUQXh5xX0NmV7A8cUBHkAYPK8KBVsdxe1g?key=rSXdcsfjngL6CvmIAtnknYAF)  
      
      
    

- Create a New User
    - Under Access management, click on Users. 
    
    - Click on Add users. 
    
    - Provide a User name (e.g., cloudtrail-dnif-user).  
          
        ![](images/AD_4nXfOd9qGIvAs5bvl20Jm0YbDyAZP9tds-VrFvUWiBMKdG3OP7uJ4DQZC6JxnQleMfmy39ScIiRti5Ki_807i13UIAw0A0Pig38sVFnPvJN4dzGeImhOIzFKcJktEpr5briLezTPl?key=rSXdcsfjngL6CvmIAtnknYAF)  
          
          
        ![](images/AD_4nXfHqA2FPvByhEScNGEZV74y4L8YDcQwj6E4GtqBBHsTmPe8L0_DOVRnVIlaoffvf_iFGCQcZPvNhacIVc6pyFyHhUMMn9BUEukUarTBHox51GaRzBCFvwT8ecKslGFil1bqYrdKGQ?key=rSXdcsfjngL6CvmIAtnknYAF)  
          
        

- Assign Permissions - Choose one of the following options
    - Attach policies directly : Select policy CloudTrailReadOnlyAccess, which is depending on the required access.
    
    - Copy permissions from existing user : Use an existing user with the desired permissions.  
          
        ![](images/AD_4nXdzkfTtyMIzJPTtuKvgjVzR580dQIl1-t-aM2mTWb1QvVoSVlrUJFFdIRt1hqAAov1oMt0nIYG7E1k_PggkS6S730MDB-V1McJFhSyMEYgQbbZ4a4YoAFbB1LilF6m2WLeDK5g5jA?key=rSXdcsfjngL6CvmIAtnknYAF)  
          
        

- Review and Create - Review the configurations and click **Create user.**  
      
    ![](images/AD_4nXdNR3ulNS6SjM4xtMKwDK1hXvslMZlQJeXzckazQe5zSWVIidYZl6U4ICVPkQDADwSxyCgsn82E_DabuQNejE9BZ5rtDAuVsW_w62JYbgWNfRej_yT6-9RE1l2tOGzFqa_vlq4Qhg?key=rSXdcsfjngL6CvmIAtnknYAF)  
      
    

- Download the Access Key - After the user is created, you'll see the Access key ID and Secret access key. - Click Download .csv to save these credentials securely.

- **Note:** You won't be able to view the Secret Access Key again, so ensure you download or copy it securely.

###### **Configurations**

![image 1-Apr-11-2024-05-35-22-6264-AM](./images/image%201-Apr-11-2024-05-35-22-6264-AM.png)

The following are the configurations to forward AWS CloudTrail connector logs to DNIF.

Use the following fields to configure the AWS CloudTrail Connector in DNIF:  

| Field | Description |
| --- | --- |
| Connector Name | Provide a name for the connector. |
| AWS Access Key | Enter the Access Key for the respective being used for signing in. |
| AWS Secret Key | Enter the Secret Key generated for the selected user. |
| AWS Region | Enter the specific AWS region for which you want to fetch the logs |

- Click Save after entering all the required details and click Test Connection, to test the configuration.

- A Connection successful message will be displayed on screen along with the time stamp.

- If the connection is not successful, an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.
