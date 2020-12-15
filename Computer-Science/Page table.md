**Page table** is stored in memory and keeps track of valid VPN to PPN mappings. 

Page table entry
: A stored row of the page table.

@startuml
DataAccess - [First Component]
[First Component] ..> HTTP : use
@enduml