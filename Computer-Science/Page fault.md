A **page fault** occurs when the [[page table entry|page table]] for a [[virtual page|page]] has valid bit set to 0. That means you're trying to access memory that isn't actually in physical memory at the moment.


Let's assume the page fault didn't occur because the address was invalid. If the address maps to a page that was put on the disk, we could transfer that page to memory (evicting another page if needed) and add the mapping to the page table and the [[translation lookaside buffer]].