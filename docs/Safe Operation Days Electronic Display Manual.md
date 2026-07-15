<https://zhuanlan.zhihu.com/p/2018284651962193453>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## **1** **Product Overview**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/npdlisrrrcp55dy7wl1c.jpg)
This indoor model [NTP timing](https://zhida.zhihu.com/search?content_id=271754270&content_type=Article&match_order=1&q=NTP+%E6%A0%A1%E6%97%B6&zhida_source=entity)The electronic display screen for safe operation days is designed byShanghai DAQ-IoTNetwork Technology Co., Ltd. specifically for industrial and mining enterprises, power, municipal, and industrial parks. It is used to display the safe production operation days, current accurate time, and related safety warning information.
The product automatically calibrates time through NTP network to ensure precise synchronization of time; Adopting high brightness LED dot matrix/[seven-segment display](https://zhida.zhihu.com/search?content_id=271754270&content_type=Article&match_order=1&q=%E6%95%B0%E7%A0%81%E7%AE%A1%E6%98%BE%E7%A4%BA&zhida_source=entity)With a long visual distance and high clarity, it supports custom safe operation days, unit names, warning slogans, and other content. It is the core equipment for enterprises to implement visual management of safety production.
**2. Ordering specifications and selection**
(1) Safety signs are divided into indoor safety signs (not waterproof) and outdoor safety signs (waterproof);
(2) The safety sign is divided into positive/negative timing, automatically increasing/decreasing by one every day;
(3) The products released by our company are all product drawings made by previous customers, and there is no stock available. Customers need to clarify their own needs and the size of the required products;
(4) The content of the safety sign surface drawing can be displayed according to customer needs, such as: XX days until completion, XX days for safe construction, XX days without disasters, XX hours and XX minutes until the end of the performance... If you need to have your own logo, please provide a high-definition original logo image;
(5) The production of safety signs is cumbersome and labor-intensive, so it takes 3-5 days to ship without the need for urging;
## **3 Service Philosophy**
## **Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
For those who purchase our wireless products, we provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## **4 Product characteristic parameters**
## **4.1 Electrical Characteristics**
## Power supply voltage: AC 220V ± 10% 50Hz (optional DC 12V/24V power supply)
## Power consumption of the whole machine: ≤ 20W (depending on the screen size)
## Standby power consumption: ≤ 5W
Lightning protection: Built in power surge protection module to adapt to fluctuations in industrial power grids
### **4.2 Communication Characteristics**
Time synchronization: supported**NTP v4**Protocol， Can connect to internal NTP servers or public timing servers within the enterprise.
Network interface: RJ45 10/100M adaptive Ethernet (optional 4G wireless communication module)
Data update: Supports TCP/IP and HTTP API remote updates for secure running days and display content.
Communication Protocol:[Modbus TCP](https://zhida.zhihu.com/search?content_id=271754270&content_type=Article&match_order=1&q=Modbus+TCP&zhida_source=entity)/Custom JSONProtocol(customizable as needed)
### **4.3 Structural characteristics**
Display mode:[LED dot matrix screen](https://zhida.zhihu.com/search?content_id=271754270&content_type=Article&match_order=1&q=LED+%E7%82%B9%E9%98%B5%E5%B1%8F&zhida_source=entity)/Digital tube display (single/dual color optional)
Viewing angle: ≥ 120 ° (horizontal/vertical)
Screen size: customizable (such as 600mm × 400mm, 800mm × 600mm, etc.)
Shell material: aluminum alloy frame+PC dustproof panel
Installation method: wall mounted/embedded installation
Protection level: IP54 (indoor dustproof, splash proof)
### **4.4 Working environment**
Working temperature: -10 ℃ to+50 ℃
Storage temperature: -20 ℃ to+60 ℃
Relative humidity: 10% to 90% RH (no condensation)
Altitude: ≤ 2000m
Applicable scenarios: indoor factories, dispatch centers, office building lobbies, security guard rooms, etc
## **5 core advantages of the product**
(1) NTP automatic timing: No need for manual time adjustment, automatically synchronizes with standard time to avoid timing errors.
(2) Automatic counting of safety days: supports setting accident zeroing time, automatically accumulates safe operation days, and does not lose power-off memory.
(3) High brightness display: The LED light source has high brightness and is still clearly visible under strong indoor light, with a visible distance of ≥ 30 meters.
(4) Flexible customization of content: customizable display of unit name, safety slogan, date and time, temperature and humidity (optional) and other information.
(5) Remote O&M Convenience: Updating content, timing, and restarting devices remotely through the network without on-site operation.
(6) Stable and reliable: Industrial grade design, supporting 7 × 24-hour continuous operation, with strong anti-interference ability.
**6 Data Reporting Communication Protocol**
### **6.1 Protocol Analysis Explanation**
Equipment support standards**NTP timing Protocol**With customization**Data Reporting Protocol**：
NTP Protocol: Used for time synchronization, the device acts as an NTP client and requests timestamps from a specified NTP server to automatically correct the local clock.
Data reporting Protocol: The device can report current time, safe operation days, device status (online/offline, fault information) and other data to the user platform. The format of Protocol is JSON, as shown in the following example:
**6.2 Protocol Reception Test**
Users can perform Protocol reception testing through the following steps:
Configure the device IP address and NTP server address;
Set up a test server and listen on specified ports;
After the device is powered on, it automatically initiates NTP timing and data reporting;
Verify whether the server-side has received the correct timestamp and safe operation days data.
### **6.3 Protocol Customization**
Support customization of Protocol format according to user platform requirements:
Adjustable reporting fields (such as adding data on temperature, humidity, voltage, etc.);
Supports Modbus TCP[MQTT](https://zhida.zhihu.com/search?content_id=271754270&content_type=Article&match_order=1&q=MQTT&zhida_source=entity) Waiting for mainstream industries to connect withProtocol;
L can customize data encryption methods (such as TLS/SSL) to ensure communication security.
## **7 Platform Integration**
### **7.1 Default Platform**
The device is connected to our company by default[Visual Management Platform for Safety Production](https://zhida.zhihu.com/search?content_id=271754270&content_type=Article&match_order=1&q=%E5%AE%89%E5%85%A8%E7%94%9F%E4%BA%A7%E5%8F%AF%E8%A7%86%E5%8C%96%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0&zhida_source=entity), provides the following functions:
Real-time View the safe operation days and time status of each signboard;
Remote batch update of kanban content and timing;
Generate safety operation statistical reports (daily/monthly/annual);
Abnormal alarm push (such as device offline, abnormal time).
### **7.2 User specified platform**
### Support docking with user owned platforms, the docking process is as follows:
Provide user platform Protocol documentation (or interface specifications);
Our company customizes device communication logic based on Protocol;
Both parties shall conduct joint debugging and testing to verify the functions of data reporting and instruction issuance;
After passing the test, batch deployment will be launched.
## **8 Precautions**
**(1) Installation environment**Please install in a dry and well ventilated indoor location, avoiding direct sunlight and rain.
**(2) Power supply safety**Please use a power adapter that meets the standard to avoid voltage fluctuations that can damage the device.
**(3) Network configuration**Ensure device network connectivity, NTP server address must be configured correctly, otherwise time cannot be synchronized.
**(4) Data Security**Please do not modify the device network parameters and Protocol configuration at will. If adjustments are needed, please contact technical personnel.
**(5) Maintenance and upkeep**Regularly clean the dust on the screen surface to avoid affecting the display effect; Please do not disassemble the device casing by yourself, otherwise the warranty will be lost.
**(6) Fault handling**If the device displays abnormalities or cannot connect to the internet, please check the power supply and network connection first. If the problem still persists, please contact after-sales technical support.