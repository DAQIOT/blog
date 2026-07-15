<https://zhuanlan.zhihu.com/p/2018285003365168236>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## **1** **Product Overview**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/crkrfcnkttyg12chm1a0.jpg)
The production management digital electronic kanban used in this industrial workshop scenario is[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)Specially designed for assembly lines, PLC control systems, and [ModbusRTU](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=ModbusRTU&zhida_source=entity) Communication scenario design. It can Real-time collect, parse, and display production data (such as output, workstation status, equipment operating parameters, defective product statistics, etc.), achieve visualization and data-driven management of the production process, and help enterprises improve production efficiency and on-site management level.
Product support and mainstream PLCs (Siemens, Mitsubishi, etc.)[Omron](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=%E6%AC%A7%E5%A7%86%E9%BE%99&zhida_source=entity)By directly connecting with Modbus RTU Protocol equipment, key production indicators are clearly displayed on the workshop site through high brightness digital/LCD display modules, making it easy for frontline employees, team leaders, and management personnel Real-time to grasp production dynamics and respond to abnormalities in a timely manner.
**2. Ordering specifications and selection**
Customized production services, provided by Shucai IoT Company, offer one-on-one exclusive customization services to facilitate efficient production and easy management. Customization support includes:
(1) Exclusive solution design: Tailored dashboard content based on user production scenarios
(2) Multiple sizes to choose from: corresponding sizes can be selected according to installation requirements
(3) Multiple Data Acquisition methods: adapted to the collection needs of different factories
(4) Complete accessories, diverse choices: corresponding accessories can be selected according to needs
## **3 Service Philosophy**
## **Our company solemnly promises:**
## **You are not only purchasing products, but also receiving meticulous and thoughtful technical support services!!! ( =^\_^=** **)**
## **For those who purchase our wireless products, we provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.**
**Free consultation service forIoTsolution!**
**4 Product characteristic parameters**
### **4.1 Electrical Characteristics**
Power supply voltage:**DC 24V（±10%），**Supports wide voltage input and adapts to industrial power environments
Rated power: ≤ 15W (slightly different display sizes)
Standby power consumption: ≤ 2W
Protection level:**IP54**(Front panel), dustproof and splash proof, suitable for workshop environments with high dust and humidity
### **4.2 Communication Characteristics**
Core Protocol:**ModbusRTU**(Master/Slave mode configurable), supports standard function codes (0x03, 0x06, 0x10, etc.)
Communication interface:[RS485](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=RS485&zhida_source=entity)(Half duplex), configurable baud rate (1200~115200bps, default 9600bps)
Data bit: 8 bits, stop bit: 1 bit, parity bit: none/odd/even configurable
Communication distance: ≤ 1200m (theoretical value, actual affected by cable quality and environmental interference)
Support cascading of multiple devices: up to 32 devices of the same type can be mounted (address allocation needs to be reasonable)
Expansion interface: Optional Ethernet interface（[ModbusTCP](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=ModbusTCP&zhida_source=entity)/HTTPProtocol）， Adapt to the requirements of cloud platform docking
### **4.3 Structural characteristics**
Display type: High brightness digital tube/industrial grade LCD display screen (size options: 7 inches/10.1 inches/15.6 inches)
Display resolution: digital tube (8-segment, optional character height of 1.2-4 inches); LCD screen (1024mm × 600mm/1366mm × 768mm)
Viewing angle: ≥ 160 °, clear and visible from a distance and multiple angles in the workshop
Installation methods: wall mounted/embedded/column mounted, suitable for different installation scenarios in the workshop
Shell material: aluminum alloy+tempered glass panel, impact resistant and scratch resistant
Dimensions: 250mm x 180mm x 45mm (length x width x thickness), customizable according to needs
### **4.4 Working environment**
Working temperature: -10 ℃~+60 ℃
Storage temperature: -20 ℃~+70 ℃
Relative humidity: 10%~90% RH (non condensing)
Anti interference capability: Complies with industrial grade EMC standards and can resist electromagnetic interference from workshop motors, frequency converters, and other equipment
**5 core advantages of the product**
**(1) Protocol Strong compatibility**Native support for Modbus RTU Protocol, which can directly interface with industrial equipment such as PLC, Sensor, and acquisition modules without the need for additional conversion Gateway.
**(2) High performance of data Real-time**The data refresh frequency is ≤ 1s to ensure synchronization between production data and on-site status, and to quickly alert for abnormal situations.
**(3) Visual configuration is convenient**Provide PC configuration tools, drag and drop design display interface, custom data fields, colors, alarm thresholds, no code development required.
**(4) Industrial grade stability**Wide voltage power supply, surge protection, and watchdog mechanism ensure stable operation of equipment in harsh workshop environments, reducing the cost ofO&M.
**(5) Scalability and flexibility**: Supports multiple extensions (such asProtocol) [MQTT](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)、 HTTP）， Can quickly integrate with enterprise MES systems[SCADA](https://zhida.zhihu.com/search?content_id=271754369&content_type=Article&match_order=1&q=SCADA&zhida_source=entity) Platform or cloud management system to achieve data upload and Remote Monitoring.
**(6) Low power consumption and easy maintenance**Hardware modular design, convenient fault location, supports remote FOTA and parameter configuration, reducing on-site maintenance workload.
## **6 Data Reporting Communication Protocol**
### **6.1 Protocol Explanation**
This product follows the standard Modbus RTU Protocol specification, and the data exchange process is as follows:
(1) The host (PLC/upper computer) sends a request frame (including slave address, function code, data address, data length, etc.) to the slave (electronic board)
(2) The slave receives and parses the request frame, verifies the address and checksum, and returns the corresponding data response frame.
(3) Data type support: switch quantity (DI/DO), analog quantity (AI/AO), counter value, status word, etc., customizable data mapping relationship.
(4) Frame format example:
Request frame: [Slave address] [Function code] [Starting address high] [Starting address low] [Data length high] [Data length low] [CRC16 low] [CRC16 high]
Response frame: [Slave address] [Function code] [Byte count] [Data 1 high] [Data 1 low] . [Data n high] [Data n low] [CRC16 low] [CRC16 high]
### **6.2 Protocol Reception Test**
Provide supporting Modbus debugging tools that can simulate the host sending instructions and verify the stability of device communication:
(1) Connect the RS485 interface of the device to the debugging tool and configure the same baud rate, data bits, and parity bits.
(2) Send a read register instruction (such as function code 0x03) and check if the device returns data as expected.
(3) Support batch register read testing, verify the reliability of multi data point communication, and troubleshoot line interference or address conflicts.
### **6.3 Protocol Customization**
For special needs, we can provide customized services for Protocol:
(1) Support custom Modbus function codes to adapt to non-standard PLC/device communication.
(2) Scalable private Protocol, realizing advanced functions such as encrypted data transmission and batch data reporting.
(3) Provide Protocol development documentation and technical support to assist clients in completing docking development.
**7 Platform Integration**
### **7.1 Default Platform**
Built in docking of the product**Enterprise Production Management Cloud Platform**Ready to use out of the box:
(1) Automatically report production data (output, OEE, equipment status, alarm information, etc.) to the cloud.
(2) Provide web-based and mobile dashboards, supporting Real-time to view workshop data, generate production reports, and trace historical data.
(3) Built in Data Visualization template (production trend chart, equipment status pie chart, defective product analysis chart, etc.), no additional development required.
(4) Support hierarchical management of permissions, allowing different roles (employees/team leaders/management) to view corresponding permission data.
### **7.2** **User specified platform**
Support integration with customers' own MES, SCADA, ERP, or third-party IoT platforms:
(1) Communication method: Supports MQTT/HTTP/Modbus TCP, etc. Protocol, and can configure the reporting address and data format as needed.
(2) Data Mapping: Provide a visual data mapping tool to match the collected data from the Kanban board with the platform fields one by one.
(3) Docking process:
The customer provides platform interface documentation and communication specifications.
We have completed the adaptation and data format debugging of Protocol.
On site joint debugging and testing to ensure stable data reporting and instruction issuance.
Provide SDK and sample code integration to facilitate customer secondary development.
## **8 Precautions**
**(1) Installation and wiring**
The installation location of the equipment should avoid direct sunlight and strong electromagnetic interference (such as near the frequency converter and motor).
It is recommended to use shielded twisted pair cables for RS485 communication lines, and keep them away from power cables when wiring to prevent signal interference.
When cascading multiple devices, it is necessary to assign a unique slave address (1-247) to each device to avoid address conflicts.
**(2) Power supply and grounding**
Stable DC24V power supply must be used for power supply, and it is strictly prohibited to connect to AC power supply or exceed the range voltage.
The grounding terminal of the equipment should be reliably connected to the workshop protective ground, with a grounding resistance of ≤ 4 Ω, to enhance anti-interference ability.
**(3) Usage and maintenance**
Do not plug or unplug communication or power cables while the device is running to avoid damaging the interface circuit.
Regularly clean the dust on the panel, wipe it with a dry cloth, and strictly prohibit the use of corrosive cleaning agents.
If the device experiences communication abnormalities or display failures, first check the power supply, line connections, and parameter configurations, and then contact technical support.
**(4) Safety and Compliance**
The equipment complies with industrial electrical safety standards, and installation and maintenance must be operated by professional electrical personnel.
It is prohibited to disassemble the equipment casing by oneself, otherwise the warranty service will be lost.
When disposing of equipment, please follow local environmental regulations.