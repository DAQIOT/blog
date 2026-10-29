<https://zhuanlan.zhihu.com/p/2058966102416298779>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## 1、 Industry common pain point: Traditional [DCS](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=DCS&zhida_source=entity) Shortcomings of the central control inspection mode
Currently, there are a large number of supporting facilities available[Environmental Protection Online](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E7%8E%AF%E4%BF%9D%E5%9C%A8%E7%BA%BF&zhida_source=entity)The DCS system for monitoring is connected to the bottom layer[Siemens PLC](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E8%A5%BF%E9%97%A8%E5%AD%90+PLC&zhida_source=entity) Collecting fans, temperature, water quality, and fault locations, but there are common deficiencies in the alarm mechanism:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9etezrzsgpclh3j7orbk.jpg)
1. **Alarm relies on fixed-point monitoring, and abnormal detection lags behind** All fault and maintenance shutdown pop ups are only displayed on the central control screen, without mobile push notifications. When night shift personnel and no one is watching the screen during holidays, excessive exhaust gas and equipment shutdown can easily lead to environmental risks.
2. **Manual transmission of information is inefficient and lacks standardized records** After the production line is shut down, the central control personnel need to call each equipment, environmental protection, and process personnel one by one, and the communication takes 30-60 minutes. The notification process is not archived and cannot be traced and disposed of afterwards[link](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E9%93%BE%E8%B7%AF&zhida_source=entity)。
3. **The shutdown data is disconnected from the environmental monitoring data, and the ledger is not compliant** The start and end time of the shutdown and the cause of the malfunction rely on manual registration in Excel, and cannot be linked to the same period COD, NH3-N, and fan operation data; The environmental on-site inspection lacks complete closed-loop traceability records.
### Basic information of project production line
Landing scenarios: Coating workshop 1 #/2 # coating production line, printing exhaust gas RTO/RCO[Integrated monitoring of water environment](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E6%B0%B4%E7%8E%AF%E5%A2%83%E4%B8%80%E4%BD%93%E5%8C%96%E7%9B%91%E6%B5%8B&zhida_source=entity) bottom layer[data source](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E6%BA%90&zhida_source=entity)Siemens DB block PLC points (fan, fault signal, production line speed, water quality monitoring indicators) Original DCS capability: large cockpit screen[visualization](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E5%8F%AF%E8%A7%86%E5%8C%96&zhida_source=entity)Historical data storage for 3 months, three-level account permissions (super administrator/environmental specialist/ordinary operator)
### Core shutdown determination PLC logic (project general rules)
The system polls 4 key points and automatically distinguishes between two types of shutdown scenarios without the need for manual intervention:
1. **Planned maintenance shutdown** Exhaust gas fan DB2.DBX34.6=stop+smoke exhaust fan DB2.DBX35.1=stop+production line speed=0
2. **Sudden malfunction shutdown** Fault point DB1.DBX4.0=True (fault triggered)+production line speed=0
## 2、 Overall three-layer lightweight design[Architectural Design](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1&zhida_source=entity)
Overall adoption**DCS Data Acquisition layer → System backend[Logical layer](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E9%80%BB%E8%BE%91%E5%B1%82&zhida_source=entity)→ DingTalk API push layer**Three layer architecture, developed entirely based on DingTalk's native Webhook robot and API, without the need for additional deployment of third-party devices[Middleware](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E4%B8%AD%E9%97%B4%E4%BB%B6&zhida_source=entity)Adapt to the existing DCS system deployment environment.
### 2.1 DingTalk Enterprise Robot Grading Configuration (Multiple Security Protection)
Split three business groups according to job responsibilities, independently create custom robots, avoid interface leakage risks through triple verification, and adapt to the factory's intranet server environment:
table
| DingTalk Group | liaison personnel | Push content | Security protection configuration |
| --- | --- | --- | --- |
| 1# [coating](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=2&q=%E6%B6%82%E5%B1%82&zhida_source=entity)Equipment maintenance group | Equipment engineer, machine maintenance team | Fault shutdown emergency alarm | Triple verification of server IP whitelist, message keywords, and robot signing key |
| Environmental Control Work Group | Environmental Protection Specialist, Workshop Environmental Protection Manager | Maintenance shutdown, warning of excessive exhaust gas/water quality, and ledger reminder | Keyword interception: shutdown, abnormal exhaust gas, excessive water quality |
| [Production Management](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E7%94%9F%E4%BA%A7%E7%AE%A1%E7%90%86&zhida_source=entity)group | Workshop supervisor[Process Technician](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E5%B7%A5%E8%89%BA%E5%91%98&zhida_source=entity) | Daily shutdown summary report | Only keyword verification, no targeted @ personnel permission |
Robot configuration process: DingTalk group settings → Intelligent group assistant → Add custom robots, generate independent Webhook addresses and encryption keys, which can only be kept and entered into the backend by the system super administrator. Extra activation of Enterprise DingTalk[developer](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E5%BC%80%E5%8F%91%E8%80%85&zhida_source=entity)Permission, open single point @ designated personnel API capability, achieve accurate fault alarm to reach the on duty maintenance personnel, and avoid full staff screen flushing interference.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/c1bz3ysyl7v5e62pxxac.jpg)
### 2.2 Disassembly of DCS backend transformation module functions
Add to the existing system management menu**DingTalk Alarm Configuration submenu**Strict isolation of permissions: only super administrator admin can view, environmental protection officers and ordinary operators can only view historical alarm records, without webhooks or keys[Right to modify](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E4%BF%AE%E6%94%B9%E6%9D%83&zhida_source=entity)Limit, in compliance with enterprise system security standards. The four core functions of the module are:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/0c5f4wv48dteyl3tw4tf.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9adzotf0gfnkxarwxofh.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/hlakvckac1qmqsd6s7nq.jpg)
1. **PLC point reuse subscription** Reuse the original Siemens PLC acquisition program, continuously poll the 4 points required for shutdown determination, write the data to the original business database, and use the system's 3-month historical data storage rules without changing the underlying storage architecture.
2. **Shutdown logic automatically determines the engine** Built in two sets of shutdown judgment formulas, Real-time compares point status and automatically generates structured messages after meeting triggering conditions, including production line number, trigger PLC point, shutdown time, Real-time working condition, and direct link to DCS screen.
3. **Unified management of robot webhooks** The backend centrally inputs the webhook addresses, encryption keys, and trigger keywords for each group, supports single group push switches, and can start and stop corresponding alarm channels as needed.
4. **Automatic archiving of full alarm data** All shutdown messages pushed to DingTalk will be automatically stored in history[data table](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E8%A1%A8&zhida_source=entity)In the DCS [Data Query] module, shutdown records can be filtered and linked to the same period of exhaust gas and water quality curves to achieve one click traceability of environmental data.
### 2.3 Classification message push rules (avoiding screen flooding, distinguishing alarm levels)
follow[DingTalk Robot](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E9%92%89%E9%92%89%E6%9C%BA%E5%99%A8%E4%BA%BA&zhida_source=entity)20 current limiting regulations per minute for a single group, with automatic merging of alarms triggered continuously for a short period of time; Repeatedly triggering only the first push within 10 minutes of the same fault reduces message bombardment.
### (1) Fault shutdown | Emergency level alarm (sudden equipment malfunction)
markdown
```
【紧急告警：1#涂层故障停机】
停机类型：故障停机
触发点位：DB1.DBX4.0（设备故障信号触发）
产线线速度：0m/min
实时工况：废气风机DB2.DBX34.6、排烟风机DB2.DBX35.1实时状态
告警时间：YYYY-MM-DD HH:MM:SS
操作指引：点击链接直达DCS系统1#涂层废气大屏 http://39.164.129.5:10001/
@当班设备工程师
推送范围：设备维保群 + 环保管控群
```
### (2) Maintenance Shutdown | Regular Reminder (Planned Shutdown)
markdown
```
【提醒：1#涂层计划性保养停机】
停机类型：保养停机
触发点位：废气风机DB2.DBX34.6=停止、排烟风机DB2.DBX35.1=停止
产线线速度：0m/min
停机开始时间：YYYY-MM-DD HH:MM:SS
备注：保养期间废气处理设备停运，请环保专员持续关注厂区污水COD、NH3-N、PH指标
跳转查看水环境监测页面：http://39.164.129.5:10001/
推送范围：环保管控群 + 生产管理群（无定向@）
```
### (3) Daily scheduled shutdown and daily report expansion capability
At 08:00 every day, the system automatically calculates the data of the previous production line: the number of downtime due to faults, the total duration of maintenance downtime, and associated records of abnormal exhaust gas/water quality. The summary report is pushed to the production management group and supports one click export of Excel ledger.
## 3、 Project phased implementation process (can be directly reused for implementation scheduling)
### Stage 1: DingTalk Basic Configuration (1 working day)
Build three types of business groups, create custom robots, and configure webhooks, keys, and IP whitelists; DCS super administrator logs into the backend to open the alarm configuration menu and sends test messages to verify the connectivity of the push link.
### Stage 2: PLC point joint debugging+ [Logic development](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E9%80%BB%E8%BE%91%E5%BC%80%E5%8F%91&zhida_source=entity)(3 working days)
1. Connect 4 key points of Siemens DB block, debug Real-time collection, and ensure that the point data is completely synchronized with the start stop status of the on-site equipment;
2. Simulate manually setting the fault point and shutting down the fan[linear velocity](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=6&q=%E7%BA%BF%E9%80%9F%E5%BA%A6&zhida_source=entity)Zeroing, complete testing of message generation, DingTalk push, and the entire process of @ designated personnel;
3. Permission control implementation: Restrict the configuration permissions of ordinary roles, only open the alarm history viewing function, and avoid the risk of unauthorized tampering.
### Stage 3: On site trial operation and functional optimization (7 working days)
During the trial operation, manual phone notifications will be discontinued, and the entire process will rely on DingTalk to receive alarms, continuously recording the accuracy of alarm triggering and the timeliness of message arrival; Synchronize and optimize three core experiences:
1. Add a 10 minute repeated alarm blocking mechanism to prevent message flooding;
2. Automatic push of shutdown recovery reminder for production line resumption (line speed>0);
3. The alarm has a direct link to the built-in DCS page, and the monitoring curve of Real-time can be viewed with one click on the mobile end.
### Stage 4: Full scale online production
After a trial run with no abnormalities, DingTalk alarm push will be officially activated, and the DCS system operation manual will be updated synchronously. DingTalk alarm configuration, query, and complete operation details will be added.
## 4、 Ground testing effect and[business value](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E4%B8%9A%E5%8A%A1%E4%BB%B7%E5%80%BC&zhida_source=entity)
### 4.1 Equipment O&M significantly improves efficiency
The average response time for shutdown of coating production line 1 # has been shortened from 30-60 minutes for manual inspection and telephone notification**Within 5 seconds, DingTalk will reach the corresponding personnel in seconds**The arrival time of fault maintenance personnel has increased by 75%, and the monthly unplanned downtime has decreased by 18% year-on-year, effectively improving the production line utilization rate.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/k1fqg60i34zp8ymgiz2w.jpg)
### 4.2 Environmental control forms a complete closed loop
Maintenance shutdown automatically reminds environmental personnel to closely monitor wastewater and exhaust gas indicators, to prevent excessive exhaust gas leakage and control during equipment shutdown; DCS automatically archives shutdown records and monitoring data of water quality and waste gas during the same period. When conducting on-site environmental inspections, it can rely on DingTalk alarm logs and system historical data for one click traceability, fully meeting the compliance requirements of environmental ledger.
### 4.3 Automatic precipitation of production management data
Daily DingTalk shutdown report+system local archiving, automatically generating monthly shutdown statistics ledger, completely replacing manual Excel registration; Management personnel can export full shutdown data at any time for[Equipment failure rate](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E8%AE%BE%E5%A4%87%E6%95%85%E9%9A%9C%E7%8E%87&zhida_source=entity)Analyze and optimize production processes.
### 4.4 Implementation of System Permission Security Compliance
Using the original three-level account permission system, only super administrators can modify core configurations such as DingTalk robot keys and webhooks, while ordinary roles only have permission to view alarm records, which is in line with the factory's requirements《[System Security Management](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E7%B3%BB%E7%BB%9F%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86&zhida_source=entity)There is no risk of configuration leakage or unauthorized tampering in the standard.
## 5、 Summary of core advantages of the plan
1. **Lightweight transformation, zero investment inHardware** Reuse existing DCS and PLC acquisition programs without the need to add Middleware or servers. Only add an alarm configuration module in the background, with a short development cycle and low renovation costs.
2. **Graded and precise notification, responsibility assigned to individuals** Fault shutdown targeting @ on duty engineer, maintenance shutdown synchronized push to environmental protection and production positions, distinguish between emergency/ordinary alarms, and ensure that information does not disturb the public or miss reporting.
3. **Multi layer security protection, interface leakage prevention** DingTalk robot signing, keyword verification, server IP whitelist[Triple protection](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E4%B8%89%E9%87%8D%E9%98%B2%E6%8A%A4&zhida_source=entity)， Webhook keys are kept by dedicated personnel to prevent unauthorized external calls to the interface.
4. **Data full link closed-loop, adapted to environmental compliance** Alarm automatic archiving, shutdown data linkage water quality and exhaust gas monitoring curve, complete ledger traceable, avoiding environmental inspection non-compliance risks.
5. **Compatible with existing[System Architecture](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84&zhida_source=entity)Low learning cost** Without changing the original PLC point collection logic, three-level account permissions, and 3-month historical data storage rules, O&M personnel do not need to re familiarize themselves with system operations.
## 6、 Applicable industry scenarios for the plan
This DCS docking nail alarm solution can be quickly replicated to various industrial digital scenarios:
1. Painting, printing[new material](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E6%96%B0%E6%9D%90%E6%96%99&zhida_source=entity)Industry RCO/RTO waste gas treatment production line;
2. Industrial park pollution[water treatment](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E6%B0%B4%E5%A4%84%E7%90%86&zhida_source=entity)Factory water environment integration online[monitoring system](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E7%9B%91%E6%B5%8B%E7%B3%BB%E7%BB%9F&zhida_source=entity)；
3. Lithium batteries, pharmaceuticals[fine chemicals](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E7%B2%BE%E7%BB%86%E5%8C%96%E5%B7%A5&zhida_source=entity)Workshop PLC/DCS central control monitoring platform;
4. Various 24-hour unmanned central control systems and manufacturing production lines that require remote alarms at night.
## 7、 Summarize and expand ideas
The traditional industrial control system relies on manual screen monitoring, which is no longer suitable for the current digital and environmental compliance control needs of factories. rely on[DingTalk Webhook Robot](https://zhida.zhihu.com/search?content_id=278754928&content_type=Article&match_order=1&q=%E9%92%89%E9%92%89+Webhook+%E6%9C%BA%E5%99%A8%E4%BA%BA&zhida_source=entity)Connect the DCS environmental monitoring system to achieve extremely low renovation costs**Proactive push of equipment abnormalities, precise personnel access, automatic archiving of ledgers, and closed-loop environmental data**This is a high-quality implementation path for low-cost digital upgrading of small and medium-sized manufacturing enterprises, which not only solves the pain point of response lag inO&M, but also meets the mandatory requirements of environmental supervision ledger.
Based on this solution, more value-added capabilities can be expanded, such as automatic generation of DingTalk work orders, graded voice call notifications for alarms, linkage of DingTalk messages with large screen alarms, and centralized alarm aggregation across multiple factory areas, to meet the personalized control needs of factories of different scales.
What alarm method does your factory currently use for its DCS/PLC monitoring system? Is there a problem of night shift underreporting and difficulty in tracing records? Welcome to the comment section to exchange experiences in industrial monitoring and renovation.