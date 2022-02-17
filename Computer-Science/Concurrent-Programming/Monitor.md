A **monitor** is a way of handling synchronization in a more sophisticated way than a [[semaphore]]. It tracks shared data and then it uses locks to enforce synchronization rules.

By definition, a monitor is simply a [[lock]] and zero or more condition variables for managing concurrent access to shared data. With this, we can guarantee mutual exclusion.




# Condition variable

Condition variable is a queue of threads waiting for something inside the critical section.

Operations:

- `wait(&lock)` means release the lock and go to sleep. 
- `signal` wakes up a waiter, if any.
- `broadcast` wakes up all waiters
-

# Mesa

# Hoare

The signaler gives up the lock, CPU to waiter. Waiter runs immediately. Waiter gives up lock, processor back to signaler when it exits the critical section or if it waits again.