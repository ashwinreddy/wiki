**Page table**. Each process gets a page table; the [[operating system]] chooses correct page table and keeps track of which process is active. The memory manager 

1. Gets the page number from the [[virtual address|virtual address space]]
2. Looks up the page address in page table
3. Computes physical memory address with sum of page address and offset

Example:

[[https://cs61c.org/hw/img/pt.png]]