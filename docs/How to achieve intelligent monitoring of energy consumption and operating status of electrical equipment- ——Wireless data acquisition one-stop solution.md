<https://zhuanlan.zhihu.com/p/2020086235616540129>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## **Preface**
In the management of electrical facilities and the operation of park equipment O&M, decentralized electrical equipment often has the problems of wide distribution range and difficult on-site management. The traditional manual inspection method is not only time-consuming and labor-intensive, but also difficult to achieve full time and full coverage status supervision. This article presents a detailed implementation plan for monitoring the electricity consumption of environmental protection equipment based on 4G wireless transmission, combined with practical implementation cases. It does not require complex wiring and can quickly achieve device energy consumption Data Acquisition and operation status judgment. It can also be integrated with third-party data platforms, providing practical reference for intelligent management of environmental protection equipment.
## **1、 Background and requirements for the implementation of the plan**
This plan has been implemented in multiple townships within the jurisdiction of Xinxiang City, involving more than 40 sewage treatment facility monitoring points in areas such as Weihui City, Huixian City, Changyuan City, and Yuanyang County. The core management requirements for this type of decentralized environmental protection equipment are focused on two points: firstly, it is necessary to accurately grasp the actual operating status of the equipment to avoid situations where the equipment is not used properly; The second is to achieve the collection and statistics of device electricity data, replacing the traditional manual on-site inspection mode, reducing management costs, and improving regulatory efficiency.
The pain points of the traditional management model are very obvious: manual inspections require frequent round trips to various locations, resulting in high labor and material costs; Unable to achieve 24/7 Real-time monitoring, there is a regulatory gap; Some devices do not have measuring instruments, making it difficult to visually judge their operating status through data. Therefore, a low-cost, easy to deploy, and stable data transmission wireless data acquisition solution is needed to solve the monitoring problem of decentralized devices.
## **2、 Core collection equipment and characteristics**
This plan is selected[SC-GP-EM4G wireless power monitoring device](https://zhida.zhihu.com/search?content_id=271974741&content_type=Article&match_order=1&q=SC-GP-EM4G%E6%97%A0%E7%BA%BF%E7%94%B5%E9%87%8F%E7%9B%91%E6%B5%8B%E4%BB%AA&zhida_source=entity)As a core collection device, this device is designed specifically for industrial field power monitoring, compatible with single-phase and three-phase power equipment Data Acquisition. It does not require on-site wiring and can be quickly installed at critical power consumption locations, making it the preferred device for decentralized equipment monitoring.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/nu9pvhtnkjsj0ayts7g0.jpg)
## **（1） Core functions of the device**
1. TheReal-timecan collect line voltage and current data of the equipment, automatically calculate key electrical parameters such as active power, apparent power, power factor, and active energy, and fully restore the equipment's electricity consumption situation;
2. Supports wireless transmission methods such as 4G/WiFi, and data can be directly uploaded to the cloud platform for remote viewing;
3. Equipped with unmanned monitoring capability, coupled with relays, it can achieve automatic power-off of overvoltage and overcurrent, ensuring the electrical safety of equipment;
4. Data Acquisition The frequency is reported within 5 minutes by default and supports remote modification of the collection frequency to meet different monitoring needs.
## **（2） Key parameters of equipment**
1. Collection channel: 6 channels of AC current and voltage, sampling interval of 1 second per channel, response speed ≤ 100ms, strong Data AcquisitionReal-timeperformance;
2. Measurement range: voltage 100V-400V, default current 0-100A; measurement accuracy: voltage 0.5% rdg., current 2% rdg., Data Acquisition accurate;
3. Transformer: default 2000:1, optional range from 0 to 600A, 6-way open type transformer design, easy installation;
4. Protocol Support: Compatible [MQTT](https://zhida.zhihu.com/search?content_id=271974741&content_type=Article&match_order=1&q=MQTT&zhida_source=entity)/TCP/UDP/HTTP and other mainstream communication Protocol can be integrated with specified cloud platforms.
## **（3） Equipment Applicable Scenarios**
This device is widely used for environmental protection equipment power monitoring, factory distributed power equipment status monitoring, power facility energy consumption statistics and other scenarios, especially suitable for on-site environments without meters, scattered points, and inconvenient wiring.
## **3、 Specific steps for implementing the plan**
## **（1） Preliminary on-site research**
1. Count the equipment types at each monitoring point, confirm whether they are single-phase or three-phase electrical equipment, investigate the line diameter and current range of the equipment, and provide a basis for matching the transformer diameter (such as 16mm, 24mm) and range (such as 0~100A);
2. Determine the installation location of the equipment, prioritize the position of the main circuit breaker of the tested equipment, confirm the installation space of the transformer and acquisition host in advance, and reserve the operating position;
3. Test the 4G signal strength at each point, with a focus on identifying weak signal areas such as underground distribution boxes and sealed iron boxes, and prepare extension antennas and other accessories in advance;
4. Confirm the on-site power supply conditions. This plan needs to rely on three-phase 220V/380V AC power supply and plan the equipment power supply lines in advance.
## **（2） On site equipment installation**
The installation of equipment must be operated by qualified electricians who follow electrical safety regulations throughout the process. The specific operations are as follows:
1. Installation of current transformer: Connect the open-ended transformer directly to the three-phase line of the tested equipment without disconnecting, and install quickly;
2. Voltage wiring: Connect the equipment voltage terminals to the on-site wiring specifications and perform insulation treatment at the connection points;
3. Host and antenna installation: Fix the acquisition host in a suitable position inside the distribution box. If the 4G signal is weak on site, connect the 4G antenna to a good signal area outside the distribution box through an extension cable;
4. Equipment power supply: Connect the equipment power supply line, check that the wiring is correct, connect the power supply, and confirm that the equipment starts normally.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ggfzyy79dea35ua5q831.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/yjvxywimy4q7qtsnk1fb.jpg)
## **（3） Remote configuration and data integration**
1. Technical personnel configure device parameters remotely, including collection frequency, transmission Protocol, platform docking address, etc;
2. Complete the joint debugging between the device and the cloud platform, test whether the data transmission is normal, and confirm that voltage, current, power and other data can be uploaded Real-time;
3. If it is necessary to interface with a third-party platform, according to the requirements of the platform Protocol, complete data format adaptation, achieve automatic data reporting and synchronization, and do not require manual intervention.
## **（4） Precautions for installation and implementation**
1. The diameter and range of the transformer must be strictly matched with the on-site circuit to avoid errors caused by model mismatch;
2. All wiring operations must be carried out in a power-off state. After wiring is completed, carefully check to prevent short circuits, reverse connections, and other issues;
3. When installing antennas in a sealed enclosure, ensure proper sealing of the enclosure to prevent dust and moisture from entering and affecting equipment operation;
4. After the installation of the equipment is completed, conduct a 24-hour trial run to troubleshoot issues such as data transmission and collection accuracy, and adjust and optimize them in a timely manner.
## **4、 Platform application**
## **（1） Real-time Data Monitoring**
The cloud platform allows for intuitive viewing of the Real-time electricity consumption data of various monitoring point devices, including voltage, current, power, energy, etc. Each device is assigned a unique ID, which enables precise positioning of the point; The platform supports data Real-time refresh, and staff can grasp the power status of all decentralized devices in the background without the need for on-site inspections.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ejpcm9jnrleztw6tmwga.jpg)
## **（2） Equipment operation status judgment**
By analyzing changes in electricity consumption data, the actual operating status of the equipment can be accurately determined: if the equipment has no current or power data during normal working hours, it indicates that the equipment has not started properly; If there are abnormal fluctuations in the data, equipment operation faults can be detected in a timely manner; By comparing and analyzing energy consumption data, one can also grasp the operating load of the equipment.
## **（3） Historical data management and analysis**
The platform can automatically store historical electricity consumption data of devices, support querying by hour, day, and month, and generate Real-time curves and energy consumption trend charts; It can automatically calculate the maximum, minimum, and average values of data, providing data support for equipment energy consumption analysis and O&M strategy formulation.
## **（4） Third party platform integration**
The data collected by the device can be seamlessly integrated with third-party data platforms through standardization Protocol, achieving automatic data reporting. It supports timed reporting modes such as hourly and daily, and the data format fully adapts to platform requirements, without the need for manual input, ensuring timely and standardized data reporting.
## **（5） Management efficiency improvement**
After the implementation of the plan, it completely replaced the traditional manual inspection mode and achieved 7 × 24 full time and full coverage monitoring of decentralized environmental protection equipment. A single staff member can manage dozens of monitoring points simultaneously, greatly reducing labor and material costs and improving equipment supervision efficiency by more than 80%.
## **5、 Summary of the plan and extension of its applicability**
## **（1） Core advantages of the plan**
1. Easy to deploy: wireless transmission design, no on-site wiring, open type transformer card installation, single point installation time is short, suitable for fast landing of dispersed points;
2. Low cost: Compared with traditional wired monitoring solutions, it saves a lot of wiring and construction costs, and has lower maintenance costs in the later stage;
3. High reliability: The equipment is equipped with multiple power protections, suitable for complex industrial environments, with stable 4G wireless transmission. In areas with weak signals, external extension antennas can be connected to ensure uninterrupted data transmission;
4. Strong adaptation: Supports multi Protocol docking, can be integrated with various cloud platforms and third-party data platforms for debugging, and can also adapt to single-phase and three-phase equipment. Even without measuring devices, it can accurately collect data;
5. Intelligence: Realize automatic data collection, uploading, and analysis, allowing staff to remotely monitor device status, transitioning from manual management to intelligent management.
## **（2） Extension of applicability of the plan**
This scheme is not only applicable to the monitoring of township sewage treatment equipment, but can also be widely used for energy consumption statistics and operation status monitoring of various dispersed, non metering, and inconvenient wiring electrical equipment such as park waste gas treatment equipment, factory distributed production equipment, outdoor water conservancy facilities, etc. It provides replicable and practical solutions for the intelligent management of various facilities.
## **（3） Suggestions for the later stage O&M**
1. Regularly conduct remote inspections of the collection equipment, check the online status and data transmission status of the equipment, and promptly discover problems such as offline equipment and data anomalies;
2. Conduct on-site equipment inspections every six months, focusing on checking the installation status of wiring, transformers, and antennas, cleaning the surface dust of equipment, and ensuring the normal operation of equipment;
3. According to management requirements, flexibly adjust the frequency and reporting rules ofData Acquisition, optimize the platform's data display and analysis functions, and improve the level of refinement in management.
## **Kind reminder**
All equipment installation and wiring operations in this plan must be completed by personnel with professional electrician qualifications, strictly following on-site electrical safety regulations to avoid electrical safety accidents; Equipment selection should be based on the actual environment and monitoring needs on site, and research and matching should be done in advance to ensure the effectiveness of the plan implementation.