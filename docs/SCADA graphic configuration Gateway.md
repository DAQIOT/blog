<https://zhuanlan.zhihu.com/p/1999810587660657547>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
Product Overview
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/pic7s35z0gs9smm02jqt.jpg)
Figure 1 Physical picture of the equipment
DAQ-GP-GCGW [SCADA graphic configuration Gateway](https://zhida.zhihu.com/search?content_id=269670341&content_type=Article&match_order=1&q=scada%E5%9B%BE%E5%BD%A2%E7%BB%84%E6%80%81%E7%BD%91%E5%85%B3&zhida_source=entity)It is a high-performance processor with a clock speed of up to 2.0GHz and 64 bit quad core[Arm®Cortex®-A55](https://zhida.zhihu.com/search?content_id=269670341&content_type=Article&match_order=1&q=Arm%C2%AECortex%C2%AE-A55&zhida_source=entity)Architecture, integrating G52 GPU and 1TOPs computing power simultaneously[NPU](https://zhida.zhihu.com/search?content_id=269670341&content_type=Article&match_order=1&q=NPU&zhida_source=entity)Various powerful embedded Hardware engines provide excellent performance for high-end display and control applications. In order to meet the application needs of different display and control products, DAQ-GP-GCGW has designed Hardware interface[RS-485](https://zhida.zhihu.com/search?content_id=269670341&content_type=Article&match_order=1&q=RS-485&zhida_source=entity)、 RS232、USB、 Ethernet DI、DO、[Vout](https://zhida.zhihu.com/search?content_id=269670341&content_type=Article&match_order=1&q=Vout&zhida_source=entity)、 HDMI, etc. Built in SATA interface for expandable SSD solid-state Hardware and[PCIe interface](https://zhida.zhihu.com/search?content_id=269670341&content_type=Article&match_order=1&q=pcie%E6%8E%A5%E5%8F%A3&zhida_source=entity)Adapting to 4G modules to meet the access requirements of various communication methods for AIoT products, the device supports up to 16 serial port connections. TheGatewayis embedded with our company's self-developed universal industrialData Acquisitionsystem, which flexibly realizes the upload and reception ofReal-timedata, supports custom configuration of large screen design, and allows industrial data to be viewed at a glance. In addition, the device is equipped with USB storage, USB Debug port, and USB-D upgrade port to meet the on-site FOTA, debugging, data storage, and data export application functions of the product.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7ct4cisikf2nw749f035.jpg)
Table 1 Product Configuration**table**
Gatewayadopts advanced highly integratedHardwareand software platform to optimize many commonly usedIoTplatforms, completing functions such as wireless reception, transmission, processing, and parsing. The structural size ofGatewayis 483 \* 330 \* 32mm. It can be widely used in variousIoTfields, such as industry, smart agriculture, power monitoring, environmental pollution monitoring, etc. The sentence is: Smart Home、 Scenarios such as security management.
## Service Philosophy
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## Feature Introduction
3.1 General Industrial Data Acquisition System
Connect the device through the network port and use the ping command to test whether it is in the same network segment as the local machine or directly connected to the display screen using HDMI. After opening the device, you can open a browser and enter: 192.168.10.2:16801/scada/(the red address in front needs to be filled in with the IP address connected to the corresponding network port, as shown in "Table 3 Network Port Description" below); If using HDMI to connect to the display screen for direct debugging, enter the website address:[http://localhost:16801/scada/](https://link.zhihu.com/?target=http%3A//localhost%3A16801/scada/) Or click on the website on the system desktop to open the login interface of the Universal Industrial Data Acquisition system;
Enter account: super Initial password: 123456 to log in to the system;
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/p7ad265d2xr8x6sndzur.jpg)
This system is a set of equipment and management software running onGateway, mainly used for data collection, control, storage, query, display, and upload of various instruments and equipment (PLC, injection molding machine, CNC machine tool, electric meter, flowmeter, analyzer, etc.). The main functions of the system include:
Figure 3 Example diagram of the general industrial Data Acquisition system interface
* Device Data Acquisition, upload platform data, and communication Protocol conversion.
* Supports a wide range of data links and communication Protocol.
* Flexible and easy-to-use transmission configuration.
* Data Real-time monitoring and alarm monitoring.
* Diversified data storage and querying, supporting database upload.
* Free configuration and visual interface design.
* User and permission management, allowing users to freely create and manage downstream accounts.
* The interface supports multiple languages.
3.2 Communication Protocol Support
The supported communication links include:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/yndh87dx8ms7j2t4uwzn.jpg)
The supported communication links Protocol include:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/s2xuv4476zfdxh1c42cm.jpg)
3.3 Configuration Visualization Interface
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/nndyvnojupqgjh0ars7p.jpg)
Figure 4 Example of Configuration Screen
On the configuration page, the available functions include:
* Display the device values collected by Real-time.
* Display data history.
* Display dynamically changing system processes.
* By manipulating page elements, issue commands and numerical values to the device.
* Switch to a different view page.
## Interface Definition
Figure 5 Gateway Interface Definition Diagram
The DAQ-GP-GCGW graphic configuration Gateway is designed to maintain a clear and concise style. The serial port function interface is as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2ivoxep01obx384ok4rn.jpg)
Table 2 Serial port pin list
The DAQ-GP-GCGW graphic configuration Gateway includes 4 network ports, and the interface description is as follows:
Table 3 Network Port Description Table
In addition, the device also supports RS232, USB, DI, DO, and Vout interfaces. For specific interface definitions, please contact our company for detailed product technical documentation;
## Gateway Size
Figure 6 Gateway Dimensional Diagram
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/30kb9w3e4rgl9xb0ujpr.jpg)
## Contact Information
Phone: 19936624847
Email:[business@daq-iot.](mailto:business@daq-iot.)com
URL:[http://www.daq-iot.com](https://link.zhihu.com/?target=http%3A//www.daq-iot.com)
Address: 16th Floor, Building 6, Lane 888, Xinlang Road, Songjiang District, Shanghai