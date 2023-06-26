# COPA QuickStart training: Part 5 O-PAS IO Nodes Lab

Last edited time: June 26, 2023 1:06 PM

# O-PAS IO Nodes Lab: A Deep Dive into the OPAS Connectivity Framework

**O-PAS IO Nodes Lab**, part of the COPA QuickStart training session held in September 2022, aims to offer comprehensive understanding and hands-on experience in configuring the O-PAS system for efficient communication with field devices.

## Learning Objectives

The key learning objectives of this session are:

1. To understand the mechanics of data communication between field devices and the O-PAS system, which includes the journey of data from field wiring to OPC UA Client/Servers distributed through the control system.
2. To gain practical experience in configuring a product that carries out this field device to system communication.

## OPAS Connectivity Framework: An Overview

The O-PAS Connectivity Framework (OCF) is an open industry standard for data communications in O-PAS based systems. It utilizes OPC UA for its operations and has interfaces based on OPC UA information models ensuring interoperability.

### Field Device Communications

Communication between the field devices involves multiple methods such as:

- 4-20 mA, 0-10V
- HART
- Fieldbuses including Profibus, Profinet, Ethernet/IP, EtherCAT, and FOUNDATION fieldbus
- Serial: Modbus
- Advanced Physical Layer

### OCF Applications

The OCF employs O-PAS I/O Services for reading and writing data from the field devices to the system. It leverages OPC UA client/server for actuator and sensor data management, and GDS for registration and alias aggregation.

### Input Communication

In the input communication, the client requests for the desired alias location, the server resolves the location, the client creates a subscription for the desired node in the model, the IO Service scales the signal and writes the value to the OPAS model, and finally, the client writes the value to the runtime variable.

### Output Communication

For output communication, the function block execution writes the value to the OPAS Model. The value is transmitted to the client, who then scales and writes the value to the output.

### Configuration of an IO Service Engine

An AML file at the time of engineering defines the Tag map between the Hardware and Runtimes.

## OPC UA Specifics for This Use Case

The IO setup demonstrated in this lab is currently under construction, and for demonstration purposes, analog inputs and outputs are displayed. Configuration and scaling are performed through a small 61131 application.

## Lab – IO Configuration

Participants will split into teams and configure one IO module on the field-facing side and OPC UA Server. They will then confirm data flow in PLCNext Engineer and into UA Expert.

A channel diagram with Tag, Module, and Channel details is provided for reference. The lab also covers variable creation, scaling, PxC Axioline F configuration, data binding, and OPC UA Variable creation, among other configurations.

## Future Feature Roadmap

The future of the O-PAS system includes an automatic Bus Configuration, web-based configuration of IO, AML file consumption, and the standard Axioline F and Axioline P for process IO.

# Summary

The O-PAS IO Nodes Lab focuses on imparting an understanding of data communication between field devices and the O-PAS system, in addition to providing hands-on experience in configuring this communication. The O-PAS Connectivity Framework (OCF) is discussed extensively along with its applications and configurations. The session also includes a lab segment for IO configuration and outlines the future roadmap for O-PAS system features.

*This article was last edited on [**26/06/2023**]*

### Tags: [#O-PAS](notion://www.notion.so/adti-wiki/COPA-QuickStart-training-Part-5-O-PAS-IO-Nodes-Lab-73c33d3035804440ad80023e96d75539), [#OPCUA](notion://www.notion.so/adti-wiki/COPA-QuickStart-training-Part-5-O-PAS-IO-Nodes-Lab-73c33d3035804440ad80023e96d75539), [#FieldDeviceCommunication](notion://www.notion.so/adti-wiki/COPA-QuickStart-training-Part-5-O-PAS-IO-Nodes-Lab-73c33d3035804440ad80023e96d75539), [#OCF](notion://www.notion.so/adti-wiki/COPA-QuickStart-training-Part-5-O-PAS-IO-Nodes-Lab-73c33d3035804440ad80023e96d75539), [#Automation](notion://www.notion.so/adti-wiki/COPA-QuickStart-training-Part-5-O-PAS-IO-Nodes-Lab-73c33d3035804440ad80023e96d75539).