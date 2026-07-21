<https://zhuanlan.zhihu.com/p/1992887028329764618>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
System Introduction
### Overview
Features of the remote meter reading and billing system for data collection and IoT:
* Support meter reading for water and electricity meters Real-time, and display data for Real-time.
* Customize the area and divide the water and electricity meters reasonably according to the building and floor.
* Data curve, supporting the display of water and electricity meter usage curves.
* Data report, water and electricity meter daily, monthly, annual statistical report, query and export
* Cost control management, supporting water and electricity meter Real-time cost control, remote switch control, overdue tripping, etc.
* Multiple Protocol supports: DLT645-2007, DLT645-1997, Modbus RTU, Modbus TCP, CJT-188, etc.
* Ticket printing, supports custom ticket formats, and prints tickets.
* SMS notification, supports SMS reminder for insufficient balance.
* Support mini program to query payment.
* Support meter reading and statistics for peak and valley meters with multiple rates.
* Support function customization, homepage large screen customization.  
  Technical characteristics of remote meter reading and billing system for data acquisition and IoT:
* Operating environment: Windows 10 and above, Windows Server server is recommended.
* C/S architecture, supports online use.
* Use SQL Server 2012 or above for the database.
* Quick installation, easy to use, and rich interface display.
* Support API interfaces for third-party access to data.
### home page
The homepage is a data dashboard that provides an overview of the system. It can be configured to display different homepage functions, as shown in the following figure
[Kanban homepage]
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5jpfx097eyi09f0uqv27.jpg)
[Blank homepage]
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/vje0wmbqv1er6cs4mxta.jpg)
【 Equipment Monitoring Homepage - Special Customization 】
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/e3kftyij3oklojpitr6m.jpg)
## meter reading management
### electricity meter management
Meter management, Real-time View the online status of the meter and electrical parameter data (active energy, current, voltage, power, etc.)
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/k6szea57f0slrndosqvx.jpg)
View data curve
Select a certain instrument to view the Real-time data and data curve of the table.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/d90mm7ebf9qle0kt34gi.jpg)
[Instrument file]
Add/modify the name, communication address, region, and port of the instrument,Protocol， Parameters such as magnification and base.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/l7mv9p3p36d1ptho9iwh.jpg)
### Water meter management
Water meter management, similar to electricity meter management function, maintains water meter files and displays water meter status and data.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ejij4twcv9a14i18qld4.jpg)
Statistical data and usage curve of water meters
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/clngkn4r3w0d4kcz0iv6.jpg)
### Regional Management
Regional management, maintaining project building floor and other regional information. Provide basic information for water and electricity meters.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/axjapavd03dc3wzas2np.jpg)
### Port management
The port management of the collector access system supports three types of access:
1. Ordinary serial port: serial port name, baud rate, parity, and other parameters
2. Network port: Suitable for non heartbeat versions of the collector, with one port corresponding to one collection serial port.
3. Heartbeat packet: suitable for collection with heartbeats. The system can configure the heartbeat packet to be consistent with the heartbeat packet of the collector, which is used to identify the link
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/pxmkr74v6plhncg90oom.jpg)
## Payment service
### Electricity meter payment
Electricity meter cost control management, Real-time meter reading and billing, overdue opening and closing, supports remote opening and closing operations, sets cost control modes and modifies parameters.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ci8kdoznnyd08i5zhxx4.jpg)
Remote recharge
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/3gx4usk17nd1ib8kq4pn.jpg)
Detailed payment information
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/c3hehvbeh5py50t5mw6w.jpg)
### Water meter payment
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/wsqoo7a2irg40g7l0caf.jpg)
### User Profile
Manage and maintain user profiles
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/d638knpq1eglkbgsrdvl.jpg)
### Recharge record
Record each recharge record
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/mmwpt3tz3e6q1fh3r6fk.jpg)
[Bill Printing]
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ab23531p3gp4h1jnr4tf.jpg)
[Bill Format Setting]
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/q871o4zez9pfogjkxrd1.jpg)
### Deduction Record
Daily deduction records are formed, and each deduction is clear and explicit.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dk6axdb5f4n8qccyu6bq.jpg)
### Unit price management
Maintain the water and electricity prices of the management system, and customize multiple prices to be associated and bound with water and electricity meters.
Supports both single price and multi rate pricing.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2i763jg7hf4qh21khh23.jpg)
### Notification message
View SMS sending records and status
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/yfvb27ke7iealhhnc5wt.jpg)
## Payment business process
### Add user
Add the corresponding user information file to the user profile.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/whh0fgnlagk20ih0n6ia.jpg)
### Account opening usage
Taking the water meter as an example, select the water meter, click on "Account Opening", select the user of the instrument, enter the starting usage information and purchase amount, and save the account opening. Immediately after opening an account, Real-time calculate the remaining amount of the water meter
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/1x4frhmyhjq9k4rziios.jpg)
### Recharge usage
Select the water meter for account opening, click recharge to recharge and pay, and support negative recharge.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/99vrzc8vmds41vz6rnnh.jpg)
### Refund and account closure
The merchant terminates the lease and cancels the account to form a refund record. Once the refund is confirmed, it can be processed.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dfvvwwpyx5tveogr4p8i.jpg)
## query statistics
### electricity consumption statistics
Select the start and end dates to track the usage of the electricity meter during the time period.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/pmy6fuwc4d4vg78xbly0.jpg)
Year, month, day, and hour reports [configurable to display different reports]
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ps546xk1zqonkmz3xgq7.jpg)
### Water usage statistics
Select the start and end dates to track the usage of the water meter during the specified time period.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/s8ed2wplszrs8urslfw1.jpg)
### Operation log
System operation log, recording the operation records of each user in the system.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/x4tg8st3b43gn7cgbmsn.jpg)
### alert log
If a change in the status of the instrument switch is detected, corresponding alarms will be recorded
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/n6s08m2aunn1tof26sdj.jpg)
## System Settings
### system parameters
Set system parameters, name, homepage, server IP, port, SMS sending parameters, etc
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/rf4664eqcv24s85hka1r.jpg)
### Operator maintenance
Add management system usage account
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/std3eflyeh1a3b9t4i2r.jpg)