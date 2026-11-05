<https://zhuanlan.zhihu.com/p/2014716728827991207>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
Brand: Shanghai DAQ-IoT
Model: DAQ-GP-AIR. Compressor
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/zvoe78r2pop2cm5sngrd.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/px8duovwer8hnegzfcgn.jpg)
1、 Overview of the Plan
This plan is aimed at the Remote Monitoring requirements of 4 air compressor units, relying on IoT, industrial automation, and[Data Acquisition Technology](https://zhida.zhihu.com/search?content_id=271243720&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E6%8A%80%E6%9C%AF&zhida_source=entity)Build a full chain monitoring system of "on-site collection transmission network cloud platform terminal application". Realize remote monitoring and basic control of the operating status, core parameters, and fault alarms of the air compressor unit, solve the problems of high on-site duty costs, delayed fault response, and untraceable data, adapt to the manual/switching mode operation requirements shown in the picture, and balance industrial production stability and intelligent management efficiency.
2、 Core requirement analysis
Based on on-site monitoring footage and core demands of industrial production, clarify the following core requirements:
Parameter collection: Real-time collects core process parameters such as operating time, exhaust pressure, exhaust temperature, unit oil pressure/temperature, intake/exhaust temperature at all levels, intercooler pressure, and status information of start/load/unload/stop/stop of 4 air compressors.
Status monitoring: Remote recognition of the "run/stop/stop" mode of the unit, distinguishing between manual/automatic operation status, and supporting remote mode switching (permission control).
Fault alarm: For situations such as abnormal oil pressure (e.g. 0.07 Bar for Unit 2), temperature exceeding the limit (e.g. 122.5 ℃ for the secondary exhaust temperature of Unit 1), and abnormal pressure, multi-level alarm and remote push are implemented.
Remote O&M: Supports remote viewing of Real-time monitoring screens, historical data tracing, and O&M record management, adapting to the cross regional access needs of local branches and headquarters (Shanghai).
Security compliance: Ensure the security of data transmission and device control, solve the security risks of "long-term verification code control" in images, and achieve hierarchical permission control and encrypted transmission.
3、 Overall system architecture (four layer architecture)
（1） On site perception and control layer (core deployment ofHardware)
As the core ofData Acquisition, it directly interfaces with the air compressor unit PLC andSensorto achieve parameter acquisition and command issuance, adapting to the existing industrial site environment.
Data Acquisition Terminal (RTU/Data Acquisition Module)
Selection: Adopting data acquisition IoT industrial grade IoT data acquisition terminal (compatible with mainstream communication Protocol such as Modbus RTU/TCP, Profinet, etc.), adapted to the PLC communication interface of the air compressor unit.
Deployment: Each air compressor is equipped with one DAQ-GP-GWRTU terminal, which is directly connected to the communication port of the unit PLC to collect data on operating status, process parameters, etc; For non PLC Sensor (such as temperature/pressure Sensor), it can be directly connected through analog/digital interfaces.
Core functions: Data Acquisition, Protocol parsing, Edge Computing (local threshold judgment), instruction execution (remote start/load/unload/mode switching).
Security protection components
Deploy industrial firewall and quantum security Gateway (adapted to the existing IoT security system of the enterprise), block illegal access, and encrypt communication data between terminals and platforms.
Install permission encryption locks to replace traditional captcha verification and achieve identity authentication and operation tracking for device operations.
Local monitoring terminal
Retain the on-site industrial control computer, deploy local monitoring software, and implement a "local+remote" dual control mode. When the network is disconnected, it does not affect the basic operations on site.
（2） Network Transport Layer (Data Link Construction)
Build a stable industrial grade transmission network withLow Latencyto achieve the transmission of on-site data to the cloud/headquarters, while also ensuring cross regional communication between the Ruzhou branch site and the Shanghai headquarters.
On site network: using[Industrial Ethernet](https://zhida.zhihu.com/search?content_id=271243720&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91&zhida_source=entity)Dual network mode with wired as the main and 5G/4G industrial routers as backup. Wired network connection between data acquisition terminal, PLC and industrial computer; Wireless networks serve as redundancy to avoid data interruption caused by wired failures.
Remote transmission: Access the Internet through 5G/optical fiber, use MQTT encrypted communicationProtocol(lightweight, suitable for industry IoT), and transmit field data to the cloud platform; A dedicated communication channel is established between the Shanghai headquarters and the Ruzhou branch through enterprise VPN to ensure the security and privacy of data transmission.
（3） Cloud platform layer (core management center)
Relying on the industrial IoT cloud platform (which can be customized and developed based on the existing IoT architecture of the enterprise), data storage, analysis, alarm and control can be achieved, supporting multi terminal access.
Core functional modules
Real-time Monitoring module: Reproduce the on-site "air unit integrated monitoring screen", remotely display the operating status, core parameters, and running time of 4 air compressors, and support remote switching between manual/automatic modes (requires advanced permissions).
Data storage module: Using Time Series Database, it stores Real-time data (in seconds) and historical data (retained for ≥ 3 years), supporting accurate queries and exports by unit, parameter, and time dimensions.
Alarm management module: Configure multi-level alarm thresholds (such as low unit oil pressure threshold, high exhaust temperature threshold), support multi-channel alarms through SMS, WeChat, platform messages, and email, achieve alarm grading (general/serious/emergency), alarm confirmation, and closed-loop processing.
O&M Management module: records the unit's operating hours, maintenance records, fault handling logs, and automatically generates maintenance reminders (such as reminding maintenance when the operating hours reach a threshold).
Permission management module: Divide multi-level permissions such as super administrator (headquarters), O&M personnel (Ruzhou), and viewing personnel. Different permissions correspond to different operation permissions (such as viewing, start stop, parameter modification).
security guarantee
Implement data transmission encryption (SSL/TLS), storage encryption, and regularly backup data;
Add a "secondary confirmation+operation trace" mechanism for remote control operations to avoid misoperation.
（4） Terminal application layer (user access portal)
Adapt to different usage scenarios and user roles, provide multi terminal access methods, and achieve "anytime, anywhere monitoring O&M".
Computer end: Management personnel from Shanghai headquarters and Ruzhou branch/O&M personnel can log in to the cloud platform through a browser or dedicated client to view monitoring screens, operate devices, and export reports.
Mobile: Develop mobile apps/WeChat mini programs that support Real-time to view parameters, receive alarm messages, approve O&M tasks, and adapt to outdoor work scenarios.
Large screen end: deployed in the monitoring room of Ruzhou branch and the command center of Shanghai headquarters[Industrial large screen](https://zhida.zhihu.com/search?content_id=271243720&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%B1%8F&zhida_source=entity)， Real-time Display the overall operational status of the air compressor unit.
4、 Key Function Implementation
（1） Parameter and Status Real-time Monitoring
Remote synchronous display of the operating status (stopped/stopped/running), core process parameters (exhaust pressure, temperature, oil pressure/oil temperature, etc.), operating duration, and data refresh rate of 4 air compressors ≤ 1 second.
Real-time displays the current operating mode (manual/automatic), supports authorized users to remotely switch modes, and performs start/load/unload operations on a single unit.
For abnormal parameters (such as oil pressure of Unit 2 at 0.07Bar and secondary exhaust temperature of Unit 1 at 122.5 ℃), highlight them in red on the monitoring interface and trigger alarms synchronously.
（2） Intelligent alarm and emergency response
Alarm triggering: When the parameters exceed the threshold, the unit status is abnormal (such as unplanned shutdown), or the network is interrupted, an alarm is automatically triggered.
Alarm push: push messages to corresponding personnel according to the alarm level (such as emergency alarm push to O&M responsible person and headquarters administrator, and general alarm push to on-site O&M personnel).
Emergency linkage: In the event of a serious alarm, the platform automatically sends a "shutdown protection" command (requiring pre configured strategies) or reminds users to remotely perform shutdown operations to avoid equipment damage.
（3） Historical data and report analysis
Data traceability: supports querying historical data by "single unit+specified parameters+time range", generating trend curves (such as the 24-hour trend of exhaust pressure of Unit 1), facilitating fault traceability and process optimization.
Report generation: Automatically generate daily, weekly, and monthly reports, including unit operating hours, average parameter values, alarm frequency, maintenance records, etc., supporting export to Excel/PDF format.
（4） Cross regional collaboration O&M
The administrator of the Shanghai headquarters can remotely view the operating status of the air compressor units in the Ruzhou branch and provide on-site guidance O&M;
After the on-site O&M personnel handle the fault, they submit the handling record on the platform, and the headquarters can Real-time view the closed-loop situation;
Support remote video linkage (optional), deploy industrial cameras on site to achieve "data+image" dual monitoring.
5、 Implementation steps (can be directly executed)
Stage 1: On site research and refinement of the plan (1-2 weeks)
Confirm the PLC models, communication Protocol, and Sensor interface types of the 4 air compressor units;
Sort out the on-site network environment of the Ruzhou branch (fiber optic bandwidth, 5G signal coverage);
Coordinate with the Shanghai headquarters to clarify the division of permissions, alarm receiving personnel, and core threshold parameters.
Phase 2: Hardware Procurement and Deployment (2-3 weeks)
Procurement of data acquisition terminals, industrial routers, quantum security Gateway, industrial firewalls, etc. Hardware;
Complete the on-site wiring and installation ofHardware, debug the communication between the data acquisition terminal and PLC to ensure normal parameter acquisition;
Build an enterprise VPN and connect the on-site network with the cloud platform.
Stage 3: Platform Development and Deployment (3-4 weeks)
Based on the existing IoT cloud platform of the enterprise, customize the air compressor unit monitoring module (replicate the on-site monitoring screen);
Configure data storage strategies, alarm thresholds, permission levels, and communication encryption rules;
Develop mobile apps/mini programs to achieve linkage with cloud platforms.
Stage 4: System Debugging and Trial Operation (2 weeks)
Perform full link debugging to test the stability of Data Acquisition, transmission, display, alarm, and remote control;
Simulate fault scenarios (such as abnormal oil pressure, network interruption), verify the alarm mechanism and emergency response effectiveness;
Training on-site O&M personnel and headquarters management personnel to familiarize themselves with system operation.
Stage 5: Formal launch and O&M (long-term)
The system has been officially put into use, and a daily O&M mechanism has been established (daily data inspection, weekly equipment maintenance);
Regularly upgrade platform functions and optimize alarm strategies;
Establish a fault response mechanism to ensure that the remote fault handling time is ≤ 30 minutes.
6、 Cost and benefit analysis
（1） Cost composition
Hardware Cost: data acquisition terminal, network equipment, security components, etc. (estimated based on 4 units, about 50000 to 80000 yuan);
Platform cost: customized development/leasing of cloud platform, mobile development (approximately 30000 to 50000 yuan);
Implementation cost: on-site deployment, debugging, and training expenses (approximately 20000 to 30000 yuan);
O&M Cost: Annual platform maintenance and Hardware maintenance costs (approximately 10000-20000 yuan/year).
（2） Benefit analysis
Cost reduction and efficiency improvement: Reduce on-site staff and achieve "one person, multiple positions", saving approximately 100000 to 150000 yuan in labor costs annually; Reduce fault response time by 80% and minimize production losses caused by equipment downtime.
Equipment protection: Through Real-time monitoring and intelligent alarms, equipment overload operation is avoided, the service life of the unit is extended (about 1-2 years), and equipment replacement and maintenance costs are reduced.
Management Upgrade: Implement digital and visual management of operational data for air compressor units, providing data support for production process optimization and equipment procurement.
7、 Security measures
Identity authentication: Adopting a multi factor authentication method of "account+password+SMS verification code+USB encryption dog" to replace the traditional single verification code.
Communication security: SSL/TLS encryption is used throughout the entire link, and communication between the site and the platform is facilitated through [MQTT encryption Protocol](https://zhida.zhihu.com/search?content_id=271243720&content_type=Article&match_order=1&q=MQTT+%E5%8A%A0%E5%AF%86%E5%8D%8F%E8%AE%AE&zhida_source=entity)Transmission, internal communication within the enterprise through VPN.
Operational safety: Remote control operations require "advanced permissions+secondary confirmation", and all operation records (operator, time, instructions) are automatically traceable.
Data security: Cloud data adopts dual machine hot backup, regularly backed up to local servers to prevent data loss; Set data access permissions to avoid sensitive data leakage.
8、 Advantages of the plan
Strong compatibility: compatible with existing air compressor units' PLCs and Sensor, without the need to replace core equipment, reducing renovation costs;
High practicality: fully matching the monitoring needs of the "4 units" on site, replicating the original monitoring images, and seamlessly connecting operating habits;
Good scalability: Supports the integration of new air compressors and other industrial equipment in the future, and can be integrated with the existingIoTsystem of the enterprise;
Cross regional collaboration: Perfectly addressing the remote management needs of the Shanghai headquarters and Ruzhou branch, improving the efficiency ofO&M.