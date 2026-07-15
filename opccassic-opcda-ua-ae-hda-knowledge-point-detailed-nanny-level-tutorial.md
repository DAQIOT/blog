<https://zhuanlan.zhihu.com/p/2003126561214338879>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
We often mention OPC communication when developing upper computer orIndustrial Internetprojects.
In 1996, Microsoft established the OPC Foundation with industrial automation vendors such as Fisher Rosement, Intellution, and Opto22, aiming to solve device interoperability issues through a unified interface. The same year, the OPC Foundation was launched[OPCClassic](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=OPCClassic&zhida_source=entity)standard. The OPCCassic specification is based on Microsoft Windows technology and uses COM/DCOM (Distributed Component Object Model) to exchange data between software components. The specification provides separate definitions for accessing process data, alarms, and historical data.
OPCCassic mainly has three sub specifications:
1.OPCDataAccess， As we often say[OPCDA](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=OPCDA&zhida_source=entity)The OPCDA specification defines data exchange, including value, time, and quality information.
2.OPCAlarms&Events， namely[OPCAE](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=OPCAE&zhida_source=entity)The OPCAE specification defines the exchange of alarm and event type message information, as well as variable status and status management.
3.OPCHistoricalDataAccess， Namely:[OPCHDA](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=OPCHDA&zhida_source=entity)The OPCHDA specification defines methods that can be applied to querying and analyzing historical and temporal data.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/v5ez2bq6x28uojrmi183.jpg)
With the introduction of service-oriented architecture, there is a demand for cross platform data transmission, as well as data security issues related to Big Data volume transmission. In 2008, the OPC Foundation released the OPC Unified Architecture, which is[OPCUA](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=OPCUA&zhida_source=entity)This is a platform independent service-oriented architecture that integrates all the functionalities of the existing OPC Assist specification.
OPCUA is a new generation OPC standard that provides a complete, secure, and reliable cross platform architecture to obtain Real-time and historical data and time. OPCUA is a supplement to the OPC industry standard that has been used at present, providing some important features, including platform independence, scalability, high reliability and the ability to connect to the Internet. Nowadays, OPCUA has become a bridge between the enterprise layer and embedded automation, independent of Microsoft, UNIX, or other operating systems.
As one of the important features of Industry 4.0, OPCUA has the following specific characteristics:
1. Unified architecture: Adopting an optimized TCP based unified architecture binary Protocol for data exchange; Simultaneously supporting web services and HTTP. Only one port needs to be opened in the firewall. The integrated security mechanism can ensure secure communication on the Internet.
2. Platform openness: The development of OPCUA software no longer relies on or is limited to any specific operating platform. The OPC technology, which was previously limited to the Windows platform, has been extended to various other platforms such as Linux, Unix, Mac, etc.
3. Secure Communication: OPCUA supports secure technologies such as session encryption and information signing. Each UA's client and server must be identified through OpenSSL certificates and have security features such as user authentication and audit trails.
4. Scalability: OPCUA's multi-layer architecture provides a "future oriented" framework. Innovative technologies and methods such as new transmission Protocol, security algorithms, coding standards, or application services can be incorporated into OPCUA while maintaining compatibility with existing products.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/zaakn33k0zve7pnv2tfx.jpg)
Both OPCDA and OPCUA have similar read and write methods. There are three main ways to read and write OPC, namely synchronous mode, asynchronous mode, and subscription mode. Subscription mode is only effective for reading.
1. Synchronization method: Synchronization method refers to the situation where the client must wait until all server responses are completed before returning after sending a request. During this period, it will remain in a waiting state. Therefore, when multiple clients operate on the server, the client program will block. Synchronization communication is suitable for situations where there are few clients and a small amount of data. The workflow of synchronization method is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/s3lgtjtwxyh4zwbcf5bu.jpg)
2. Asynchronous mode: Asynchronous mode refers to the immediate return of a request from the client without waiting for a response from the server. Other operations can be performed, and the server will automatically notify the client after completing the response. Therefore, compared to synchronous communication, asynchronous communication is more efficient. The workflow of asynchronous mode is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ergppkzjecfs0bouey3v.jpg)
3. Subscription method: When initializing the subscription method, it is necessary to subscribe to the corresponding communication group Group. This way, when there is a change in data within the server's Group group, the client data will be automatically refreshed. The client only needs to send a request to the server once, so the efficiency of the subscription method is very high. The workflow of the subscription method is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/gmonwmf3za681iusrmic.jpg)
OPC communication is based on the server client model. To implement OPC communication, the first step is to set up an OPC server environment. Here, we adopt a more mainstream approach[KepServer](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=KepServer&zhida_source=entity)The software Hardware adopts Siemens S7-1200 PLC, which is connected to S7-1200 through KepServer and can be accessed as a server through OPCDA or OPCUA.
![图片](https://picx.zhimg.com/v2-fa7357024ff04138b2ba11816975cb34_1440w.jpg)
1、 Collect Protocol driver
| Driver Name | explanation |
| --- | --- |
| [Modbus RTU](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=Modbus+RTU&zhida_source=entity) | Standard Modbus RTU communication Protocol. |
| [Modbus TCP](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=Modbus+TCP&zhida_source=entity) | Standard Modbus TCP communication Protocol |
| [DLMS](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=DLMS&zhida_source=entity) | DLMS/COSEM energy meter communication Protocol,[IEC62056](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=IEC62056&zhida_source=entity)Protocol family. Do not switch serial ports, use HDLC communication at the link layer Protocol, use Logical Name, no user authentication |
| DLT645 （1997/2007） | DL/T645-2007 Multifunctional Energy Meter Communication Protocol. Only read data. |
| Mitsubishi FX Series Communication Protocol |  |
| OPC ua |  |
| Sumitomo injection molding machine | EVA-PC communication Protocol. SE-EV series, network port acquisition SE-EV-A、SE-EV-A-HD、SE-A-HB |
| Haitian/Zhenxiong injection molding machine |  |
| Mitsubishi MELSEC Communications Protocol (MC Protocol) |  |
| Siemens S7 Protocol Ethernet port | S7-200 series |
|  |  |
| Injection molding machine driver collection | Corresponding motherboard model |
| --- | --- |
| Haitian, Bole, Aike, Lijin, Fengtie Machinery Haixiong, Jiaming, Dayu | Hongxun AK668 Hongxun AK618 Hongxun TECH2 Hongxun TECH2H Hongxun TECH1H PILOT3 5530/5531 AK580 A380 |
| Haitian | Keqiang T6F3 Keqiang T6F5 |
| Zhen Xiong | JM128 |
2、 Supported storage databases
| Database Name | explanation |
| --- | --- |
| mySQL |  |
| SQLlite |  |
| SQL Server |  |
|  |  |
3、 Upload Protocol driver
| Protocol Driver Name | explanation |
| --- | --- |
| [MQTT](https://zhida.zhihu.com/search?content_id=270068829&content_type=Article&match_order=1&q=MQTT&zhida_source=entity) | JSON format |
| TCP | Default JSON format |
System type, brand interface, model, factory authorization, price, factory authorization instructions  
CNC Fanuc RJ45 0i-A/B/C, 16i, 18i, 21i, MXP-100i, MXP-200i, 0i-MF, 16i-M, 31i,32i 0i-TF, 0i-MD, 0i-TD 0 No system integration  
Mitsubishi RJ45 M70, M700, M80, M800 No System docking  
Siemens RJ45 808808d, 840dsl, 828d, 802dsl 8000 No system docking  
RJ45 810d, 840d, 840dp, 840dpl 5000 No system docking  
New generation RJ45 EZ series No No System docking  
Mazak RJ45 Mazak, matrix, smooth 9800 without system docking  
Hasse RJ45 No System Connection  
Guangshu RJ45 GSK986, GSK251, GSK series No System docking  
Rexroth RJ45 MTXL40 10000 is system docking  
Kandi RJ45 KV2000 or above No System docking  
Brother RJ45 C00: S300X1/S500X1/S700X1/S1000X1/M140X1/R450X1 No No System docking  
Heidenhain RJ45 ITNC-530/630 8000 is system docking  
Okuma RJ45 OSP-2000M/3000M 8000 is system docking  
PLC Omron RJ45/RS232 CJ/CP No No System docking  
Mitsubishi RJ45&RS232 Serial&Ethernet No System docking  
Siemens RJ45/RS232 S7-200, S7-300, S7-400, S7-1200, S7-1500 No No System docking  
Huichuan RJ45/RS232 H1U/2U/3U No No System docking  
Hechuan RS232 HCA2, HCA8 No System Integration  
Panasonic RS232 FP0R, FPG series No System docking  
Shilin RS232 A1-30MR No No System docking  
Yonghong RS232 FBS-40MA, FBS-40MBR2-AC No No System docking  
ABB RJ45&RS232 ABB No No System Integration  
…. For more models of RJ45&RS232, please refer to the manual. Is there any system integration  
Industrial control standard Modbus RJ45/RS232 Modbus Rtu, Modbus TCP No System docking  
OPC RJ45&RS232 OPCUA, OPCDA No No System Integration  
SQL RJ45/RS232 SQL Server, MySQL, PostgreSQL, Oracle, SQLite No System Integration  
SCPI RJ45 ScpiTCP No System docking  
CSV RJ45 CSV standard parsing format No No System docking  
Timing library RJ45 inluxdb No No System docking  
ADS RJ45 Beifu ADS, etc. No System docking  
EM63 RJ45 EM63 No No System docking  
EIP RJ45 EIP No System docking  
Injection molding Haitian RJ45/RS232 5530/5531/TECH580/TECH1/TECH2/AK580/A380/AK668/CP6K/CP7K/PILOT3 1500-3000 No system integration  
Zhenxiong RJ45&RS232 Ai01/Ai02/Ai11/Ai12/CPC03/CPC06/CPC07/CPC09/MPC6/MPC7 3000 No system docking  
Sumitomo RJ45/RS232 EV50, SE50, etc. 6000 are system interfaces  
Rijing RJ45/RS232 NEX-III, PNX-III, FNX-III 10000 No system docking  
Keba RJ45 1075/CP051/CP052/CP053/CP054 3500 No system docking  
Toshiba RJ45 V7/V8/V9/TS1000 12000 No system docking  
Baojie Xin RJ45 PS860/PS660/PS560/MS300/MS500/MS700/ML200B/ML300B/ML600B/MK100/MK116/MK110/MK150/MK1030 No, no, system integration  
YiShiTong RJ45 IA621/A501/A701/A921/IV3100/IV3200/HTAO7Y No No System docking  
Mengli RJ45 9118 MX1 MK300/500/380/580 No System docking  
Fanuc RJ45 ROBOSHOTa iA (SPC only) 5000 No system docking  
Changfeiya RJ45 ccp621, etc. 3000 are system interfaces  
Power system IEC 101 RS485 standard Protocol No No System docking  
IEC 102 RS485 standard Protocol No No System docking  
IEC 103 RS485 standard Protocol No No System docking  
IEC 104 RJ45 standard Protocol No No System docking  
HJ212 RJ45/RS232 standard Protocol No No System docking  
DLT645 RS485 standard Protocol No No System docking  
CJT188 RS485 standard Protocol No No System docking  
Robot EFORT RJ45 New/Old System No System Docking  
KUKA RJ45 Top Series No No System Integration  
Yaskawa RJ45 YRC1000, HighEthernet No No System docking  
ABB HTTP Web Server No System Integration  
Fanuc RJ45 universal controller No System docking  
Estun RJ45 universal model (ER6/ER20) No No System docking  
Modern RJ45 full series No No System docking  
Yamaha RJ45 RCX series 6000 is system docking