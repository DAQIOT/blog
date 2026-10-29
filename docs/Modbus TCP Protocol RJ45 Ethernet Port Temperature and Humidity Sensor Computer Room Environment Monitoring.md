<https://zhuanlan.zhihu.com/p/1977766660501958758>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
| Shanghai DAQ-IoT Network Technology Co., Ltd.] Modbus TCP Protocol[RJ45 Ethernet port](https://zhida.zhihu.com/search?content_id=266968260&content_type=Article&match_order=1&q=RJ45%E4%BB%A5%E5%A4%AA%E7%BD%91%E5%8F%A3&zhida_source=entity)Temperature and humidity Sensor |
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
**1 Product Overview 32 Service Philosophy 43 Execution Standards 44 Product Characteristics Parameters 4**4.1 Collection Characteristics 44.2 Electrical Characteristics 54.3 Communication Characteristics 54.4 Working Environment 6**5 Product Core Advantages 66 Communication Routine 6**6.1 Register Address 66.2 Communication Protocol Example and Explanation 66.3 Protocol Reception Test 76.4 Protocol Customization 7**7 Platform Integration 7**7.1 Default Platform 77.2 User specified Platform 8**8 Precautions 9**
## Product Overview
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/zna98uola1hvjpobz9l7.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9rnndpau7uym7io1ynbb.jpg)
RJ45 Ethernet port version temperature and humidity
DAQ-GP-THLAN temperature and humidity sensing terminal is a universal temperature and humidity sensor developed byShanghai DAQ-IoTTechnology Co., Ltd., which is based on wired transmission through Ethernet ports and Modbus TCP communication. It is powered by a wide DC voltage and can collect temperature and humidity data in the environment. WiFi transmission can be customized,[mqttProtocol](https://zhida.zhihu.com/search?content_id=266968260&content_type=Article&match_order=1&q=mqtt%E5%8D%8F%E8%AE%AE&zhida_source=entity)Waiting for other versions ofSensor.
Network temperature and humidity terminals are widely used in industrial and agricultural isothermal humidity measurement scenarios.
## Service Philosophy
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## Implementation Standard
GB 5170.4-85 "Basic Parameter Calibration Method for Environmental Testing Equipment of Electrical and Electronic Products - Temperature Change Test Equipment"
## Product characteristic parameters
### Collection characteristics
* Temperature range: -40 ° C~120 ° C
* Temperature accuracy: ± 0.5 ° C
* Humidity range: 0~100% RH
* Humidity accuracy: ± 0.1 RH
### Electrical Characteristics
* Power supply method: 12V DC power supply (power interface: DC5.5 \* 2.1mm female socket, positive inside and negative outside)
* Working power consumption: less than 5W
### Communication characteristics
Transmission method: Ethernet port
Communication Protocol: MQTT/TCP/UDP/HTTP/SSL/ModBus RTU/Modbus TCP, customizable for other Protocol
Number of server centers: Supports reporting data to up to 7 cloud servers simultaneously.
Heartbeat Package: Supports custom heartbeat packages that can be set to signal strength.
Registration Package: Supports custom registration packages that can be set as IMEI codes.
Positioning: Support[LBS base station positioning](https://zhida.zhihu.com/search?content_id=266968260&content_type=Article&match_order=1&q=LBS%E5%9F%BA%E7%AB%99%E5%AE%9A%E4%BD%8D&zhida_source=entity)Convenient for querying device location.
### working environment
* Temperature -40 ° C to 75 ° C, humidity 0 to 95%
## Core advantages of the product
* **Easy installation, quick deployment, helping the IoT project to land quickly**
* **Support custom registration and heartbeat packages to facilitate platform differentiation of devices.**
* **Support any IoT cloud platform and configuration software, provide data Protocol docking**
* **Support Alibaba Cloud[Baidu Tiangong](https://zhida.zhihu.com/search?content_id=266968260&content_type=Article&match_order=1&q=%E7%99%BE%E5%BA%A6%E5%A4%A9%E5%B7%A5&zhida_source=entity)、 OneNet、 Mainstream cloud platforms such as Tencent Cloud**
* **Support external multiple channels Sensor**
* **Non invasive collection that does not affect the normal operation of the equipment**
* **Support remote parameter configuration and FOTA remote upgrade, minimizing personnel costs for on-site construction and maintenance to the greatest extent possible**
Multiple push methods such as UDP/TCP/MQTT/HTTP require users to provide server IP addresses and port numbers when receiving data.
## Communication routine
### register address
| register address | PLC or configuration address | content | operation | data type |
| --- | --- | --- | --- | --- |
| 0000H | 40001 | humidity | read-only | unsigned integer |
| 0001H | 40002 | temperature | read-only | unsigned integer |
### Example and explanation of communication Protocol
**MBAP message header: transaction processing identifier: 2 bytes; Protocol identifier: 2 bytes; Byte length: 2 bytes**
**Data transmission method: TCP transmission**
**Address: Current address of the device**
**Verification code: None**
**Attention: When temperature and humidity are read through TCP software, the data is enlarged by 10 times.**
Example: Using Modbus TCP debugging software to read the current temperature and humidity (sent in hexadecimal, received in hexadecimal):
Send command code:
| MBAP message header | Address | function code | starting address | Register Length |
| --- | --- | --- | --- | --- |
| 000000000006 | 01 | 03 | 00 00 | 00 02 |
Receive instruction code:
| MBAP message header | Address | function code | Return the number of valid bytes | humidity | temperature |
| --- | --- | --- | --- | --- | --- |
| 000000000007 | 01 | 03 | 04 | 01F5 | 00FD |
Humidity: 01F5 (hexadecimal) → 501 (decimal)=50.1% RH
Temperature: 00FD (hexadecimal) → 253 (decimal)=25.3 ℃
**Example of JSON format data message:**
{"T":27.8,"H":67.1,"ID":"860344048491162"}
**Message parsing:**
{
"T": 32.1, //Temperature
"H": .64.8, //Humidity
ID ":" 860344048491162 "//Device ID
}
### Protocol Reception Test
NetAssist, a network debugging assistant, can be used for receiving testing.
### Protocol Customization
If you need to customize other communication Protocol, you can contact the business personnel for communication.
## Application Cases
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/3tj8q9x3eljqbglb5ryh.jpg)