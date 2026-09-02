<https://zhuanlan.zhihu.com/p/1896498879840641773>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
In the process of industrial automation, DCS (Distributed Control System), SIS (Safety Instrumented System)[SCADA](https://zhida.zhihu.com/search?content_id=256558766&content_type=Article&match_order=1&q=SCADA&zhida_source=entity)The efficient collection, reliable transmission, and flexible integration of production data for theData Acquisitionand monitoring and control system are crucial. The solution launched by Protocol is based on OPC UA/DA and Protocol [MQTT](https://zhida.zhihu.com/search?content_id=256558766&content_type=Article&match_order=1&q=MQTT&zhida_source=entity) Protocol， Provide customized Data Acquisition solution for various industrial fields, helping enterprises achieve intelligent production and management.
## **1、 Background of the plan**
In industrial production, DCS, SIS, and SCADA systems contain a large amount of critical production data, but there are obstacles to data exchange between the systems. OPC UA/DA Protocol is widely used in the industrial Data Acquisition field and can effectively connect devices and systems from different manufacturers; MQTT Protocol is suitable for data transmission due to its lightweight and high reliability characteristics. Combining the two can create an efficient and stable Data Acquisition transmission link.
## **2、 Technical principles**
### **（1） OPC UA/DA Protocol**
1. **OPC DA**Based on COM/DCOM technology, targeting Windows systems, providing Real-time data access for industrial automation. Its client can connect to OPC servers to obtain data, and collect data at a specified frequency through subscription or polling. It has been maturely applied in industrial field equipment Data Acquisition.
2. **OPC UA ：**Independent of the operating system, supporting cross platform data interaction, with strong security and scalability. It defines rich data models and service interfaces, enables the transmission and management of complex data types, and is suitable for enterprise level data integration and Remote Monitoring scenarios.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2ngb5psobnd33vvzrjit.jpg)
### **（2） MQTT Protocol**
Based on the publish/subscribe model, TCP/IP Protocol transmission is adopted. The message publisher sends data to a specified topic, and clients subscribing to that topic can receive the data. It has the characteristics of low bandwidth, low power consumption, and high reliability, and is widely used in IoT and industrial data transmission.
## **3、 Collection scheme design**
### **（1） System architecture**
Deploy OPC UA/DA collection client between DCS/SIS/SCADA system and target server. Collect data by connecting the client to the OPC server of DCS and other systems, and pass it through the firewall and[Unidirectional isolation gateway](https://zhida.zhihu.com/search?content_id=256558766&content_type=Article&match_order=1&q=%E5%8D%95%E5%90%91%E9%9A%94%E7%A6%BB%E7%BD%91%E9%97%B8&zhida_source=entity)Secure transmission, and then publish the data to the server through MQTT Protocol for use by upper layer applications.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/m9ecmerju4buwjbyysp2.jpg)
### **（2） Collection process**
1.**Data Acquisition**Install collection software that supports OPC UA/DA Protocol on the collection server, configure collection parameters such as OPC server address, ID setting, collection method, update frequency, measurement point information, etc. Support file caching function, temporarily store data locally during network interruption, and resume transmission after recovery.
2.**data transmission**Collect data through TCP Protocol to cross the network barrier and ensure secure data transmission. After reaching the receiving end, the collection software converts the data into MQTT message format and publishes it to the MQTT server according to the preset topic.
3.**Data reception and processing**The client subscribing to the corresponding topic receives data from the MQTT server for storage, analysis, display, and other processing, providing support for enterprise production decisions.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/rwrdgr1y7hy9tszo8ulw.jpg)
## **4、 Customized development and API interface**
### **（1） Customized development**
1. Customize OPC UA/DA acquisition clients according to different industrial scenario requirements. Optimize the collection strategy, such as dynamically adjusting the collection frequency based on the frequency of device data changes, to improve collection efficiency; Develop data parsing and preprocessing functions for complex device data structures to ensure data accuracy and completeness.
2. Develop a client program that is compatible with MQTT servers to achieve data integration with OPC collection clients. Support flexible theme configuration to meet different data classification and management needs; Optimize the message publishing and subscription mechanism to ensure the reliability and reliability of data transmission Real-time.
### **（2） API interface**
To facilitate the integration of upper level applications, provide a unified API interface. Covering the Data Acquisition configuration interface, used to set OPC server connection parameters, measurement point information, etc; Data reading interface for upper level applications to obtain collected data; Data subscription interface, supporting application subscription to specific data topics and receiving Real-time data push notifications.
2. API interface design follows RESTful style or other common interface specifications to ensure cross platform compatibility and ease of use. Provide detailed interface documentation, including interface descriptions, parameter definitions, call examples, etc., to reduce development difficulty.
## **5、 Advantages of the plan**
### **（1） Strong compatibility**
OPC UA/DA Protocol supports multiple industrial equipment and systems, and can adapt to DCS, SIS, SCADA systems from different vendors, reducing the difficulty of system integration. MQTT Protocol is widely used in various IoT platforms and backend systems, making it easy to integrate with existing enterprise architectures.
### **（2） Safe and reliable**
Unidirectional isolation gateways and firewalls ensure the security of data transmission, preventing network attacks and data leaks. The file caching function of OPC collection software ensures that data is not lost, and the MQTT Protocol QoS mechanism guarantees reliable message transmission.
### **（3） Efficient Real-time**
Optimize the collection strategy and transmission mechanism to achieve rapid data collection and Real-time transmission. Through the theme subscription model, upper level applications can timely obtain interested data to meet the monitoring and decision-making needs of industrial production Real-time.
## **6、 Application Cases**
# [Green Power Plant for Environmental Protection](https://zhida.zhihu.com/search?content_id=256558766&content_type=Article&match_order=1&q=%E7%BB%BF%E7%94%B5%E7%8E%AF%E4%BF%9D%E5%8F%91%E7%94%B5%E5%8E%82&zhida_source=entity)The DCS system adopts this scheme to achieve the transmission of Data Acquisition in the DCS system. Collect DCS data from the data center through OPC DA Protocol, and forward it to the application layer configuration server via MQTT Protocol after passing through the gateway and firewall. Real-time monitors the operating parameters of power generation equipment, such as main steam flow rate, temperature, pressure, etc., to provide data support for equipment optimization and fault warning, improve power generation efficiency, and reduce O&M costs.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/bni0hmaklvlfg671rw1d.jpg)
Main steam flow rate (cumulative value) (main\_fow "ate\_stum)
Steam temperature
Main steam pressure (steam\_pressure)
Power generation load
Daily electricity amount
Monthly total electricity generation (total)
Total electricity generation for the month (total)
Total electricity generation for the year (year\_ electricity total)
Total electricity generation in that year (year\_ilectricity origin)
Main steam flow rate (cumulative value) (main\_fow "ate\_stum)
Steam temperature
Main steam pressure (steam\_pressure)
Power generation load
Daily electricity amount
Monthly total electricity generation (total)
Total electricity generation for the month (total)
Total electricity generation for the year (year\_ electricity total)
Total electricity generation in that year (year\_ilectricity origin)