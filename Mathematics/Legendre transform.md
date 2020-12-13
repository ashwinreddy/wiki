The **Legendre transform** of a [[convex function]] $f: I \to \RR$ for an interval $I \subseteq \RR$ is given by

$$
f\^\star\left(p\right) = \sup_{x \in I} (px - f(x))
$$

Recall that the equation for the tangent line of $f$ at $x_0$ is given by

$$
\mathsf{tangent}_{x_0}(x) = f(x_0) + f'(x_0)(x-x_0)
$$

If we label $p = f'(x_0)$, then we could say

$$
\mathsf{tangent}_{x_0}(0) = f(x_0) - px_0 
$$

Intuitively, then

$$
f^\star(p) = \mathsf{tangent}_{x_0(p)}(0)
$$

It is the negative of the $y$-intercept of the tangent line to the graph of $f$ that has slope $p$.