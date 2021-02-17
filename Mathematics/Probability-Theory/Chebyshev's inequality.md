**Chebyshev's inequality** is a [[concentration inequality]] that says that the probability a [[random variable]] is $k$ [[standard deviation]] away from its mean drops as $1/k^2$.

\begin{equation}
\boxed{\Pr \big ( | X - \mu| \geqslant k\sigma \big ) \leqslant \frac{1}{k^2}} \tag{Chebyshev's Inequality}
\end{equation}

For example, there is at most 10% chance that a value sits outside 3 standard deviations from the mean.

# Proof

Consider $Y = |X - \mathbb{E}X|$. [[Markov's inequality]] says

$$
\mathbb{P}\left(|X - \mathbb{E}X| \geqslant c\right) \leqslant \frac{\mathbb{E}[Y]}{c}
$$