A **quadratic program** is a [[second-order cone program]] that has a quadratic convex objective with $H$ symmetric and linear constraints:

$$
\min_\vec{x} \frac{1}{2}\vec{x}^\top H \vec{x} + \vec{c}^\top \vec{x} + d \\ \text{s.t. } A\vec{x}\leq \vec{b}, C\vec{x} = \vec{e}
$$

Of course, in the absence of any constraints we can just set the gradient equal to 0. If we have **only** equality constraints, we can turn it into an unconstrained quadratic program!

The feasible set will be those $\vec{x} = \vec{x}_0 + N\vec{z}$ for $\vec{x}_0$ a solution to $A\vec{x}=\vec{b}$ and $N$ the [[null space]] of $A$

Examples:
* [[Lasso]]