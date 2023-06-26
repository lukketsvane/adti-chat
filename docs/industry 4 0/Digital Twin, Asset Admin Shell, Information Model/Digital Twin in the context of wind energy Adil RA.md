# Digital Twin in the context of wind energy: Adil RASHEED

Digital Twin in the context of
wind energy
Adil RASHEED
Department of Engineering Cybernetics
Norwegian University of Science and Technology
Content
What is digital twin and its
•
capability ?
Challenges in achieving high
•
capability level digital twin
Potential solutions we are
•
working on
The way forward
•
Digital Twin
Big data
Capability levels
DNV GL report
Technology Watch
Through a technical survey with Statkraft, Kongsberg Maritime,
Kongsberg Digital, DNV Maritime, DNV Energy Systems, Eidel,
4Subsea, Total Energies, Cognite, Vard, Force Technology, SNSK,
Aker Offshore, Trønderenergi
Digital Twin: Challenges
Develop common terminologies
•
• Digital twin
• Capability levels
Major challenges from the industrial perspective
•
• Data related
• Model related
• Industrial acceptance
Data-related challenges
• Data quality
• Data sharing and security
• Lack of systematic collection of
data
• Data silos and interoperability
• Big and sparse data issues
• Ambiguity regarding the choice of
standards, ontologies
• Choice of data management
solutions
• Talent gap
Model-related challenges
Accuracy and certainty
•
Computational efficiency
•
Generalizability
•
Self-evolving
•
Trustworthiness
•
Interoperability
•
Robustness and stability
•
Industrial acceptance
Little consensus on the meaning of DT
•
Little awareness about the values that DTcan generate
•
Insufficient to categorize DT using Technology readiness
•
level
Enabling twin projections
•
Security and privacy
•
Lack of appropriate business models
•
Addressing the data related
challenges
SINTEF D talk
Cognite talk
Addressing the model
related challenges
By hybridizing physics-base and data-driven models
Physics Based Modeling Data Driven Modeling Hybrid Analysis and Modeling
 Generalizable  Non-generalizable  Generalizable
 Trustworthy  Blackbox  Trustworthy
 Computationally inefficient  Computationally efficient  Computationally efficient
 Static  Self-adapting  Self-adapting
Hybrid Analysis and Modeling is defined as a modeling approach that combines the
interpretability, robust foundation and understanding of a physics based modeling
approach with the accuracy, efficiency, and automatic pattern-identification
capabilities of advanced data-driven ML and AI algorithms.
Physics-Guided Machine Learning involves injection
of partial knowledge into an intermediate layer of a
neural network
Corrective Source Term Approach uses a neural
PGML
network to correct a physics based model for
unknown / unmodelled physics
CoSTA
Data Driven Equation Discovery does not require any
ROM
knowledge of the first principle to derive equations /
new physics
SAFE RL
Generative Adversarial Networks can be utilized
to generate high fidelity results from coarse
DDED simulations
GANS
Safe Reinforcement Learning ensures safe model
free control
Reduced Order Model gives online computational
efficiency at the expense of expensive offline
simulations
PGNN CoSTA DDED
DDM
PGML
PBM
DDM
CoSTA
Aerodynamic characteristics of the airfoil computed using PGML heat transfer with unknown source term modelled using CoSTA Deriving equation from data
Bilinear interpolation GANS Ground Truth
2D high resolution wind field in the Bessaker wind farm recovered from Stabilization of a floating wind turbine using SAFE RL
low resolution simulaiton using GANS Turbulent flow modeling around a 3D airfoil using ROM
GANS SAFE RL ROM
Addressing industrial
acceptance
Through demonstration
Going forward
Map the available research expertise with the research
•
challenges
Use the two use cases to bring all the research activities
•
together for demonstration
Expand the Zefyros case to create a reference wind farm
•

Digital Twin in the context of
wind energy
Adil RASHEED