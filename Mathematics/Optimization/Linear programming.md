**Linear programming (LP)** is optimization with [[linear|linear map]] objectives and constraints. For $x \in \RR^n$, $A \in \RR^{m \times n}$, $b \in \RR^m$, and $c \in \RR^n$,

\begin{equation}
\begin{aligned}
\min \quad & \mathbf{c}^\mathsf{T} \mathbf{x} \\\\
\textrm{s.t.} \quad & \mathbf{Ax} \geqslant \mathbf{b}\\\\
  & \mathbf{x} \geqslant 0,
\end{aligned}
\tag{Primal Canonical Form}
\end{equation}


\begin{equation}
\begin{aligned}
\max \quad & \mathbf{b}^\mathsf{T} \mathbf{y} \\\\
\textrm{s.t.} \quad & \mathbf{A}^\mathsf{T}\mathbf{y} \leqslant \mathbf{c}\\\\
  & \mathbf{y} \geqslant 0,
\end{aligned}
\tag{Dual Problem}
\end{equation}

The dual problem can help us understand the primal problem.

* Every feasible solution of the dual is a bound to any solution of the primal.

# Feasibility

1. **Feasible**. The feasible region is necessarily a convex polyhedron. If there is an optimal, it's at a vertex.
2. **Infeasible**. The dual is unbounded or infeasible.
3. **Unbounded**. The dual is infeasible.


# Solution


# Runtime

Linear programming can be done in polynomial time.