---
title: Printer Setup
layout: single
permalink: /student_guide/printerSetup
toc: true
toc_label: " Table of Contents"
toc_sticky: true
sidebar:
    nav: student_guide
---


Note 1: You must connect to the CSIM network.

Note 2: The shared URL is `\\banyan` but most of the time it can not be resolved. Use `\\192.41.170.5`

## For Linux/Ubuntu

This is tested to work with 18.04, 19.04, and 20.04

1.Install the missing packages.

```
sudo apt update
sudo apt upgrade
sudo apt install python3-smbc
sudo apt install smbclient 
```

2.Open `Settings>Printers` and click on `Additional Printer Settings...` button. The `Printers - localhost` should be opened, then click `+ Add` button.

![alt text](/assets/images/printer_setup/1.png)
![alt text](/assets/images/printer_setup/2.png)
![alt text](/assets/images/printer_setup/3.png)

3.Select `Devices > Network Printer > Find Network Printer > Windows Printer via SAMBA`.
4.Put `192.41.170.5/` and click `Browse...`. The `SMB Browser` window should be opened.
   
![alt text](/assets/images/printer_setup/4.png)
![alt text](/assets/images/printer_setup/5.png)

5.Select the printer according to the following list of printer name and its driver.
  - for printer `big PS` select `HP LaserJet 4300 Series Postscript`
  - for printer `magnum` select `Generic PostScript Printer Foomatic`
  - for printer `ricoh` select `Ricoh MP C2003 PXL` (newer PostScript driver is broken)
  
6.<s>For 20.04, the "Prompt user if authentication is required" is broken. Select "set authentication details now" and fill in your CSIM account.</s>

7.Click "Forward"
 
8.Find the driver according to the list given in the step 5

![alt text](/assets/images/printer_setup/6.png)

9.Config the option as you see appropriate. (Leave as is also work too).

![alt text](/assets/images/printer_setup/7.png)

10.For Ubuntu 20.04 with "Prompt user if authentication is required" option, to fix authentication not prompt problem, do the followings.

[quote](https://askubuntu.com/questions/830952/where-are-authentication-credentials-for-printer)
```
sudo service cups stop
sudo vim /etc/cups/printers.conf
```

The file contains a list of printer configurations. Find the printer you would like to fix the problem first.
Then, edit `AuthInfoRequirednone` to `AuthInfoRequired username,password`

![alt text](/assets/images/printer_setup/8.png)

```
sudo service cups start
```