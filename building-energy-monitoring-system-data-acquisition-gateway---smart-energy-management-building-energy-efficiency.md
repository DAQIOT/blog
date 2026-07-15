<https://zhuanlan.zhihu.com/p/1921890797525140263>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
as[IoT](https://zhida.zhihu.com/search?content_id=259619111&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91&zhida_source=entity)Data Acquisition solution Professional provider, data acquisitionIoT*Editor daq iot* Here is an introduction to the following content, and we sincerely welcome everyone to discuss and exchange ideas.
As a professional provider of IoT data collection solutions, daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
Data upload
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/60047kmn9q6xv3qu2wxo.jpg)
**Data upload address port: http://[www.daq-iot.com](https://link.zhihu.com/?target=http%3A//www.daq-iot.com/):8033**
1. The project implementation party should self review the consistency between the energy consumption data collected by each monitoring branch and the actual load, submit a data verification table, and ensure that the measurement deviation is within a reasonable range;
2. The energy consumption data collected by each monitoring branch is consistent with the direct reading data of the energy consumption metering device. The uploaded data received by the monitoring center should be consistent with the original data collected on site. And the number of raw data received should meet the requirements of formula (1).
N
24
f
n
1. ——In the formula: N is the total number of raw data that the system should upload per day;
F is the frequency of data upload, unit: times/hour;
N is the total number of measurement points in the system;
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/64xvzcykrc9v2hyvhwv3.jpg)
3. To ensure the authenticity, reliability, and stability of data uploading,[energy consumption data](https://zhida.zhihu.com/search?content_id=259619111&content_type=Article&match_order=1&q=%E8%83%BD%E8%80%97%E6%95%B0%E6%8D%AE&zhida_source=entity)The energy consumption data should be uploaded directly from the data collector (Gateway), and it is not supported to export energy consumption data from the building monitoring system or power monitoring system database to the monitoring center. If the energy consumption data is uploaded using theData Acquisitiondevice of the power monitoring system, theData Acquisitiondevice must have two data transmission channels and be able to ensure the normal operation of both systems simultaneously.
### Appendix 1[Data Acquisition Device](https://zhida.zhihu.com/search?content_id=259619111&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%99%A8&zhida_source=entity)performance metrics
| parameter | indicator |
| --- | --- |
| collection interface | At least 2 channels are available [RS-485 interface](https://zhida.zhihu.com/search?content_id=259619111&content_type=Article&match_order=1&q=RS-485+%E6%8E%A5%E5%8F%A3&zhida_source=entity) |
| Collecting communication speed | The maximum speed is not less than 9600bps |
| Collect communication Protocol | Supports DL/T645-1997, CJ/T188-2004[GB/T19582-2008](https://zhida.zhihu.com/search?content_id=259619111&content_type=Article&match_order=1&q=GB%2FT19582-2008&zhida_source=entity)Each interface is independently configurable |
| Support the number of measuring devices | No less than 64 units |
| sampling cycle | According to data center commands or active scheduled collection, the timing cycle can be configured from 10 minutes to 1 hour |
| Data processing method | Analyze Protocol, perform addition, subtraction, and multiplication operations, and add additional information |
| storage capacity | Not less than 32MB |
| Remote transmission interface | At least one wired or wireless interface |
| Remote transmission cycle | According to the collection cycle Real-time remote transmission |
| Number of supported data servers | At least 2 |
| Configure/maintain interfaces | Having a local configuration/maintenance interface |
| Network function | Receive commands, report faults, encrypt data, resume breakpoint transmission, DNS resolution |
| power | Less than 10W |
### Appendix 2 Collector Communication Protocol
1. **Data encryption**  
   TcpProtocol  
   Use [AES encryption algorithm](https://zhida.zhihu.com/search?content_id=259619111&content_type=Article&match_order=1&q=AES+%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95&zhida_source=entity)Encrypt XML packets (encrypt all data) with a key length of 128 bits. The encryption key is stored in the local file system of the data center and Data Acquisition device.  
   Encryption key: aesmodeaes.mode  
   Encryption mode: ECB  
   Filling method: PKCS7-PKS5Padding  
   Character set: UTF-8  
   Binary: Hexadecimal  
   Encryption/Decryption Test Address:**[https://www.mklab.cn/utils/aes](https://link.zhihu.com/?target=https%3A//www.mklab.cn/utils/aes)** Test configuration as shown in the figure
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/160h2iibih8yksw9ajkh.jpg)
1. **XML data format for data transmission**  
   2.1 Authentication Data Packet (id\_malidate)  
   <root>  
   <! -- General Part -->  
   <!--  
   Building\_id: Building number  
   Gateway\_id: Collector ID  
   Type: The type of authentication packet  
   --><common>  
   <building\_id>XXXXXXXXXX</building\_id >  
   <gateway\_id>XX</gateway\_id>  
   <type>One of the following two types of operations</type>  
   </common>  
   <! -- Authentication -->  
   <! -- There are 2 types of operations  
   Request: Collector requests authentication (this packet is sent by the collector to the server)  
   Result: The server sends the verification result, and the result sub element is valid (this data packet is sent by the server to the collector)  
   -->  
   <id\_validate operation="request/result">  
   <result>pass/fail</result>  
   </id\_validate>  
   </root>  
   2.2 Heartbeat/Timing Data Packet (Heart\_teat)  
   <root>  
   <! -- General Part -->  
   <!—  
   Building\_id: Building number  
   Gateway\_id: Collector ID  
   Type: The type of heartbeat/timing packet  
   -->  
   <common>  
   <building\_id>XXXXXXXXXX</building\_id > <gateway\_id>XX</gateway\_id >  
   <type>One of the following two types of operations</type>  
   </common>  
   <! -- Heartbeat/Timing ->  
   <! -- There are 2 types of operations  
   Notify: The collector regularly sends survival notifications to the server, without the need for child elements (once every minute, set offline if not sent for five minutes, and close the link) (this data packet is sent by the collector to the server)  
   Time: After receiving the survival notification, the server sends the timing information. At this time, the sub element time is valid, and the collector's time needs to be based on the server time (this data packet is sent by the server to the collector)  
   -->  
   <heart\_beat operation="notify/time">  
   <time>yyyyMMddHHmmss</time>  
   </heart\_beat>  
   </root>  
   2.3 Energy consumption remote transmission data packet  
   <root>  
   <! -- General Part -->  
   <!—  
   Building\_id: Building number  
   Gateway\_id: Collector ID  
   Type: Type of energy consumption remote transmission data packet  
   -->  
   <common>  
   <building\_id>XXXXXXXXXX</building\_id>  
   <gateway\_id>XX</gateway\_id>  
   <type>One of the following two types of operations</type>  
   </common>  
   <! -- Energy consumption remote transmission -->  
   <! -- There are 4 types of operations  
   Report: Energy consumption data regularly reported by the collector (this data packet is sent by the collector to the server)  
   Continuous check: After the data packet is received, the server responds to the uploaded data with one response for each piece of data, without the need for child elements (this data packet is sent by the server to the collector)  
   There are 5 types of elements  
   Sequence element: The sequence number of the data sent by the collector to the server (the collector guarantees uniqueness, with a length not exceeding 20 digits)  
   Parser element: Whether the data sent to the server has been parsed by the collector (pass yes)  
   Time element: Data Acquisition Time  
   Meter element: Equipment number of the measuring device  
   Function element: The specific acquisition function of each measuring device, with the following three types  
   Attribute  
   ID attribute: Data Acquisition function number of the measuring device  
   1. Multi functional energy meter:  
   1: Total active energy  
   2: A-phase current  
   3: B-phase current  
   4: C-phase current  
   5: A-phase voltage  
   6: B-phase voltage  
   7: C-phase voltage  
   8: Total active power  
   9: Total power factor  
   **Encoding Instructions**  
   Build\_i (Building Code) -10 digits, unique to each building, assigned by the higher-level platform  
   Gateway\_i (Collector ID) -2 digits, unique to each collector, customized by the manufacturer  
   Energy consumption coding attribute: Energy consumption data classification/item coding is shown in the table below  
   (Note: Coding is unique under the same collector, and the same coding energy consumption data is summed and uploaded)  
   Energy consumption coding instructions
| 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- |
| Energy consumption classification code | Sub item energy consumption code | Electricity coding | Serial number (0-9&A-Z) |
| X X | X | X | X |
Energy consumption classification code
| Energy consumption classification | Energy consumption classification code |
| --- | --- |
| electricity | 01 |
| water | 02 |
| Gas (natural gas or coal gas) | 03 |
| Centralized heating capacity | 04 |
| Centralized cooling capacity | 05 |
| other energy sources | 06 |
| coal | 07 |
| liquefied petroleum gas | 08 |
| Artificial gas | 09 |
| gasoline | 10 |
| kerosene | 11 |
| diesel | 12 |
| renewable energy | 13 |
Sub item energy consumption code
| Sub item energy consumption | Sub item energy consumption code |
| --- | --- |
| Electricity consumption for lighting sockets | A |
| Air conditioning electricity consumption | B |
| Power consumption | C |
| Special electricity usage | D |
| Total electricity consumption | E |
Use a code meter
| Sub item energy consumption | electricity consumer name | Using electrical codes | Example (last x takes 0-9&A-Z) |
| --- | --- | --- | --- |
| 01A | Electricity consumption for lighting sockets | 0 | 01A0x |
| 01A | Lighting and sockets | 1 | 01A1x |
| 01A | Corridor and Emergency Response | 2 | 01A2x |
| 01A | outdoor lighting | 3 | 01A3x |
| 01B | Air conditioning electricity consumption | 4 | 01A4x |
| 01B | Cold and hot stations | 5 | 01A5x |
| 01B | cryogenic pump | 6 | 01A6x |
| 01B | cooling pump | 7 | 01A7x |
| 01B | cold machine | 8 | 01A8x |
| 01B | cooling tower | 9 | 01A9x |
| 01B | hot water circulating pump | A | 01AAx |
| 01B | electric boiler | B | 01ABx |
| 01B | Air conditioning terminal | C | 01ACx |
| 01B | All air unit | D | 01ADx |
| 01B | Fresh Air Handling Unit | E | 01AEx |
| 01B | exhaust fan unit | F | 01AFx |
| 01C | Power consumption | 0 | 01C0x |
| 01C | elevator | 1 | 01C1x |
| 01C | water pump | 2 | 01C2x |
| 01C | ventilator | 3 | 01C3x |
| 01C | Electric water heater | 4 | 01C4x |
| 01D | Other electricity consumption | 0 | 01D0x |
| 01D | Information Center | 1 | 01D1x |
| 01D | kitchen equipment | 2 | 01D2x |
| 01D | special equipment | 3 | 01D3x |
| 01E | Main circuit electricity consumption | 0 | 01E0x |
| 01E | Main and backup circuit power consumption | 1 | 01E1x |
Error attribute: The status code for this feature indicating an error, 0 indicates no error, and 1 indicates a fault  
-->  
<data operation="report/continuous\_ack">  
<sequence>XXXXXXXX</sequence>  
<parser>yes/no</parser>  
<time>yyyyMMddHHmmss</time>  
<meter id="1">  
<function id="1" coding="XXXX" error="XX">Data value/function>  
<function id="2" coding="XXXX" error="XX">Data value/function>  
</meter>  
<meter id="2">  
<function id="1" coding="XXXX" error="XX">Data value/function>  
<function id="2" coding="XXXX" error="XX">Data value/function>  
</meter>  
</data>  
</root>  
2.4 Configuration Information Package (config)  
This data packet will be returned to the collector by the server simultaneously with the authentication information and configuration information during the authentication process. If the configuration information is modified, the server will  
It will also send configuration information to the collector.  
<root>  
<! -- General Part -->  
<!—  
Building\_id: Building number  
Gateway\_id: Collector ID  
Type: Configure the type of information packet  
-->  
<common>  
<building\_id>XXXXXXXXXX</building\_id >  
<gateway\_id>XX</gateway\_id >  
<type>One of the two types of operations</type>  
</common>  
<! -- Configuration Information -->  
<! -- There are 2 types of operations  
Period: represents the server's configuration of the collector's collection period, and the period sub element is valid (this data packet is sent by the server to the collector)  
Period\_ack: represents the response of the collector to the server's collection cycle configuration information (this data packet is sent by the collector to the server)  
-->  
<config operation="period/period\_ack">  
<period>15</period>  
</config>  
</root>
1. **Data transmission format**  
   Byte length of data packet (4 bytes)+data packet (encrypted data) Example: Full data packet format: 132<root>Data</root>  
   132: Represents the byte length of "<root>data</root>", which is hexadecimal (4 bytes). <root>Data</root>: represents encrypted data
2. **Encryption case:**  
   Cipher text:  
   **00000180**1224FE967F74404694D77C944945B594701DEFC2188624BA6589C8115AA7C98F644B46E9F39F186D3A6D67692CBC9B65F13FBA22A1022EB9D1E3724D1DE48AE868958738368E80022A1748EB008648BFAE0E62F57CAD266DD65CD37FFA8B5727BC8A90DA4FBCB11F6EB437B5D1A808CC7ABDDC9AB972AA03EB252B28D9D2AC186E206B9ED5A32F01D4921EC898CEB09962A6EE96453A5F91A499FA565F3E27AD4267E364B307C871D91482F1D1F0CA5543F3738CB8B80AC872AD4DA7917A4C9D  
   among which **00000180** Represents the length of the ciphertext (not encrypted), and the following data is a complete ciphertext packet.  
   Clear text:  
   <root><common><building\_id>420100A002</building\_id><gateway\_id >01</gateway\_id><type>result</type></common><id\_validate operation="result"><result>pass</result></id\_validate></root>
3. **Message example:**
---------Register---------------
Collector sends:
<root><common><building\_id>500229H001</building\_id><gateway\_id>01</gateway\_id><type>request</type></common></root>
Server response:
<root><common><building\_id>500229H001</building\_id><gateway\_id>01</gateway\_id><type>result</type></common><id\_validate operation="result"><result>pass</result></id\_validate></root>
-----------Data transmission---------
Collector sends:
<root><common><building\_id>500229H001</building\_id><gateway\_id>01</gateway\_id><type>report</type></common><data operation="report"><sequence>00020221017152341570</sequence><parser>yes</parser><time>20221017152341</time><meter id="1"><function id="1" coding="01A00" error="0" >1</function><function id="1" coding="01B00" error="0" >2</function><function id="1" coding="01C00" error="0" >3</function><function id="1" coding="01D00" error="0" >4</function></meter></data></root>
Server response:
<root><common><building\_id>500229H002</building\_id><gateway\_id>01</gateway\_id><type>continuous\_ack</type></common></root>