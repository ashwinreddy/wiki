The **linear least squares estimator (LLSE)** estimates a [[random variable]] $Y$ given a correlated random variable $X$ by finding the best affine/linear function of $X$. In other words we're trying to project $Y$ onto $U = \operatorname{span}\\{1, X\\}$ if we think about the [[Hilbert space]] of random variables.

\begin{equation}
L[Y \mid X] = \mu_Y + \frac{\sigma_{XY}}{\sigma_X^2}(X - \mu_X)
\end{equation}

This estimator is unbiased in the sense that

$$
\mathbb{E}[Y - a - bX] = 0,
$$

and it achieves error of

$$
\mathbb{E}[(Y - L[Y \mid X])^2] = \sigma_Y^2 - \frac{\sigma_{XY}\^2}{\sigma_X^2}
$$

where $\mu$ is mean and $\sigma_{XY}$ is [[covariance]] while $\sigma_X^2$ is [[variance]].

# Orthogonal Updates

Suppose we want to find $L[Y \mid X, Z]$. It turns out that

$$
L[Y \mid X, Z] = L[Y \mid X] + L[Y \mid \tilde{Z}]
$$

where $\tilde{Z} = Z - L[Z \mid X]$ is the **innovation**.