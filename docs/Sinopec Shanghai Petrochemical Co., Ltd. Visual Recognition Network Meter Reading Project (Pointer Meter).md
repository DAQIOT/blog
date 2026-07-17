<https://zhuanlan.zhihu.com/p/1929598515060925291>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
# 1**Project background and requirements**
## **1.1 Implementation location:**
The project is located at[Sinopec Shanghai Petrochemical Co., Ltd](https://zhida.zhihu.com/search?content_id=260533072&content_type=Article&match_order=1&q=%E4%B8%AD%E5%9B%BD%E7%9F%B3%E5%8C%96%E4%B8%8A%E6%B5%B7%E7%9F%B3%E6%B2%B9%E5%8C%96%E5%B7%A5%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)Production line: 1500 ton carbon fiber device spinning machine lines 1-4.
## **1.2 Project Background and Requirements:**
There are difficulties in usingData Acquisitionas a supporting mechanical instrument for the workshop production line. For the mechanical pressure gaugeData Acquisition, the instrument does not have a specific external communication interface, and the corresponding environment is corrosive, making construction difficult. Need to implement Real-time Data Acquisition to achieve effective monitoring of production line data indicators. Based on the project background and implementation difficulty, as the supplier of products and supporting solutions, we will cooperate with the implementation party（[Changjiang Institute](https://zhida.zhihu.com/search?content_id=260533072&content_type=Article&match_order=1&q=%E9%95%BF%E6%B1%9F%E9%99%A2&zhida_source=entity)）Customize a wireless timed camera image recognition solution to collect and record the values of pointer pressure gauges. The camera can read meters through image analysis, and can analyze and trace historical data. The internal network environment is required to implement Data Acquisition and transmission.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/t6n1fmozhyx00rm318vf.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/uevgcf6px6o0q7f53fx0.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5ggrm5n6g5i2w83sg5fo.jpg)
# II**Technical parameters and implementation plan**
## **2.1 Technical methods and routes:**
For the pointer meter of this intelligent meter reading, as well as factors such as the detection environment, it is proposed to use camera photography, wireless data transmission, and visual recognition to read, store, and analyze pointer meter data; Use one or two cameras to capture a row of 5 tables.
## **2.2 Implementation of Hardware product and implementation technical solution**
Hardware product, as required, needs to be implemented in an internal network environment, using our company's matching timed camera（[SC-GP-CAM](https://zhida.zhihu.com/search?content_id=260533072&content_type=Article&match_order=1&q=SC-GP-CAM&zhida_source=entity)）POE power supply version enables signal power supply to share the same network cable, reducing the complexity of construction wiring. Considering the on-site corrosion situation, Changjiang Institute has customized a protective shell for the product.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/1lx3a4ancyboxomtf1fx.jpg)
Technical Implementation Plan
## **2.3 Technical indicators:**
(1) The recognition accuracy is ≥ 99.5% while ensuring that the dial is free from dirt, water mist, glass breakage, etc; The photos taken must be clear, with instrument scales and numbers clearly distinguishable;
(2) Meter reading frequency ≤ 1 minute/time, adjustable collection frequency;
(3) The stable operation cycle of the system is ≥ 60 days; The single fault handling time is less than 24 hours, and the downtime rate caused by software problems is less than 1% (Hardware depending on the situation);
(4) Data storage time ≥ 6 months;
(5) Protection level [IP65](https://zhida.zhihu.com/search?content_id=260533072&content_type=Article&match_order=1&q=IP65&zhida_source=entity)The working environment temperature is -10 ° C to 50 ° C, and the humidity is 0 to 95% (non condensing);
# III**On site implementation and debugging**
According to the on-site instrument layout, a total of 4 sets of cameras will be provided, including 2 sets of cameras covering 2 pointer gauges and 2 sets of cameras covering 3 pointer gauges. There is a corrosive environment on site to ensure that the cameras are not corroded. Changjiang Institute will follow up with the actual environment and add heatstroke shields to the cameras (refer to the installation legend in the figure below)
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7g09nmkkmmjzj57gsacv.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/6t8sabdmq3kvq15ypcdd.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/u7tun6atux4ii8ibvyjs.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/f52pnhln3cbh69x3jfzn.jpg)
on-site installation
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/zqkdusw097scatu5rnvv.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/u14mbi7mawqf592a5vle.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ecpxdcx272jnopgrds38.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/exrb77bjtgvtffiyq0sy.jpg)
Docking and debugging
On site docking and debugging, cooperating with the implementation party to fine tune the camera position, cleaning the camera dial (ensuring dial clarity, etc.), and eliminating influencing factors one by one: removing dial labels, avoiding protective cover water mist, changing installation positions to avoid light source reflection, etc.
# 4**Implementation results**
According to the requirements of the project party, after the successful image recognition method Data Acquisition, the data is stored in the database and a one-to-one correspondence between the image path and the recognition result is achieved.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5bpy4r5teiy6bw51qzd6.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2b8a8y7oy32vmsvhd6vr.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/4qduu0tl13i3ddq01g6x.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/r5i8z1ku1lwid9nt8bmm.jpg)
Image storage path and corresponding recognition values