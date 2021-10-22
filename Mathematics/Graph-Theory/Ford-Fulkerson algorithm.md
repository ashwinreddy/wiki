The **Ford-Fulkerson algorithm** finds a [[max flow|maximum flow problem]] solution. The basic idea is to keep pushing along $s-t$ paths in the [[residual graph|maximum flow problem#Residual graph]]

# Algorithm

* While there exists an augmenting path in $G_f$
    1. Find an arbitrary augmenting path $P$ from $s$ to $t$
    2. Augment flow $f$ along $P$
    3. Update $G_f$