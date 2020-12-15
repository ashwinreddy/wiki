**Page table** is stored in memory and keeps track of valid VPN to PPN mappings. 

Page table entry
: A stored row of the page table.

@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
@enduml