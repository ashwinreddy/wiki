---
bibliography: "Mathematics/math.bib"
---

The **metric tensor** or **first fundamental form** $g$ is a [[tensor]] representing the generalized dot product for a manifold, which may vary at each point. The metric is bilinear, symmetric, and nondegenerate. In terms of signature, this requires a [[tangent bundle]].

> The metric tensor $g$ induces on each [[tangent plane|tangent space]] $T_p$ an [[inner product space]] that allows one to measure vector magnitudes (vector “lengths”) and angles/orthogonality between vectors. [@nielsen2018elementary]

\begin{equation}
g: TM \times TM \to \RR
\end{equation}

$$
\langle X, Y \rangle = \sum_{ij} g_{ij} X_i Y_j
$$

$$
\dd{s}^2 = g_{ij} \dd{x}^i \dd{x}^j
$$

$$
\cos\theta = {g(u, v) \over \sqrt{g(u, u)g(v,v)}}
$$

There is a [[quadratic form]]

$$
q(X) = g(X, X)
$$

---