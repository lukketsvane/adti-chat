# COPA QuickStart training Session 1 Sep 2022 Part 1 Executive Overview and Demonstration

[image area]
QuickStart Overview Lectures –
Executive Summary and
Demonstration
1
Agenda
• Introduction
• Equinor’s Motivation and Goals
• Overview of COPA QuickStart system and training program
• Demonstration
• Overview of Instructional Lectures and Labs
• Agenda for this week
• Feedback: Are we meeting Equinor’s needs?
Case for Action
End User pain points and value opportunities:
• lack of interoperability and inability to reuse their control
applications between systems from different suppliers
• excess cost of system upgrades due to close couplings between
components
• barriers to value generation from introduction of new technology –
hardware or software
• after-the-fact, bolt-on cybersecurity
Vision
Vision: A standards-based open, secure, interoperable
Current DCS architecture process automation architecture
OPA reference architecture
• Proprietary hardware, interfaces and networks
• Industry standard interfaces and networks
• Vendor-controlled software access
• Interoperable components
• Cybersecurity not intrinsic: bolted-on, not built in • Open software access
• Designed-in cybersecurity
Benefits
• No vendor lock-in Avionics Cost and Complexity
• Significant cost advantage
• Market-leading control technology
• Sophisticated cybersecurity
• Automated system management
[ref: FACE Business Guide, GE Aviation]
Differentiators
• Cohesive, loose-coupling
• IO <-> Compute
• Portability of applications software
• Industry standard programming language
• Certification of components
• Software-based high availability
• Built-in security
• Ease of new technology insertion
• Non-supplier system integrators (OPA business ecosystem)
OPA business ecosystem
Journey / Momentum
ExxonMobil OPA COPA Equinor
What We Want Prototypes formed QuickStart
2
reports • ExxonMobil training
2
0
• BASF
2
4 8 1
1 • Ga Pacific 1 2 p
0 0 0 e
2 2 2 S
6 1 1 3
1 2 2 2
0 0 0 0
2 2 2 2
OPA Forum O-PAS 2.1 y COPA v O-PAS
a o
Founded PreliminaryM Showcase #1N certification,
• Standards published ExxonMobil
• Ecosystem
field trial
• Certification
2 4 6 7
Equinor’s Motivation and Goals
COPA QuickStart
• QuickStart System and Training
• Coalition for Open Process Automation (COPA) member companies
• QuickStart hardware and software components
• Demonstration
Coalition for Open
Process Automation
• Purpose: Catalyze OPA ecosystem and adoption
• COPA is independent of OPA Forum
• Organized by CPLANE and CSI
• 14 member companies currently; Spans OPA ecosystem
• All are members of OPA Forum
11
COPA Quickstart unit
Hardware Components
Advanced
Compute
Platform (ACP) Software Components
Distributed
Supplier Software Component
Control Nodes Inductive Automation Historian

- Compute - Inductive Automation HMI & Alarms
[CPLANE.ai](http://cplane.ai/) Systems Management
Canonical & Intel Virtualization & OS
Open Connectivity
CODESYS IDE
Framework (OCF)
[CPLANE.ai](http://cplane.ai/) & Intel Orchestration
Canonical & [CPLANE.ai](http://cplane.ai/) Software services
CSI & Yokogawa Model Predictive Control
Distributed
CODESYS, SMAR &CSI 61131 Regulatory Control
Control Nodes
ASRock, VECOW, Supermicro Redfish
- IO - Phoenix Contact & Stahl OPC UA & Redfish
Phoenix Contact & Stahl 4-20 mA <-> OPC UA
VP Process & CSI Simulation
Simulation
12
COPA QuickStart demonstration
• I/O to DCN communications
• Regulatory control
• HMI
• Alarms
• Historian
• System management
• Discovery and inventory
• High-availability
• Cybersecurity
• Fast-cycle Economic Model Predictive Control
OCF (client/server) communication
IO Service Engine FB Execution Engine
OCF
OPC UA Server
Sensor Input With OPAS OPC UA Client OCFB_IN …
info model
OPC UA Server
Actor Output OPC UA Client With OPAS OCFB_OUT …
info model
GDS
• High Availability for Control Applications
• System Self Healing/Restoration
• Upgrade and Update
• New Technology Insertion
• Automated Provisioning
• Trusted Deployment
• Control System CI/CD
• Provision secure application comms
• Workload Management
• Provision security infrastructure
• Automate response to security
events
• System Inventory
• System Policy Monitoring
• Root-cause analysis
• System Operations Management
• Diagnostics and Resolution
• System Level Orchestration
• Operations Validation
Software Based Redundancy
• Marginal cost can be driven to zero
⚬ Redundancy everywhere with low-cost devices
• High resilience across multiple failures
• Reduced manual maintenance costs
⚬ No need for immediate response to failure
⚬ Self healing is automated
Zero
Downtime
Perimeter Security
Internal Network
Security
O-PAS
Host Security
Layered Application
Security Control
Signals
BASED ON IEC62443
Foundational Capabilities for Resilient Security
Up-to-Date Frequent Update Respond to Insert New
Inventory Cycles Threats Technologies
Always know what Frequent on-process Automatically isolate Quickly add new
your inventory and patches automatically potential threats security capabilities
versions
Remote Attestation
• Cryptographic signature is created using
Intel Trusted Edge Platform (TEP) & TPM
• If the signature changes, then the device is
Trust
no longer trustworthy
Verification
• [CPLANE.ai](http://cplane.ai/) can automatically isolate the
of Industrial
device (quarantine or honey-potting)
Controllers
Path to value
• QuickStart
• Training and hands-on experience
• Field trial workshop
• Field Trial
• Based on O-PAS architecture; optimized for the particular process
• Production system
• Optimized for the process; built with O-PAS certified component products
Instructional Lectures and Labs Overview
• Lectures and hands-on labs
• Instructors: CSI + CPLANE + COPA member guest lecturers
• 4-hour sessions every other week
• Most sessions virtual
• Notional plan: in-person for start, mid-term, and final
Agenda for this week
Tue afternoon
• Instructional Lectures and Labs detailed overview
• Lecture 1: OPA Concepts (start)
Wed morning
• (continue) Lecture 1: OPA Concepts
• Lab 1: Control system front end engineering: fired heater
Wed afternoon
• Lab 1: debrief
• Lecture 2: Design 1
Thu morning
• Lecture 3: Design 2
• Lecture 4: Develop 1
Thu afternoon
• Lab 2: DCN IO Node configuration
Feedback
• Are we meeting Equinor’s needs?
• What’s missing?
• Business
• Ecosystem
• Technical