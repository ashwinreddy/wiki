A **thread** is a single unique execution context. A thread is _executing_ on a processor when it is _resident_ in the [[processor register]].

Resident
: Registers hold root state (context) of thread



logical sequence of instructions, with its own execution state. With multiple physical CPUs, OS can run different thread on different CPU (literally run in parallel). You can also have fewer CPUs than threads -- the OS will give the illusion of running multiple threads at once.

Each hardware thread has its own cache, which can lead to [[cache incoherence|cache coherence]].