The **expected value** or **expectation** collapses the [[probability distribution]] of a [[random variable]] to a single representative, which we understand to be its [[mean]]. Notationally, the expectation tells you where to draw samples from and then an expression to compute with those samples and will then tell you what the expected average value of that expression is.

\begin{equation}
\mathbb{E}\left[X\right] = \sum_{x \in \mathcal{X}} xp(x)
\end{equation}

\begin{equation}
\mathbb{E}\left[X\right] = \int_\RR x p(x)\\, \dd{x}
\end{equation}

In terms of the [[cumulative distribution function]],

$$
\mathbb{E}[X] = \int_{\RR} x\\, \dd{F(x)}
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

Suppose $X$ and $Y$ are independent, then

* $\mathbb{E}[XY] = \mathbb{E}[X] \cdot \mathbb{E}[Y]$