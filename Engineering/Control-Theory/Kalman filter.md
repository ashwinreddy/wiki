**Kalman filter** allows us to estimate hidden state from observations and a linear model. We will assume that the states $x$ and observations $y$ are given by

\begin{align}
X_n &= AX_{n-1} + V_n \tag{System Evolution} \\\\
Y_n &= CX_n + W_n \tag{Observation}
\end{align}

# Mathematical idea

From the [[linear least squares estimate]]

# Scalar filter

First, let $\hat{x}_{0 \mid 0} = \mathbb{E}[X_0]$ and $\hat{\sigma}^2\_{0 \mid 0} = \mathbb{V}[X_0]$. 

\begin{align}
\hat{x}\_{n \mid n} &= \hat{x}_{n \mid n - 1} + k_n \tilde{y}_n \\\\
\tilde{y}\_n  &= y_n - a\hat{x}\_{n - 1\mid n - 1} \\\\
k_n &= \frac{\sigma^2\_{n \mid n - 1}}{\sigma^2\_{n \mid n - 1} + \sigma_w^2} \\\\
\sigma^2\_{n \mid n - 1} &= a^2 \sigma\^2\_{n - 1 \mid n - 1} + \sigma\_v^2 \\\\
\sigma^2\_{n \mid n} &= \sigma^2\_{n \mid n - 1}(1 - k_n)
\end{align}

The steps are to calculate

1. Compute $\hat{x}_{1 \mid 0}$ and $\hat{\sigma}^2\_{1 \mid 0}$.
2. Compute $k_1$
3. Compute $\hat{x}_{1 \mid 1}$.
4. Compute $\hat{\sigma}^2_{1 \mid 1}$
5. Compute $\hat{x}_{2 \mid 1}$
6. Compute $\hat{\sigma}^2_{2 \mid 1}$
7. Compute $k_2$
8. Compute $\hat{x}_{2 \mid 2}$

[[https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/]]