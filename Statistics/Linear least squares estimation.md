The **linear least squares estimator (LLSE)** estimates a [[random variable]] $Y$ given a correlated random variable $X$ by finding the best affine/linear function of $X$. In other words we're trying to project $Y$ onto $U = \operatorname{span}\\{1, X\\}$ if we think about the [[Hilbert space]] of random variables.

\begin{equation}
L[Y \mid X] = \mu_Y + \frac{\sigma_{XY}}{\sigma_X^2}(X - \mu_X)
\end{equation}

This estimator achieves error of

$$
\mathbb{E}[(Y - L[Y \mid X])^2] = \mathbb{V}Y - \frac{\operatorname{cov}(X,Y)^2}{\mathbb{V}X}
$$

where $\mu$ is mean and $\sigma_{XY}$ is [[covariance]] while $\sigma_X^2$ is [[variance]].