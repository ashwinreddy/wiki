**Markov's inequality** says that for a non-negative [[random variable]] $X$ (i.e. $X \geqslant 0$) with [[expected value]] $\mu$ and $\lambda > 0$,

$$
\Pr(X \geqslant \lambda) \leqslant \frac{\mu}{\lambda}
$$

[[Chebyshev's inequality]] uses this.

# Proof

Let's define 

$$
Y(\omega) = \begin{cases} \epsilon & X(\omega) \geqslant 0 \\\\ 0 \end{cases}
$$

This makes $Y \leqslant X$ such that

$$
\mathbb{E}X \geqslant \mathbb{E}[Y] = \mathbb{E}[\epsilon\mathbb{1}_{X \geqslant \epsilon}] = \epsilon \Pr(X \geqslant \epsilon)
$$
