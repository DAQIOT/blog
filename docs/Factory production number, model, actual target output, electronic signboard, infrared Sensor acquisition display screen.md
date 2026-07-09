<https://zhuanlan.zhihu.com/p/2015462115578762742>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## **1** **Product Overview**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/yp7g793e2c02q6jda485.jpg)
LED production signboard
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/rncrxsrh9arnnjwgvdsc.jpg)
Large screen display board in the monitoring room
This electronic signboard is[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=271366205&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)Specially designed for visual management of workshop production line Real-time, model:[DAQ-GP-Dashboard](https://zhida.zhihu.com/search?content_id=271366205&content_type=Article&match_order=1&q=DAQ-GP-Dashboard&zhida_source=entity)Support the use of LED high brightness dot matrix screen display, paired with[Infrared Sensor](https://zhida.zhihu.com/search?content_id=271366205&content_type=Article&match_order=1&q=%E7%BA%A2%E5%A4%96%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity)Automatically collect actual production volume, support production model input, plan/Real-time target production volume setting, production cycle monitoring, automatic completion rate calculation, data power-off maintenance, suitable for various manufacturing workshop assembly lines and single machine capacity monitoring.
**2. Ordering specifications and selection**
Customized production services, provided by Shucai IoT Company, offer one-on-one exclusive customization services to facilitate efficient production and easy management. Customization support includes:
(1) Exclusive solution design: Tailored dashboard content based on user production scenarios
(2) Multiple sizes to choose from: corresponding sizes can be selected according to installation requirements
(3) Multiple Data Acquisition methods: adapted to the collection needs of different factories
(4) Complete accessories, diverse choices: corresponding accessories can be selected according to needs
|  |
| --- |
| Customizable column name reference |
| Line type and production line name | actual production | takt time | achievement rate | date time |
| Standard efficiency | cumulatively completed | Standard time production | downtime | per capita output |
| notification bar | Leader (Manager) | per capita output | Defective Quantity | Number of persons expected |
| defect rate | Device number | actual efficiency | Production Date | Actual production time |
| Number of online users | Remarks | target output | Timely production | number of attendees present |
| utilization rate | First Pass Yield | Monthly Plan | Fault station | Runtime |
| Order Number | Product Model | remaining production | Customizable display according to user preferences |
## **3 Service Philosophy**
## **Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
For those who purchase our wireless products, we provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Industrial Data Acquisition monitoring expert, providing free IoT solution consulting services!
**4 Product Features**
**4.1 Electrical Characteristics**
Working voltage: AC220V ± 10% 50Hz
Power consumption of the whole machine: ≤ 50W
Standby power consumption: ≤ 5W
Fuse specification: 5A/250V
**4.2 Communication Characteristics**
Communication interface: RS485/RS232/Ethernet (optional)
Communication Protocol:[Modbus-RTU](https://zhida.zhihu.com/search?content_id=271366205&content_type=Article&match_order=1&q=Modbus-RTU&zhida_source=entity)/TCP (default), supports user customizationProtocol
Transmission rate: 9600bps~115200bps (RS485), 10/100Mbps (Ethernet)
Communication distance: RS485 ≤ 1200m, Ethernet ≤ 100m
**4.3 Structural characteristics**
Display material: LED dot matrix screen, visible under strong outdoor light
L Appearance size: Customized (regular 600 × 400 × 50mm/800 × 500 × 70mm)
Installation method: wall mounted
Protection level: IP54 (indoor)
**4.4 Working environment**
Working temperature: -10 ℃~40 ℃
Storage temperature: -20 ℃~60 ℃
Relative humidity: ≤ 85% RH (no condensation)
Altitude: ≤ 2000m
**5 core advantages of the product**
1. Accurate counting: Infrared Sensor response ≤ 200ms, counting error ≤ 0.1%, supports anti shake filtering.
2. Flexible configuration: Production model, target output, rhythm and other parameters can be quickly modified through remote control, suitable for small batch production of multiple varieties.
3. Data interoperability: Supports integration with MES, ERP and other systems to achieve automatic uploading and analysis of production data.
4. High reliability: Industrial grade component design with a mean time between failures (MTBF) of ≥ 50000 hours.
5. Maintainability: Modular design, fast fault location, no need for professional tools to replace parts.
6. Core role: Improve production efficiency, optimize management system, help factories achieve production management, support customized production, simple operation, and provide five-year warranty.
## **6 Data Reporting Communication Protocol**
**6.1 Protocol Analysis Explanation**
Type: Modbus RTU/TCP (default), supports user-definedProtocol.
Data frame structure: address code+function code+data field+checksum.
Report data: production model, planned output, Real-time target, actual output, completion rate, production line status, etc.
Reporting cycle: 1-60s (configurable).
**6.2 Protocol Reception Test**
Testing tool: Modbus Poll/Serial Debugging Assistant.
Test steps:
(1) Configure communication parameters (baud rate, data bits, parity bits).
(2) Send a read command to verify the format and content of the data frame.
(3) Simulate changes in the production line status and check if the reported data is updated synchronously.
**6.3 Protocol Customization**
Support customization of Protocol fields, data formats, and reporting logic based on user platform requirements.
Customization cycle: approximately 7-15 working days, providing Protocol documentation and testing tools.
7 Platform Integration
**7.1 Default Platform**
L docking platform: the company's self-developed production management platform（[ProMan](https://zhida.zhihu.com/search?content_id=271366205&content_type=Article&match_order=1&q=ProMan&zhida_source=entity)）。
Docking method: Ethernet/RS485.
Function support: Data display Real-time, historical query, report generation, and abnormal alarm.
**7.2 User specified platform**
Support integration with mainstream industrial software such as MES, ERP, SCADA, etc.
Docking process: requirement confirmation → Protocol development → joint debugging and testing → online acceptance.
Deliverables: Docking documents SDK、 Test report.
## **8 Precautions**
Installation, wiring, and maintenance must be carried out by professional electricians, and live working is strictly prohibited.
2. Prohibit exposure to rain, water, and direct sunlight, and keep away from heat and fire sources.
3. Sensor Avoid squeezing, pulling, or scratching the cable with sharp objects.
4. Regularly clean the screen body and Sensor probe, and prohibit corrosive solvents.
5. Cut off the power supply after prolonged shutdown to prevent moisture and dust.
6. Do not disassemble or modify by yourself, otherwise the warranty will be lost.
7. If there is smoke, odor, or abnormal noise, immediately turn off the power and contact our company's after-sales service.