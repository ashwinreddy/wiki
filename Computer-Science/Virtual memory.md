**Virtual memory** gives the illusion of a large private address space[^start] to each process that it believes belongs entirely to itself. Thus, virtual memory allows multiple processes to simultaneously occupy memory, and doesn't allow programs to write to other's memory, providing memory, security, and protection. This is all enabled by mapping [[virtual address space]] to a physical address.


[^start]: Starting at 0x0