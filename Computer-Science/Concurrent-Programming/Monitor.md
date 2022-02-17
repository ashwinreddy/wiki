A **monitor** is a way of handling synchronization in a more sophisticated way than a [[semaphore]]. It tracks shared data and then it uses locks to enforce synchronization rules.

By definition, a monitor is simply a [[lock]] and zero or more condition variables for managing concurrent access to shared data. With this, we can guarantee mutual exclusion.




# Condition variable

Condition variable is a queue of threads waiting for something inside the critical section.