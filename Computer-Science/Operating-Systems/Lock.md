A **lock ** ensures that only one thread does a particular action at a time. When a thread holds a lock, no other lock can hold it. In a typical workflow, a thread acquires a lock, performs memory operations on shared data, then releases the lock.

A user thread can aquire a lock without entering a kernel.