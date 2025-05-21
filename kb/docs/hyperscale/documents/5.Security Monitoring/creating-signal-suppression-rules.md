---
title: "Creating Signal Suppression Rules"
date: 2025-01-17
type: "epkb_post_type_1"
---

Signal Suppression Rules can be created from the following pages:

- Signal Suppression Rules listing page

- Signals listing page

###### **Creating Signal Suppression Rules from Signal Suppression Rules Listing page**  
  

https://videopress.com/v/VrFwXpfv?resizeToParent=true&cover=true&preloadContent=metadata&useAverageColor=true

1. Hover on the **System** icon on the left navigation bar of the Home screen. From the options displayed, select **Signal Suppression Rules**. The page displaying the list of signal suppression rules on workbooks will be shown.  
      
    ![](images/AD_4nXekAiQX---v1EwUhFyXEaHDH2WdAGQrTgXASLTj27-D0jbWl6JMW426YzmXWuCFRWB5o1WisSarxGa5XC_PPVUwTNs3Z8YXyJ6uZsyJirss2Cot5bakPeMA1to89QNwobRgK07UOC-rMtu-5HBT8uxPuDgc?key=xETBXA8te174sA8YCGMXyg)
      
    

3. To add a new suppression rule to an existing workbook, click the **plus icon** on the extreme right corner of the page.

5. On the next screen, from the drop-down, select the particular workbook for which you want to add new suppression rules.  
      
    ![](images/AD_4nXfOGHwiYsjXuio5nrRVmuraxu-U1I8YplpqzpepR05n1cD8rdcCRAt3B4r1Cso9mJAzUJRCAHxBFfpuEUOFjqIGXnw6BNAjg95KOEZIHPwwMmmNqg0-vE4IOufUJGU8EXWBld5Ro-hZ4w4nOTuwV0vARBTD?key=xETBXA8te174sA8YCGMXyg)
      
    

7. You can add multiple rules in any combination. Select a **target** or **suspect** and then select **host**, **user**, **resource**, etc., and enter the corresponding value (e.g. IP Address / user name/ port number) for which alerts will be suppressed.

9. You can now add multiple values separated by comma (",") to a field. The rule will be applied if any one of these values is matched (OR operator).   
    E.g. Suspect User = ‘Jack’, ‘Jane’ implies that the condition is met when the Suspect User is either ‘Jack’ **OR** ‘Jane’.

11. If there are multiple suspect and target fields defined, then all the conditions must be matched for the suppression rule to apply.  
    E.g. Suspect Host = ‘144.149.155.169’ Target User= ‘John’ implies that the condition is met when the Suspect Host = ‘144.149.155.169’  **AND** Target User =  ‘John’

13. Click on the **Eye icon** to see the logical representation of the rule.  
      
    ![](images/AD_4nXd85_ihKItCBs24O-GFI1yFfgnowaK-_qsWt6rHMe8-ib7vkWE5fherk0xYksQk1-PJw55co6nXqqQNkebI9HEj5VcrqS_KuMR_Vj1QmhnR8-H2uU6Svg_K_iiz6nNA9aQE5LT-J2HvabLb1s3EtrR2iuUz?key=xETBXA8te174sA8YCGMXyg)
      
    

15. Click **Save**. Once a suppression rule is created, signals that satisfy these conditions will be suppressed.

###### **Creating Signal Suppression Rules from the Signals Listing Page:**     
  

https://videopress.com/v/g3aEDQJd?resizeToParent=true&cover=true&preloadContent=metadata&useAverageColor=true

1. Click the **Signals** icon on the left navigation bar of the Home screen. The list of signals will be displayed.  
      
    ![](images/AD_4nXc5pnQkGMJf7VXuja30KDfl8YJqC8_jXl33vyrFxO7g07tehuzToHKZnOxg8ZtVKZd7hogKStz5TGKHgbQkGZStFRK271fpoAaO8LVy94DytJdsb6fxDYe1RC6yNUByxk-Oj9RhBScQPgXNncaNtmnwMnXJ?key=xETBXA8te174sA8YCGMXyg)
      
    

3. Select the signal for which you want to create a suppression rule. Click on the vertical ellipsis displayed on the extreme right of the signal and select **Create Suppression Rule**.   
      
    ![](images/AD_4nXcDI978iQ3P-fkh0w-XUDcGVKr6_7DRIzdcRh2bUR4y34s34mggEaR9cawpOWJcrsbszGM78wAcJ963_177v2UHpVfPb3vl9-blg8IX1ZgaH5vGZTujKtZ7BgfCVGhP_lDLaJklaX2d_DY-zU8w4hwxQ5vO?key=xETBXA8te174sA8YCGMXyg)
      
    

5. Click **Save** to create a suppression rule for the selected signal. Alerts that satisfy the conditions specified in the rule will be suppressed.

###### **Important Notes:**

- For a workbook, there can be several Signal Suppression rules defined. Whenever a signal is generated for a workbook, the system checks all the Signal Suppression rules assigned to that workbook until either a matching rule is found or all rules are examined.
