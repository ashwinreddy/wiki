The **Ford-Fulkerson algorithm** finds a [[max flow|maximum flow problem]] solution. The basic idea is to keep finding $s-t$ paths iteratively and pushing flow amount that saturates the bottleneck edge in the [[residual graph|maximum flow problem#residual]].

# Algorithm

* While there exists an augmenting path in $G_f$
    1. Find an arbitrary augmenting path $P$ from $s$ to $t$
    2. Augment flow $f$ along $P$
    3. Update $G_f$

# Runtime

The runtime is $\order{mF}$ where $m$ is the number of edges and $F$ is the maximum flow.