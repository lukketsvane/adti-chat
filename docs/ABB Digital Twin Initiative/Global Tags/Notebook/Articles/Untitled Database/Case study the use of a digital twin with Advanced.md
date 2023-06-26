# Case study: the use of a digital twin with Advanced Process Control at Boliden Aitik mine

Created: June 23, 2023 3:18 PM

# 

# **Performance and benefits of ABB Ability™ Expert Optimizer, ABB’s advanced process control solution, have been validated on a digital twin/simulation model representing Aitik’s grinding circuit, helping to develop an optimal control strategy**

# 

![https://www07.abb.com/images/librariesprovider119/mineoptimize/digital-applications/apc-digital-twin.jpg?sfvrsn=1f5ac209_1](https://www07.abb.com/images/librariesprovider119/mineoptimize/digital-applications/apc-digital-twin.jpg?sfvrsn=1f5ac209_1)

# 

Digital twins are powerful tools with significant advantages, especially when developing a new control strategy. The virtual environment allows for the conducting of experiments that are non-intrusive to the normal plant operation. Furthermore, these experiments can be performed in a relatively short time, with the possibility of testing extreme operational conditions as well as different circuit configurations. The result is that one can develop a robust control strategy capable of dealing with the vast array of possible scenarios that can occur on site.

Boliden have collaborated with ABB in such an approach to target the optimization of their

[copper grinding circuit of Aitik in Swede](https://new.abb.com/mining/reference-stories/services-stories/long-term-service-agreement)

n. Grinding mills form a critical part in the energy intensive comminution process, an essential step in extracting valuable metals from mineral deposits. On concentrator plants, the milling circuit is often the bottleneck of the entire operation. Thus, improvements in the mill operation can be directly translated to economic benefits.

By first developing the controller in a virtual environment, the implementation phase can be done with minimum upsets and reduced risk. Benefits are therefore achieved with limited disruption to the normal production.

### Share this page

- 
- 
- 

**Optimize your processes using digital twin with Advanced Process Control[Contact us](https://new.abb.com/mining/mineoptimize/digital-applications/advanced-process-control/case-study-the-use-of-a-digital-twin-with-advanced-process-control-at-boliden-aitik-mine#ContactUsSection)**

By **Johannes Sikström – Boliden   Robert Brown – ABB   Ryan Koorts – ABB**

![https://new.abb.com/images/librariesprovider128/default-album/linkedin.png?sfvrsn=f2007c16_0&MaxWidth=30&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments](https://new.abb.com/images/librariesprovider128/default-album/linkedin.png?sfvrsn=f2007c16_0&MaxWidth=30&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments)

![https://new.abb.com/images/librariesprovider128/default-album/linkedin.png?sfvrsn=f2007c16_0&MaxWidth=30&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments](https://new.abb.com/images/librariesprovider128/default-album/linkedin.png?sfvrsn=f2007c16_0&MaxWidth=30&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments)

![https://new.abb.com/images/librariesprovider128/default-album/linkedin.png?sfvrsn=f2007c16_0&MaxWidth=30&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments](https://new.abb.com/images/librariesprovider128/default-album/linkedin.png?sfvrsn=f2007c16_0&MaxWidth=30&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments)

# **Digital Twin**

A virtual environment that consists of three main components was setup as shown in Figure 1. The process dynamics are hosted in a Dymola simulation developed by Boliden and an external supplier based on first principles. An OPC connection is available to interact with the plant simulator in real-time. Here data of the simulated plant state can be tracked and changes from external sources can be implemented to control the process. A direct copy of the [ABB Ability™ System 800xA](https://new.abb.com/mining/mineoptimize/digital-applications/power-process-control) - ABB’s Distributed control system (DCS) - including customized logic and interlocks is used for the base layer control. This approach was followed to maintain, as far as possible, a realistic replication (virtual plant) of the actual plant setup and configuration. [ABB Ability™ Expert Optimizer](https://new.abb.com/mining/mineoptimize/digital-applications/advanced-process-control/abb-ability-expert-optimizer) (EO) forms part of the ABB suite and hosts the APC control strategy. It is integrated into the ABB’ DCS environment. A proprietary communications protocol known as MMS is used to share the data between the Base layer control and EO.

![https://www07.abb.com/images/librariesprovider119/default-album/digital-environment633696f1c1f463c09537ff0000433538.jpg?sfvrsn=5dc2f509_1](https://www07.abb.com/images/librariesprovider119/default-album/digital-environment633696f1c1f463c09537ff0000433538.jpg?sfvrsn=5dc2f509_1)

Figure 1: Setup of the digital environment

# **Milling Circuit Optimization**

Primary milling is the first stage of grinding and plays a crucial role in the liberation of the valuable minerals. A typical circuit, as shown in Figure 2, can consist of either an Autogenous (AG), Semi-Autogenous (SAG) combined with a ball mill. In an AG mill no grinding media is added, while in SAG mills the charge is supplemented with steel balls. As more steel balls are added the transition from a SAG to a ball mill occurs.

![https://www07.abb.com/images/librariesprovider119/default-album/milling-circuitb13696f1c1f463c09537ff0000433538.jpg?sfvrsn=8fc2f509_1](https://www07.abb.com/images/librariesprovider119/default-album/milling-circuitb13696f1c1f463c09537ff0000433538.jpg?sfvrsn=8fc2f509_1)

Figure 2: Illustration of a typical milling circuit

Optimization objectives for a grinding circuit is to improve the quality of the product, maximize production, decrease specific energy consumption, reduce the usage of grinding media and to improve process stability. Each of the criteria can have a maximum at different operating conditions, as shown in Figure 3 (a).

![https://www07.abb.com/images/librariesprovider119/default-album/process-parameters.jpg?sfvrsn=cd2af209_1](https://www07.abb.com/images/librariesprovider119/default-album/process-parameters.jpg?sfvrsn=cd2af209_1)

Figure 3 (a): Process parameters

Thus, to achieve the optimal operational state a trade-off of the main process parameters should be made. Advanced process control is a useful tool to balance these objectives in real-time and to optimize the economic model of the plant, shown in Figure 3 (b).

![https://www07.abb.com/images/librariesprovider119/default-album/economic-objective-function51df91f1c1f463c09537ff0000433538.jpg?sfvrsn=6f2bf209_1](https://www07.abb.com/images/librariesprovider119/default-album/economic-objective-function51df91f1c1f463c09537ff0000433538.jpg?sfvrsn=6f2bf209_1)

Figure 3 (b): Economic objective function

# **ABB Ability™ Expert Optimizer**

Several challenges may exist when controlling a grinding process. There is usually a strong coupling between the variables, large time delays, uncontrollable disturbances, nonlinear process behavior and a lack of instrumentation. The need for advanced control techniques are therefore clear. ABB’s Expert Optimizer is geared to tackle these problems with an extensive set of tools in its arsenal.ABB Ability™ Expert Optimizer constantly looks to minimize process variability and drive the process to an optimum, defined by the user. The tools available in the EO toolbox include: Model Predictive Control, Fuzzy Logic, Rule Blocks & Logic as well as the ability to develop Soft Sensors and Inferentials.

![https://www07.abb.com/images/librariesprovider119/default-album/figure-4-expert-optimizer-ui.jpg?sfvrsn=cd15f209_1](https://www07.abb.com/images/librariesprovider119/default-album/figure-4-expert-optimizer-ui.jpg?sfvrsn=cd15f209_1)

Figure 4 Expert Optimizer UI

For the problem at hand, a Model Predictive Controller (MPC) solution was developed. With the availability of the digital twin platform the MPC could be rigorously tested, adapted, and tuned before being subjected to a benchmarking exercise. A comprehensive number of simulations were run in the simulation environment to test the performance of the control strategy. The MPC solution in EO was then compared to the current control strategy onsite. The main results from this exercise are listed below.

# **MPC vs Existing control strategy**

- Improved throughput – Ranged from 1% to 3%
- Improved maximization of torque – Ranged from 1% to 7%
- Improved disturbance rejection – Ranged from 0.5% to 3.5%
- Improved response time and circuit stability – Reduced STD > 5%

# **General advantages of MPC**

- Multivariable control
- Constraint aware control
- Optimization of key process variables
- Maximization of torque
- Maximization of feed
- Optimize grind – by minimizing speed
- Uses the RPM in the entire load-range
- Better at handling multiple conditions

Further work could see the inclusion of our future solution ABB Ability™ Cascade Monitoring (for more information please contact us) into the Expert Optimizer solution strategy. ABB Ability™ Cascade Monitoring is a device that attaches to the shell of the mill to transmit milling features such as toe angle and strike amplitude wirelessly to a base station for consumption in the control system and Expert Optimizer. Benefits here could be an increase in grinding efficiency by reduced variation around milling features and possibly reduced liner wear due to minimizing liner strikes above certain angles specified by operators.

# **Process simulation and Challenges**

The process is modelled using Dymola and equations based in literature describes the physics. The model was validated against site tests at development. However, recent changes on site, made it necessary to update the model to represent the current state of the circuit. The main change was the addition of a pebble crusher. It is critical to have a simulation that describes the current state of the process, and this can often be a challenge as simulation models need to be manually updated based on the many changes that might occur at site. It is not always clear exactly what has changed, if equipment has been replaced or upgraded, major changes in ore minerology etc. Finding and implementing this type of information is a key part of setting up a virtual environment for control development.

![https://www07.abb.com/images/librariesprovider119/default-album/dymola-process-model.jpg?sfvrsn=b266f109_1](https://www07.abb.com/images/librariesprovider119/default-album/dymola-process-model.jpg?sfvrsn=b266f109_1)

Figure 5 Dymola process model, developed in close cooperation with a specialist simulation supplier

In the process of updating the simulation some additional step tests on site were necessary. Based on the new step tests the model could be parametrized to better describe the current behavior of the mill.The process simulation communicates around 35 signals over OPC to the 800xA virtual plant. In addition to these signals there are several internal states in the 800xA virtual plant that need to be simulated to avoid interlocks on equipment and ensure minimal interruptions.The main challenge of relying on Digital Twins for testing or training scenarios is the fidelity of the simulation. If there is an existing simulation available that has been proven to be accurate and mimic real plant conditions and behavior, these can be leveraged to great use, as has been the case with Boliden and ABB. However, this is not necessarily the norm. It is difficult to develop high fidelity models quickly for minerals processing and takes considerable maintenance effort to ensure their accuracy is sustained over time. Therefore, applying Digital Twins for simulation testing before implementing an Advanced Process Control solution on site may not always be the most practical or cost-effective step in realizing process plant optimization. Similar benefits may be achieved by identifying dynamic models directly from step test data from the actual plant, where the majority of benefits may be achieved at considerably less project cost.It may be difficult to motivate the development of a high-fidelity model for purposes specific for control development. The benefit of developing a model is when it can be used for multiple purposes and applications. For example, continuous improvement projects and research or the effect of adding, removing or rearranging equipment in the plant. And perhaps (in the future) as an online digital twin monitoring system that predicts future events and states based on data and measurements.

# **An Alternative Approach - Data driven methods in combination with Digital Twins**

The same Digital Twin process simulation model has previously been used by Boliden together with ABB to investigate the possibility of machine learning based controls for the mill comminution circuit. That work is described by UMEÅ university with ABB Corporate Research  and shows potential for using reinforcement learning in combination with process simulation environments to quickly gain a highly adaptive control strategy. There are many issues that remain to be solved before implementing into actual plant production. However, it is worthwhile further investigating as to how these types of technologies could best benefit operations in a practical sense.

It is not unlikely that a combination of MPC and machine learning would be deployed together. The MPC would, at least initially, have the direct control, while the machine learning component monitors the process dynamics and continuously adapt the MPC to better handle the changes in the underlying process. Currently parametrization and model updates to any control is rather manual, but by utilizing data driven tools, i.e. machine learning, it is theoretically possible that part of this work could be automated to ensure a higher degree of optimization at all times.

# **References**

[1] Hallén, M. (2018). Comminution control using reinforcement learning : Comparing control strategies for size reduction in mineral processing (Dissertation). Retrieved from [UMEA University](http://umu.diva-portal.org/smash/record.jsf?dswid=-4940&pid=diva2%3A1263038)[2] https://commons.wikimedia.org/wiki/File:Reinforcement_learning_diagram.svg