<https://zhuanlan.zhihu.com/p/2052698110443382126>
# 1 **Product Overview**
## **1.1 Functional Overview**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/qhut4knh63nz92o9vm9w.jpg)
**IOT Gateway Gateway is an industrial Protocol conversion Data Acquisition Gateway launched by Shanghai DAQ-IoT Network Technology Co., Ltd. Supports Modbus conversion[MQTT](https://zhida.zhihu.com/search?content_id=277473674&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)+JSON。 Supports MQTT connection to cloud servers, supports interface configuration, and independently collects data from mainstream industrial PLC/Modbus instruments/DLT645 smart meters. It can be converted into JSON format data and uploaded to cloud servers. It also supports serving as a regular transparent serial server and ModbusGateway. Supports Ethernet interface/4G/WiFi interface. RS232/485/422 three types of serial ports.**
## **1.2 Protocol support**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/6zb3wgcd3uaqjv3rxzd6.jpg)
**Note: The above are not all Protocol drivers. The new Protocol is constantly being developed and updated...**
**Latest Protocol reference link:**
**Data Acquisition IoT Data Acquisition Protocol Driver Table**
**[https://kdocs.cn/l/cddPp7qYeMXs](https://link.zhihu.com/?target=https%3A//kdocs.cn/l/cddPp7qYeMXs)**
# **2 service philosophy**
**Our company solemnly promises:**
**You are not only purchasing products, but also providing meticulous and thoughtful technical support services！！！( =^\_^= )**
**For most of our wireless products, ordinary workers only need to connect and install them on site! No debugging required!**
**We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform. （Hardware）**
**Free consultation service forIoTsolution!**
# **3 Core advantages of the product**
**u Easy installation, quick deployment, helping the IoT project to land quickly**
**u Support any IoT cloud platform and configuration software, provide data Protocol docking**
**u Support mainstream cloud platforms such as Alibaba Cloud**
**u support Data is directly stored in the database**
# **4 Product characteristic parameters**
**Electrical characteristics:**
**Power supply mode: wide voltage of 9~24V (positive inside and negative outside, standard power socket; two-wire terminal mode)**
**Working power consumption: less than 5W**
**Communication Protocol:**
**MQTT/TCP/UDP/HTTP/ModBus RTU, Can customize other Protocol**
**Structural characteristics:**
**Dimensions: Length x Width x Height=109 x 87 x 45 mm**
**Work environment:**
**Temperature: -40~85 ℃**
# **5 Data reporting communication Protocol**
## **5.1 Protocol Explanation**
**Multiple push methods such as UDP/TCP/MQTT/HTTP require users to provide server IP addresses and port numbers when receiving data.**
**Example of JSON format data message, determine the message format based on the specific device being collected:**
**{"ID":"866714044842879","XXX":3456.71}**
**Message parsing:**
**{**
**"XXX": 3456.71, //Collected physical quantities**
**ID ":" 860344048491162 "//Device ID**
**}**
## **5.2 Protocol Reception Test**
**Network debugging assistant can be used[NetAssist](https://zhida.zhihu.com/search?content_id=277473674&content_type=Article&match_order=1&q=NetAssist&zhida_source=entity)Conduct reception testing.**
## **5.3 Protocol Customization**
**If you need to customize other communication Protocol, you can contact the business personnel for communication.**
# **6 Quick Use Tutorial**
**In order to facilitate customers to quickly get started after obtaining Gateway, the following will introduce the quick usage method of IOT getway industrial Protocol conversion Data AcquisitionGateway.**
## **6.1 preparation**
**1. A 9V-36V DC power supply, with the positive and negative wires connected to the Gateway 24+and 24- interfaces respectively.**
**2. One Ethernet cable, with one end plugged into Gateway LAN1 or LAN2, and the other end connected to a computer.**
**3. If you need to use the 4G function, prepare a 4G data card and place it in the card slot at the top of Gateway (if you don't use the 4G function, you don't need to put the 4G card).**
**4. Install the accessory antenna onto Gateway.**
## **6.2 Gateway Power on**
**After completing the preparation work, power on Gateway and the Gateway Run light will start flashing after about 15 seconds. Wait for about 10 seconds before proceeding to the next step.**
****6.3**Gateway Initialization**
**1. The LAN1 or LAN2 port ofGatewayis connected to the computer through a network cable. Open the computer's browser (browser requirements), enter 192.168.100.1 in the browser address bar, and enter the Gateway management interface.**
**The first time you enter the web management interface, there will be an initialization process. Firstly, select the language, which defaults to 'automatic' here.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/x7duts10q0mmrq6mbzfj.jpg)
**3. Next, configure the user password. Please note that only the password needs to be configured, the username cannot be changed and is fixed as admin**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/3j6v8vt5ohhun6rowq9t.jpg)
**After completing the input, click submit to complete the initialization settings for Gateway. Attention here: Remember your password. If you forget your password, Gateway can only be reset, and all configurations will be lost at that time.**
## **6.4 Enter the configuration interface**
**All functions ofGatewaycan be configured on the management interface. Firstly, use the password you just set to log in.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/bt3k69a9dtiufmhi3uzl.jpg)
**Enter the Gateway management interface:**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/evse3vudwsqekahtrpun.jpg)
**Gateway Configuration interface**
## **6.5 Data Acquisition**
**Enter the Gateway management interface, click on the left menu bar Services - Sub Devices, and add sub devices. Add according to your own device model. Click the sub device point table button to add a point table.**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/uu7p0iiz8nczhdlv4of3.jpg)