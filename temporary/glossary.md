# CYO Genre 1: Glossary
List of useful terms surrounding the usage of Raspberry Pi single board computers.

## Part 1: General Terms
CPU Central processing unit 
(Basically the processor, primary component that runs everything on a computer)


DNS Domain Name System. 
A system or service which translates domain names to IP addresses, the only identifier understood by computers.

Ethernet 
A networking technology. 
Generally used to identify the wired connection or port on a Raspberry Pi. 

Firmware 
The basic software controlling the low-level operations for a specific hardware. 

Flash 
The action to copy the operating system files to a SD card with Etcher, Raspberry Pi Imager or any other tool.

GPU Graphic Processing Unit. 
The equivalent of the CPU to handle all the graphical part (display, video processing, etc). 

GUI Graphical User Interface. Opposite of CLI. Mouse and graphical tools are available to make the device management easier. 

HAT Hardware Attached on Top. 
Extension cards that can be plugged on the GPIO ports of a Raspberry Pi. 

HDMI High-Definition Multimedia Interface. 
The main display interface on Raspberry Pi. Recent models are using different variants (Mini or Micro-HDMI ports).

Headless
Using a Raspberry Pi without any screen. 

Hostname 
A name assigned to a device on a network

I2C Inter Integrated Circuit. 
Several GPIO pins are reserved for I2C devices. It's a specific bus to connect compatible peripherals. 

IP Address 
Unique identifier for a device on a network. Ex: 192.168.1.10 LAN Local Area Network. Generally refers to your network at home. 

MAC Address Media Access Control Address. 
A unique identifier assigned to each network card. Can be used in a DHCP server to reserve an IP address to each device. 

“New Out-Of-the-Box Software” (NOOBS)
It was the basic software pre-installed on most SD card for Raspberry Pi to install an operating system. Obsolete, no longer developed.

Operating System (OS)
A software that manages everything on a computer (hardware, resources, software, services). Ex: Windows, macOS, Linux. Partition One segment of a storage device (hard drive or SD card) that we allocate to a specific usage. Ex: / and /boot are the main partitions on a Raspberry Pi. 

PIXEL 
A desktop environment, based on LXDE and adapted for the Raspberry Pi. Now referred as "Raspberry Pi Desktop". 

Python 
A popular programming language, pre-installed on Raspberry Pi OS. 

RAM Random Access Memory. 
A temporary and fast storage type present on any computer. In general, the more RAM you have, the faster your programs will run. It's also better to use several apps simultaneously. 

Raspberry Pi OS A Linux distribution especially tailored for the Raspberry Pi. It's the default operating system, based on Debian. Formerly called Raspbian (obsolete)

Raspi-config A tool available on Raspberry Pi OS to configure the system from a terminal. 

Repository 
A server or group of servers on the Internet hosting the software files used by the package manager. Each Linux distribution have several repositories.

Root 
The name of the administrator account on Linux systems.

SD card Secure Digital card. 
The main storage device on Raspberry Pi (microSD card in fact). 

SPI Serial Peripheral Interface bus. 
Similar to I2C, another way to communicate with compatible peripherals via some GPIO pins.

SSD Solid-State Drive. 
A storage device, faster than the usual HDD, and also the SD cards. Can be used as the main storage on recent Raspberry Pi models (instead of the SD card). 


VNC Virtual Network Computing. 
A remote access software, pre-installed on Raspberry Pi OS. Allow us to control the Raspberry Pi desktop environment from another computer.

## Part 2: Commands
CLI - Command line interface
The black screen where we can only use Linux commands to interact with the operating system.

Distribution 
A Linux operating system version, using a specific set of software. Ex: Raspberry Pi OS, Ubuntu, Debian. 

Linux 
A family of open-source operating system using the Linux kernel, the base of all the Linux distributions. 

SSH Secure Shell Protocol. 
A network protocol used to remotely access a computer (a Raspberry Pi for example). This allows to access the Raspberry Pi terminal from another device. sudo Stands for "super user do!". Allow us to run commands with administrator privileges from an authorized used session. Ex: the "pi" user can use sudo instead of switching to "root".

apt-get update: Synchronizes the list of packages on your system to the list in the repositories. Use it before installing new packages to make sure you are installing the latest version.
apt-get upgrade: Upgrades all of the software packages you have installed.
clear: Clears previously run commands and text from the terminal screen.
date: Prints the current date.
find / -name example.txt: Searches the whole system for the file example.txt and outputs a list of all directories that contain the file.
nano example.txt: Opens the file example.txt in the Linux text editor Nano.
poweroff: To shutdown immediately.
raspi-config: Opens the configuration settings menu.
reboot: To reboot immediately.
shutdown -h now: To shutdown immediately.
shutdown -h 01:22: To shutdown at 1:22 AM.
startx: Opens the GUI (Graphical User Interface).
cat example.txt: Displays the contents of the file example.txt.
cd /abc/xyz: Changes the current directory to the /abc/xyz directory.
cp XXX: Copies the file or directory XXX and pastes it to a specified location; i.e. cp examplefile.txt /home/pi/office/ copies examplefile.txt in the current directory and pastes it into the /home/pi/ directory. 
examplefile.txt to newfile.txt, and keeps it in the same directory.
rm example.txt: Deletes the file example.txt.
rmdir example_directory: Deletes the directory example_directory (only if it is empty).
scp user@10.0.0.32:/some/path/file.txt: Copies a file over SSH. Can be used to download a file from a PC to the Raspberry Pi. user@10.0.0.32 is the username and local IP address of the PC, and /some/path/file.txt is the path and file name of the file on the PC.
touch example.txt: Creates a new, empty file named example.txt in the current directory.
wget http://www.website.com/example.txt: Downloads the file example.txt from the web and saves it to the current directory.
cat /proc/meminfo: Shows details about your memory.
cat /proc/partitions: Shows the size and number of partitions on your SD card or hard drive.
cat /proc/version: Shows you which version of the Raspberry Pi you are using.
df -h: Shows information about the available disk space.
df /: Shows how much free disk space is available.
dpkg - -get-selections | grep XXX: Shows all of the installed packages that are related to XXX.
dpkg - -get-selections: Shows all of your installed packages.
free: Shows how much free memory is available.
hostname -I: Shows the IP address of your Raspberry Pi.
lsusb: Lists USB hardware connected to your Raspberry Pi.
UP key: Pressing the UP key will print the last command entered into the command prompt. This is a quick way to repeat previous commands or make corrections to commands.
vcgencmd measure_temp: Shows the temperature of the CPU.
vcgencmd get_mem arm && vcgencmd get_mem gpu: Shows the memory split between the CPU and GPU.