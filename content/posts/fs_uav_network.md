---
title: "Distributed FanciSwarm UAV Network"
date: 2026-01-04T01:46:50-08:00
draft: false
description: "Tutorial on setting up ESP8266 networking modules for FanciSwarm UAVs."
---

## Instructions
1. Disconnect the Mlink-esp Wi-fi module from the FanciSwarm drone.

- The ESP Wi-fi module uses an 8-pin UART protocol for setting up communication through AT commands (Hayes-style command set).

2. Connect the Mlink-esp Wi-fi module to the Mlink-esp debugger with the long side of the Wi-fi module (the side without pins) facing in the same direction as the USB of the debugger.

3. Open a serial monitor (e.g. Arduino IDE serial monitor, PuTTY) and configure the serial port connection (find the matching COM port or *tty* equivalent, depending on the OS).

4. Set the baud rate to 115200.

- Note that the `fcu_bridge_00X.cpp` files use a functional baud rate of 460800, while the networking module uses 115200. Do not change the functional baud rate to 115200, as this will cause errors.

5. Once configured, send the following AT commands:

    1. `AT+RST` to restart the module.
	2. `AT+RESTORE` to restore factory settings.
	3. `AT+CWMODE_DEF=1` to set to station mode (from the default AP mode).
	4. `AT+CWJAP_DEF="WiFi Name","WiFi Password"` to set the router name and password.
	5. `AT+CIFSR` to query and verify the IP address assigned to the Mlink networking module.

6. Select one of the six `fcu_bridge_00X` C++ files, where `X` is the number associated with one drone.

7. In the chosen bridge file, refactor the IP address to match the IP address of your desired drone. You can find the IP address pointer on line 27, which will look something like `static char* DRONE_IP = "192.168.X.X";`. After any changes, save your code.

- Verify that you are refactoring the source code that is to be run in the Docker-ROS environment, and not a copy of the repository.

- If you receive an error message later saying you're not connected to bridge `X`, it may be because you refactored a copy of the operating repository. You can debug and troubleshoot this problem by opening the `src` directory and tracing the `fcu_core` files with `vim`. If the code has not been edited, change it directly in the console with `vim` and save your changes with `ESC + w`. To quit `vim`, run `ESC + q`.

8. Verify that your machine is connected to the router Wi-fi as well.

9. Build a new Docker container for your ROS-based software repository and run `docker run -it --env="DISPLAY=$DISPLAY" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" --net=host -v $(pwd):/<project_directory> osrf/ros:noetic-desktop-full bash` from the current project directory or change `$(pwd)` to a different path relative to your current directory.

- If you already have a Docker container build with all required dependencies to run the source code in a ROS environment, you may use `docker start <container_name>` or `docker start <container ID>` to avoid building multiple copies.

10. Run `apt update` then `apt install ros-noetic-serial` and `apt install libeigen3-dev` to install dependencies for the build requirements.

11. `apt install tmux` to install the terminal multiplexer, then run `tmux` to launch it.

12. `Ctrl + B` then `%` to split the session into two terminals.

13. `Ctrl + B` then `<-` arrow key to move to the left terminal.

14. Run `roscore` to set up the ROS network and configure communication between nodes.

15. `Ctrl + B` then `->` to move to the right terminal.

16. Repeat step 6, then compile the source code by running `catkin_make` while in the root directory.

17. Source the setup file by running `source setup.bash` in your `/devel` directory to configure environment variables for ROS.

18. Launch the compiled software with `roslaunch fcu_core fcu_core.launch` and verify all connections are functional.

- If you only refactored the bridge file for one drone, then you may receive warning logs in the console about other drone bridge networks that have not yet been connected.
