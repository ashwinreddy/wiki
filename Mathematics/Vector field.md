A **vector field** assigns [[tangent vectors|tangent vector]] to points on a [[manifold]] $M$. The signature is manifold to [[tangent bundle]].

\begin{align}
F: M &\to TM \\\\\
p &\mapsto F(p) \in T_p M
\end{align}

A vector field on $\RR^n$ can be written

$$
V = \sum_{i=1}^n v_i \pdv{}{x_i}
$$

# Construction



But we also need to ensure that $F(p)$ for a point $p \in M$ belongs to its tangent space. Consider $p$ a projection from $TM$ to $M$ that takes a tangent vector to its point. $F$ must also satisfy

\begin{equation}
p \circ F = \operatorname{id}
\end{equation}

Shortcircuiting the mathematical construction, a vector field maps open subsets of $\RR^n$ to $\RR^n$ once a choice of coordinates has been imposed.
