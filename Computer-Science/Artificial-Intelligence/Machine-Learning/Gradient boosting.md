**Gradient boosting** is a technique for [[supervised learning]] that uses [[gradient descent]] on [[decision tree|decision tree learning]]. Given $K$ trees, our predicted label $\hat{y}$ for input $x_i$ is

$$
\hat{y}\_i = \sum_{k=1}^K f_k(x_i)
$$

It is intractable to learn all trees at once, so we do **additive learning**, in which we add one tree at a time. So the prediction after $t$ timesteps of introducing trees is

$$
\hat{y}_i^{(t)} = \hat{y}_i^{(t-1)} + f_t(x_i)
$$

The cost function is

$$
\mathsf{objective}^{(t)} = \sum_{i=1}^n  \ell(y_i, \hat{y}\_i^{(t-1)} + f_t(x_i) ) + \Omega(f_t)
$$
