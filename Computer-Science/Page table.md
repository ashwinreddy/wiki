**Page table** maps page number to physical address (always in DRAM). Each process gets a page table and the [[operating system]] keeps track of which process is active so it knows which page table we're using. 


The memory manager uses the page table to go from virtual address to physical address. 

1. Gets the page number from the [[virtual address|virtual address space]]
2. Looks up the page address in page table
3. Computes physical memory address with sum of page address and offset

Example:

[[https://cs61c.org/hw/img/pt.png]]

# Hierarchical/Multilevel Page Table

For example, a level 1 page table would point to level 2 page tables which point to physical memory.