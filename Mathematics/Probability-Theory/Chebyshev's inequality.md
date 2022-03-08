**Chebyshev's inequality** is a [[concentration inequality]] that says that the probability a [[random variable]] is $k$ [[standard deviation]] away from its [[expected value]] drops as $1/k^2$.

\begin{equation}
\boxed{\Pr \big ( | X - \mu| \geqslant k\sigma \big ) \leqslant \frac{1}{k^2}} \tag{Chebyshev's Inequality}
\end{equation}

\begin{equation}
\Pr \big ( | X - \mu| \geqslant c \big ) \leqslant \frac{\mathbb{V}X}{c^2}
\end{equation}

For example, there is at most 10% chance that a value sits outside 3 standard deviations from the mean.

# Proof

Use [[Markov's inequality]]

$$
\Pr(\left(X - \mathbb{E}X \right)^2 \geqslant \epsilon^2) \leqslant \frac{ \mathbb{E}\left[\left(X - \mathbb{E}X \right)^2\right]  }{\epsilon^2} = \frac{\mathbb{V}X}{\epsilon^2}
$$