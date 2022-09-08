**Least squares** is a method to estimate the parameters $\beta$ to a function $f$ by minimizing $S = \sum_i r_i^2$ where $r_i = y_i - f(x_i, \beta)$

$$
\hat\beta = \arg\min_\beta \lVert Y - X\beta \rVert_2^2
$$

Take a [[gradient]] and set it equal to 0.

$$
\nabla_\beta \left[ \langle Y, Y \rangle - 2 \langle X\beta, Y \rangle + \langle X\beta, X\beta \rangle \right] = 0.
$$