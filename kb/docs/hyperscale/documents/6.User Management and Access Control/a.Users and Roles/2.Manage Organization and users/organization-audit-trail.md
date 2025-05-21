---
title: "Organization Audit Trail"
date: 2025-01-20
type: "epkb_post_type_1"
---

1. Hover on the **Administration** icon on the left navigation bar of the home screen.

2. Select **Manage Users** from the options displayed under the **Administration** icon. 

3. The Users view screen opens with the list of Users. 


7. The Audit Trail is accessible from the side panel. It displays all actions performed across organizations where the user is an **Organization Administrator**. On the organization detail page, it provides a detailed history of actions specific to the selected organization.

9. The Console Audit Trail screen displays the following fields as given in the below table- 
    

| **Field Name**  | **Description**  |
| --- | --- |
| Created On | Timestamp when the activity was performed |
| Source  | Displays the Source IP address from where the activity was performed |
| Action | Details of the activity performed |
| Users  | Username of the user that performed the action |
| Download Icon | Downloads the report in CSV format |

<figure>
  <video width="100%" height="auto" controls>
    <source src="./video-OrgAuditTrail/OrgAuditTrail.mp4" type="video/mp4" />
  </video>
</figure>

The following events will be captured:

| **Entity** | **Action** |
| --- | --- |
| Organization | \- Create Organization   \- Edit Organization   \- Disable Organization   \- Enable Organization   \- Delete Organization |
| User | \- Add User   \- Edit User   \- Activate User   \- Deactivate User   \- Delete User   \- User Login   \- User Logout |
