---
title: "GitHub"
date: 2025-01-21
type: "epkb_post_type_1"
---

To configure the Github Connector and forward audit logs to DNIF, follow the steps below:

1. **Generate an API token**:
    1. Sign in to your Github account using this link: [Github Sign In](https://github.com/login).  
          
          
        ![image6-1](images/image6-1.png)  
          
        
    
    3. In the upper-right corner of any page, click your profile photo, then click "Settings".  
          
          
        ![image3-3](images/image3-3.png)  
          
        
    
    5. In the left sidebar, click "Developer settings".  
          
          
        ![image9-2](images/image9-2.png)  
          
        
    
    7. In the left sidebar, click "Personal access tokens".  
          
          
        ![image5-Jun-02-2023-09-15-50-5909-AM](images/image5-Jun-02-2023-09-15-50-5909-AM.png)  
          
        
    
    9. Click "Generate new token".  
          
          
        ![image7-3](images/image7-3.png)  
          
        
    
    11. Give your token a descriptive name.  
          
          
        ![image8-2](images/image8-2.png)  
          
        
    
    13. Set an expiration date for the token.  
          
          
        ![image11](images/image11.png)  
          
        
    
    15. Select the "admin:org" scope permission for the API token.  
          
          
        ![image1-Jun-02-2023-09-17-46-7149-AM](images/image1-Jun-02-2023-09-17-46-7149-AM.png)  
          
        
    
    17. Click "Generate token".  
          
          
        ![image10-2](images/image10-2.png)  
          
        

3. **Get Enterprise name**:
    1. In the top right corner of your Github Enterprise Server, click your profile photo, then click "Your organizations".
    
    3. The enterprise name will be mentioned on the left-hand side.  
          
          
        ![image2-Jun-02-2023-09-19-59-8411-AM](images/image2-Jun-02-2023-09-19-59-8411-AM.png)  
          
        

5. **Configure the GitHub Connector in DNIF**:  
      
      
    ![image4-4](images/image4-4.png)   
      
    

**Fill in the following fields:**

1. **Connector Name**: Enter a name for the connector.

3. **Connector Type**: Enter "Github Connector".

5. **API Token**: Enter the API Token generated in step 1.

7. **Organization**: Enter the organization name for Github obtained in step 2.

Once you have filled in the configurations, you should be able to fetch audit logs from Github using the pull method and the Github REST APIs.
