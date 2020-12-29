A **vector field** assigns [[vectors|vector]] to a [[manifold]] is a [[tensor field]]. Formally, it is a [[tensor field]] that assigns [[tangent vectors|tangent vector]]. Say, for example, that $X$ is a vector field on $M$. Then, for every point $p$ on the manifold, the [[vector]] outputted from the field must belong to the [[tangent space]] for $p$.

$$
X(p) \in T_p M
$$

The signature is therefore manifold (where points live) to [[tangent bundle]] (where tangent vectors live). A common notation for the set of vector fields on $M$ is $\mathfrak{X}(M)$.

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
