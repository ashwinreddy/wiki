**Page table** is stored in memory and keeps track of valid VPN to PPN [[page]] mappings. The [[translation lookaside buffer]] is a cache for the page table.

||Valid|Dirty|Permission|PPN|
|-|-----|-----|----------|----|
| Entry 0 | 1 = valid entry, i.e. page in physical memory. 0 = page fault | 1 if the page has been written to, will need to update the disk upon eviction| read/write abilities||
| Entry 1 |


Page table entry
: A stored row of the page table.
