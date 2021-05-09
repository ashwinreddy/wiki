**Kalman filter** allows us to estimate hidden state from observations and a linear model. We will assume that the states $x$ and observations $y$ are given by

\begin{align}
X_n &= AX_{n-1} + V_n, \qquad n \geqslant 1 \tag{System Evolution}
Y_n &= CX_n + W_n \tag{Observation}
\end{align}

[[_TOC_]]

# Scalar filter

The filter estimates are given by

\begin{align}
\hat{x}\_{n \mid n} &= \hat{x}_{n \mid n - 1} + k_n \tilde{y}_n \\\\
\tilde{y}\_n  &= y_n - a\hat{x}\_{n - 1\mid n - 1} \\\\
k_n &= \frac{\sigma^2\_{n \mid n - 1}}{\sigma^2\_{n \mid n - 1} + \sigma_w^2} \\\\
\sigma^2\_{n \mid n - 1} &= a^2 \sigma\^2\_{n - 1 \mid n - 1} + \sigma\_v^2 \\\\
\sigma^2\_{n \mid n} &= \sigma^2\_{n \mid n - 1}(1 - k_n)
\end{align}


[[https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/]]