<https://zhuanlan.zhihu.com/p/2014739688477435179>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider ofIoT,Data Acquisition, andsolution, daq iot, the editor ofShanghai DAQ-IoT, would like to introduce the following content and sincerely welcome everyone to discuss and exchange ideas.  
As a professional provider of IoT data collection solutions,shanghai daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
DAQ for [IIOT](https://zhida.zhihu.com/search?content_id=271250655&content_type=Article&match_order=1&q=IIOT&zhida_source=entity)The Universal Industrial Data Acquisition system is a device management software developed by Shanghai DAQ-IoT Network Technology Co., Ltd., which runs on Edge Computing machines, industrial Gateway machines, or ordinary computers. It is mainly used for managing various industrial instruments and equipment PLC、 The collection, control, storage, statistics, and uploading of data for injection molding machines, CNC machine tools, and other equipment.
1.1 Supporting devices
TheData Acquisitionsystem collects data by connecting to devices, and supports connection methods such as serial port (232, 485), TCP client, TCP server, UDP, etc. TheData Acquisitionsystem supports a wide range of device communications, includingProtocol[Modbus](https://zhida.zhihu.com/search?content_id=271250655&content_type=Article&match_order=1&q=Modbus&zhida_source=entity)、 OPC-UA, etc.
1.2 Definition of Nouns
Equipment (collected device)
The software collects data from a device, which needs to have a communication interface and use a specific communication Protocol for communication. The device can be a detection instrument, a small instrument, aSensor, or even a standalone PLC.
factor
Factors are attributes of devices, including measurement values, status, control units, etc. For example, for an air conditioner, the following attributes can be referred to as a factor:
link
The physical connection method and basic communication between theProtocolsystem and devices. For example, a serial communication cable can be used, using RS232 or RS485 interfaces; Or use Ethernet RJ45 interface and TCP/IP communication Protocol. Support multiple devices to share a link.
drive
The parsing program for the communication between theProtocolsystem and devices. On the one hand, it parses the data collected from the device into the data format used by the collection system, and on the other hand, it parses the commands sent by the collection system to the device into the data format understood by the device.
1.1 Usage process
The software usage process is shown in the following figure:
4. Collection configuration
4.1 Driver Management
The driver management page is shown in the following figure:
Collection driver management
You can download the corresponding device driver from the official website, upload it to the system, and it can be used by the device.
4.2 Link Configuration
The link configuration page is shown in the following figure:
The currently supported links and the required configurations are shown in the table below:
4.3 Equipment Configuration
The device configuration page is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/42l1q5x95cwxrmsm2j56.jpg)
The device uses different drivers, and the configuration information may vary. But some information needs to be configured for all devices, as shown in the table below:
The device contains factors, and the factor configuration page is shown in the following figure:
Similarly, for devices with different drivers, the information required to configure factors also varies. The two common attributes are described as follows: Author: DAQ-IoT Data Acquisition IoT [General Industrial Data Acquisition Management System Platform IoT Middle Platform](https://link.zhihu.com/?target=https%3A//www.bilibili.com/read/cv45251133/%3Fopus_fallback%3D1) Source: Bilibili  
1、 Collect Protocol driver
| Driver Name | explanation |
| --- | --- |
| Modbus RTU | Standard Modbus RTU communication Protocol. |
| Modbus TCP | Standard Modbus TCP communication Protocol |
| [DLMS](https://zhida.zhihu.com/search?content_id=271250655&content_type=Article&match_order=1&q=DLMS&zhida_source=entity) | DLMS/COSEM energy meter communication Protocol, IEC62056 Protocol family. Do not switch serial ports, use HDLC communication at the link layer Protocol, use Logical Name, no user authentication |
| DLT645 （1997/2007） | DL/T645-2007 Multifunctional Energy Meter Communication Protocol. Only read data. |
| Mitsubishi FX Series Communication Protocol |  |
| OPC ua |  |
| Sumitomo injection molding machine | EVA-PC communication Protocol. SE-EV series, network port acquisition SE-EV-A、SE-EV-A-HD、SE-A-HB |
| Haitian/Zhenxiong injection molding machine |  |
| Mitsubishi MELSEC Communications Protocol (MC Protocol) |  |
| Siemens[S7Protocol](https://zhida.zhihu.com/search?content_id=271250655&content_type=Article&match_order=1&q=S7%E5%8D%8F%E8%AE%AE&zhida_source=entity) Ethernet port | S7-200 series |
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
| [MQTT](https://zhida.zhihu.com/search?content_id=271250655&content_type=Article&match_order=1&q=MQTT&zhida_source=entity) | JSON format |
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