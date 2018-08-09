# Expectation

In general,

\begin{equation}
\mathbb{E}[X] = \sum_{x \in X} p(x) \cdot x
\end{equation}

For a pdf $f(x)$,
\begin{equation}
\mathbb{E}[X] = \int_{\mathbb{R}} xf(x)\,\mathrm{d}x
\end{equation}

The expectation is the center of mass for a probability mass or density function, since the sum of all possibilities must be unity.

# Moments

More generally,

$$
\mu_n = \int_{\mathbb{R}} (x-c)^n f(x)\,\mathrm{d}x
$$

The mean is $\mu_1$ and the variance is $\mathbb{E}[(X-\mu_1)^2]=\mathbb{E}[X^2]-\mathbb{E}[X]^2$