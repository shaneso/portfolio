---
title: "ROS Noetic + Docker Environment Setup"
date: 2026-01-31T22:35:11-08:00
draft: false
description: "Building a ROS Noetic Docker container environment for robotics projects."
---

### Instructions

Instead of installing all dependencies, can use Docker premade images from the Docker Hub:
`docker pull osrf/ros:noetic-desktop-full`
This command installs the ROS environment you need to run your packages with the installed containers that contain all dependencies.
You need to *mount* the file directory of your project onto the virtual environment build from Docker. The command may look something like:

```
docker run -it -v --name <container_name> --network host $(pwd):/<project_directory_name> osrf/ros:noetic-desktop-full bash
```

or the command may first start off as:

```
docker run -it -v $(pwd):/<project_directory_name> osrf/ros:noetic-desktop-full bash
```

Next, download all the dependencies. For example, execute the commands:
`apt install ros-noetic-serial` and `apt install libeigen3-dev`
If it doesn't work, try updating the library/package manager using `apt update` then try installing the dependencies again.
Run `apt install git` to install *git* into your environment.
Move into your `src` directory, then verify if you have all the source code repositories contained in it. Install as needed. At this point, you would usually just have your `src` folder within your main project folder in root. To produce the `build` and `devel` folder alongside your `src`, you can run `catkin_make` to setup your compiled ROS builds for your project.
Move into your `devel` folder, and run `. setup.bash` or `source setup.bash` to setup your ROS environment variables, such as the ROS distribution to be used (e.g. noetic, humble, etc), ROS package paths, and so on.
Finally, launch your project software in the compiled ROS environment using the command `roslaunch` or `roslaunch <source_code_directory_name> <source_code_directory_name>.launch`

**IF launch process cannot run the interface DO**
Setup Xserver in your Docker container with `xhost +local:docker`
After, run the ROS environment in your Docker container using:

```
docker run -it --name <project_container_name> --env="DISPLAY=$DISPLAY" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" --net=host -v $(pwd):/<project_directory> osrf/ros:noetic-desktop-full bash
```

Note that the `--net=host` is an optional flag, but is important when working with local network configs later on.
Run `apt update` then run `apt install tmux` to install the terminal multiplexer for the next steps.
Use the terminal multiplexer to setup dual shells with `tmux`
On the first terminal, execute `roscore`
On the second terminal, execute `rviz` to launch the RViz interface. Now you should be able to use RViz.

### Prerequisites (packages) to install in ROS-Docker CLI

Install the following packages using `apt install` after running `sudo apt update`:
- `ros-noetic-serial`
- `libeigen3-dev`
- `x11-apps`
- `tmux`
- `git`

**ELSE DO**
Now, exit the Docker terminal and return to the Ubuntu interface. You can do this using `exit` and it should close. You can purge *Postfix* with these commands (verify that you don't need it first before running this process):

1. sudo apt-get --purge remove postfix -y
2. sudo apt-get autoremove -y
3. sudo apt-get autoclean
4. sudo apt-get -f install

You should now be able to install the X11 apps needed to run the GUI, specifically for your *RViz* interface. Run the following process to install the GUI packages:
`sudo apt install x11-apps`
Test to see if one of the app widget GUIs work (like the clock) using `xclock`
Run `xhost +local:docker` to modify access for local connections.
Go back into the Docker terminal (ROS environment) and `cd` into `devel` then run the command `. setup.bash` to source the variables. Launch the project again.

### Starting a Docker container

Run the command `docker start -ai <container_id>` where the `container_id` can be the Docker container byte string (ID) or the container name. If you use the ID string, you can just use the first few alphanumeric characters/digits as the identifier to make things faster (instead of writing out the entire byte string ID). To list out all generated Docker containers in your system environment, run the command `docker ps -a`.

### Information

`docker run` is creating a container from an image.
`docker start` runs the current container that already exists.
Insert drive on M2 slot in motherboard to flash a Ubuntu OS on your laptop.
In the workspace folder (once you're in the ROS Docker terminal) you can `git clone` other relevant source codes and contain it all in a `src` folder.
Next you run `catkin_make` to build the ROS environment and compile the source code. In your main project directory root, you will see a `build` folder, a `devel` folder, and a `src` folder (which contains all the folders containing relevant source code and software).
You may want to setup the environment variables using the command:
`. setup.bash` which uses the `.` alias of `source` to execute the `.bash` script, preparing the environment for ROS.
Then, launch the ROS environment and boot your project through it using:
`roslaunch <project_name> <project_name>.launch`
Some networking modules have two modes:

1. Configuration mode - AT commands have specific baud rate
2. Working mode - baud rate may be different for software operation
