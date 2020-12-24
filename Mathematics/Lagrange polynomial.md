A **Lagrange polynomial** is a [[polynomial]] interpolates a set of $\\{(x_i, y_i)\\}_{i = 0, \dots, k}$ is given as a linear combination of basis functions:

$$
L(x) = \sum_{j=0}^k y_j \ell_j(x)
$$


where the basis is given by

$$
\ell_j(x) = \prod_{\substack{0 \leq m \leq k \\\\ m \neq j}} \frac{x - x_m}{x_j - x_m}
$$