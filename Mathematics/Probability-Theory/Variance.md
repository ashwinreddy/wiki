The **variance** of a [[random variable]] $X$ is a measure of spread by seeing on average how far away $X$ is from its mean or [[expected value]] $\mu = \mathbb{E}[X]$. It is also the [[covariance]] of a variable with itself.

$$
\mathbb{V}[X] \doteq \mathbb{E}\left[(X - \mu)^2\right]
$$

\begin{equation}
\mathbb{V}[X + Y] = \mathbb{V}[X] + 2\operatorname{cov}(X, Y) + \mathbb{V}[Y]
\end{equation}

So that if $X$ and $Y$ are independent, the variance of sums is the sum of variances.

# Computation

Computationally, it is more convenient to write

$$
\mathbb{V}[X] = \mathbb{E}\left[X^2\right] - \mu^2
$$