<https://zhuanlan.zhihu.com/p/2020463584392521703>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
| 【[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=272038346&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)】Air compressor Data Acquisition monitoring Protocol conversion Gateway |
| --- |
|  |
|  |
| Version: V 1.1 |
|  |
| department | Product Department | Classification | Public |
| --- | --- | --- | --- |
| File Number |  | Author |  |
| Creation Date | 2020 | Last updated |  |
## catalogue
**1 Product Overview 22 Ordering Specifications and Selection 43 Service Philosophy 44 Product Characteristics and Parameters 4**4.1 Electrical Characteristics 54.2 Installation Instructions 54.3 Communication Characteristics 54.4 Structural Characteristics 64.5 Working Environment 6**5 Collecting Parameters Modbus Address Table 76 Typical Application Cases 97 Data Reporting Communication Protocol 9**7.1 Protocol Explanation 97.2 Protocol Customization 10**8 platform docking 10**8.1 Default Platform 108.2 User specified Platform 11
## Product Overview
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/1uvxgjzrmx5f8n60k1o5.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/whhmxspe6vfurbwybjmb.jpg)
[DAQ-GP-AMmodbus](https://zhida.zhihu.com/search?content_id=272038346&content_type=Article&match_order=1&q=DAQ-GP-AMmodbus&zhida_source=entity)TheProtocolair compressor conversion is aGatewaydevice launched byShanghai DAQ-IoTTechnology Co., Ltd., which is designed for the conversion and reverse control ofData AcquisitionandProtocolair compressors. Can be used for mainstream air compressor equipment such asRemote Monitoring. Realize the rapid integration of air compressor data into third-party systems such as PLC or DCS. This product has the advantages of high cost-effectiveness, low cost, and comprehensive technical support.
Through this Gateway, the operating status and parameters of the air compressor can be monitored, and the start, stop, loading, and unloading of the air compressor can also be controlled through serial communication. ThisGatewaycan connect 5 Atlas/Ingersoll Rand and other air compressors at the same time without additional configuration to form an air compressor group control network. The upper computer software or PLC uses RS485 interface to [Modbus RTU Protocol](https://zhida.zhihu.com/search?content_id=272038346&content_type=Article&match_order=1&q=+Modbus+RTU+%E5%8D%8F%E8%AE%AE&zhida_source=entity), can be connected to the network Real-time.
## Ordering specifications and selection
| model | Feature Description |
| --- | --- |
| DAQ-GP-AMmodbus-Atlas | connect[Atlas air compressor](https://zhida.zhihu.com/search?content_id=272038346&content_type=Article&match_order=1&q=%E9%98%BF%E7%89%B9%E6%8B%89%E6%96%AF%E7%A9%BA%E5%8E%8B%E6%9C%BA&zhida_source=entity)(Atlas Copco) MK2, MK4, MK5 computer controllers |
| DAQ-GP-AMmodbus-Ingersoll | Connect Ingersoll air compressor |
| DAQ-GP-AMmodbus-XX | Other brands of air compressors, such as American Sullair, Fusheng, Kaishan, and Shengang |
| …….. | Customization (transmission methods include 4G, WiFi, Ethernet interface, MQTT or HTTP, etc., to interface with third-party software platforms) |
## service philosophy
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
As an expert in industrial Data Acquisition, Shucai IoT provides free IoT solution consulting services!
## Product characteristic parameters
Model: DAQ-GP AMmodbus
Function: Atlas screw air compressor communicationGateway, upper computer or PLC can monitor the air compressor through Modbus communication.
Interface: MKLAN -1-to-many connection with the air compressor controller;
A and B - Modbus (485)
Attachment: Power adapter, air compressor communication connector
### Electrical Characteristics
Working power supply: 220V AC, 60mA
### Installation Instructions
The air compressor panel is as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/bl2i6rays6gfozaqhyt3.jpg)
The AC air compressor forms a "hand-in-hand" network, which is ultimately connected to the MKLAN interface of DAQ-GP AMmodbus, and the upper computer or PLC is connected through the Modbus interface.
Connect the DB9 plug to the controller's LAN plug; The upper computer is connected to the "AB" terminal through a Modbus (485) cable;
Set the addresses on the controller panel to 1~10, and the corresponding Modbus slave addresses are 1~10;
When accessing the upper computer, collect data according to Modbus slave addresses 1-10, and use the table in Part 3 for the address table. Support one to many handle bus connection.
### Communication characteristics
Default transmission method: RS485, Modbus RTU
Wireless transmission mode: 4G/LoRa/WiFi/Ethernet cable
Communication Protocol: MQTT/TCP/UDP/HTTP/SSL/, customizable for other Protocol
Data forwarding: Any public network server
### structural characteristics
Size specification: 122 \* 84 \* 24 (mm)
### working environment
* Temperature -30 ° C~75 ° C, humidity 0~95%
## Collect parameter Modbus address table
| serial number | name | Modbus address | visit | data type | explanation |
| --- | --- | --- | --- | --- | --- |
| 1 | control command | 40001 | RW |  | 1: Start up; 2: Stop; 3: Loading; 4: Uninstall |
| 2 | Reset instruction |  | R |  | 1: Fault shutdown; 2: Start up malfunction |
|  |
| 3 | Exhaust pressure |  |  | Int16 | Unit Bar, value \* 0.001 |
| 4 | Dp oil separator |  |  |  | Ditto. |
| 5 | oil pressure |  |  |  | Ditto. |
| 6 | Pressure of intercooler |  |  |  | Ditto. |
| 7 | exhaust gas temperature |  |  |  | Unit ℃, value \* 0.1 |
| 8 | 1 # rotor exhaust temperature |  |  |  | Ditto. |
| 9 | 2 # rotor inlet temperature |  |  |  | Ditto. |
| 10 | 2 # rotor exhaust temperature |  |  |  | Ditto. |
| 11 | reserve |  |  |  | Ditto. |
| 12 | reserve |  |  |  | Ditto. |
| 13 | reserve |  |  |  | Ditto. |
| 14 | oil temperature |  |  |  | Ditto. |
|  |
| 15 | Emergency stop input |  |  |  | 0: Emergency stop; 1: Normal |
| 16 | Remote start stop input |  |  |  | 0: Shutdown; 1: Start up |
| 17 | Remote loading and unloading input |  |  |  | 0: Uninstall; 1: Loading |
| 18 | Remote pressure control input |  |  |  | 0: On site; 1: Remote |
| 19 | Main motor overload |  |  |  | 0: Overload; 1: Normal |
| 20 | Fan motor overload |  |  |  | 0: Overload; 1: Normal |
| 21 | Motor operation feedback |  |  |  | 0: Stop; 1: Run |
|  |
| 22 | Operating status |  |  |  | 1: Operation; 0: Stop |
| 23 | Add/unload status |  |  |  | 1: Loading; 0: Uninstall |
| 24 | Integrated Alarm |  |  |  | 1: Alarm; 0: Normal |
| 25 | Comprehensive fault shutdown alarm |  |  |  | 1: Alarm; 0: Normal |
| 26 | Comprehensive fault shutdown |  |  |  | 1: Shutdown; 0: Normal |
| 27 | Maintenance Tips |  |  |  | 1: Maintenance; 0: Normal |
| 28 | Startup failure |  |  |  | 1: Fault; 0: Normal |
| 29 | Emergency shutdown |  |  |  | 1: Emergency stop; 0: Normal |
| 30 | Hand/Automatic Adjustment |  |  |  | 1: Automatic; 0: Manual |
| 31 | Local/remote control |  |  |  | 1: Remote; 0: On site |
|  |
| 32 | Low running time |  |  |  | hour |
| High running time |  |  |  | High letters \* 65536+low letters |
| 33 | Low loading time |  |  |  | Ditto. |
| High loading time |  | R |  |  |
| 34 | Low number of motor starts |  | R |  | High letters \* 65536+low letters |
| High number of motor starts |  | R |  |  |
| 35 | Module communication time low |  | R |  | High letters \* 65536+low letters |
| Module communication time high |  | R |  |  |
| 36 | Low loading frequency |  | R |  | High letters \* 65536+low letters |
| High loading frequency |  | R |  |  |
|  |
| 37 | Pressure band selection |  |  |  | 1 or 2 |
| 38 | Load pressure band 1 |  |  |  | Unit Bar, value \* 0.001 |
| 39 | Unload pressure band 1 |  |  |  | Ditto. |
| 40 | Load pressure band 2 |  |  |  | Ditto. |
| 41 | Unload pressure band 2 |  |  |  | Ditto. |
## Typical application cases
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/b0o22h8j29annzash8x6.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/lush4etf6h0ax5av1q55.jpg)
## Data reporting communication Protocol
### Protocol Explanation
Multiple push methods such as UDP/TCP/MQTT/HTTP require users to provide the public IP address and port number of the cloud server when receiving data.
**Example of JSON format data message:**
{"IMEI":860344048491162,"RotateSpeed":254,"ICCID":"1119205006447538"}
**Message parsing:**
{
Pressure: 2000//Exhaust pressure MPa
ID ":" 860344048491162 "//Device ID
}
Protocol Reception Test
NetAssist, a network debugging assistant, can be used for receiving testing.
### Protocol Customization
If you need to customize other communication Protocol, you can contact the business personnel for communication.
## platform integration
### Default platform
The product is connected to our designated open industrial IoT platform by default when it leaves the factory. The platform interface is as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7u1hasninuoc7drjbgje.jpg)
Computer browser interface
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dp4cf8ndzycv6ku3f4pr.jpg)
Mobile WeChat Access Interface
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/y7qkip4m36l5q8ygdzbw.jpg)
### User specified platform
Taking Alibaba Cloud platform integration as an example, after users create products and add devices on Alibaba Cloud IoT platform, they need to provide a triplet: {ProduRPMKey, DeviceName, DeviceSecret} and the MQTT topic to be published.
For example, the values of a triplet are:
ProduRPMKey = b0FMK1Ga5cp
DeviceName = 862991419835241
DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q
with[OneNet platform](https://zhida.zhihu.com/search?content_id=272038346&content_type=Article&match_order=1&q=OneNet%E5%B9%B3%E5%8F%B0&zhida_source=entity)For example, after creating products and adding devices on the OneNet platform of China Mobile, users need to provide product IDs and device registration codes.
For example:
ID：332590
Registration code: DGRUa7Vr9KYGunwJ