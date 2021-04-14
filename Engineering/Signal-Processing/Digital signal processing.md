**Digital signal processing**

# Discrete-time processing of continuous signal


@startuml
Input - [C/D]
[C/D] <-- T
[C/D] -> [DT System]
[DT System] -> [D/C]
[D/C] <-- T
[D/C] -> Output
@enduml