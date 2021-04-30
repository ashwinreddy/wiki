**Cooperative bargaining** is a [[cooperative game]]. Let's consider two people who are looking to agree on a point in some set $S$ and if they can't come to an agreement, they default to a point $\mathbf{d}$.

# Formalization

Let $S$ be a bounded convex set in $\RR^2$ and $\mathbf{d}=(d_1, d_2)$. A solution is a

$$
F(S, \mathbf{d}) = \mathbf{a} \in S.
$$

Where $\mathbf{a}=(a_1, a_2)$, payoffs for both players. The **Nash bargaining solution is**

$$
\max (x_1 - d_1)(x_2 - d_2) 
$$

\begin{aligned}
\max \quad & \frac{1}{2}w+C\sum_{i=1}^{N}{\xi_{i}}\\\\
\textrm{s.t.} \quad & y_{i}(w\phi(x_{i}+b))+\xi_{i}-1\\
  &\xi\geq0    \\
\end{aligned}
