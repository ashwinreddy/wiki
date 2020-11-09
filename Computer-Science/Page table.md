**Page table** maps page number to physical address. Each process gets a page table.


the [[operating system]] keeps track of which process is active so it knows which page table we're using. 


The memory manager 

1. Gets the page number from the [[virtual address|virtual address space]]
2. Looks up the page address in page table
3. Computes physical memory address with sum of page address and offset

Example:

[[https://cs61c.org/hw/img/pt.png]]