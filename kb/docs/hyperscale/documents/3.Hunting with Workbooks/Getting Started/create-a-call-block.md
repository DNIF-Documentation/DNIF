---
title: "Create a Call Block"
date: 2025-01-29
type: "epkb_post_type_1"
---

## **Overview**

Call block works on the principle of Reusability (Create once and Use Anywhere).  It assists the users in chaining the Workbooks  - workbooks can now be called from another workbook using **Call Block.**  This Reduces workbook development time and facilitates ease of change of content. Also, reusable workbooks are more reliable as the content is already tested.

### **How to add a Call Block?**

**Navigate to Workbook Section:**

- Hover on the **Workbooks** icon on the left navigation bar, it will display the folder-wise view of existing workbooks in the tenant (previously known as cluster).  
      
<!-- ![](images/AD_4nXe5p69G9ndvPMwnOWYEek9eCnjAMUPOmbsvyYkBNDhXn0kDZtHWrSNDzK9GbtR-GPO1dVhjAxzRUrfGanR2SitzHVTvv5I9bexBB_ROTyCCbUzJdLdJQTTmVO9F5VHnuyY4d01h?key=8I5ds56b0YXRvf6d_pULcw) -->
      
    

- Create a new workbook or open an existing workbook. 

- In the **Workbook** page, click on **plus icon** and select **Call Block** from the list.

- Call Block is an independent block. It may be used independently in a workbook or with other blocks.  
      
<!-- ![](images/AD_4nXfQFt6tN3A_iUljJqcoK76TcUPj1vKGkT4bim1aTtQbAIApjWOeKD_dy2lBZOiYi6Dw0-l_7jghE87SEhAGhW6aTvOXgcM6cx7NpGEQoNEquTUgDK15K8pzo_eFbdVTJDL26JpRBA?key=8I5ds56b0YXRvf6d_pULcw) -->
      
      
<!-- ![](images/AD_4nXcBYsbKOj9d8xx0ly3ZJLPhwpAU0mpYpwt7G0jkYnIhNIGomWFdKp1K24OW8eP3IyJsTf88Qx_H02qGGVaEZyo7Z5a2QWMj2OCmqZjHPtTYRVOQMtOlb_f1_CBBNaHiucOE2iapwQ?key=8I5ds56b0YXRvf6d_pULcw) -->
      
    

- Within the **Call Block** select the workbook that you want to call.  
      
<!-- ![](images/AD_4nXdeNHSG2IJqKiXb1qrz_CG4BiXh1zTEIrRAmwhrTGHRI8MftzjTOKNqqE4I7mWtnEvI1HT5KkLMosxLig1LLunBXXsrr7s02TtYjAIIckOYyCnvdFAKqfn9_IIpomIc2yY6SlxUaWB-mE1sg7N_T7EFF7f_?key=8I5ds56b0YXRvf6d_pULcw) -->
      
    

- Run the Call Block. 

- The result set from the previous block is passed as input to the Workbook specified in the call Block. The called Workbook is executed however no data is returned from the called Workbook to the calling Workbook.

- After the execution of the Call block the control is returned to the calling workbook.

- E.g. You can use the Call Block to call a Notification Workbook that can send notifications.  
      
<!-- ![](images/AD_4nXdTwK-eJm44606q2H2pUfsgP6uyLs0pAOIToORHx9rvgpQwJTN1UjU1tpdZHblWtrB-cmRB22F2ixQ0A4abrCHmrseR7h5suek8qbDIkBtO7XvYjmQFXpG0i7Oz-wwHd_FBmvVLHidzyqNiPBt24jF97BMB?key=8I5ds56b0YXRvf6d_pULcw) -->
      
    **Important Note**: Use the call block for scenarios where data is not modified, i.e. Data is not returned by the called workbook.
