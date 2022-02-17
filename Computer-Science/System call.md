A **system call (syscall)** is a programmatic call to the [[kernel]] requesting something.

The kernel system call handler does the following:

1. Locate arguments on user stack
2. Copy arguments to kernel stack
3. Validate arguments
4. Copy results back to user memory


---

1. Disable interrupts. We want everything afterward to run atomically.
2. Save stack pointer, instruction pointer, execution flags.
3. Switch to kernel stack.
4. Invoke Interrupt Handler
    1. Saves interrupted process state to stack
    2. Handle business
    3. Pop saved values from stack
    4. `iret`, all pointers are set back, resume normally