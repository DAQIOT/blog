<https://zhuanlan.zhihu.com/p/2018371471811059906>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider ofIoT,Data Acquisition, andsolution,[Industry IoT](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E7%89%A9%E8%81%94%E7%BD%91&zhida_source=entity)Data Acquisition expert (professional account), Shanghai DAQ-IoT website editor daq iot, would like to introduce the following content here and sincerely welcome everyone to discuss and exchange ideas. Can handle the following common communication interfaces: CAN/RS485/Modbus/[4~20mA](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=4~20mA&zhida_source=entity)/profibus/[CC-Link](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=CC-Link&zhida_source=entity)/HART/IO switch quantity and other industrial Protocol:
[modbus RTU](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=modbus+RTU&zhida_source=entity) TCP/HJ212/[IEC104](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=IEC104&zhida_source=entity)/DLT645/DLMS/IEC61850/[MQTT](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)Wait
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IoT (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
### 1、 Overview of the Plan
This plan is aimed at multiple meters on the station side**[Infrared meter reading](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=%E7%BA%A2%E5%A4%96%E6%8A%84%E8%A1%A8&zhida_source=entity)Demand**Using a 'meter'- [Data Acquisition Device](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%99%A8&zhida_source=entity) -The layered architecture of the switch server enables automatic collection, transmission, and centralized management of meter data, ensuring the accuracy,Real-timeperformance, and stability of meter reading.
## 2、 System architecture design
### 1. Hierarchical structure
* **Meter layer**The on-site installed measuring instruments (Tables 1 to 10) have built-in infrared communication interfaces and support infrared data output.
* **Collection Layer**Deploy 3Data Acquisitioncollectors (collectors 1/2/3), each collector is bound to 4 to 3 meters via infrared, responsible for receiving and preprocessing infrared data.
* **network layer**Using CAT6 Ethernet cable (Gigabit Ethernet), connect the collector to the switch to achieve high-speed network communication between the collector and the server.
* **service layer**TheData Acquisitionserver is responsible for receiving, storing, and parsing meter data uploaded by various collectors, and providing data query, statistics, and export functions.
### 2. Topological Logic
* Tables 1-4 → Data Acquisition Device 1
* Table 5~Table 6 → Data Acquisition Device 2
* Table 7~Table 10 → Data Acquisition Device 3
* All Collectors → Switches → Data Acquisition Server
---
## 3、 Core Function Design
### 1. Infrared meter reading function
* **Automatic meter reading**The collector actively sends infrared meter reading instructions to the bound meter according to a preset cycle (such as 5 minutes/time), reading the meter's Real-time data (such as electricity, flow, cumulative value, etc.).
* **Supplementary copying mechanism**If a single meter reading fails, the system will automatically trigger a retry (up to 3 times), and if it still fails, an alarm log will be generated.
* **data validation**The collector performs CRC verification on the received infrared data to ensure data integrity and filter out abnormal data.
### 2. Data transmission function
* **Protocol Conversion**The collector converts infrared Protocol data into [TCP/IP](https://zhida.zhihu.com/search?content_id=271775587&content_type=Article&match_order=1&q=TCP%2FIP&zhida_source=entity) Protocol， Transmit to the switch via CAT6 Ethernet cable.
* **resume from breakpoint**After the network interruption is restored, the collector automatically caches the unsuploaded data and transmits it again after the network is restored to avoid data loss.
* **encrypted transmission**Support SSL/TLS encryption to ensure the security of data during network transmission.
### 3. Data management function
* **data storage**The server uses a database (such as MySQL/PostgreSQL) to store raw meter reading data, alarm logs, and device status.
* **data query**Support querying historical data from multiple dimensions such as time, table number, and collector to generate reports.
* **Alarm Management**Alarm for offline meter, collector failure, communication abnormality, etc. Real-time, supports SMS/system pop-up notification.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/vbzld8tpn1ucx9xfah9i.jpg)
Equipment name, quantity, technical requirements
10 meters support infrared communication (compliant with IEC 62056-21 and other standards), with data output interface, model DAQ-GP-IR485 data acquisition IoT infrared probe
ThreeData Acquisitiondevices support 4-8 infrared interfaces, Ethernet interfaces (10/100/1000Mbps), and wide temperature design (-20 ℃~60 ℃)
1 Gigabit Ethernet switch with at least 8 RJ45 ports, supporting port isolation and VLAN
Data Acquisition Server 1 industrial grade server, supporting 7 × 24-hour operation, equipped with database and data acquisition IoT meter reading management software, model DAQ for IIOT,
Several Category 5e/6 CAT6 Ethernet cables meet the requirement of gigabit transmission distance
2. Deployment requirements
Collector deployment: Installed near the meter (infrared communication distance ≤ 5m), using wall mounted/rail mounted installation, powered by 220V AC or 24V DC.
Network cabling: CAT6 network cables are laid along cable trays/trunking to avoid strong electromagnetic interference, and both ends are properly labeled.
Server deployment: Placed in the central control room of the station, connected to the local area network of the station, equipped with UPS power supply to ensure power outage endurance.
5、 Implementation steps
On site investigation: Confirm the location of the meter, type of infrared interface, communication distance, and network wiring conditions.
Equipment installation: Install the collector, switch, and server, and complete the alignment and debugging of the meter's infrared probe and collector.
Network configuration: Configure the collector's IP address, server address, and communication parameters to test network connectivity.
Software debugging: Deploy data acquisition IoT meter reading management software, configure meter parameters, meter reading cycles, and alarm rules, and conduct joint debugging testing.
Trial operation: Run continuously for 72 hours to verify the integrity, communication stability, and alarm accuracy of Data Acquisition.
Formally launched: After completion of acceptance, the system is officially put into operation, and the O&M ledger is established.
6、O&Mand Protection
1. Daily O&M
Regularly check the cleanliness of the infrared probe of the collector to avoid dust blocking and affecting communication.
Monitor server disk space and CPU/memory usage to ensure stable system operation.
Regularly backup the database to prevent data loss.
2. Fault handling
Infrared communication malfunction: Check the alignment of the probe, the power supply status of the meter, and replace the faulty probe.
Network failure: troubleshoot network cables, switch ports, and IP configurations to restore network connectivity.
Server failure: Activate backup server to quickly restore Data Acquisition service.
7、 Advantages of the plan
Efficient and reliable: Infrared meter reading avoids manual meter reading errors, automatically collects data to improve efficiency, and ensures uninterrupted transmission to prevent data loss.
Strong scalability: It can flexibly add meters and collectors, and support the integration of more station equipment in the future.
Easy to maintain: The layered architecture facilitates fault location, and equipment standardization reduces costs.