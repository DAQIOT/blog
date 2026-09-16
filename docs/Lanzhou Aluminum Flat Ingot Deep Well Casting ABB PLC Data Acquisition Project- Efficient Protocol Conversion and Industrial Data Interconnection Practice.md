<https://zhuanlan.zhihu.com/p/2018040966838240356>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider ofIoT,Data Acquisition, andsolution,[Industry IoT](https://zhida.zhihu.com/search?content_id=271729731&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E7%89%A9%E8%81%94%E7%BD%91&zhida_source=entity)Data Acquisition expert (professional account), Shanghai DAQ-IoT website editor daq iot, would like to introduce the following content here and sincerely welcome everyone to discuss and exchange ideas.
Can handle common communication interfaces such as CAN/RS485/Bus/4~20mA/Profibus/CC Link/HART/IO switch values, etc
Industry Protocol: Modbus RTU TCP/HJ212/IEC104/DLT645/DLMS/IEC61850/[MQTT](https://zhida.zhihu.com/search?content_id=271729731&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)wait
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IoT (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: [Modbus RTU](https://zhida.zhihu.com/search?content_id=271729731&content_type=Article&match_order=1&q=Modbus+RTU&zhida_source=entity)/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
## **1.1** **1、 Project Background**
Lanzhou Aluminum Industry has deployed in the production process of deep well casting of flat ingots**ABB 1756/1769 series PLC**At the same time, 22 485 instruments supporting Modbus RTU Protocol are connected to monitor core process parameters such as casting machine liquid level, water pressure, flow rate, temperature, and safety interlock.
With the demand for digital upgrading in production, the site is facing the following pain points:
·The original PLC program is mature and stable,**Not willing to add complex communication logic**To avoid affecting production continuity;
·Multiple Protocol (PLC private Protocol, Modbus RTU) coexist, and data cannot be efficiently aggregated to configuration software, DCS system, and upper level business platform;
·The demand for cross network segment Data Acquisition, floating-point data processing, and multi platform integration is urgent, and traditional solutions have long implementation cycles and high maintenance costs.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5r04gvdk631wz27bo28j.jpg)
## **1.2** **2、 solution: Shanghai DAQ-IoT Network Technology DAQ-GP-GWRTU Protocol[Edge ComputingGateway](https://zhida.zhihu.com/search?content_id=271729731&content_type=Article&match_order=1&q=%E8%BE%B9%E7%BC%98%E8%AE%A1%E7%AE%97%E7%BD%91%E5%85%B3&zhida_source=entity)**
In response to the on-site requirements of Lanzhou Aluminum Industry, we adopt**Shanghai DAQ-IoT Network Technology DAQ-GP-GWRTU Industrial Protocol Edge Computing Gateway**Without the need to modify the PLC program, the core Data Acquisition and Protocol conversion deployment can be completed within 2 hours through visual configuration alone.
### **1.2.1** **Core deployment architecture**
**·** **Bottom layer access**Edge Computing Gateway directly collects ABB 1756/1769 PLC data and Modbus RTU data from 22 485 instruments;
**·** **Protocol Conversion**Unified conversion of multi-source heterogeneous data into Modbus TCP/RTU[OPC UA](https://zhida.zhihu.com/search?content_id=271729731&content_type=Article&match_order=1&q=OPC+UA&zhida_source=entity)(DA) and other standard industries Protocol;
**·** **Upper level docking**Support reading data from configuration software and DCS systems through OPC Server, and interface with business platforms through MQTT/WebService interface. It can directly connect to databases such as MySQL, Oracle, SQL Server, SQLite, etc.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/lyc1r7flwzzxgadmr3b3.jpg)
### **1.2.2** **Key Function Implementation**
**1.** **PLC and instrument data interoperability**Without modifying the PLC program, data reading and writing between the PLC and multiple 485 instruments can be achieved, ensuring that the production control logic is not disturbed;
**2.** **Cross Protocol/cross network segment collection**: Supports multiple network segments Data Acquisition, perfectly adapted to 64 bit floating-point process data (such as high-precision parameters such as liquid level, temperature, flow rate, etc.);
**3.** **Standardized Protocol output**Convert PLC private Protocol and Modbus RTU to Modbus TCP/RTU and OPC UA (DA), compatible with mainstream industrial software;
**4.** **Flexible integration across multiple platforms**Implementing lightweight integration with upper level MES and cloud platforms through MQTT/WebService, while supporting direct writing to mainstream databases to meet data persistence requirements;
**5.** **Minimalist deployment**Visual configuration interface, no programming required, on-site deployment only takes 2 hours, greatly reducing project cycle.
![图片](https://picx.zhimg.com/v2-2af87d98c408b6db2e060f90fecfd86f_1440w.jpg)
## **1.3** **3、 On site implementation and effectiveness**
### **1.3.1** **On site implementation scenario**
**·** **Cabinet deployment**Shanghai DAQ-IoT Network Technology DAQ-GP-GWRTU Edge Computing Gateway and [H3C switch](https://zhida.zhihu.com/search?content_id=271729731&content_type=Article&match_order=1&q=H3C+%E4%BA%A4%E6%8D%A2%E6%9C%BA&zhida_source=entity)Hikvision storage and other equipment are deployed together in standard industrial cabinets to achieve stable data transmission and centralized management;
**·** **Process data monitoring**Display core parameters such as the liquid level of the outlet flow channel of the casting machine, the inlet pressure/flow rate of the crystallizer, and the temperature of the cooling water through the HMI touch screen Real-time, supporting high and low limit alarms and interlock signal feedback;
**·** **Data configuration interface**Using the Edge Computing Gateway configuration tool, clearly map PLC registers and instrument addresses, define data types such as FLOAT32/INT16, and ensure the accuracy and integrity of Data Acquisition.
### **1.3.2** **Project Results**
**·** **Improved production stability**No need to modify the PLC program, avoiding production risks caused by program changes and ensuring continuous operation of the casting production line;
**·** **Data Acquisition Efficiency improvement**Complete the deployment of core functions within 1 hour, reducing the implementation cycle by over 90% compared to traditional programming solutions;
**·** **Data value release**Realize full collection and standardized output of process data, providing data support for production analysis, quality traceability, and intelligent decision-making;
**·** **Scalability enhancement**Support the integration of new instruments, PLCs, or upper level platforms in the future to protect existing investments.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/e8u4jkgpmrof834onip5.jpg)
## **1.4** **4、 Summary of Program Value**
Shanghai DAQ-IoT Network Technology DAQ-GP-GWRTU Protocol Edge Computing Gateway provides Lanzhou Aluminum Industry with**Lightweight, highly reliable, and easy to expand**The core value ofData Acquisitionin the industry lies in:
**·** **Zero code transformation**Protect existing PLC investments and avoid production interruption risks;
**·** **Multiple Protocol compatibility**Break down the barriers of heterogeneous data in industrial sites and achieve free flow of data;
**·** **Quick Deployment**Visual configuration significantly reduces project implementation and maintenance costs;
**·** **Flexible docking**: Meet the configuration requirements DCS、 Multiple scenario data requirements such as databases and cloud platforms.
This scheme has become a typical practice in the non-ferrous metal casting industry, providing a replicable digital upgrade path for similar industrial scenarios.