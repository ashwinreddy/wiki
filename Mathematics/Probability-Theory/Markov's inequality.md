**Markov's inequality** says that for a non-negative [[random variable]] $X$ (i.e. $X \geqslant 0$) with [[expected value]] $\mu$ and $\lambda > 0$,

$$
\Pr(X \geqslant \lambda) \leqslant \frac{\mu}{\lambda}
$$

If we write $\lambda = k \mu$, then we get

$$
\Pr(X \geqslant k \mu ) \leqslant \frac{1}{k}
$$

[[Chebyshev's inequality]] uses this.

# Proof

Let's define 

$$
Y(\omega) = \begin{cases} \epsilon & X(\omega) \geqslant 0 \\\\ 0 & \text{otherwise} \end{cases}
$$

This makes $Y \leqslant X$ such that

$$
\mathbb{E}(X) \geqslant \mathbb{E}(Y) = \mathbb{E}\left(\epsilon\mathbb{1}_{X \geqslant \epsilon}\right) = \epsilon \Pr(X \geqslant \epsilon)
$$
