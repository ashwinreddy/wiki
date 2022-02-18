A **thread** is a single unique execution context for a [[process]]. The [[operating system]] schedules threads.



---

A thread is **executing** on a processor when it is **resident** in the [[processor register]].

A thread gets a kernel stack and user stack.

Resident
: Registers hold root state (context) of thread

logical sequence of instructions, with its own execution state. With multiple physical CPUs, OS can run different thread on different CPU (literally run in parallel). You can also have fewer CPUs than threads -- the OS will give the illusion of running multiple threads at once.

Each hardware thread has its own cache, which can lead to [[cache incoherence|cache coherence]].