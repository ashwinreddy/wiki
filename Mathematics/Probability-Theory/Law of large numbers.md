The **law of large numbers (LLN)** is a theorem that deals with convergence of random variables for an empirical average.

[[_TOC_]]

# Weak Law

In short, the weak law (WLLN) says that empirical means converge to true means in probability.

$$
\bar{X}_n \xrightarrow {P} \mu \quad \text{when } n\to \infty
$$

> The empirical mean $\bar{X}\_n= \frac{1}{n}\sum_{i=1}^n X_i $ of [[iid]] [[random variable]] $X_i$ [[converges in probability|convergence of random variables#convergence-in-probability]] to the [[expected value]] $\mu = \mathbb{E}[X]$: for any $\epsilon > 0$, \begin{equation}\lim_{n \to \infty} \Pr\left( \left| \bar{X}_n - \mu \right| \geqslant \epsilon \right) = 0. \tag{WLLN}\end{equation}

# Strong Law

In short, the strong law (SLLN) says empirical means converge to true means almost surely, which is a stronger statement than the weak law.

The empirical mean of pairwise independent and identically distributed random variables with finite mean converges to the true mean [[almost surely|almost sure convergence]].