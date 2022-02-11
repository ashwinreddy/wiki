A **semaphore** is a [[synchronization]] variable with a nonnegative integer. It is similar to a [[lock]]

Down / Wait / P
: Waits for semaphore to become positive, then decrements it by 1

Up / Post / V
: Increment semaphore by 1

Example. Suppose you only want 162 items in a critical section. Then initialize a semaphore with value 162 and decrement every time a new item is added. Since the decrement needs the semaphore to be positive, if there is no space, they are denied. When someone leaves, then post.