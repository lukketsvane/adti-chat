# The digital twin: from hype to reality

Created: June 23, 2023 3:18 PM

### ABB Review | 03/2021 | July 22, 2021 10:44 AMIncreasing demand for digitalization and the industrial internet of things (IIoT) makes the digital twin a key enabler for digital industries. How do digital twins improve digital technologies, drive the development and standardization of ­architectures and create new use cases and business models?

[Subscribe to ABB Review](https://global.abb/group/en/technology/abb-review/subscribe-to-abb-review)

**Somayeh Malakuti** ABB Corporate Research Center Ladenburg, Germany, somayeh.malakuti@de.abb.com

Digital representations have been used for many years to model information relating to assets over their lifecycle. These models were not known as “digital twins” until the term was first coined in 2003 in a university course. Over time, many different definitions of digital twin have emerged. These definitions typically focus on the digital twin’s particular use case. **→01**. Latterly, different consortia – such as the Industrial Internet Consortium (IIC), to which ABB contributed – set out to define digital twins world beyond the boundaries of specific use cases. For example, the IIC defines the digital twin itself as the digital representation of an entity (eg, device, production cell, or plant) that meets the requirements of a particular set of use cases [1,2]. This definition has two implications:

- Although many associate the digital twin with the IIoT, the definition places no emphasis on IIoT aspects as the notion of the digital twin (though not the name) predated the IIoT.
- Digital twins should be discussed in relation to enabling use cases, which determine the data, models, computations, and services to be offered.

![https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-01.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-01.jpg)

01 Digital twins are key enablers of digitalization in many industrial sectors. They are often defined by the setting in which they were used. Photo: ©Gorodenkoff/stock.adobe.com

**The digital twin in industrial systems**

The lifecycle data of industrial devices can be classified as engineering technology (ET) data, information technology (IT) data and operational technology (OT) data. This lifecycle data is often stored in different places and in different formats due to requirements of functionality, needs of diverse users, company mergers, etc. **→02**. These data silos lead to a lack of interoperability at multiple data access levels and require error-prone and time-consuming manual data exchanges. Combining data for harnessing by analytics applications is also made difficult.

![https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-02.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-02.jpg)

02 The digital twin addresses the data silo problem.

These problems can be solved by digital twins, which may be deployed locally or in the cloud. Here, the digital twin can offer a common information model for defining otherwise incompatible ET, IO and OT data. This model serves as the basis for application programming interfaces (APIs) to access data and to define semantic correlations between data sets that would ordinarily be dispersed. The digital twin can offer unified APIs for querying various types of lifecycle data, regardless of whether the data is stored in the cloud or in external data sources [4].

The maturity level of digital twins can be increased further by expressing correlations between different models embodied within the digital twin and deriving more reasoning from this information **→03**. Digital twin content can be extended even further by using machine learning and simulation models. Such enhancement increases the intelligence of the digital twin and allows better reasoning with regard to the status of the physical twin. It also provides support to real-time simulation models. More advanced use cases can be achieved if multiple models are combined – for example, to have intelligent simulation models to predict the status of a device.

![https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-03-EN.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-03-EN.jpg)

03 Digital twin maturity level.

In the IIoT era, technologies such as the cloud, edge computing, 5G connectivity and augmented reality move the digital twin concept to the next level by enabling improvements in digital technologies, development and standardization of architectures, creation of innovative interactions between systems or users, and establishment of business models **→04**.

![https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-04-EN.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-04-EN.jpg)

04 An overview of topics related to the digital twin.

With these technologies and interactions in place, digital twins can enable new use cases – for example, integrated information management across the value stream, integrated cloud-based engineering, plug-and-produce for field devices and virtual on-site support. Integrating digital twins into automation processes helps to decrease commissioning time and effort and shorten time to production commencement.

Two use cases – integrated cloud-based engineering and plug-and-produce for field devices – illustrate the benefits delivered by digital twins:

**Integrated cloud-based engineering**

Rather than consider the broad scope shown in **→02**, one may focus only on using the digital twin to enable integrated data exchange among tools. For example, device parameters used earlier can be stored as a dedicated model within the digital twin in the cloud so the engineering tool can later pick these out to initialize its engineering parameters correctly. The digital twin also enables cloud-based backup and restoring of engineering data.

**Plug-and-produce for field devices**

Today, configuration or replacement of field devices can often be laborious as potentially non-standardized information from different sources in different formats must be collated. The digital twin of a field device, however, enables a plug-and-produce scenario that speeds field device commissioning. Automatic device discovery and cloud computing combined with standardized information formats, such as AutomationML and OPC UA, can be used to automatically discover devices connected to the network, map engineering and operational parameters to each other, and download the appropriate parameters from the cloud to the devices. While the physical replacement still requires trained personnel, the digital twin allows instant reconfiguration without the need for a device or process expert.

**Digital twin standardization and initiatives**

There are various standardization activities in progress related to digital twins. For example, Aspect Object technology, standardized in IEC-81346, defines the so-called aspects needed to structure information related to various views (eg, product, function or location) of an industrial system. IEC 62832 defines a digital factory framework with the representation of the factory’s assets at its center, although this representation is not called a digital twin.

Over the past few years, more initiatives have appeared: IEEE P2806 aims to define the system architecture of digital representations of physical objects in factory environments, focusing on connectivity requirements and industrial artificial intelligence data attributes. Likewise, ISO/AWI 23247 drives the use of digital twins for manufacturing by defining a reference architecture.

While companies often offer digital twins as isolated solutions, many use cases could benefit from interactions between digital twins from different vendors. The German platform “Plattform Industrie 4.0” launched Asset Administration Shell [3] as the industrial digital twin for smart manufacturing to foster interoperability across the value stream.

As well as the IIC and Plattform Industrie 4.0, other groups exist – for example, the Industrial Digital Twin Association (a user organization for Plattform Industrie 4.0 with open source intentions); the Digital Twin Consortium [5], which drives consistency in vocabulary, architecture, security and interoperability; the Open Manufacturing Platform [6], which aims to offer platform-agnostic solutions; and the GAIA-X project [7], with interoperability at the level of information models and the digital twins as a cornerstone of its vision.

**The digital twin and digital business models and the future**

The digital twin lays the foundation for new digital services and collaborations and helps existing services become more accessible and more efficient. Further, since many production errors are caused by wrong or outdated data, having a broadly agreed means to access and exchange device-related data eases collaborative engineering throughout the lifecycle [8] **→05**.

![https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-05.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/digital_twin_m1016-05.jpg)

05 Digital twins can deliver broad access to device-related data and help eliminate production errors caused by wrong or outdated data.

In contrast to the physical device, a digital twin and all its aspects can be made widely available, with appropriate cyber security measures, allowing cloud-based “X-as-a-Service” applications. Moreover, integrated access to ET, IT and OT data via the digital twin APIs allows data access and usage rules to be made at the level of the digital twins. This managed data access eliminates the need to define such rules individually for each data source and facilitates the definition of usage policies for external consumers of the digital twin data.

There is no doubt about the critical role that the digital twin will play in the ongoing rapid digital evolution of industry. Through various projects and collaborations, and contributions to consortia such as IIC and Plattform Industrie 4.0, ABB is helping to drive the establishment of common definitions and standards for digital twins.

**References**

[1] Industrial Internet Consortium, “Digital twins for Industrial Applications.” Available: https://www.iiconsortium.org/pdf/IIC_Digital_Twins_Industrial_Apps_White_Paper_2020-02-18.pdf [Accessed February 10, 2021].

[2] Industrial Internet Consortium and Plattform Industrie 4.0, “The digital twin and Asset Administration Shell Concepts and Application in the Industrial Internet and Industrie 4.0.” Available: https://www.plattform-i40.de/PI40/Redaktion/EN/Downloads/Publikation/Digital-Twin-and-Asset-Administration-Shell-Concepts.pdf [Accessed February 10, 2021].

[3] Plattform Industrie 4.0, “Details of the Asset Administration Shell – Part 1: The exchange of information between partners in the value chain of Industrie 4.0.” Available: https://www.plattform-i40.de/PI40/Redaktion/DE/Downloads/Publikation/Details_of_the_Asset_Administration_Shell_Part1_V3.html [Accessed February 10, 2021].

[4] S. Malakuti et al., “A Four-Layer Architecture Pattern for Constructing and Managing Digital Twins,” Software Architecture, Springer International Publishing, pp. 231 – 246, 2019.

[5] The Digital Twin Consortium, https://www.digitaltwinconsortium.org/

[6] Open Manufacturing Platform, https://open-manufacturing.org/

[7] GAIA-X, https://www.data-infrastructure.eu/GAIAX/Navigation/EN/Home/home.html

[8] S. Malakuti et al., “The digital twin: An Enabler for New Business Models,” Automation 2019 conference, 2019.