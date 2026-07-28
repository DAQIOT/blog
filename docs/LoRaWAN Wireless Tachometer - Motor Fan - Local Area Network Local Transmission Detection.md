<https://zhuanlan.zhihu.com/p/2014665787575653571>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5muqx5fv2yqzyzksuwh5.jpg)
Product Overview  
SC-GP-RPM4G/[LoRaWAN](https://zhida.zhihu.com/search?content_id=271233070&content_type=Article&match_order=1&q=LoRaWAN&zhida_source=entity)The wireless speed monitoring device is a product launched byShanghai DAQ-IoTTechnology Co., Ltd[Hall element](https://zhida.zhihu.com/search?content_id=271233070&content_type=Article&match_order=1&q=%E9%9C%8D%E5%B0%94%E5%85%83%E4%BB%B6&zhida_source=entity)The principle of induction magnetic conductor is used to measure the rotational speed of the instrument through internal precision circuit processing. Can be used to detect the rotational speed of various types of rotating machinery.  
Application areas: SC-GP-RPM4G/LoRaWAN wireless speed detector can be widely used for measuring the speed and gear speed of large rotating machinery (such as steam turbines, compressors, motors, fans, pumps) in the power, metallurgy, petrochemical, and paper industries. At the same time, it is widely used in the fields of workpiece processing speed monitoring, steel pipe coating speed monitoring, and gear speed measurement.  
Ordering specifications and selection  
**model**  
**Feature Description**  
DAQ-GP-RPM4G/LoRaWAN  
4G transmission, conventional 12v DC power supply, suitable for situations with convenient power supply and high acquisition frequency  
DAQ-LP-RPM4G/LoRaWAN  
4G transmission, powered by a 3.6V battery, with a range of 1-2 years depending on the acquisition frequency, suitable for situations with low acquisition frequency and inconvenient power supply.  
DAQ-GP-RPMLoRaWAN  
Lora transmission, 12V DC power supply  
……..  
Customization (transmission methods such as RS485, wifi, Ethernet interface, etc.)  
service philosophy  
**Our company solemnly promises:**  
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**  
This product only requires ordinary workers to connect and install it on site! No debugging required!  
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.  
As an expert in industrial Data Acquisition, Shucai IoT provides free IoT solution consulting services!  
Product characteristic parameters  
Collection characteristics  
Measurement range:  
0~15000 revolutions per minute (60 measuring points per circle)  
0~30000 revolutions per minute (30 measuring points per circle)  
0~9000000 revolutions per minute (1 measuring point per lap)  
Measurement accuracy: 0.5%  
Tested material: iron, magnet (other metal materials need to be specified)  
Electrical Characteristics  
Working power supply: DC 12V  
Power consumption: less than 5W  
Installation features  
Installation gap: recommended 0.5~3mm  
Installation Diagram
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7nj12gorg8xit5icvpim.jpg)
Communication characteristics  
Wireless transmission method: 4G/LoRa/WiFi/Ethernet cable  
Communication Protocol:[MQTT](https://zhida.zhihu.com/search?content_id=271233070&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)/TCP/UDP/HTTP/SSL/, Can customize other Protocol  
Data forwarding: Any public network server  
Number of server centers: Supports reporting data to up to 7 cloud servers simultaneously.  
Heartbeat Package: Supports custom heartbeat packages that can be set to signal strength.  
Registration Package: Supports custom registration packages that can be set as IMEI codes.  
structural characteristics  
Probe size: M16 \* 1 \* 80mm  
working environment
* Temperature -30 ° C~75 ° C, humidity 0~95%
Core advantages of the product
* **Easy installation, quick deployment, helping the IoT project to land quickly**
* **Support custom registration and heartbeat packages to facilitate platform differentiation of devices.**
* **Support any IoT cloud platform and configuration software, provide data Protocol docking**
* **Support Alibaba Cloud, Baidu Tiangong[OneNet](https://zhida.zhihu.com/search?content_id=271233070&content_type=Article&match_order=1&q=OneNet&zhida_source=entity)Tencent Cloud Mainstream Cloud Platform**
* **Support external multiple channels Sensor**
* **Non invasive collection that does not affect the normal operation of the equipment**
* **Support remote parameter configuration and FOTA remote upgrade, minimizing personnel costs for on-site construction and maintenance to the greatest extent possible**
Typical application cases
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/8w55q9n5iyv8ppviq1u1.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/cwaklk01cw1jxzp22zpx.jpg)
Data reporting communication Protocol  
Protocol Explanation  
Multiple push methods such as UDP/TCP/MQTT/HTTP require users to provide the public IP address and port number of the cloud server when receiving data.  
**Example of JSON format data message:**  
{"IMEI":860344048491162,"RotateSpeed":254,"ICCID":"1119205006447538"}  
**Message parsing:**  
{  
RotationSpeed ": 2000//RPM  
ID ":" 860344048491162 "//Device ID  
}  
Protocol Reception Test  
NetAssist, a network debugging assistant, can be used for receiving testing.  
Protocol Customization  
If you need to customize other communication Protocol, you can contact the business personnel for communication.  
platform integration  
Default platform  
The product is connected to our designated open industrial IoT platform by default when it leaves the factory. The platform interface is as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/nnqk6exnwe4o142p1gg4.jpg)
Computer browser interface
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/exf9dgd1jzcrzhx0afd4.jpg)
Mobile WeChat Access Interface  
User specified platform  
Taking Alibaba Cloud platform integration as an example, after users create products and add devices on Alibaba Cloud IoT platform, they need to provide a triplet: {ProduRPMKey, DeviceName, DeviceSecret} and the MQTT topic to be published.  
For example, the values of a triplet are:  
ProduRPMKey = b0FMK1Ga5cp  
DeviceName = 862991419835241  
DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q  
Taking OneNet platform integration as an example, after creating products and adding devices on China Mobile's OneNet platform, users need to provide product IDs and device registration codes.  
For example:  
ID：332590  
Registration code: DGRUa7Vr9KYGunwJ  
Installation precautions
1. The product comes with a built-in SIM card, and the annual data usage fee is approximately 10-20 yuan based on the reported data frequency. Users can also use their own SIM card, which needs to be confirmed in advance.
Activate gift giving