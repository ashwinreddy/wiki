**Duality** refers to lower bounding the solution to

Primal problem
: \begin{align} p^* = &\min_{\vec{x}} f_0(\vec{x}) \\\\\ &f_i(\vec{x}) \leq 0,\quad 1\leq i \leq m \\\\\ &h_i(\vec{x}) = 0, \quad 1 \leq i \leq p. \end{align}

with the solution to 

Dual Problem
: \begin{equation}
d^* = \max_{\vec\nu, \vec{\lambda} \succcurlyeq 0}  g(\vec{\lambda}, \vec\nu)
\end{equation}

# Duality gap

Duality gap
: $p^* - d^* > 0$