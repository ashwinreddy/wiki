**Lagrange interpolation** is a method of finding a degree _d_ polynomial that fits to _d+1_ points.

$$
\Delta_i (x) = \frac{\prod_{i \neq j} x - x_j }{\prod_{i \neq j} x_i - x_j}
$$

This polynomial has the following property where $\delta$ is the [[Kronecker delta]]

$$
Ddelta_i(x_j) = \delta_{ij}
$$

Then,

$$
p(x) = \sum_i y_i \Delta_i
$$