<https://zhuanlan.zhihu.com/p/2004957050829029669>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/bf2h4hxrnkdr9c4mgn6g.jpg)
[Wireless liquid level Sensor](https://zhida.zhihu.com/search?content_id=270253512&content_type=Article&match_order=1&q=%E6%97%A0%E7%BA%BF%E6%B6%B2%E4%BD%8D%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity)Input type liquid level gauge
[https://www.daq-iot.com/list\_175/3394.html](https://link.zhihu.com/?target=https%3A//www.daq-iot.com/list_175/3394.html)
DAQ-GP-TLL4G Wireless Liquid Level Sensor Terminal is a wireless liquid level measurement product launched by Shanghai DAQ-IoT Network Technology Co., Ltd. The principle is to use a Wheatstone bridge on a diffusion silicon wafer, and apply pressure to the measured medium (gas or liquid) to change the resistance value of the bridge wall (piezoresistive effect), generating a differential voltage signal. This signal is then converted into a standard analog signal or digital signal corresponding to the range by a dedicated amplifier, and can be further converted into the pressure corresponding to the liquid level of the measured liquid. Due to the proportional relationship between different liquid level depths and liquid pressure, this proportional relationship can be used to determine the water level of the liquid being measured. This product has strong anti-interference, overload and impact resistance, low temperature drift, high stability, and high measurement accuracy, making it an ideal liquid level measuring instrument in the field of industrial automation.  
Sensor The terminal supports communication methods such as 4G/WiFi/LoRa by default, and supports[MQTT](https://zhida.zhihu.com/search?content_id=270253512&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)、 HTTP and other communication methods, SZY206/SZY427/SL651 protocol can overcome wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/bo4cumt6ss89ckdqrhs8.jpg)
2 **service philosophy**  
**Our company solemnly promises:**  
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**   
This product only requires ordinary workers to connect and install it on site! No debugging required!  
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.  
Free consultation service forIoTsolution!  
 3 **Product Features**  
3.1 **Temperature acquisition characteristics**  
Collection type: liquid water level  
Range: 0~50 m, other ranges can be customized  
Accuracy: ± 0.5  
Collection frequency: 1 second to 24 hours, supports remote configuration  
3.2 **Electrical Characteristics**  
Power supply mode: battery power or 12-36V DC  
3.3 **Communication characteristics**  
Wireless transmission method: 4G/NB IOT/LoRa/WiFi  
Communication Protocol: MQTT/TCP/UDP/HTTP/SSL/ModBus RTU, customizable with other Protocol  
Data forwarding: Any public network server  
Number of server centers: Supports reporting data to up to 7 cloud servers simultaneously.  
Heartbeat Package: Supports custom heartbeat packages that can be set to signal strength.  
Registration Package: Supports custom registration packages that can be set as IMEI codes.  
Positioning: Supports LBS base station positioning, making it convenient to query device location.  
3.4 **structural characteristics**  
Material: PC plastic (shell)  
Main protection level:[IP65](https://zhida.zhihu.com/search?content_id=270253512&content_type=Article&match_order=1&q=IP65&zhida_source=entity)，  
Main dimensions: 200mm × 94mm × 60mm  
Main installation method: wall mounted or screw fastened  
Probe installation method: immersion type  
3.5 **working environment**  
Environmental temperature: -20 ° C to 85 ° C, humidity: 0 to 95% (no condensation, no condensation)  
 4 **Core advantages of the product**  
**Easy installation, fast deployment, and assistance in the rapid implementation of theIoTproject**  
**V probe is waterproof, dustproof, and anti clogging**  
**V supports custom registration and heartbeat packages, making it easy for the platform to distinguish devices**  
**V supports any private IoT cloud platform and configuration software, providing data Protocol docking**  
**V supports Alibaba Cloud, Baidu Tiangong OneNet、 Mainstream cloud platforms such as Tencent Cloud**  
**V supports remote parameter configuration and FOTA remote upgrade, minimizing personnel costs for on-site construction and maintenance**  
5 **Data reporting communication Protocol**  
5.1 **Protocol Explanation**  
Multiple push methods such as UDP/TCP/MQTT/HTTP require users to provide the public IP (or domain name) address and port number of the cloud server when receiving data.  
**Example of JSON format data message:**  
{"depth":122,"ID":"860344048491162"}  
**Message parsing:**  
{  
Depth ": 122//Liquid level depth value, unit: cm  
ID ":" 860344048491162 "//Device ID  
}  
5.2 **Protocol Customization**  
If you need to customize other communication Protocol, you can contact the business personnel for communication.  
6 **platform integration**  
6.1 **Default platform**  
The product is connected to our designated industrial IoT platform by default when it leaves the factory. The platform interface is as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/actqykfh2eqifejlg51m.jpg)
Example of PC browser interface
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/jn3qx8rrhxu1f5c6o02o.jpg)
Example of WeChat Access Interface on Mobile  
6.2 **User specified platform**  
Taking Alibaba Cloud platform integration as an example, after users create products and add devices on Alibaba Cloud IoT platform, they need to provide a triplet: {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to be published.  
For example, the values of a triplet are:  
ProductKey = b0FMK1Ga5cp  
DeviceName = 862991419835241  
DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q  
 7 **Precautions**  
This product comes with a default built-in IoT SIM card at the factory, with an annual data fee of approximately 20 yuan, including free technical support and maintenance fees. If you need to use your own SIM card, please inform us in advance.