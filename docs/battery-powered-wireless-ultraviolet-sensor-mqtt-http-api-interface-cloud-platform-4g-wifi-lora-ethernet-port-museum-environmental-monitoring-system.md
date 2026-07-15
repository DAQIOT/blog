<https://zhuanlan.zhihu.com/p/1981404282944247169>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
| Shanghai DAQ-IoTNetwork Technology Co., Ltd[Low power wireless ultraviolet Sensor](https://zhida.zhihu.com/search?content_id=267365179&content_type=Article&match_order=1&q=%E4%BD%8E%E5%8A%9F%E8%80%97%E6%97%A0%E7%BA%BF%E7%B4%AB%E5%A4%96%E7%BA%BF%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity) |
| --- |
|  |
|  |
| Version: V 1.1 |
|  |
## catalogue
**1 Product Overview 32 Service Philosophy 53 Product Features 5**3.1 Ultraviolet Sensor Collection Characteristics 53.2 Electrical Characteristics 53.3 Communication Characteristics 63.4 Structural Characteristics 6**4 Product Core Advantages 65 Data Reporting Communication Protocol 7**5.1 Protocol Explanation 75.2 Protocol Customization 7**6 Precautions 9**
## Product Overview
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7kwfnjtf1woadarx8kdq.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/f2r8anxdr584s0ttufb7.jpg)
Low power wireless ultraviolet Sensor is a type of device launched by Shanghai DAQ-IoT Network Technology Co., Ltd., specifically designed to detect and quantify ultraviolet radiation in different bands. Its core function is to achieve precise perception, monitoring, and data output of ultraviolet radiation, and it is widely used in various fields such as industry, healthcare, environmental monitoring, and consumer electronics.
Sensor The terminal supports the use of 4G/[LoRa](https://zhida.zhihu.com/search?content_id=267365179&content_type=Article&match_order=1&q=LoRa&zhida_source=entity)/WiFi communication method, powered by 3.6V lithium battery, overcomes wireless communication obstruction caused by special on-site environment, greatly simplifies on-site deployment time and reduces construction costs. This terminal can also support 12V voltage input, reverse connection protection, high measurement accuracy, and easy installation.
| model | Feature Description |
| --- | --- |
| DAQ-LP-UVLoRaDAQ-LP-UV4G | LoRa/4G communication, powered by long-life lithium batteries, suitable for situations with low acquisition frequency and difficult external power supply. |
| DAQ-GP-UV4G | 4G communication, 220V AC/12V DC power supply, suitable for situations with high acquisition frequency or convenient external power supply. Because the device is set to be online for a long time by default, it can support remote configuration parameter debugging, and only needs to be installed and powered on on-site. |
| DAQ-GP-UVWiFi | WiFi communication method |
## Service Philosophy
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## Product Features
### UV Sensor collection characteristics
Collection type: It can simultaneously collect the ultraviolet radiation intensity in the UVA (315-400nm) and UVC (200-280nm) bands, as well as the effective radiation intensity in specific bands of the ultraviolet lamp
Measurement range: UVA: 0-20000 μ W/cm ²; UVC：0~10000μW/cm²； UV lamp intensity: 0~50000 μ W/cm ²
Distance coefficient: For UV lamp monitoring scenarios, the distance coefficient is**1:10**(That is, for every 10 times increase in distance betweenSensorand the UV lamp, the theoretical attenuation of radiation intensity is 1/100 of the original. The device has a built-in distance compensation algorithm that can automatically correct the measurement value based on the actual installation distance.); Environmental UV monitoring scenarios have no fixed distance coefficient and support custom distance calibration
Measurement error: Under standard conditions (25 ℃, 50% RH, standard UV light source), the measurement error is ≤± 5% (@ 20%~80% range of full scale); Band cross interference error ≤± 2%; Long term drift error ≤ ± 3%/year; Additional error ≤ ± 2% in low temperature (-40 ℃) or high temperature (85 ℃) environments
Collection frequency: default once every 12 hours, supports remote configuration
### Electrical Characteristics
Power supply method: Long life lithium battery power supply (optional DC power supply)
Standby current: 4.17uA
Standby power: 15.029uW
### Communication characteristics
Wireless transmission method: 4G/LoRa/WiFi
Communication Protocol:[MQTT](https://zhida.zhihu.com/search?content_id=267365179&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)/TCP/UDP/HTTP/SSL/ModBus RTU, Can customize other Protocol
Data forwarding: Any public network server
Positioning: Supports LBS base station positioning, making it convenient to query device location.
### structural characteristics
Antenna type: Built in antenna (optional external antenna)
Material: PC/ABS/PMMA (shell)
Main protection level:[IP65](https://zhida.zhihu.com/search?content_id=267365179&content_type=Article&match_order=1&q=IP65&zhida_source=entity)
Size: 122mm x 92mm x 42mm (length \* width \* height)
Distance measuring probe structure: non-contact type
Main installation method: wall mounted or screw fastened
Probe installation method: wall mounted or bracket
## Core advantages of the product
* **Easy installation, quick deployment, helping the IoT project to land quickly**
* **Support custom registration and heartbeat packages to facilitate platform differentiation of devices**
* **Support any private IoT cloud platform and configuration software, providing data Protocol docking**
* **Support Alibaba Cloud, Baidu Tiangong OneNet、 Mainstream cloud platforms such as Tencent Cloud**
* **Support external multiple channels Sensor**
* **Non invasive measurement that does not affect the normal operation of the equipment**
* **Support remote configuration of parameters,[FOTA](https://zhida.zhihu.com/search?content_id=267365179&content_type=Article&match_order=1&q=FOTA&zhida_source=entity)Remote upgrade to minimize personnel costs for on-site construction and maintenance**
## Data reporting communication Protocol
### Protocol Explanation
Multiple push methods such as UDP/TCP/MQTT/HTTP require users to provide the public IP address of the cloud server when receiving data
And the port number.
**Example of JSON format data message:**
{"VoltageCur":376,"TmpWidth":254,"TimePeriod":254,"MinCntSet":1,"UVAIntensity":15680,"UVBIntensity":8920,"UVCIntensity":2350,"UVLampIntensity":45800,"TotalDose":1256,"IntData3":-9999,"IntData2":168,"IntData1":1,"InfoId":1,"ICCID":"1119205006447538","Extend2":16890,"Extend1":23}
**Message parsing:**
{
"BatVoltage":376, //Equipment power supply voltage
UVA intensity ": 15680,//UVA ultraviolet radiation intensity, unit: μ W/cm ²
UVB intensity ": 8920,//UVB ultraviolet radiation intensity
UVC intensity: 2350,//UVC ultraviolet radiation intensity
ID ":" 860344048491162 "//Device ID
}
### Protocol Customization
If you need to customize other communication Protocol, you can contact the business personnel for communication.
## Precautions
1. This product comes with a default built-in IoT SIM card at the factory, which is free for the first year. Starting from the following year, the data fee is approximately 20 yuan per year, including free technical support and lifetime maintenance fees. If you need to use your own SIM card, please inform us in advance.