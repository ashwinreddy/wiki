The **variance** of a [[random variable]] is a measure of spread by seeing on average how far away the variable $X$ is from its mean $\mu = \mathbb{E}[X]$.

$$
\mathbb{V}[X] \doteq \mathbb{E}\left[(X - \mu)^2\right]
$$

Computationally, it is more convenient to write

$$
\mathbb{V}[X] = \mathbb{E}\left[X^2\right] - \mu^2
$$

It is the [[covariance]] of a variable with itself.

\begin{equation}
\mathbb{V}[X + Y] = \mathbb{V}[X] + 2\mathrm{cov}(X, Y) + \mathbb{V}[Y]
\end{equation}