A **counting process** $N(t) \in \mathbb{Z}$ gives us a count at time $t \in \RR$, making it a [[random process]] which has right-continuous sample paths.

The time of $i$th arrival is given by

$$
T_i = \min \\{ t \geqslant 0: N(t) \geqslant i \\}.
$$

The interarrival time is

$$
S_i = T_i - T_{i-1},\qquad i \geqslant 1, \quad (T_0 = 0)
$$