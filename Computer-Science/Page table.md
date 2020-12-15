**Page table** is stored in memory and keeps track of valid VPN to PPN mappings. 

Page table entry
: A stored row of the page table.

@startuml

package "Translation Unit" {
  [TLB]
  [Page Table]
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