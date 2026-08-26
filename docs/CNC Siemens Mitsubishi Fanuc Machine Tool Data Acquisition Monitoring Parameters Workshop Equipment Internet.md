<https://zhuanlan.zhihu.com/p/1951318631683195406>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As an industrial IoT[Data Acquisition](https://zhida.zhihu.com/search?content_id=263132655&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86&zhida_source=entity)solution is a professional provider, and Daq iot, the editor of IoT, would like to introduce the following content here. We sincerely welcome everyone to discuss and exchange ideas.
As a professional provider of IoT data collection solutions, daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/6t2f726ddwg2dtfpca1x.jpg)
Point code [point name](https://zhida.zhihu.com/search?content_id=263132655&content_type=Article&match_order=1&q=%E7%82%B9%E4%BD%8D%E5%90%8D%E7%A7%B0&zhida_source=entity) Model label data type [Position length](https://zhida.zhihu.com/search?content_id=263132655&content_type=Article&match_order=1&q=%E5%8F%96%E4%BD%8D%E9%95%BF%E5%BA%A6&zhida_source=entity)(Fill in when the data type is not boolean) Negative allowed [parameter type](https://zhida.zhihu.com/search?content_id=263132655&content_type=Article&match_order=1&q=%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B&zhida_source=entity) Read and write type address code [endianness](https://zhida.zhihu.com/search?content_id=263132655&content_type=Article&match_order=1&q=%E5%AD%97%E8%8A%82%E5%BA%8F&zhida_source=entity) point description
A1 status code int 16 N collection point read-only Status Order\_AB
A2 production formula int 16 N collection point read-only Count Order\_AB
A3 OP mode recipe string 16 N collection point read-only Opmode Order\_AB
A4 Alarm Code Recipe int 16 N Collection Point Read Only Alarm Message Order\_AB
A5 alarm string recipe string 16 N collection point read-only Alarm, Message, Str, Order, AB
A6 cycle time formula float 16 Y collection point read-only CycleTime Order\_AB
A7 main program serial number formula string 16 N collection point read-only MainProgramNumOrder\_AB
A8 feed rate formula float 16 Y collection point read-only FeedSpeed Order\_AB
A9 spindle speed formula float 16 Y acquisition point read-only SpindleSpeed Order\_AB
A10 feed rate formula float 16 Y collection point read-only FeedOverride Order\_AB
A11 spindle override formula float 16 Y acquisition point read-only SpindleOverride Order\_AB
A12 tool number float ToolNo Order\_AB
conn\_name point\_name address extend point\_type das\_data\_type sys\_data\_type fb fk machine\_name machine\_id machine\_domain lua\_script lua\_exec\_interval tag
M80 MachX MachX das order\_ab float32 0 1 M80 0 M80 5 Mechanical coordinates X
M80 MachY MachY das order\_ab float32 0 1 M80 0 M80 5 mechanical coordinates Y
M80 MachZ MachZ das order\_ab float32 0 1 M80 0 M80 5 Mechanical coordinates Z
M80 WorkX WorkX das order\_ab float32 0 1 M80 0 M80 5 Workpiece coordinates X
M80 WorkY WorkY das order\_ab float32 0 1 M80 0 M80 5 Workpiece coordinates Y
M80 WorkZ WorkZ das order\_ab float32 0 1 M80 0 M80 5 Workpiece coordinates Z
M80 CurX CurX das order\_ab float32 0 1 M80 0 M80 5 Current coordinate X
M80 CurY CurY das order\_ab float32 0 1 M80 0 M80 5 Current coordinate Y
M80 CurZ CurZ das order\_ab float32 0 1 M80 0 M80 5 Current coordinate Z
M80 ResX ResX das order\_ab float32 0 1 M80 0 M80 5 Remaining distance X
M80 ResY ResY das order\_ab float32 0 1 M80 0 M80 5 Remaining distance Y
M80 ResZ ResZ das order\_ab float32 0 1 M80 0 M80 5 Remaining distance Z
M80 PowerOnTime PowerOnTime das order\_ab uint32 0 1 M80 0 M80 5 boot time
M80 SpindleSpeed SpindleSpeed das order\_ab uint32 0 1 M80 0 M80 5 Spindle Speed
M80 SpindleTemp SpindleTemp das order\_ab int32 0 1 M80 0 M80 5 Spindle Temperature
M80 SpindleLoad SpindleLoad das order\_ab int32 0 1 M80 0 M80 5 Read spindle load
M80 SpindleI SpindleI das order\_ab int32 0 1 M80 0 M80 5 Spindle current
M80 Status das order\_ab int16 0 1 M80 0 M80 5 Status (1 Running 2 Alarm 5 Idle 7 Shutdown)
M80 Count Count das order\_ab uint32 0 1 M80 0 M80 5 Production
M80 RunProgramName RunProgramName das order\_ab string 0 1 M80 0 M80 5 Running program number
M80 Alarm Message das order\_ab string 0 1 M80 0 M80 5 Current alarm information
M80 SystemID SystemID das order\_ab string 0 1 M80 0 M80 5 System ID
M80 SystemName SystemName das order\_ab string 0 1 M80 0 M80 5 System Name
M80 CycleTime CycleTime das order\_ab string 0 1 M80 0 M80 5 Cycle time
M80 MainProgramName MainProgramName das order\_ab string 0 1 M80 0 M80 5 Main Program Number
M80 Toollife Toollife das order\_ab string 0 1 M80 0 M80 5 Tool life
M80 ToolCount ToolCount das order\_ab string 0 1 M80 0 M80 5 Tool quantity
M80 FeedSpeed FeedSpeed das order\_ab string 0 1 M80 0 M80 5 Feed Speed
M80 ServoSpindleLoad ServoSpindleLoad das order\_ab string 0 1 M80 0 M80 5 servo spindle load
M80 FeedOverride FeedOverride das order\_ab string 0 1 M80 0 M80 5 Feed rate
M80 SpindleOverride SpindleOverride das order\_ab string 0 1 M80 0 M80 5 Spindle magnification
M80 RapidOverride RapidOverride das order\_ab string 0 1 M80 0 M80 5 Rapid multiplier
M80 ToolNo ToolNo das order\_ab string 0 1 M80 0 M80 5 Tool number
conn\_name point\_name address extend point\_type das\_data\_type sys\_data\_type fb fk machine\_name machine\_id machine\_domain lua\_script lua\_exec\_interval tag
TNC016 Status das order\_ab uint64 0 1 TNC016 0 cAram 5 Status
TNC016 FeedSpeed FeedSpeed das order\_ab uint64 0 1 TNC016 0 cAram 5 Feed Speed
TNC016 SpindleSpeed SpindleSpeed das order\_ab uint64 0 1 TNC016 0 cAram 5 Spindle Speed
TNC016 SpindleLoad SpindleLoad das order\_ab uint64 0 1 TNC016 0 cAram 5 Spindle Load
TNC016 FeedOverride FeedOverride das order\_ab uint64 0 1 TNC016 0 cAram 5 Feed rate
TNC016 SpindleOverride SpindleOverride das order\_ab uint64 0 1 TNC016 0 cParam 5 Spindle Overcontrol
TNC016 Count das order\_ab uint64 0 1 TNC016 0 cAram 5 Production
TNC016 Alarm Code Alarm Code das order\_ab uint64 0 1 TNC016 0 cAram 5 Alarm Code
TNC016 Alarm Message Alarm Message das order\_ab string 0 1 TNC016 0 cAram 5 Alarm Information
TNC016 ToolNo ToolNo das order\_ab uint64 0 1 TNC016 0 cAram 5 Tool Number
TNC016 PowerOnTime PowerOnTime das order\_ab uint64 0 1 TNC016 0 cAram 5 boot time
TNC016 RuningTime RuningTime das order\_ab uint64 0 1 TNC016 0 cAram 5 Run Time
TNC016 Cutting Time Cutting Time das order\_ab uint64 0 1 TNC016 0 cAram 5 Cutting Time
TNC016 CycleTime CycleTime das order\_ab uint64 0 1 TNC016 0 cPram 5 cycle time
TNC016 RunProgramNum RunProgramNum das order\_ab uint64 0 1 TNC016 0 cAram 5 Running Program Number
TNC016 MainProgramNum MainProgramNum das order\_ab uint64 0 1 TNC016 0 cParam 5 Main program number
TNC016 Toollife Toollife das order\_ab uint64 0 1 TNC016 0 cAram 5 Tool Life
TNC016 ToolCount ToolCount das order\_ab uint64 0 1 TNC016 0 cAram 5 Tool Quantity