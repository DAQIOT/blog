<https://zhuanlan.zhihu.com/p/2057859905311318528>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
1**Project Background**
**[Langxi Delong Metal Surface Treatment Co., Ltd](https://zhida.zhihu.com/search?content_id=278505704&content_type=Article&match_order=1&q=%E9%83%8E%E6%BA%AA%E5%BE%97%E9%9A%86%E9%87%91%E5%B1%9E%E8%A1%A8%E9%9D%A2%E5%A4%84%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)For a metal surface treatment company (electroplating[pickling and passivation](https://zhida.zhihu.com/search?content_id=278505704&content_type=Article&match_order=1&q=%E9%85%B8%E6%B4%97%E9%92%9D%E5%8C%96&zhida_source=entity)A professional production enterprise specializing in chemical plating, equipped with a dedicated tank solution process monitoring instrument cabinet on the workshop production line. The panel consists of 16 core process instruments (pH and alkalinity meter, ORP oxidation-reduction potential meter, conductivity detector, dosing pump frequency controller), which monitor the plating solution parameters online throughout the process. It is the core equipment to ensure the quality of workpiece coating, process stability, and production compliance.**
**Previously, the on-site data management mode was manual timed manual recording, with workshop inspectors recording 16 instrument values at regular intervals. After paper registration, they were manually entered into the company management system and submitted to the headquarters. Poor data timeliness and high personnel costs are not conducive to process optimization, parameter trend analysis, and equipment traceability.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ykvdwj9feikxpxom2xc9.jpg)
**Monitoring instrument cabinet**
**IIProject Technical Proposal**
**This project is aimed at the process monitoring instrument cabinet in the metal surface treatment workshop, based on[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=278505704&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)The local machine vision image recognition technology of (Real-time) has enabled Langxi Delong Metal Surface Treatment Co., Ltd. to achieve automatic recognition and data verification processing of 16 instrument values on the counter, and Real-time has uploaded and stored them in a remote location to the headquarters of the group in another province[SQL Server 2019](https://zhida.zhihu.com/search?content_id=278505704&content_type=Article&match_order=1&q=SQL+Server+2019&zhida_source=entity) Database, replacing traditional manual meter reading and input modes, enables unmanned collection and unified archiving management of production line process data.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/z7nyoxsybluu752gf26q.jpg)
**IIIProject Implementation Process**
**1. Preliminary on-site survey and Hardware selection**
**Complete on-site precise survey in the early stage of project implementation: determine the actual size of the data display area for each of the 16 instruments, the overall panel size of the instrument cabinet, and calculate the optimal installation distance and shooting angle of the camera. Based on this, match the corresponding camera pixels and lens focal length to complete the selection of camera Hardware, ensuring clear and distortion free instrument screen images, complete imaging of digital characters, and meeting the basic requirements of visual recognition.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9xa1d70ptb3jqanolhb7.jpg)
**The size of the watch cabinet is 50 \* 60cm**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/go8l805spif0uiwq2m1z.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/g2xu3b0no08gafukbhv0.jpg)
**2. On site equipment, software installation and debugging**
**The fixed industrial camera Real-time captures images of the instrument cabinet panel, adapting to the lighting and dust environment in the workshop.**
![图片](https://picx.zhimg.com/v2-5009214fad5a8f07df10fe67571087d3_1440w.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/odmplygu2z8tth07vq7h.jpg)
**Adjustable focus WiFi timed camera (DAQ-GP-CAMFI)**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/tkn1o5qzz4ukmxgdm1jj.jpg)
**Take photos at regular intervals**
**Local visual recognition: Data framing of photos transmitted from the camera using installed local image recognition software, using dedicated numbers [OCR recognition algorithm](https://zhida.zhihu.com/search?content_id=278505704&content_type=Article&match_order=1&q=OCR+%E8%AF%86%E5%88%AB%E7%AE%97%E6%B3%95&zhida_source=entity)Accurately extract screen values from 16 points and complete Data Acquisition.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/yqblgzuu7a2pvidjcmkv.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/l9yxhtzhdo2mj8yfjfso.jpg)![图片](https://picx.zhimg.com/v2-6cce4ef198d3e551e432da3f067c3dfd_1440w.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/xzdg7sb8lx72idzee151.jpg)
**Demonstration of the debugging process for the local image recognition section**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ntkqw37lygf3nm9drjmr.jpg)
**List of recognition results**
**3. Data upload and storage**
**Remote database deployment (headquarters)**
**Log in to the headquarters server and connect to the SQL Server service;**
**Create a new tiot database and tiot data table;**
**Create dedicated database users and assign CRUD add, delete, modify, and query permissions;**
**Configure ODBC data source connection to establish a connection between the local and headquarters databases.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/50m46e1baq7bocgrteia.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ngag091igptxz40b4r7j.jpg)
**System configuration and deployment**
**Modify the database connection parameters in the DialRecongnCfg.ini configuration file;**
**Start the recognition service and automatically write the instrument recognition results with timestamps and device numbers into the headquarters data table according to the standard data structure Real-time. To achieve long-term data retention and traceable querying.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/1pkykgbjhs48gjbr20g5.jpg)
**Identify result Remote storage Photos of the database**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dt4c0nhjshecgn6nvto0.jpg)
**Identify the results and store them in SQL**
**4Project implementation results**
**Eliminate reading errors and human omissions caused by manual meter reading and input, and improve the authenticity and timeliness of process data. Realize fully automatic and uninterrupted collection of production line parameters, and store all subsidiary production data uniformly in the headquarters database to meet the needs of enterprise data archiving, production traceability, subsequentData Analytics, and digital management.**