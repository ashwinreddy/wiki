**Linear programming** is optimization with [[linear|linear map]] objectives and constraints. 

$$
\begin{aligned}
\min_{w,b,\xi} \quad & \frac{1}{2}w^{t}w+C\sum_{i=1}^{N}{\xi_{i}}\\
\textrm{s.t.} \quad & y_{i}(w\phi(x_{i}+b))+\xi_{i}-1\\
  &\xi\geq0    \\
\end{aligned}
$$

There are only 3 situations:

1. Optimum achieved at vertex of feasible region.
2. Problem infeasible.
3. Feasible region unbounded.