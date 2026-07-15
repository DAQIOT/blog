<https://zhuanlan.zhihu.com/p/1929581087073502273>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
1**Project Background**
A certain electronics factory in Zhuhai, Guangdong needs to test the particle size and temperature and humidity of the production workshop. There is a network cable on site, and wired transmission is used to store the collected data locally for viewing.
II**Project Technical Proposal**
Due to the high requirements of the customer for particle size range and the need for wired transmission, our company's network port high-precision cleanliness detector is used for this project（[DAQ-GP-CLXX-H series](https://zhida.zhihu.com/search?content_id=260528731&content_type=Article&match_order=1&q=DAQ-GP-CLXX-H%E7%B3%BB%E5%88%97&zhida_source=entity)， modbusProtocol， Standard temperature and humidity Sensor, optional pressure Sensor), paired with deployment on local servers[General industrial data acquisition software](https://zhida.zhihu.com/search?content_id=260528731&content_type=Article&match_order=1&q=%E9%80%9A%E7%94%A8%E5%B7%A5%E4%B8%9A%E9%87%87%E9%9B%86%E8%BD%AF%E4%BB%B6&zhida_source=entity)Store the data in the database according to the frequency of collection required by the customer.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/egjjrcicsd2mtvua16ba.jpg)
Network version high-precision cleanliness tester
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/j5gao61rjz1sza5ot5l3.jpg)
General industrial data acquisition software
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5x2y20ocu3xt8d6hyr0e.jpg)
Technical solution topology diagram
Technical parameters of high-precision cleanliness tester:
Particle detection parameters:
1. Particle detection range: 0.3-10 μ m
2. Resolution: 1pcs/m ³
3. Particle range: 10000000 particles/m ³
4. Flow rate: 28.3L/min
5. Error: ≤± 30%
6. Repetitive error: ≤± 10%
7. Self purification time: ≤ 5 minutes
8. Calibration specification: JJF1190-2008,[GB/6167-2007](https://zhida.zhihu.com/search?content_id=260528731&content_type=Article&match_order=1&q=GB%2F6167-2007&zhida_source=entity)
Temperature and humidity parameters:
1. Interface type: 4-core aviation head
2. Range and accuracy:
Temperature range -20~60 ℃, temperature accuracy ± 0.3 ℃ (0~40 ℃), accuracy ± 0.5 ℃ for other temperature ranges:
Humidity range 0~100% RH humidity accuracy ± 3% RH (20~90%), accuracy ± 5% RH for other humidity ranges
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/205oi67j9z8rim0801zq.jpg)
Cleanliness tester point table information
III**Project Implementation Process**
1. Owners should first install cleanliness testing equipment at the required testing locations
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/saxpuurstprc73l44rim.jpg)
2. Provide a computer or local server capable of installing general industrial data acquisition software to ensure access to these two detectors, which will then be remotely installed and debugged by our company.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ux173rxwvrye6zhi1pht.jpg)
Modify the device IP to ensure that the collection software can access it
3. Remote configuration of general industrial data acquisition software
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/6wmvy2voh11sidxpp1uk.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/hmnqqf9igxdmrgqnmq2a.jpg)
Remote configuration of general industrial data acquisition software links and detection equipment
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/4rwauspb44v5pxi7kr3b.jpg)
Information collection of cleanliness testing equipment
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/66miywhn8akrusvqk6el.jpg)
Device information collection successful
Due to the owner's requirement for data confidentiality, the storage database interface will no longer be displayed.