**Linear programming** is optimization (min or max) with [[linear|linear map]] objectives and constraints, equations and/or inequalities. 

# Canonical Form

The canonical form is

$$
\begin{aligned}
\min \quad & c^\mathsf{T} x \\\\
\textrm{s.t.} \quad & Ax \geqslant b\\\\
  & x \geqslant 0,
\end{aligned}
$$

for $x \in \RR^n$, $A \in \RR^{m \times n}$, $b \in \RR^m$, and $c \in \RR^n$.

# Dual

The dual problem is

$$
\begin{aligned}
\min \quad & b^\mathsf{T} y \\\\
\textrm{s.t.} \quad & A^\mathsf{T}y \leqslant c\\\\
  & y \geqslant 0,
\end{aligned}
$$


# Solution

There are only 3 situations:

1. Optimum achieved at vertex of feasible region.
2. Problem infeasible.
3. Feasible region unbounded.

# Runtime

Linear programming can be done in polynomial time.