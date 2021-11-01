**Linear programming (LP)** is optimization with [[linear|linear map]] objectives and constraints. For $x \in \RR^n$, $A \in \RR^{m \times n}$, $b \in \RR^m$, and $c \in \RR^n$,

\begin{equation}
\begin{aligned}
\min \quad & \mathbf{c}^\mathsf{T} \mathbf{x} \\\\
\textrm{s.t.} \quad & \mathbf{Ax} \geqslant \mathbf{b}\\\\
  & \mathbf{x} \geqslant 0,
\end{aligned}
\tag{Canonical Form}
\end{equation}

# Feasibility

1. **Feasible**. The feasible region is necessarily a convex polyhedron.
2. **Infeasible**. 
3. **Unbounded**. 

# Dual

The dual problem is

$$
\begin{aligned}
\max \quad & b^\mathsf{T} y \\\\
\textrm{s.t.} \quad & A^\mathsf{T}y \leqslant c\\\\
  & y \geqslant 0,
\end{aligned}
$$


# Solution


# Runtime

Linear programming can be done in polynomial time.