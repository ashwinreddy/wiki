A **vector field** is a [[tensor field]] assigning to manifold $M$ [[vectors|vector]]. Suppose $p \in M$ is a point on a a manifold $M$. Then the vector field $X$ is such that

The signature is therefore manifold (where points live) to [[tangent bundle]] (where [[tangent vectors|tangent vector]] live). A common notation for the set of vector fields on $M$ is $\mathfrak{X}(M)$.

\begin{align}
\mathfrak{X}(M) \ni F: M &\to TM \\\\\
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
