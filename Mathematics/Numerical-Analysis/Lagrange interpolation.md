**Lagrange interpolation** is a method of finding a degree $d$ polynomial that fits to points $\\{x_i, y_i\\}_i=1,\dots,d+1$.

$$
\Delta_i (x) = \frac{\prod_{i \neq j} x - x_j }{\prod_{i \neq j} x_i - x_j}
$$

This polynomial has the following property where $\delta$ is the [[Kronecker delta]]

$$
\Delta_i(x_j) = \delta_{ij}
$$

Then,

$$
p(x) = \sum_{i=1}^{d+1} y_i \Delta_i(x)
$$