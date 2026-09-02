<https://zhuanlan.zhihu.com/p/2018284443220078647>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## **1** **Product Overview**
This electronic signboard is[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)Designed for visual production and display terminals targeting industrial sites. Equipment passes through [RJ45 Ethernet port](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=RJ45+%E7%BD%91%E5%8F%A3&zhida_source=entity)Integrate various types ofSensorto achieve the collection of production dataReal-time; adopt [485 communication Protocol](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=485+%E9%80%9A%E8%AE%AF%E5%8D%8F%E8%AE%AE&zhida_source=entity)Complete data transmission and device linkage, ultimately through [LED display screen](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=LED+%E6%98%BE%E7%A4%BA%E5%B1%8F&zhida_source=entity)Intuitively presenting core indicators such as production progress, equipment status, and output statistics, helping workshops achieve efficient and transparent production management.
**2. Ordering specifications and selection**
Shucai IoT Technology Company provides one-on-one exclusive customization services to facilitate efficient production and easy management. Customization support includes customization according to needs, PLC docking, RS485 communication, TCP/IP communication, button control, and Sensor data collection.
|  |
| --- |
| Customizable column name reference |
| Time: Year Month Day Week | Fault station | Product Model | per capita output | achievement rate |
| Differential yield | Fault station | Number of Attendance Required | wind speed | defect rate |
| Order Number | Runtime | beat production | illumination | Mobility rate |
| attendance count | temperature | nonconforming count | actual production | downtime |
| Quantity of specialty products | PM2.5 | utilization rate | line category | Change line time |
| Good Quantity | Planned Output | abnormal time | attendance rate | Production line status |
| standard working hours | cumulative production | fault time | wind direction | soil temperature |
| wind power | CO₂ | CO | NO₂ | PM10 |
| TSP | Soil moisture | Customizable according to user preferences |
## **3 Service Philosophy**
## **Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
For those who purchase our wireless products, we provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## **4** **Product characteristic parameters**
### **4.1** **Electrical Characteristics**
Working voltage: DC 12V/24V (optional)
Rated power: ≤ 30W (varies according to the size of the LED screen)
Standby power consumption: ≤ 5W
Overvoltage/Overcurrent Protection: Supports
### **4.2 Communication Characteristics**
RJ45 Ethernet port: 10/100M adaptive Ethernet, supporting TCP/IP[Modbus TCPProtocol](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=Modbus+TCP+%E5%8D%8F%E8%AE%AE&zhida_source=entity)Used for docking with Sensor/upper computer.
RS485 communication: Half duplex communication, optional baud rate (2400~115200bps), supports [Modbus RTUProtocol](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=Modbus+RTU+%E5%8D%8F%E8%AE%AE&zhida_source=entity)Used for cascading multiple devices and Data Acquisition.
Communication distance: RS485 maximum transmission distance of 1200m (without relay), Ethernet supports switch cascade expansion.
### **4.3 Structural characteristics**
### Shell material: industrial grade aluminum alloy/cold-rolled steel plate, surface spray anti-corrosion.
Installation method: Wall mounted/column mounted (optional).
Protection level: IP54 (indoor), suitable for workshop dust and slight oil pollution environments.
LED display screen:
(1) Pixel spacing: P4/P5/P10 (optional)
(2) Display color: single red/dual color/full-color (optional)
(3) Viewing angle: ≥ 160 °
(4) Brightness: ≥ 1000cd/㎡ (adjustable automatically)
### **4.4 Working environment**
Working temperature: -20 ℃~+60 ℃
Storage temperature: -40 ℃~+85 ℃
Relative humidity: 10%~90% RH (non condensing)
Anti interference: Complies with industrial EMC standards and can resist electromagnetic interference in the workshop.
## **5 core advantages of the product**
l **Multi source data fusion**Simultaneously supporting RJ45 network port docking Sensor and 485 bus data acquisition device, compatible with various signal types such as analog and digital.
l **Flexible visualization display**LED screens can be customized in layout and support various display forms such as production progress bars, digital counters, status indicators, charts, etc.
l **Low Latency High reliability**Data Acquisition - Transmission - Display full link delay ≤ 1s, using heartbeat packet mechanism to ensure communication stability.
l **Easy to deploy and maintain**: No programming configuration interface, supports remote parameter modification and FOTA, reducing O&M costs.
l **Strong scalability**Reserved expansion interfaces can be connected to production management systems such as MES and ERP to achieve data interoperability and closed-loop management.
## **6 Data Reporting Communication Protocol**
### **6.1 Protocol Explanation**
This device defaults to using**Modbus RTU/TCP**Protocol performs data exchange, with core data fields including:
Device address: Identify different collection terminals (1-247).
Function code: Supports reading/writing registers (0x03/0x06/0x10).
According to the register: map production data (such as production volume, equipment runtime, fault codes, etc.).
Verification method: CRC16 (Modbus RTU)/TCP checksum (Modbus TCP).
### **6.2 Protocol Reception Test**
Connect the device to the debugging computer and configure the same baud rate/IP address.
Use Modbus debugging tools (such as Modbus Poll) to send read commands.
Verify the consistency between the data returned by the device and the actual collected values, and confirm that communication is normal.
Test abnormal scenarios (such as network and power outages) to verify data caching and reconnection mechanisms.
### **6.3** **Protocol Customization**
For special business needs, we can provide**Protocol Customized Service**：
Support integration with user private Protocol, MQTT/HTTP, etc. IoTProtocol.
L can customize data reporting cycles, data encryption methods, and alarm triggering logic.
Customization cycle: 7-15 working days, complete Protocol documentation and debugging support will be provided after delivery.
## **7 Platform Integration**
### **7.1 Default Platform**
Device built-in docking with our company**[Production Management Cloud Platform](https://zhida.zhihu.com/search?content_id=271754197&content_type=Article&match_order=1&q=%E7%94%9F%E4%BA%A7%E7%AE%A1%E7%90%86%E4%BA%91%E5%B9%B3%E5%8F%B0&zhida_source=entity)**It has the following functions:
Real-time Data Monitoring: Visualize the operational data of various production lines and equipment in the workshop.
Historical data query: Supports exporting data reports based on time/device dimensions.
Alarm management: Abnormal data triggers SMS/APP push alerts.
Permission management: graded account permissions to ensure data security.
### **7.2 User specified platform**
Support integration with user specified third-party platforms (such as MES, SCADA, IoT platform):
Provide Protocol documentation and SDK for users to develop and integrate on their own.
Our company can provide technical support to assist in completing interface debugging and joint debugging.
Docking process: requirement confirmation → Protocol development → joint debugging and testing → online operation.
## **8** **Precautions**
(1) Before installation, please confirm that the power supply voltage is consistent with the equipment identification to avoid burning Hardware.
(2) The RJ45 network port and 485 communication cable need to be wired separately to avoid electromagnetic interference causing data abnormalities.
(3) LED display screens should avoid prolonged exposure to strong light and regularly clean the surface dust to ensure display quality.
(4) Please save important configuration data before restarting the device to avoid parameter loss.
(5) If there is a communication failure, prioritize checking the line connection, address configuration, and baud rate setting.
(6) It is prohibited to dismantle the equipment casing without authorization, otherwise the warranty service will be lost.