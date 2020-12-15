**Page table** is stored in memory and keeps track of valid VPN to PPN mappings. 

Page table entry
: A stored row of the page table.

@startuml
[CPU]
[TLB]
[Page Table]

[CPU] -> [TLB]: V. Addr
[TLB] <-> [Page Table]
@enduml