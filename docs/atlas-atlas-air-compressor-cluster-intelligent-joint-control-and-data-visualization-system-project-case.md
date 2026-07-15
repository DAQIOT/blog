<https://zhuanlan.zhihu.com/p/2004937026697458378>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
**1、 Project Background**
**Project Time:** January 2026
**Customer Background&Pain Points:**
There are 4 ATLAS brand air compressors in the factory area (currently 2 on site, with 2 to be added later), providing a stable gas source for the production line.
Each air compressor operates independently and relies on manual inspection to record operating parameters (pressure, temperature, etc.). The data is scattered and cannot be centrally monitored.
The start stop and rotation of n devices rely on manual labor, which poses a risk of forgetting to switch and uneven load, affecting the lifespan of the equipment.
When a device malfunctions, it may not be able to automatically adjust its operating strategy in a timely manner, which may affect the supply of production gas sources.
Lack of historical data traceability makes it difficult to conduct energy efficiency analysis and preventive maintenance.
**2、 Project objectives and customized requirements**
**The customer wishes to build a centralized monitoring and intelligent control system to achieve the following functions**：
**1.** **Visualization in dataset:** The operating status display of each unit, including operating time, inlet temperature, outlet temperature, inlet pressure, outlet pressure, oil pressure, oil temperature, etc., is collected and centrally displayed on a unified large screen by the controller.
**2.** **Intelligent rotation control:** Implement automatic sequential rotation operation of 4 devices, running alternately every 6 hours (adjustable), with 1 device running and the other 3 devices turned off. Balance equipment losses and extend overall lifespan. The rotation time can be flexibly set.
**3.** **On demand intelligent start stop:** Automatically control the start and stop of equipment based on pipeline pressure. When the end pressure is lower than the set lower limit pressure (pressure can be set), the backup machine will be automatically started for replenishment; After reaching the target pressure, the original host continues to operate, the standby machine stops, and the main equipment automatically kicks out after a failure and shutdown. Other equipment continues to be automatically controlled in sequence to achieve energy-saving operation.
**4.** **High Availability sexual protection:** When a running host fails, the system needs to be able to automatically isolate it safely from the running queue and automatically activate backup equipment to ensure uninterrupted gas supply.
**5.** **Flexible control mode:** Retain manual control function, can switch between "automatic" and "manual" modes, both upper and lower pressure can be set to meet special operating needs.
**IIIsolution**
We provide our clients with a set based on **“[Intelligent Industry Gateway](https://zhida.zhihu.com/search?content_id=270249349&content_type=Article&match_order=1&q=%E6%99%BA%E8%83%BD%E5%B7%A5%E4%B8%9A%E7%BD%91%E5%85%B3&zhida_source=entity) +Independently developed Data Acquisition platform+ [Configuration visualization software](https://zhida.zhihu.com/search?content_id=270249349&content_type=Article&match_order=1&q=%E7%BB%84%E6%80%81%E5%8F%AF%E8%A7%86%E5%8C%96%E8%BD%AF%E4%BB%B6&zhida_source=entity)”** Integrated customization of software Hardware solution.
**1. Hardware docking layer:**
utilize**Atlas air compressorData AcquisitionGateway(DAQ-GP AMmodbus)**Through standard**[Modbus RTUProtocol](https://zhida.zhihu.com/search?content_id=270249349&content_type=Article&match_order=1&q=Modbus+RTU%E5%8D%8F%E8%AE%AE&zhida_source=entity)**Maintain stable communication with the controller of each air compressor.
Gateway is connected to the air compressor panel through the DB nine pin air compressor interface for one to many Data Acquisition and Protocol conversion, preliminary data processing, and through**Modbus RTUProtocol**Upload data to a locally deployable offline platform[General Industrial Data Acquisition System](https://zhida.zhihu.com/search?content_id=270249349&content_type=Article&match_order=1&q=%E9%80%9A%E7%94%A8%E5%B7%A5%E4%B8%9A%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E7%B3%BB%E7%BB%9F&zhida_source=entity)。
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/61185cc7po5g0306ey2g.jpg)
Figure 1: Air Compressor Gateway
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/le4n3dinyaxhs3yf11wm.jpg)
Figure 2 On site Atlas air compressor panel
**2. Data and Logic Core Layer:**
Deploying our company's independently developed**General Industrial Data Acquisition System**Accurately analyze the equipment point table to achieve second level Real-time collection and storage of all air compressor parameters (while supporting various databases).
Built into the system**Customized development of integrated control logic engine**Reliable implementation of core control strategies such as "automatic rotation", "on-demand start stop", and "removal of faulty equipment" to ensure logical stability and accuracy.
**3. Application display layer:**
Tailored for customers**Industrial configuration monitoring large screen**The large screen design is intuitive and includes:
**Equipment status overview:** The operation/stop/fault status of the four devices is clear at a glance.
**Real-time Data Panel:** Display all key temperature and pressure parameters in a centralized manner.
**Intelligent control panel:** Rotation time, upper and lower pressure limits can be set, and the current host and queue order can be displayed.
**Manual control panel:** Provide independent device start stop buttons and manual/automatic mode switching.
**Historical trend curve:** The trend of key parameter changes can be queried at any time for fault analysis and energy efficiency management.
**Automatic alarm system:** When the device is abnormal, an alarm message will pop up and be recorded.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/jhir88br0tm988yrynem.jpg)
Figure 3 General Industrial Data Acquisition System Page
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/iur8skpyi5rosom9abqf.jpg)
Figure 4 Large screen interface in manual control mode
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/bqlnamur8ct7ucwo5i45.jpg)
Figure 5 Large screen interface in automatic control mode
**4、 Project achievements**
**Management visualization:** The on duty personnel have a comprehensive understanding of the operation status of each air compressor at the industrial computer, bidding farewell to manual inspection and meter reading,**Management efficiency improvement**。
**Control automation:** Fully automatic rotation and on-demand start stop have been achieved,**Avoiding human operational errors**More balanced utilization of equipment can extend its overall lifespan.
**Energy saving operation:** Accurate on-demand start stop control to avoid ineffective operation,**Significant energy-saving effects have been achieved**。
**System High Availability:** Rapid isolation of faulty equipment and seamless replacement of backup equipment,**Greatly ensuring the stability of the production gas source**Reduced the risk of unplanned shutdowns.
**Maintain digitalization:** Complete operational history data for the device**preventive maintenance**Provided precise data support, transforming 'repair after failure' into 'early warning maintenance'.
**5、 On site pictures**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/x8w046bk1uxov0ei1q3o.jpg)
Figure 6: Customer's on-site industrial computer display page
![图片](https://picx.zhimg.com/v2-0846a63ae5fd2e5f38028ef0f43babeb_1440w.jpg)
Figure 7: Collecting pictures of the installation site of Gateway
**6、 About Us**
Phone: 19936624847
Email:[business@daq-iot.](mailto:business@daq-iot.)com
URL:[http://www.daq-iot.com](https://link.zhihu.com/?target=http%3A//www.daq-iot.com)