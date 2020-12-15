**Page table** is a table stored in memory and keeps track of valid VPN to PPN [[page]] mappings. The [[translation lookaside buffer]] is a cache for the page table.

Page table entry
: A stored row of the page table.


||Valid|Dirty|Permission|PPN|
|-|-----|-----|----------|----|
| Page entry (VPN: 0) | | |||
| Page Entry (VPN: 1) |

The valid bit is 1 iff the entry is valid, corresponding physical page is in main memory. Otherwise we have a page fault, explained below.

The dirty bit is 1 if the page has been written to, marking that we will need to update the disk upon eviction.

# PPN

The address is similar in format to a [[virtual address|virtual address space]]:

|Physical page number (PPN) |Page offset|
|------------------|-----------|

The page offset is shared between the two, but 

$$
\text{PPN bits} = \lg \text{Physical Address Space} - \text{Offset bits}
$$

where 

$$
\text{Offset bits} = \lg \frac{\text{Bytes}}{\text{Page}}
$$

# Errors

Protection Fault
: The page table entry for a virtual page has permission bits prohibiting a requested operation.

Page Fault
: The page table entry for a virtual page has valid bit set to 0.

Let's assume the page fault didn't occur because the address was invalid. If the address maps to a page that was put on the disk, we could transfer that page to memory (evicting another page if needed) and add the mapping to the page table and the [[translation lookaside buffer]].