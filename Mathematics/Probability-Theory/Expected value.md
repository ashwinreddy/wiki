The **expected value** or **expectation** of a [[random variable]] collapses a distribution to a single representative, which we understand to be its mean. Notationally, the expectation tells you where to draw samples from and then an expression to compute with those samples and will then tell you what the expected average value of that expression is.

\begin{equation}
\mathbb{E}\left[X\right] = \sum_{x \in \mathcal{X}} xp(x)
\end{equation}

\begin{equation}
\mathbb{E}\left[X\right] = \int x p(x) \dd{x}
\end{equation}

In terms of the [[cumulative distribution function]],

$$
\mathrm{E}[X] = \int_\bar{\RR} x \dd{F(x)}
$$

# Properties

* Expectation is a linear operator.

For any random variables $X$ and $Y$,

\begin{equation}
\mathbb{E}[X+Y] = \mathbb{E}[X] + \mathbb{E}[Y]
\end{equation}

\begin{equation}
\mathbb{E}\left[\alpha X\right] = \alpha \mathbb{E}[X]
\end{equation}