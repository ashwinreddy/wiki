**Virtual memory** gives the illusion of a large private address space[^start] to each process that it believes belongs entirely to itself. Thus, virtual memory allows multiple processes to simultaneously occupy memory, and doesn't allow programs to write to other's memory, providing memory, security, and protection. 

1. [[Paging]]: memory is split into [[pages|page]]
2. A [[page table]] tracks mappings from part of [[virtual address space]] to a part of physical address.

