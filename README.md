# events_api

Event objects:
 - Event_Title
 - Event_Location
    - Event_Location_Street
    - Event_Location_City 
    - Event_Location_State
    - Event_Location_Zip
    - *Option for virtual that negates the above items(greys out or removes)
- Event_Date 
  - Event_Start_Date
  - Event_Start_Time
  - Event_End_Date
  - Event_End_Time
  -  *Option for all day event that negates the above items(greys out or removes)
-  Event_Description
    - Text field - twitter limit
- Event photo....   
    - This one might take some work.... cloudinary? Maybe should have used Sanity for db instaed of Mongo?
    - Think this one through
- Event_URL
- Event_Facebook_Link
- Event_Twitter_Link
- Event_Contact
    - Event_Contact_Name
    - Event_Contact_Email
    - Event_Contact_Phone
-            
