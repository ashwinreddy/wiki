**Page table** is stored in memory and keeps track of valid VPN to PPN [[page]] mappings. The [[translation lookaside buffer]] is a cache for the page table.

||Valid|Dirty|Permission|PPN|
|-|-----|-----|----------|----|
| Page entry (VPN: 0) | | |||
| Page Entry (VPN: 1) |

The valid bit is

0. Page fault: fetch page from disk, put into memory, and update page table
1. Entry is valid, page is physical memory

The dirty bit is 1 if the page has been written to, marking that we will need to update the disk upon eviction.

Page table entry
: A stored row of the page table.
