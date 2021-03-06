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
!pragma useVerticalIf on
start
:Get virtual page number (VPN) from virtual address (VA);
if (Translation Lookaside Buffer (TLB) has VPN?) then (HIT)
else (MISS)
    if (Page table (PT) contains the VPN?) then (HIT)
    else (MISS)
    :**Page Fault**: fetch page from disk, store into memory, update page table;
    endif
    :Load page table entry into TLB;
endif
:Translate to page address (PA);
if (Address exists in cache?) then (HIT)
else (MISS)
:Get data from memory, store in cache;
endif
:Return Data to Process;
stop
@enduml