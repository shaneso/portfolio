---
title: "Analog Telemetry Stack"
date: 2026-01-04T01:55:04-08:00
draft: false
description: "A lightweight embedded telemetry stack for analog sensors."
---

## Abstract

Building a cycle-accurate telemetry system with precise data throughputs and a robust signal processing architecture can be difficult for embedded systems that use sensor fusion clusters. This is especially true for research conducted in environments with high EMI and drift-prone instrumentation. By bridging an ATmega328P unit with an ADS1115 ADC via the I²C protocol, fast and precise embedded sensing machines can be developed.

## ATmega328P

The ATmega328P microcontroller uses an 8-bit RISC architecture for its internal processor. It is also based on the Harvard architecture, which, unlike the von Neumann system, optimizes efficiency via a modular memory design. This particular MCU typically operates at around 16 to 20 MHz per second with decent voltage power, depending on its platform. On the Arduino Uno, it runs on 16 MHz since the IC utilizes a 16 MHz crystal oscillator to generate its clock signals. The ATmega328P will be used in this model since it is readily accessible on boards such as the Arduino Uno.

## ADS1115

The ADS1115 is a 16-bit ADC capable of supporting multiple channels, with either 4 single ended signals or 2 differential inputs. For projects focusing on precision against randomized noise and EMI-tolerant sensing, use 2 channels on differential settings per unit. While the ADS1015 enjoys better speed compensation at 3300 SPS over the 860 SPS on the 1115, the latter will be chosen for this model based on its additional 4 bit resolution top-up, boosting a 4095 bit precision maxima to 65535 bits.

The finer the bit resolution, the more precise the sensing measurement. Because one I²C bus configuration on the ATmega328P can manage up to 4 ADS1115 boards, an array of 16 single ended or 8 differential sensing units (or a combination of both, depending on the type of sensors used) may be utilized into an embedded telemetry shield.

There are two versions of the ADS 1X15 series: STEMMA QT and vanilla (header-only). Both versions provide the same functionality. The main differences between them, however, is that the original release requires soldering, while the STEMMA QT build offers JST-SH connections (Qwiic and STEMMA QT compatible).

## Assembly

In order, the I²C addressing for each ADS1X15 module, from the first unit to the fourth, is as listed:

```
- 0x48
- 0x49
- 0x4A
- 0x4B
```

Note that this assembly configuration includes all four ADS1115 components. Your telemetry system may have less units, depending on how many analog sensors are used.

The VIN (VDD) and GND connections of the ADC modules all route to the 5V and GND on the Arduino board. Serial clock synchronization and data transmission is handled by the SCL and SDA pins, which connect to the matching pins on the UNO.

Connect the address (ADDR) pins for each ADS1115 module (i.e. 0x48, 0x49, 0x4A, 0x4B), in the same respective order, to the following wiring schemes:

```
- 0x48 --> GND
- 0x49 --> VIN (VDD)
- 0x4A --> SDA
- 0x4B --> SCL
```

Once all ADS1115 units have been installed and addressed via I²C, you may connect the analog signal pins from your sensors to the corresponding I/Os on the ADC modules (A0, A1, A2, A3). Note that some analog sensors may need a medium to intercept passing signals for amplification and bit refinement. For this purpose, you may want a specialized signal conditioner to correct for any weak or constrained sensing devices.
