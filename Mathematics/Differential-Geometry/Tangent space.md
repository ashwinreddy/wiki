A **tangent space** $T_pM$ for a [[differentiable manifold]] $M$ is a [[vector space]].

First, consider all the curves that go through $p$ at time 0.

$$
S = \{\gamma: I\to M | \gamma(0) = p\}
$$

Then define an [[equivalence relation]] $~$:

$$
\gamma \sim \delta \iff (x \circ \gamma)'(0) = (x \circ \delta)'(0)
$$

Then,

$$
T_p M = S / \sim
$$