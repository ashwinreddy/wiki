**Linear programming** is optimization (min or max) with [[linear|linear map]] objectives and constraints, equations and/or inequalities. The canonical form is

$$
\begin{aligned}
\min \quad & c^\mathsf{T} x \\\\
\textrm{s.t.} \quad & Ax \geqslant b\\\\
  & x \geqslant 0,
\end{aligned}
$$

for $x \in \RR^n$, $A \in \RR^{m \times n}$, $b \in \RR^m$, and $c \in \RR^n$.

There are only 3 situations:

1. Optimum achieved at vertex of feasible region.
2. Problem infeasible.
3. Feasible region unbounded.