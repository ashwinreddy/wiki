**Paging** is a scheme where each [[process]] gets a [[page table]] that assigns it memory [[pages|page]]. The current page table being used is tracked by the **Page Table Base Register (PTBR)**.



For example, say process A has 6 pages that belong to it. These 6 pages could be anywhere in physical memory. When the operating system switches the active program, it swaps out for the appropriate page table _after_ saving the table and program data to disk.