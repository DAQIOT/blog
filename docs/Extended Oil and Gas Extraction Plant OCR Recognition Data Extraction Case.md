<https://zhuanlan.zhihu.com/p/1929595262621431357>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
# 1**Background requirements**
**Project Location**Yulin City, Shaanxi Province  
**Project party**Implementation Unit: Shaanxi Engineering Technology Co., Ltd., End User: Yanchang Gas Production Plant 2 and Plant 3 under Yanchang Petroleum Group
![图片](https://picx.zhimg.com/v2-c3468647ab93a595010313dc0f22e5df_1440w.jpg)
**Project Requirements**The pointer type gauges (pressure gauges, temperature gauges) Data Acquisition are collected on the Yanchang Petroleum Group Safety Production Intelligent Management Platform for unified monitoring and management.
**project pain points**The distribution of meter points on the gas transmission pipelines of the entire second and third gas production plants is complex and scattered, with different locations. According to the regular production plan, it is necessary to monitor the pressure and temperature data corresponding to the operation pipeline at a fixed time to achieve the purpose of regulation. The traditional approach of manual reading and human-computer interaction for data input cannot achieve the goal of data supervision on the production line. On the other hand, most of the venues are equipped with pointer pressure gauges, temperature gauges, etc., which do not have communication interfaces. Even if some have communication interfaces, the wiring acquisition method for explosion-proof application scenarios is too expensive.
![图片](https://picx.zhimg.com/v2-8f12bb2192b98a6c23613fed2af62c62_1440w.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/k2n5l2zwecjcfa7wnx2n.jpg) ![图片](https://picx.zhimg.com/v2-4db8ace1b6f11bc144f397b4f4716989_1440w.jpg)
Various pressure and temperature gauges for gas pipelines
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/k43sv3n419uqrc2yn0ba.jpg)
Partial point statistics table
**Evaluate implementation**According to the existing requirements, implement the Data Acquisition of these meters by installing an OCR image recognition and acquisition device（[SC-LP-CAM](https://zhida.zhihu.com/search?content_id=260532367&content_type=Article&match_order=1&q=SC-LP-CAM&zhida_source=entity)）Powered by batteries and transmitted wirelessly, the instrument data is collected and transmitted to the backend.
# II**Collect products**
The data acquisition product that matches the corresponding meter is our company's image recognition and photography product:**[Micro power wireless camera meter reader](https://zhida.zhihu.com/search?content_id=260532367&content_type=Article&match_order=1&q=%E5%BE%AE%E5%8A%9F%E8%80%97%E6%97%A0%E7%BA%BF%E6%8B%8D%E7%85%A7%E6%8A%84%E8%A1%A8%E5%99%A8&zhida_source=entity)**&**OCR camera recognition terminal**（SC-LP-CAM）, Main parameters and functions of the product:
**Product Name**
**Functional Description**
**Parameter Configuration**
**advantage**
Micro power wireless camera meter reader
The camera meter reading terminal series is a battery powered wireless timed camera meter reading terminal designed for fast meter reading of traditional old mechanical instruments (such as water meters, electricity meters, gas meters, pressure gauges, etc.) or instruments that cannot communicate directly. The camera terminal takes photos at set time intervals and uploads them to the server for analysis and recognition, obtaining instrument readings. Users can view the original images and recognition result data.  
The terminal is equipped with a long-life lithium battery that supports data collection[NB-IOT communication method](https://zhida.zhihu.com/search?content_id=260532367&content_type=Article&match_order=1&q=NB-IOT%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F&zhida_source=entity)It can overcome wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs.
**1. Characteristics of instrument photo collection**  
Image format type: jpg  
Image Pixel: Supports up to 640 \* 480  
Collection frequency: 10 minutes to 24 hours, supports remote configuration  
Wake up mode: Interval wake-up; Timed wake-up; Alarm clock wake-up  
**2 Electrical characteristics**  
Power supply method: 3.6V long-life lithium battery power supply (non rechargeable)  
Battery capacity: 8500mAh  
Power consumption: current less than 200mA  
Standby current: less than 5uA  
**3 Structural characteristics**  
Material: PC plastic (shell)  
Main protection level: IP65  
Water meter size: 135mm × 95mm × 55mm   
Meter size: 120mm × 110mm × 50mm  
T-shaped size: 82mm × 88mm × 63mm   
Main installation method: adhesive or narrow band clamp fastening  
**4 Work environment**  
Environmental temperature -25 ° C to 75 ° C, humidity 0 to 95% (non condensing)
**1. Powered by lithium batteries, it supports about 3000 photo taking times and can last for about 7 years once a day;   
 2. Built in telecom IoT NB card, with nationwide signal coverage;   
 3. Multiple appearance forms (square, circular, convex), quickly adaptable to on-site industrial instruments;   
 4. Supporting cloud platform, capturing images and regularly pushing recognition results, providing free API interface.   
 5. Clear image quality, recognition accuracy: greater than 99%   
 6. Easy installation, reducing construction troubles and costs.**
![图片](https://picx.zhimg.com/v2-247854409c339e5c5a1827919ab5efc5_1440w.jpg)
8699150482366458 (QR code automatic recognition)
T-shaped: clamp installation form, suitable for single pointer pressure and temperature gauges
# III**implementation process**
## **3.1 Technical Proposal**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/c9l4tof9vvl906dbj0fp.jpg)
Technical solution topology diagram
The instrument cover is installed with a buckle type recognition terminal, which is recognized through OCR photography and uploaded to the data processing backend. There is no need for wiring on site, simplifying manual implementation costs. Transfer data wirelessly to the cloud platform. The platform provides free API interfaces for docking with third-party platforms, which can be actively called or integrated with our cloud platform[MQTT transmission](https://zhida.zhihu.com/search?content_id=260532367&content_type=Article&match_order=1&q=MQTT%E4%BC%A0%E8%BE%93&zhida_source=entity)Form push to the third platform.
863931070091097 (QR code automatic recognition)
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/jnrkletg2o1t2y5f5g3p.jpg)
On site installation implementation diagram
Remote docking and debugging
## **3.2 Factors affecting installation implementation**
1) Confirmation provided by the collection meter (suitable for mechanical water, electricity, gas meter collection, or digital display instruments with a constantly lit screen and no jumping on the page).
2) The meter displays the size of the display disk (whether the product can completely cover the display disk), the appearance shape, and whether it conforms to square or circular products.
3) Single line (single pointer) Data Acquisition.
4) Collection frequency (the fastest frequency for battery powered products is once every 10 minutes, which can be set between 10 minutes and 24 hours. If you want to achieve high-frequency collection (once every 5 minutes), considering battery life issues, you need to modify the device to an external power supply version).
5) Power supply method: Conventional battery power supply (with a capacity to support about 3000 photos), can be changed to an external power supply version.
6) Signal (the product usually has a built-in patch antenna, and if the collected meter is in a closed environment, it is necessary to confirm whether the signal is affected. Consider modifying it to an external antenna version).
# 4**Display of Implementation Results Data Platform**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/xsolae62oruaucs47ce0.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/xs0khgt46cmofmzsn41p.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/p60hn91dgb80rpvl33mm.jpg)