**Translation lookaside buffer (TLB)** is a small, fully asssociate cache that exists in hardware. It is connected to the [[page table]]. A helpful diagram is here

@startuml
package "Translation Unit" {
  [TLB]
  [Page Table]
}

package "Memory Unit" {
    [Cache]
    [Memory]
}

[CPU]

[CPU] -> [TLB]: V. Addr
[TLB] <-> [Cache]: P. Addr
[TLB] <..> [Page Table]
[Cache] <..> [Memory]
@enduml

# Algorithm

@startuml
start
:Get virtual page number (VPN) from virtual address (VA);
if (Translation Lookaside Buffer(TLB) has VPN)
endif
@enduml