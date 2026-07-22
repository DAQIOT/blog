<https://zhuanlan.zhihu.com/p/1924430059743219824>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
as[IoTData Acquisition](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86&zhida_source=entity)solution Professional provider, data acquisition IoT*Editor daq iot* Here is an introduction to the following content, and we sincerely welcome everyone to discuss and exchange ideas.
As a professional provider of IoT data collection solutions, daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/h44biwea70zqbxbgj7my.jpg)
According to the measurement and control acquisition scheme of the box transformer shown in the diagram, theIoTtechnology is designed specifically for thePV power stationand monitoring system, with the core being the implementation of[inverter](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=%E9%80%86%E5%8F%98%E5%99%A8&zhida_source=entity)Localized data collection, standardized processing, and reliable cloud deployment. The following is a detailed explanation of the plan:
1、 Core components and functions of the system
Box transformer measurement and control device
Positioning: Local control core and data aggregation point.
Function: Collect operational data (such as DC voltage/current, AC power, frequency, power generation, alarm status, etc.) of multiple inverters (1-N) through 485 bus polling. Perform measurement and control of the transformer body (such as transformer oil temperature, switch status, and protection signal acquisition). Local data processing and logic control (such as remote opening and closing, protection setting management).
Interface: The standard RS485 interface is used to connect the inverter bus.
Data acquisition and communication management machine
Positioning: Data Protocol conversion and communication hub.
Core functions:
Protocol Conversion: Convert the data received from the box transformer measurement and control device[IEC 104 protocol](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=IEC+104%E8%A7%84%E7%BA%A6&zhida_source=entity)Data (Power Automation Standard Protocol), parsed and converted into lightweight JSON format.
Cloud communication: adopting[MQTTProtocol](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=MQTT%E5%8D%8F%E8%AE%AE&zhida_source=entity)(IoT mainstream asynchronous messageProtocol) Report JSON data packets to a third party through 4G wireless network[cloud platform](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=%E4%BA%91%E5%B9%B3%E5%8F%B0&zhida_source=entity)​​。
Device Management: Supports communication configuration, breakpoint resume, and offline caching for downstream devices (box transformer measurement and control devices).
Interface: Usually equipped with Ethernet port, 4G module, RS232/485 serial port.
Cloud platform
Positioning: The central hub for data storage, analysis, and visualization.
Functional manifestation:
Receive MQTT messages and store parsed JSON data.
Provide functions such asReal-timemonitoring, historical curves, report statistics, alarm push, energy efficiency analysis, etc.
Support third-party systems (such asO&Mplatform and scheduling system) to interface data through APIs.
2、 Data Flow and Communication Architecture
Data Acquisition layer
Physical connection: All inverters are connected to the same or multiple RS-485 buses through a hand-in-hand connection.
Data transmission: The box transformer measurement and control device serves as the master station, and periodically polls the addresses of each inverter slave station[Modbus-RTU](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=Modbus-RTU&zhida_source=entity)Or similar to Protocol to read data.
Local processing layer
After summarizing the data of the inverter and the main body of the transformer, the measurement and control device of the transformer is organized into standard power telemetry, remote signaling, and remote control signals according to the IEC 104 protocol.
The device and communication management machine are interconnected through a network port or serial port to establish 104 protocol communication (simulating the communication mode between the substation and the main station).
​​[Edge Computing](https://zhida.zhihu.com/search?content_id=259903958&content_type=Article&match_order=1&q=%E8%BE%B9%E7%BC%98%E8%AE%A1%E7%AE%97&zhida_source=entity)Layer (Communication Management Machine)
Analyze the 104 protocol message and extract key data points.
Data structure conversion: Convert industrial hard Real-time messages into structured JSON key value pairs (such as {"devId": "INV01", "timestamp": 1630000000, "pac": 1500.2}).
Encapsulation reporting: Encapsulate JSON data into MQTT messages and transmit them to the designated topic on the cloud platform via 4G mobile network.
Cloud application layer
MQTT Broker receives data and distributes it to the cloud platform data processing module.
After the data is stored, it can be called by web interfaces, mobile apps, and analysis engines.
3、 Key technical highlights of the plan
The Bridge between Industry andIoT
Utilize IEC 104 compatible power monitoring systems to ensure data authority and interoperability.
By converting from 104 to JSON and MQTT, adapting to cloud native architecture, we solve the pain point of traditional SCADA Protocol being difficult to directly connect to the cloud.
Wireless deployment and low cost O&M
4G wireless transmission does not require laying fiber optic cables, especially suitable for remote PV stations.
The communication management machine implements Protocol encapsulation and link maintenance, reducing the complexity of cloud platform integration.
Structured data processing capability
The JSON format naturally supports nested data structures, allowing for flexible expansion of inverter models and addition/deletion of monitoring points.
Facilitating cloud platform for large-scale Data Analytics (such as power generation efficiency attenuation model, string fault location).
High reliability design
The communication management machine supports local data caching, which temporarily stores data in case of network interruption and resumes transmission after recovery.
MQTT Protocol has QoS service quality levels (such as QoS1 ensuring at least one delivery) to avoid data loss.
4、 Summary of Program Value
Dimension value embodiment
The efficiency ofO&Machieves unmanned operation of the power station, with hundreds of inverters in operation, reducing manual inspection costs.
Data interoperability connects the power automation system with theIoTcloud platform, providing a data foundation for intelligentO&M, power trading, and carbon management.
The rapid deployment of 4G wireless solutions significantly reduces construction difficulty, especially suitable for distributed roofs PV or mountain power stations.
Scalability supports flexible access to third-party platforms (such as government regulatory platforms and group level monitoring centers) to meet multi-level regulatory needs.
Decision support is based on cloud Data Analytics to optimize power generation strategies and improve power plant profitability (such as intelligent cleaning and capacity ratio optimization).
⚡ Summary: This solution adopts a three-layer architecture of "local collection standardization+edge Protocol conversion+lightweight cloud communication" to achieve low-cost, high reliability, and easy scalability of PV power station data to the cloud. It is a typical application of the integration of traditional power monitoring and IoT technology, significantly improving the digitalization level of power stations.