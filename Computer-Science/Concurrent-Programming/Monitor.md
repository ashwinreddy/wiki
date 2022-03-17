A **monitor** is a [[lock]] with [[condition variable]](s). When a [[thread]] holds the lock, it can do the following

* **Wait** - release lock and suspend execution of calling thread
* **Signal** - wake up next waiting thread in queue
* **Broadcast** - wake up all waiting threads in queue