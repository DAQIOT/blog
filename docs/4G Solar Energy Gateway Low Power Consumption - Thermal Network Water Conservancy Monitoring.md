<https://zhuanlan.zhihu.com/p/699045068>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/nvgtssa5hvopjm1u72wl.jpg)
[Low power solar powered wireless RTU collector](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E4%BD%8E%E5%8A%9F%E8%80%97%E5%A4%AA%E9%98%B3%E8%83%BD%E4%BE%9B%E7%94%B5%E6%97%A0%E7%BA%BFRTU%E9%87%87%E9%9B%86%E5%99%A8&zhida_source=entity)Downward support for timed acquisition of various 485 interfaces Sensor, external output of 5V/12V voltage, upstream support for various[IoT Cloud Platform](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91%E4%BA%91%E5%B9%B3%E5%8F%B0&zhida_source=entity)Access.
[DAQ-SP-X4G](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=DAQ-SP-X4G&zhida_source=entity)Sensor, a solar powered wireless series launched byShanghai DAQ-IoTTechnology, supports 4G wireless communication by default and can remotely monitor and connect with various wireless systems[RS485 communication](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=RS485%E9%80%9A%E4%BF%A1&zhida_source=entity)Sensoror probes, such as immersion liquid levelSensor[Temperature and humidity Sensor](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E6%B8%A9%E6%B9%BF%E5%BA%A6%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity)Illuminance Sensor[Wind speed and direction Sensor](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E9%A3%8E%E9%80%9F%E9%A3%8E%E5%90%91%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity)Tilt angle Sensor, electronic water gauge and other outdoor scenes Sensor.
The product is equipped with a rechargeable lithium battery, outdoor rainproof, and comes with a versatile bracket for easy outdoor installation. The built-in 4G IoT SIM card can directly access the IoT cloud platform and view data information directly on mobile WeChat or websites. Suitable for various remote monitoring scenarios where outdoor power supply is inconvenient.
## **1** **Service Philosophy**
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## **2** **Product characteristic parameters**
## **2.1** **Collection characteristics**
Acquisition interface: RS485
External output voltage: 5V/12V @ 1A
## **2.2** **Electrical Characteristics**
Solar panel power: 4.2W
Device power consumption:<=3W (default)
Battery capacity: 4Ah (expandable)
## **2.3** **Communication characteristics**
Support 4G network
Customizable WiFi/[LoRa](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=LoRa&zhida_source=entity)Waiting for other communication methods
## **2.4** **structural characteristics**
Overall dimensions of the host: 175 × 165 × 45mm
Protection level: IP65
## **2.5** **storage environment**
Temperature range: -20 ℃ to 60 ℃
## **3** **Core advantages of the product**
**u** **Self powered, using[clean energy](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E6%B8%85%E6%B4%81%E8%83%BD%E6%BA%90&zhida_source=entity)Realize 'zero carbon'**
**u** **Easy installation, quick deployment, helping the IoT project to land quickly**
**u** **Support custom registration packages and[heartbeat packet](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E5%BF%83%E8%B7%B3%E5%8C%85&zhida_source=entity)Facilitate platform differentiation of devices.**
**u** **Support any IoT cloud platform and configuration software, provide data Protocol docking**
**u** **Support Alibaba Cloud[Baidu Tiangong](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E7%99%BE%E5%BA%A6%E5%A4%A9%E5%B7%A5&zhida_source=entity)、OneNet、[Tencent Cloud](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E8%85%BE%E8%AE%AF%E4%BA%91&zhida_source=entity)Mainstream cloud platforms**
**u** **Support external multiple channels Sensor**
**u** **Support remote parameter configuration and FOTA remote upgrade, minimizing personnel costs for on-site construction and maintenance to the greatest extent possible**
## **4** **Communication Protocol**
The data upload method supports mainstream communication methods such as RS485, TCP, UDP, HTTP, MQTT, etc. The data format can be[modbus](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=modbus&zhida_source=entity)Or integrate with third-party platforms through JSON.
## **4.1** **[data reporting](https://zhida.zhihu.com/search?content_id=243473402&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5&zhida_source=entity)Explanation of Communication Protocol Analysis**
Example of parsing JSON format data message:
{
"tempeature":18.5, //Temperature ° C
"wind":4.2, //Wind speed m/s
"liquid level":8, //Liquid level depth m
"illumination":476, //Illuminance value Lux
"energy":0, //Electricity consumption 6 kWh
"power":0, //Power 4 W
"id":"861658062222974", //Device ID
}