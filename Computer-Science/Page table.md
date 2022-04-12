A **page table** maps virtual addresses to physical addresses. Specifically, it maps VPNs to PPNs. It is stored in memory. The [[translation lookaside buffer]] is a cache for the page table.

Page table entry
: A stored row of the page table.


||Valid|Dirty|Permission|PPN|
|-|-----|-----|----------|----|
| Page entry (VPN: 0) | | |||
| Page Entry (VPN: 1) |

The valid bit is 1 iff the entry is valid, corresponding physical page is in main memory.

The dirty bit is 1 if the page has been written to, marking that we will need to update the disk upon eviction.


# Errors

* Protection Fault
: The page table entry for a virtual page has permission bits prohibiting a requested operation.

* [[Page Fault]]