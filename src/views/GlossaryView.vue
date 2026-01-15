<script setup lang="ts">
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="glossary">
    <PageHero
      :title="'Glossary'"
      :lead="'Dear Reader, while making the project, I thought it to be convenient to have a place to store technical definitions to serve as reference. I hope this is helpful and get you curious!'"
      :image-src="BASE + '/images/reset-pin.png'"
      image-alt="Raspberry Pi"
    />

    <section class="news">
      <h2>Part 1: General Raspberry Pi and Computing Terms</h2>
      <div class="glossary-items">
        <div class="glossary-item">
          <dt>API</dt>
          <dd>
            Application Program Interface. Set of protocols that allow two different software
            programs to exchange (GET, POST, DELETE) data with each other.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>CPU</dt>
          <dd>
            Central processing unit. Basically the processor, primary component that runs everything
            on a computer.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>DHCP</dt>
          <dd>
            Dynamic Host Configuration Protocol - network protocal that automatically and
            temporarily assigns unique IP addresses and other settings to devices connecting to a
            network.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>DNS</dt>
          <dd>
            Domain Name System. A system or service which translates domain names to IP addresses,
            the only identifier understood by computers.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>DNS Sinkhole</dt>
          <dd>
            A Domain Name System server that is configured to hand out non-routable addresses for a
            certain set of domain names. Computers that use the sinkhole fail to access the real
            site.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Docker</dt>
          <dd>
            A way to containerize applications - put the code into its own "box". They have no host
            operating system, preventing issues running code in different operating systems.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Ethernet</dt>
          <dd>
            A networking technology. Generally used to identify the wired connection or port on a
            Raspberry Pi.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Firmware</dt>
          <dd>The basic software controlling the low-level operations for a specific hardware.</dd>
        </div>
        <div class="glossary-item">
          <dt>Flash</dt>
          <dd>
            The action to copy the operating system files to a SD card with Etcher, Raspberry Pi
            Imager or any other tool.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>GPU</dt>
          <dd>
            Graphic Processing Unit. The equivalent of the CPU to handle all the graphical part
            (display, video processing, etc).
          </dd>
        </div>
        <div class="glossary-item">
          <dt>GUI</dt>
          <dd>
            Graphical User Interface. Opposite of CLI. Mouse and graphical tools are available to
            make the device management easier.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>HAT</dt>
          <dd>
            Hardware Attached on Top. Extension cards that can be plugged on the GPIO ports of a
            Raspberry Pi.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>HDMI</dt>
          <dd>
            High-Definition Multimedia Interface. The main display interface on Raspberry Pi. Recent
            models are using different variants (Mini or Micro-HDMI ports).
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Headless</dt>
          <dd>Using a Raspberry Pi without any screen.</dd>
        </div>
        <div class="glossary-item">
          <dt>Hostname</dt>
          <dd>A name assigned to a device on a network.</dd>
        </div>
        <div class="glossary-item">
          <dt>I2C</dt>
          <dd>
            Inter Integrated Circuit. Several GPIO pins are reserved for I2C devices. It's a
            specific bus to connect compatible peripherals.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>IP Address</dt>
          <dd>
            Unique identifier for a device on a network. Ex: 192.168.1.10 LAN Local Area Network.
            Generally refers to your network at home.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>MAC Address</dt>
          <dd>
            Media Access Control Address. A unique identifier assigned to each network card. Can be
            used in a DHCP server to reserve an IP address to each device.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Memory</dt>
          <dd>
            The electronic holding place for data on a computer to reach quickly. Divided into
            Primary (RAM, ROM, cache) and Secondary (hard disk drive, USB drive, and CDs) types.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>NOOBS</dt>
          <dd>
            "New Out-Of-the-Box Software". It was the basic software pre-installed on most SD card
            for Raspberry Pi to install an operating system. Obsolete, no longer developed.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Operating System (OS)</dt>
          <dd>
            A software that manages everything on a computer (hardware, resources, software,
            services). Ex: Windows, macOS, Linux.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Partition</dt>
          <dd>
            One segment of a storage device (hard drive or SD card) that we allocate to a specific
            usage. Ex: / and /boot are the main partitions on a Raspberry Pi.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>PIXEL</dt>
          <dd>
            A desktop environment, based on LXDE and adapted for the Raspberry Pi. Now referred as
            "Raspberry Pi Desktop".
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Python</dt>
          <dd>A popular programming language, pre-installed on Raspberry Pi OS.</dd>
        </div>
        <div class="glossary-item">
          <dt>RAM</dt>
          <dd>
            Random Access Memory. A temporary and fast storage type present on any computer. In
            general, the more RAM you have, the faster your programs will run. It's also better to
            use several apps simultaneously.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Raspberry Pi OS</dt>
          <dd>
            A Linux distribution especially tailored for the Raspberry Pi. It's the default
            operating system, based on Debian. Formerly called Raspbian (obsolete).
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Raspi-config</dt>
          <dd>A tool available on Raspberry Pi OS to configure the system from a terminal.</dd>
        </div>
        <div class="glossary-item">
          <dt>Repository</dt>
          <dd>
            A server or group of servers on the Internet hosting the software files used by the
            package manager. Each Linux distribution have several repositories.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Root</dt>
          <dd>The name of the administrator account on Linux systems.</dd>
        </div>
        <div class="glossary-item">
          <dt>SD card</dt>
          <dd>
            Secure Digital card. The main storage device on Raspberry Pi (microSD card in fact).
          </dd>
          <img width="50%" :src="BASE + '/images/micro-sd-card.png'" />
        </div>
        <div class="glossary-item">
          <dt>SPI</dt>
          <dd>
            Serial Peripheral Interface bus. Similar to I2C, another way to communicate with
            compatible peripherals via some GPIO pins.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>SSD</dt>
          <dd>
            Solid-State Drive. A storage device, faster than the usual HDD, and also the SD cards.
            Can be used as the main storage on recent Raspberry Pi models (instead of the SD card).
          </dd>
          <img width="50%" :src="BASE + '/images/solid-state-drive.png'" />
        </div>
        <div class="glossary-item">
          <dt>VNC</dt>
          <dd>
            Virtual Network Computing. A remote access software, pre-installed on Raspberry Pi OS.
            Allow us to control the Raspberry Pi desktop environment from another computer.
          </dd>
          <img width="50%" :src="BASE + '/images/vnc.png'" />
        </div>
      </div>

      <h2 style="margin-top: 4rem">Part 2: Commands</h2>
      <div class="glossary-items">
        <h3>Important info (not commands)</h3>
        <div class="glossary-item">
          <dt>CLI</dt>
          <dd>
            Command line interface. The black screen where we can only use commands to interact with
            the operating system and other software. On Windows, the application is called Command
            Prompt or PowerShell. On macOS and Linux, it is called the Terminal.
          </dd>
          <img width="50%" :src="BASE + '/images/command-line-interface.png'" />
        </div>
        <div class="glossary-item">
          <dt>Distribution</dt>
          <dd>
            A Linux operating system version, using a specific set of software. Ex: Raspberry Pi OS,
            Ubuntu, Debian.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>Linux</dt>
          <dd>
            A family of open-source operating system using the Linux kernel, the base of all the
            Linux distributions.
          </dd>
          <img width="50%" :src="BASE + '/images/linux.png'" />
        </div>
        <div class="glossary-item">
          <dt>SSH</dt>
          <dd>
            Secure Shell Protocol. A network protocol used to remotely access a computer (a
            Raspberry Pi for example). This allows to access the Raspberry Pi terminal from another
            device.
          </dd>
          <img width="50%" :src="BASE + '/images/ssh-secure-shell-protocol.png'" />
        </div>
        <h3>Commands - typed in the terminal</h3>
        <div class="glossary-item">
          <dt>sudo</dt>
          <dd>
            Stands for "super user do!". Allow us to run commands with administrator privileges from
            an authorized used session. Ex: the "pi" user can use sudo instead of switching to
            "root".
          </dd>
        </div>
        <div class="glossary-item">
          <dt>apt-get update</dt>
          <dd>
            Synchronizes the list of packages on your system to the list in the repositories. Use it
            before installing new packages to make sure you are installing the latest version.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>apt-get upgrade</dt>
          <dd>Upgrades all of the software packages you have installed.</dd>
        </div>
        <div class="glossary-item">
          <dt>clear</dt>
          <dd>Clears previously run commands and text from the terminal screen.</dd>
        </div>
        <div class="glossary-item">
          <dt>date</dt>
          <dd>Prints the current date.</dd>
        </div>
        <div class="glossary-item">
          <dt>find / -name example.txt</dt>
          <dd>
            Searches the whole system for the file example.txt and outputs a list of all directories
            that contain the file.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>git clone https://github.com/USERNAME/REPOSITORY</dt>
          <dd>Copies a Git codebase/repository (package or program of code) to your computer.</dd>
        </div>
        <div class="glossary-item">
          <dt>nano example.txt</dt>
          <dd>Opens the file example.txt in the Linux text editor Nano.</dd>
        </div>
        <div class="glossary-item">
          <dt>poweroff</dt>
          <dd>To shutdown immediately.</dd>
        </div>
        <div class="glossary-item">
          <dt>raspi-config</dt>
          <dd>Opens the configuration settings menu.</dd>
        </div>
        <div class="glossary-item">
          <dt>reboot</dt>
          <dd>To reboot immediately.</dd>
        </div>
        <div class="glossary-item">
          <dt>shutdown -h now</dt>
          <dd>To shutdown immediately.</dd>
        </div>
        <div class="glossary-item">
          <dt>shutdown -h 01:22</dt>
          <dd>To shutdown at 1:22 AM.</dd>
        </div>
        <div class="glossary-item">
          <dt>startx</dt>
          <dd>Opens the GUI (Graphical User Interface).</dd>
        </div>
        <div class="glossary-item">
          <dt>cat example.txt</dt>
          <dd>Displays the contents of the file example.txt.</dd>
        </div>
        <div class="glossary-item">
          <dt>cd /abc/xyz</dt>
          <dd>Changes the current directory to the /abc/xyz directory.</dd>
        </div>
        <div class="glossary-item">
          <dt>cp XXX</dt>
          <dd>
            Copies the file or directory XXX and pastes it to a specified location; i.e. cp
            examplefile.txt /home/pi/office/ copies examplefile.txt in the current directory and
            pastes it into the /home/pi/ directory.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>rm example.txt</dt>
          <dd>Deletes the file example.txt.</dd>
        </div>
        <div class="glossary-item">
          <dt>rmdir example_directory</dt>
          <dd>Deletes the directory example_directory (only if it is empty).</dd>
        </div>
        <div class="glossary-item">
          <dt>scp user@10.0.0.32:/some/path/file.txt</dt>
          <dd>
            Copies a file over SSH. Can be used to download a file from a PC to the Raspberry Pi.
            user@10.0.0.32 is the username and local IP address of the PC, and /some/path/file.txt
            is the path and file name of the file on the PC.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>touch example.txt</dt>
          <dd>Creates a new, empty file named example.txt in the current directory.</dd>
        </div>
        <div class="glossary-item">
          <dt>wget http://www.website.com/example.txt</dt>
          <dd>
            Downloads the file example.txt from the web and saves it to the current directory.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>cat /proc/meminfo</dt>
          <dd>Shows details about your memory.</dd>
        </div>
        <div class="glossary-item">
          <dt>cat /proc/partitions</dt>
          <dd>Shows the size and number of partitions on your SD card or hard drive.</dd>
        </div>
        <div class="glossary-item">
          <dt>cat /proc/version</dt>
          <dd>Shows you which version of the Raspberry Pi you are using.</dd>
        </div>
        <div class="glossary-item">
          <dt>df -h</dt>
          <dd>Shows information about the available disk space.</dd>
        </div>
        <div class="glossary-item">
          <dt>df /</dt>
          <dd>Shows how much free disk space is available.</dd>
        </div>
        <div class="glossary-item">
          <dt>dpkg --get-selections | grep XXX</dt>
          <dd>Shows all of the installed packages that are related to XXX.</dd>
        </div>
        <div class="glossary-item">
          <dt>dpkg --get-selections</dt>
          <dd>Shows all of your installed packages.</dd>
        </div>
        <div class="glossary-item">
          <dt>free</dt>
          <dd>Shows how much free memory is available.</dd>
        </div>
        <div class="glossary-item">
          <dt>hostname -I</dt>
          <dd>Shows the IP address of your Raspberry Pi.</dd>
        </div>
        <div class="glossary-item">
          <dt>lsusb</dt>
          <dd>Lists USB hardware connected to your Raspberry Pi.</dd>
        </div>
        <div class="glossary-item">
          <dt>UP key</dt>
          <dd>
            Pressing the UP key will print the last command entered into the command prompt. This is
            a quick way to repeat previous commands or make corrections to commands.
          </dd>
        </div>
        <div class="glossary-item">
          <dt>vcgencmd measure_temp</dt>
          <dd>Shows the temperature of the CPU.</dd>
        </div>
        <div class="glossary-item">
          <dt>vcgencmd get_mem arm && vcgencmd get_mem gpu</dt>
          <dd>Shows the memory split between the CPU and GPU.</dd>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.glossary {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.news {
  margin-top: 4rem;
}

.news h2 {
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 0;
  font-size: 1.8rem;
  color: var(--color-heading);
  border-bottom: 2px solid var(--color-border, #ddd);
  padding-bottom: 1rem;
}

.glossary-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.glossary-item {
  padding: 1.5rem;
  border: 1px solid var(--color-border, #e0e0e0);
  border-radius: 5px;
  background-color: var(--color-background-soft, #f9f9f9);
  transition: box-shadow 0.3s ease;
}

.glossary-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.glossary-item dt {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.glossary-item dd {
  margin: 0;
  color: var(--color-text);
  line-height: 1.6;
}

.news-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 5px;
  margin: 1.5rem auto;
  display: block;
}
</style>
