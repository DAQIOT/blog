<https://zhuanlan.zhihu.com/p/1992173412752308034>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## 1、 Project Background
[Data Collection IoT](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91&zhida_source=entity)As a comprehensive packaging manufacturing enterprise, X Packaging Co., Ltd. is equipped with diversified production equipment such as printing machines, laminating machines, die-cutting machines, and nail box machines, covering the entire process of paper product packaging. However, there are currently the following issues in the production process:
1. Device data islanding: Each device operates independently, and data is not interconnected. Production status relies on manual recording, which is inefficient and prone to errors.
2. Insufficient production transparency: The management is unable to grasp key indicators such as equipment operation and productivity, making it difficult to respond quickly to production anomalies.
3. [ERP system](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=ERP%E7%B3%BB%E7%BB%9F&zhida_source=entity)Lack of underlying support: The existing ERP system only relies on manual data input and cannot directly obtain equipment Real-time data, which limits the accuracy of production planning, cost accounting, and quality traceability.
4. Equipment utilization needs to be optimized: lack of attention to equipment[OEE](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=OEE&zhida_source=entity)The quantitative analysis of comprehensive efficiency is difficult to explore the space for capacity improvement.
Based on the current situation, enterprises urgently need to build a digital production management system by integrating their production equipment with ERP systems and promoting the transformation from "experience driven" to "data-driven".
## 2、 Construction Goal
**Overall objective**
Build aData Acquisitionplatform that covers the entire factory, connect the data link between production equipment and ERP system, achieve transparency in the entire production process, intelligence inDevice Management, scientific decision support, and support cost reduction, efficiency improvement, and lean management for enterprises.
**specific objective**
1. Equipment interconnection: Realize the collection and standardized access of core equipment data (operating status, output, energy consumption, process parameters) such as printing machines and die-cutting machines.
2. Data Integration: Building a Unified System[Edge data acquisition platform](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=%E8%BE%B9%E7%BC%98%E6%95%B0%E9%87%87%E5%B9%B3%E5%8F%B0&zhida_source=entity)Aggregate the collected device data and production data for viewing and statistical purposes.
3. Production Transparency: Real-time monitors the progress of each process, equipment data, etc., to improve the response speed of production scheduling.
4. ERP data integration: Provide equipment and production data to the ERP system to support financial accounting, cost analysis, and order delivery tracking.
5. Quality traceability loop: By analyzing the correlation between process parameters and quality data, rapid traceability and improvement of quality issues can be achieved.
## 3、 Scheme design
## 1. Architecture design
(1) Network infrastructure layer: Factory wide WiFi coverage
Wireless network deployment: through[Industrial grade wireless access point](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%97%A0%E7%BA%BF%E6%8E%A5%E5%85%A5%E7%82%B9&zhida_source=entity)(AP) Achieve full coverage of production workshops, warehouses, and other areas, supporting 2.4GHz/5GHz dual band to ensure high stability and Low Latency.
[Mesh networking technology](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=Mesh%E7%BB%84%E7%BD%91%E6%8A%80%E6%9C%AF&zhida_source=entity)Adopting wireless Mesh network to eliminate signal blind spots and support seamless roaming during device movement or production line adjustment.
(2) Edge Data Acquisition layer:[DAQ-IOT](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=DAQ-IOT&zhida_source=entity)I-Edge Gateway Deployment
Interface adaptation: Each [TERM006TOKEN] edge Gateway is connected to the PLC of equipment in the factory (such as printing machines, die-cutting machines, nail box machines, etc.) through an RS-485 interface. Real-time collects the operating status, output, energy consumption, and process parameters of the equipment.
Multiple Protocol Compatibility: Supports Modbus and other industrial Protocol, compatible with different brands of PLCs.
Network interruption continuation: Cache data in case of network interruption, automatically supplement transmission after recovery, and ensure data integrity.
(3) Data transmission layer: WiFi wireless communication
Data transmission path: The edge Gateway uploads the collected device data Real-time to the edge data acquisition platform through the factory's global WiFi network.
(4) Data aggregation layer: edge data acquisition platform
Data processing: Built in Rule Engine is used to clean, denoise, and standardize the format of raw data, filtering out invalid data.
Device Management: mainly involves the management of edgeGatewaydevices.
Data aggregation and storage: Receive data from all edges Gateway, persistently store it in the database, and support historical data queries.
Data Collection IoT[MQTTProtocol](https://zhida.zhihu.com/search?content_id=268669466&content_type=Article&match_order=1&q=MQTT%E5%8D%8F%E8%AE%AE&zhida_source=entity)Communication: Push structured data to the ERP system through MQTT Protocol.
(5) Platform and System Integration Layer: Edge Data Acquisition Platform and ERP Integration
Interface docking: Receive device Real-time data through ERP open APIs or databases.
(6) Architectural advantages
Low cost transformation: [TERM006TOKEN] edge Gateway is compatible with new and old devices, avoiding large-scale Hardware replacement.
Flexible Expansion: WiFi wireless architecture adapts to device additions or production line adjustments, reducing wiring complexity.
High reliability: Edge Computing+network interruption and continuation mechanism ensures that data is not lost and production continuity is guaranteed.
Real-time Performance guarantee: MQTT Protocol lightweight design achieves second level data synchronization, meeting the requirements of ERP systems for timeliness.
## 2. Remote Virtual Local Area Network
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/g57cl5yv0azzjbun284b.jpg)
TheGatewaysoftware is used to operate a virtual network card on the computer.Gatewayassigns an IP address to the network card, which is in the same network segment as the LAN port IP ofGateway(the PLC is connected to the LAN network segment ofGateway). At this point, the network card and PLC are on the same network segment. By selecting this network card for PLC programming software, it can communicate with the PLC as if it were really on a local area network.
Through the remote virtual LAN function of Edge Computing Gateway, the MES system can remotely issue PLC update programs to Edge Computing Gateway, and push the update programs to each device's PLC for program updates through Gateway.
## 3. Device Data Acquisition
### 2.1 Printing Machine
![图片](https://picx.zhimg.com/v2-194d80d79e15a9118bfac112544e26cf_1440w.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/rnhd56w01xx98dcv5mxm.jpg)
One printing machine, which is currently undergoing equipment upgrade and is expected to be completed by April. After the upgrade, the printing machine is equipped with a main control computer and can be equipped with a data acquisition IoT edge Gateway to perform Data Acquisition on the PLC or main control computer through the RS-485 interface.
**Explanation: The equipment PLC manufacturer is required to provide interface documentation and the equipment manufacturer is required to provide a data point table.**
### 2.2 Film laminating machine
![图片](https://picx.zhimg.com/v2-db6dcf8457e894171b9e0559476ef0df_1440w.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7fr2fjl9c58ndcdp515c.jpg)
One laminating machine with PLC, brand Omron. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment manufacturer is required to provide a data point table.**
### 2.3 Wire collision machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5d4ayobmph52ujpryib6.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/b3y3mp1xxysytqfln5bk.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/s16nfj2eumso7h26slpm.jpg)![图片](https://picx.zhimg.com/v2-800443f84417ef96bb9f8b21f173ad40_1440w.jpg)
One wire collision machine with PLC. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment PLC manufacturer is required to provide interface documentation and the equipment manufacturer is required to provide a data point table.**
### 2.4 Paper mounting machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/btipgdt3d4dhkkir70r2.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/sn1t5s5jan908be8be9j.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/np0ny0wnybepsnspwmv7.jpg)
One laminating machine with PLC. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment manufacturer is required to provide a data point table.**
### 2.5 Covering machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ha3pqk1legze1zodd2qq.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/m5edrvu9fd8q2ubn2qpo.jpg)
One laminating machine with PLC. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment PLC manufacturer is required to provide interface documentation and the equipment manufacturer is required to provide a data point table.**
### 2.6 Watermark machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/minuhqgzpqmf2t4yf6s9.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/unzi7ki71hk2p3kni4fd.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dfgb72pj6wes2giu1gfm.jpg)
There are multiple watermark machines, and all watermark machine data will be aggregated to the front-end main control computer, which has a PLC. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment manufacturer is required to provide a data point table.**
### 2.7 Die cutting machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/t521vsrxb5y23uebjfud.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/mwogva3qlc79yf4ohtzl.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/nnat8jwy2714wdxvssyi.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/z02k7fk7c3fo4jb4fmvq.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/b5i4hteo6ier3d5xeejm.jpg)
There are multiple die-cutting machines, including 2 Jinya machines, 2 AOER machines, and 1 MK1 machine, all of which have PLCs. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment PLC manufacturer is required to provide interface documentation and the equipment manufacturer is required to provide a data point table.**
### 2.8 Nailing machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9740sm6jsfylabxwezhy.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/pj765w2yx1l8p071mxbs.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/tj6xcoj872r9ptgqrm7m.jpg)
One nail machine with PLC. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment PLC manufacturer is required to provide interface documentation and the equipment manufacturer is required to provide a data point table.**
### 2.9 UV curing machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/l09v6iqtf3tadgfgml5g.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ahr0nqnyw8yowf4x7k55.jpg)
One UV curing machine with PLC, brand Omron. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment manufacturer is required to provide a data point table.**
### 2.10 Box gluing machine
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ojrxhbqm55hosorei7fw.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/4e5me4d8dulwte3o5bhs.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/pqigkeha1s7ysqt6l4fs.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/uwsdoawaecai3u7fxai7.jpg)
Two box gluing machines, one Changrong machine, and one HONGJING machine, all equipped with PLCs. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**Explanation: The equipment PLC manufacturer is required to provide interface documentation and the equipment manufacturer is required to provide a data point table.**
### 2.11 Environmental Protection Equipment
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ir9sgi870xgi4gjde322.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/xcu27y4oujw0cd2f05hw.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/02i21i3sj750k7c3x15h.jpg)
One environmental protection device with PLC. Edge Gateway can be installed to perform Data Acquisition on PLC through RS-485 interface.
**DAQ-IoT Shanghai DAQ-IoT website, industrialData Acquisitionexpert explanation: Equipment PLC manufacturers need to provide interface documents and equipment manufacturers need to provide data point tables.**