A **quadratic program** has a quadratic convex objective with $H$ symmetric and linear constraints:

$$
\min_\vec{x} \frac{1}{2}\vec{x}^\top H \vec{x} + \vec{c}^\top \vec{x} + d \\ \text{s.t. } A\vec{x}\leq \vec{b}, C\vec{x} = \vec{e}
$$


If we just have equality constraints, we can turn it into an unconstrained quadratic program.