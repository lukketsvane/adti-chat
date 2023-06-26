# COPA QuickStart training Session 3 Jan 2023 Part 8b TCO estimation

Total Cost of Ownership (TCO) model for comparing traditional industrial control system (ICS) with Open Process Automation control system (OPA)
On the TCO model sheet, the initial costs and ongoing costs to install, maintain, and replace an industrial control system are itemized to enable What-If calculations.
Initial (project) cost is modeled in rows 5 through 15.
Ongoing, annual maintenance cost is modeled in rows 17 to 26.
Upgrade replacement (migration) project cost is modeled in rows 33 to 44.
The cost model is a relative one that is based on the unit cost of the initial installation.
The cost for ongoing, annual sustainment is expressed as a fraction of initial cost (cell D18).
The itemized costs for an OPA system are represented as fractions of the traditional ICS item.
To account for the experience curve with new OPA technology, two cases are provided -- Early OPA and Mature OPA.
TCO for the initial installation and one economic life cycle is expressed in row 28. The economic life in years is input in cell C28.
The cost for a replacement project is also expressed as a fraction of the initial cost (cell D34).
An extended TCO (initial cost + first economic life + replacement project + second economic life) is expressed in row 46.
Cells into which data should be entered for What-If studies are highlighted with cyan color.
Equinor Proprietary
Assumption: Early years of OPA Assumption: Mature OPA ecosystem
Traditional ICS OPA Traditional ICS OPA Traditional ICS OPA Traditional ICS OPA
Fraction Relative to traditional Absolute of TEC fraction Relative to traditional Absolute of TEC fraction
Initial cost (TEC)
Goods
Hardware 1 0.35 0.100 0.035 1 0.55 0.100 0.055
)CET( Software licenses 0.20 1 0.65 0.100 0.065 1 0.80 0.100 0.080
Services
tsoc
Project management 0.15 1 1.25 0.150 0.188 1 1.05 0.150 0.158
laitinItsoc Engineering
In-house 1 1.10 0.250 0.275 1 1.00 0.250 0.250
0.50
Vendor/SI 1 0.75 0.250 0.188 1 0.75 0.250 0.188
Construction 0.15 1 1.00 0.150 0.150 1 1.00 0.150 0.150
1.00 1.000 0.900 90.0% 1.000 0.880 88.0%
Ongoing annual cost as
fraction of TEC
0.1
Ongoing annual cost (sustainment, not Fraction relative to
launna replacement) Fraction initial cost
Goods
Hardware (parts maintenance) 0.05 0.005 1 0.35 0.005 0.002 1 0.55 0.005 0.003
gniognOtsoc
Software licenses 0.10 0.010 1 0.65 0.010 0.007 1 0.80 0.010 0.008
Services
In-house staff 0.30 0.030 1 1.10 0.030 0.033 1 0.80 0.030 0.024
Vendor/Contractor 0.55 0.055 1 0.75 0.055 0.041 1 0.90 0.055 0.050
1.00 0.100 0.100 0.083 82.5% 0.100 0.084 84.3%
Economic life (yrs)
TCO (1) TCO (over assumed economic life) 10 2.00 1.73 86.3% 2.00 1.72 86.1%
Replacement project
cost as fraction of TEC
2
Fraction relative to
tcejorp Replacement project cost Fraction initial cost
Goods
Hardware 1 0.50 0.150 0.075
tnemecalpeR 0.15 0.300
Software licenses 1 0.50 0.150 0.075
Services
Project management 0.20 0.400 1 0.50 0.400 0.200
I/O replacement 0.35 0.700 1 0.50 0.700 0.350
Applications rewrites 0.20 0.400 1 0.10 0.400 0.040
HMI rewrites 0.10 0.200 1 0.10 0.200 0.020
1.00 2.000 2.000 0.760 38.0%
Extended TCO (Initial project + 1st
economic life + replacement project +
TCO (2)
2nd economic life)
(Assume mature OPA ecosystem) Traditional ICS OPA
5.00 3.33 66.5%