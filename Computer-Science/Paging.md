**Paging** is a scheme where memory is split into [[pages|page]]. Each [[process]] has a table of pages that belong to it, called the [[page table]]. The current page table being used is tracked by the **Page Table Base Register (PTBR)**.



For example, say process A has 6 pages that belong to it. These 6 pages could be anywhere in physical memory. When the operating system switches the active program, it swaps out for the appropriate page table _after_ saving the table and program data to disk.