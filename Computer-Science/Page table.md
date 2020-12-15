**Page table** is stored in memory and keeps track of valid VPN to PPN mappings. 

Page table entry
: A stored row of the page table.

@startuml

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

[CPU]
[TLB]
[Page Table]
[Cache]
[Memory]

[CPU] -> [TLB]: V. Addr
[TLB] <-> [Cache]: P. Addr
[TLB] <..> [Page Table]
[Cache] <..> [Memory]
@enduml