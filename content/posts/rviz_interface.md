---
title: "Debugging Rviz Launch Issues"
date: 2026-01-31T23:33:45-08:00
draft: false
description: "Fixes to common Rviz interface launch conflicts in containerized ROS environments in Linux."
---

### CMake Cache Load Conflict Error

Run `rm -rf build devel install` to wipe the `build/` and `devel/` cache. After cleaning the cache, run `catkin_make` to rebuild the directories alongside the `src` folder.

### RViz Launch Access Authorization and X11 Forwarding

When running the process `roslaunch fcu_core fcu_core.launch` you may encounter an error log that looks like `[rviz-9] process has died [pid 2302, exit code -6, cmd nice /opt/ros/noetic/lib/rviz/rviz -d /uav_project`. This means that RViz needs a local runtime launched on the host (since you will likely be running the ROS Noetic environment inside a Docker container). To resolve this, run the command `xhost +local:root` outside of your container (in your host machine), then re-enter into your ROS container environment and run the launch process again.

### RViz Launch Error - Mesa and OpenGL

Verify that your ROS nodes can be accessed and that ROS master is connected. You can test this by running `rosnode list`. If it returns `ERROR: Unable to communicate with master!`, run the following commands.

```
unset ROS_HOSTNAME
unset ROS_IP
export ROS_MASTER_URI=http://localhost:11311
```

These commands configure your ROS session to run in an isolated local machine environment, so that any conflicts or incompatible environment variables do not persist. Next, we configure the subsystem and kernel processes such that Mesa is not expecting a different rendering manager or encounters userspace access restrictions. We achieve this with the following:

```
export LIBGL_ALWAYS_SOFTWARE=1
export MESA_LOADER_DRIVER_OVERRIDE=llvmpipe
export GALLIUM_DRIVER=llvmpipe
export MESA_GL_VERSION_OVERRIDE=3.3
export MESA_NO_ERROR=1
export QT_XCB_GL_INTEGRATION=none
```

Now try running `roscore` and `roslaunch fcu_core fcu_core.launch` in `tmux` again and verify that the `rviz` interface is running properly.
