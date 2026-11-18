<https://zhuanlan.zhihu.com/p/2080709114121007162>
**[Taicang processing equipment](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E5%A4%AA%E4%BB%93%E5%8A%A0%E5%B7%A5%E8%AE%BE%E5%A4%87&zhida_source=entity)(Horizontal machining center, CNC lathe, milling machine, vertical lathe, grinding machine, hydraulic press) Data Acquisition Network docking[MES technical solution](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=MES%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88&zhida_source=entity)**
**Compiled by:[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)**
**Project Overview**
The processing workshop of Taicang Phase III large factory includes various types of processing equipment such as fully automatic motor rotor processing assembly line, vertical turning and milling composite, horizontal machining center, CNC lathe, milling machine, vertical lathe, grinder, hydraulic press, etc. The equipment brands and models are complex, and the CNC systems are heterogeneous. This plan is based on the industrial edge data acquisition productGatewayfromShanghai DAQ-IoT, and completes all processing equipment in the workshop**Equipment status, production counting, alarm information, process parameters**Collect and standardize data at the OT equipment layer, connect to MES manufacturing execution system upwards, eliminate equipment silos, support work order tracking, OEE statistics, quality traceability, and equipment O&M, and meet the digital control needs of motor rotor component processing.
| Equipment List (Summary of Processing Equipment) | Serial Number | Unit | Equipment Name | Brand Model | Quantity | | ------- | ------- | ------- | ------- | | ------- | | | | | 1 | Unit | Fully Automatic Machining Line for Motor Rotors | Mid car | 1 | | | 2 | 2 Unit | Fully Automatic Machining Line for Motor Rotors | Mid car | 1 | | | 3 | 5 Unit | Vertical Turning and Milling Composite| [Oil engine KV-600BE+C](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E6%B2%B9%E6%9C%BA+KV%E2%80%91600BE%2BC&zhida_source=entity)|2 | | | | Horizontal machining center | Neway HM6380TD | 1 | | 4 | 6 units | Vertical turning and milling composite | Oil machine KV-500BE+C | 2 | | 5 | 7 units | Horizontal CNC turret lathe | Neway 502T | 4 | | 6 | 8 units | Horizontal CNC turret lathe | Neway 634T | 1 | | | | | Horizontal CNC turret lathe| [Chengtai GA3300M](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E7%A8%8B%E6%B3%B0+GA3300M&zhida_source=entity)|Unit 3 | | 7 | 9 | Vertical turning and milling composite | Oil machine KV-600BE+C | | | | Vertical and horizontal[Composite machining center](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E5%A4%8D%E5%90%88%E5%8A%A0%E5%B7%A5%E4%B8%AD%E5%BF%83&zhida_source=entity) | [Da Tian VHRW630 Pro](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E5%A4%A7%E5%A4%A9+VHRW630+Pro&zhida_source=entity)|1 | | 8 | 10 Unit | Horizontal CNC turret lathe | Neway 502T | 2 | | | Horizontal CNC turret lathe | Neway 634T | 2 | | 9 | 11 Unit | Vertical turning and milling composite | Oil machine KV-600BE+C | 1 | | | Vertical and horizontal composite machining center | Da Tian VHRW1000 Pro | 1 | | | | Vertical turning and milling composite | Oil machine KV-1000ATC+C | 1 | | 10 | 13/14 Unit | Milling machine | D70X800 | 1 | | | | | | | CNC lathes | CA6150, CAK5085, CA6140, CD6150A | Total 7 units | | | | | | Vertical lathe | FLV-L855, VMC-850L | Total of 3 | | | | Grinding machines | M1320X750, M1320X1500 | Total of 3 | | 11 | 15 units | Milling machine | D200X2000 | | | | CNC lathes | CAK50135, CAK50186, CW6163C, CW6180 | Total of 6 | | | Vertical lathe | XK-2050 | | | | | Grinding machine | MKA1332X1500, MKA1332X1000 | Total of 2 | | | Hydraulic press | Y71-200T, Y71-315T | Total of 2| |
| --- |
**1 Project Requirements**
1. **Device Data Acquisition**: Collection[CRRC rotor assembly line](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E4%B8%AD%E8%BD%A6%E8%BD%AC%E5%AD%90%E6%B5%81%E6%B0%B4%E7%BA%BF&zhida_source=entity)Oil locomotive milling compound, Neway, Chengtai, Datian, ordinary CNC lathe, milling machine, grinder, hydraulic press; Distinguish between high-end CNC equipment, domestic ordinary CNC, old ordinary machine tools, and PLC controlled assembly line equipment.
![图片](https://picx.zhimg.com/v2-25e49a03fc9cfb0824319e9743ac592b_1440w.jpg)
1. **Collect data items**
* Equipment status: power on, standby, running, fault alarm, shutdown;
* Production data: processing count, program number, cycle time;
* Process data: spindle speed, feed rate, alarm code, alarm text;
* Production line: production line rhythm, workstation status, output, fault codes;
* Hydraulic press: pressure, holding time, fault signal.
1. **Docking with MES system**: Normalize data collection IoT to Protocol, support MQTT[OPC UA](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=OPC+UA&zhida_source=entity)、HTTP-JSON、[ModbusTCP](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=ModbusTCP&zhida_source=entity) Multiple outputs, push standardized equipment data to MES, MES can read equipment Real-time data, event alarms, production volume, support work order binding, OEE calculation, and production traceability.
2. **Workshop network adaptation**Strong electromagnetic interference in industrial sites, supporting network disconnection caching, breakpoint retransmission, automatic network recovery to supplement historical data, without losing alarms and production events.
3. **Does not affect the production of existing equipment**The collection process is read-only, does not write machine parameters, and does not interfere with the original processing logic of the equipment.
**Overall architecture (three-tier architecture)**
**Device layer → Edge collection layer (Shanghai DAQ-IoT) → IT business layer (MES system)**
1. **device layer**CRRC rotor assembly line PLC, various CNC machine tools, milling machines, grinding machines, hydraulic presses; The interface includes Ethernet port, RS485/RS232 serial port, PLC, DI/DO switch signal.
2. **Edge Collection Layer (Gateway)**
| Downward: Adapt to each device's private Protocol, CNC Protocol, PLC Protocol, Modbus RTU; Old devices without communication interfaces are connected to remote IO to collect switch signals. Edge side capability: Protocol parsing Data Cleaning、 Filtering, event triggering, local caching, network interruption and continuation, OEE edge precomputing. Up: Output standardized OPC UA, MQTT (JSON), HTTP POST, Modbus TCP, and interface with MES servers. |
| --- |
1. **business layer**The MES system receives standardized equipment data, completes work order management, equipment monitoring, production reporting, and quality traceability.
**Data flow: on-site equipment → Shanghai data acquisition edge Gateway → workshop LAN → MES server**
**3 Implementation Plan for Equipment Classification Collection**
**3.1 CRRC Motor Rotor Fully Automatic Processing Line (1 Unit, 2 Units, 2 Sets in Total)**
The assembly line uses PLC as the control core and integrates multiple workstations, servo, and detection modules internally.
* Communication interface: PLC Ethernet/RS485;
* Collection method: Shanghai Shucai Gateway has a built-in PLC driver that directly reads PLC registers;
* Collection content: production line operation/shutdown/fault status, workstation working status, rhythm, product counting, fault codes, alarm information;
* Output: Standardized JSON events, actively push alarm events to MES when faults occur.
**3.2 High end CNC equipment: oil machine vertical turning and milling composite, Neway horizontal machining center, Neway lathe, Chengtai lathe, Datian vertical and horizontal composite center**
| Oil engine, Neway, Chengtai, and Datian equipment are equipped with mainstream CNC systems (Fanuc/Siemens/New Generation) and have Ethernet communication ports. |
| --- |
* Acquisition method: Gateway CNC dedicated driver acquisition,**Read only collection, no need to modify the original parameters of the machine tool**；
* Retrieve fields: device status, NC program number, spindle speed, feed rate, machining cycle time, output count, all alarm codes+alarm text, tool information;
* Deployment: Gateway is connected to the machine tool network port via Ethernet; OneGatewaycan support the aggregation and collection of multiple machine tools.
**3.3 Milling machine, vertical machining (FLV-L855/VMC-850L/XK-2050)**
There are two situations:
1. CNC system with mesh port: CNC Protocol direct procurement;
2. The old milling machine has no network port: it uses RS485 Modbus or an external IO module to collect signals for operation, faults, and processing completion.
**3.4 Ordinary CNC lathes (CA6150, CAK series, CW series), grinders**
Some old machine tools do not have open Ethernet interfaces.
* Communication port: Modbus RTU for collecting numerical control system;
* No communication interface: Shanghai DAQ-IoT network remote IO module, collecting data**Operation, start, stop, malfunction, processing completion switch signal**Perform yield counting statistics on the edge Gateway;
| Limitation: IO acquisition cannot obtain internal process parameters such as NC program and spindle speed, only statistics on status and output. |
| --- |
**3.5 Hydraulic press Y71-200T/Y71-315T**
Equipment PLC control, supporting RS485 Modbus RTU; Gateway reads pressure values, holds pressure, fault signals, and cycle counts.
**4 Shanghai DAQ-IoT Network Hardware Selection**
| Device Type | Recommended Products | Explanation |
| --- | --- | --- |
| CNC equipment aggregation Gateway | DAQ-GP-GW4G Industrial Edge Gateway | 2-channel Ethernet, 4-channel RS485/232; Support concurrent acquisition of multiple Protocol for CNC and PLC; Installation of guide rails; Support local SD card caching of disconnected data, suitable for aggregating multiple devices within a unit |
| Old device IO acquisition module | SC‑IO‑16DI‑8DO | Switching acquisition module, RS485 connected to Gateway, for collecting status signals of old lathes and grinders without communication |
**Shanghai DAQ-IoTEdge Gateway Key features:**
1. Southbound Drive Library: Supports Siemens FANUC、 New generation, Kane Emperor, Guangshu; Support Siemens, Mitsubishi PLC, Modbus RTU/TCP;
2. Edge Computing: Status judgment, production statistics, alarm event triggering, data deduplication;
3. Cache: Local cache on SD card, data is not lost after network disconnection, and MES is automatically replenished upon network recovery;
4. Isolation: Optoelectronic isolation serial port, resistant to electromagnetic interference during the start stop of workshop motors;
5. WEB configuration page, browser configuration device, no need for professional software.
**5 MES system docking solutions (four interfaces, selected as needed)**
Gateway completes the unification of heterogeneous devices Protocol, outputs standardized data externally, and MES selects any interface for docking,**MES does not need to handle various types of proprietary machine tools Protocol**。
**Plan A: MQTT Protocol (recommended, event Real-time push)**
* Format JSON, actively push alarm events and production completion events;
* Gateway serves as an MQTT client, connecting to the workshop's internal MQTT server. MES subscribes to topics to obtain device data;  
  Example JSON output:
| Json {"DeviceId": "U5-01", "DeviceName": "Unit 5 Oil Locomotive Milling Composite No.1", "status": "running", "program": "O0012", "spindleSpeed": 1200, "alarmCode": "1001", "alarmText": "Spindle Overload", "count": 128, "timestamp": "2026-09-08T14:10:22"} |
| --- |
**Option B: OPC UA**
Gateway Built in OPC UA Server, MES serves as the OPC UA client to read all device locations; Suitable for traditional SCADA/MES systems and standardized industrial interfaces.
**Solution C: HTTP-POST Active Reporting**
Gateway Event triggering/periodic reporting, using JSON POST to call the REST interface provided by MES; Suitable for MES to provide HTTP receiving interface scenarios.
**Solution D: Modbus TCP Server**
Gateway Maps all device data to Modbus TCP registers, which MES polls to read; Suitable for old MES systems that only support Modbus.
| Data Acquisition Frequency configuration: |
| --- |
* Alarm event:**Event triggers immediate reporting**；
* Equipment status: 500ms~2s;
* Ordinary process parameters: 2-5 seconds;
* Old IO acquisition device: 5s.
**6 Network Planning**
1. Workshop equipment network and office MES network**Network isolation**， Gateway Dual network ports: WAN connects to the machine tool equipment network segment, LAN connects to the MES intranet network segment, isolates the industrial equipment network, ensures security, and prohibits machine tools from directly accessing the office network.
2. All Gateway guide rails are installed in the workshop unit electrical cabinet, powered by 24VDC.
3. Wiring: Shielded twisted pair cables are used for serial port cables, and industrial shielded Ethernet cables are used for Ethernet.
**7 Implementation steps for collection**
1. **crime scene investigation**Confirm the CNC system model, available communication interfaces, and PLC model for each device; Mark old and non interface devices and confirm the DI signal points.
2. **Hardware Deployment**Gateway, IO module installation and wiring; Configure IP and connect to the network.
3. **Gateway Configuration and Debugging**Add devices on the web page, select the corresponding Protocol, configure the collection points, and debug the collected data.
4. **Docking and debugging**Docking MES interface and joint debugging; Verify the correctness of status, counting, and alarm upload.
5. **simulated test**Simulate equipment startup, operation, malfunction, and shutdown, verify MES receiving events, and test cache retransmission function when disconnected from the network.
6. **Trial operation for 7 days**Observe data stability and optimize collection parameters; Deliver documents.
7. Delivery output: Point table, Gateway configuration manual, interface document, deployment topology diagram.
**8 Risks and Responses**
| risk point | countermeasures |
| --- | --- |
| Old lathe grinder without communication port | Using IO modules to collect switch values and clarify boundaries: unable to obtain internal process parameters |
| High electromagnetic interference in the workshop | Use shielded cables, Gateway optoelectronic isolation interface, grounding specifications |
| Unstable MES interface, network interruption | Gateway Local SD card cache, network recovery automatically updates historical events without data loss |
| Collecting interference equipment for processing | All read-only access devices, without writing any parameters; Offline testing and verification before going online |
| Differences among multiple models of CNC systems Protocol | On site testing, adapted drives for oil engines, Neway, Datian, and Chengtai on site |
**9 List of deliverables**
1. Topology diagram of equipment data acquisition for Taicang Phase III plant
2. List of All Equipment Collection Points (Equipment ID, Collection Fields, Data Types)
3. Gateway Configuration Document
4. MES Interface Document MQTT/OPCUA/HTTP JSON
5. Implementation test report, O&M documentation
**10 Expansion Capability**
TheGatewayplatform supports post expansion:
1. Subsequent new equipment can be directly added to the Gateway configuration without the need to modify the existing MES docking;
2. Scalable local kanban, workshop large screen display equipment OEE[utilization rate](https://zhida.zhihu.com/search?content_id=283148207&content_type=Article&match_order=1&q=%E7%A8%BC%E5%8A%A8%E7%8E%87&zhida_source=entity)；
3. Support integration with third-party platforms and remote O&M Gateway.