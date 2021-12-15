The **expected value** or **expectation** collapses the [[probability distribution]] of a [[random variable]] to a single representative, which we understand to be its [[mean]]. Notationally, the expectation tells you where to draw samples from and then an expression to compute with those samples and will then tell you what the expected average value of that expression is.

\begin{equation}
\expectation{X} \triangleq \begin{cases} \sum_{x \in \mathcal{X}} xp_X(x) & X \text{ discrete} \\\\ \int_{x \in \mathcal{X}} x f_X(x)\\, \dd{x} & X \text{ continuous} \end{cases}
\end{equation}


In terms of the [[cumulative distribution function]],

$$
\expectation{X} = \int_{\RR} x\\, \dd{F(x)}
$$

[[_TOC_]]

# Tail Sum Formula

The tail sum formula applies when we suppose $X \geqslant 0$.

$$
\expectation{X} = \begin{cases} \sum_{k=0}^\infty \Pr(X > k) & X \text{ discrete} \\\\ \int_{0}^\infty \Pr(X > k) \dd{k} & X \text{ continuous} \end{cases}
$$

# Properties

* Expectation is a [[linear map]]. For _any_ random variables $X$ and $Y$,

\begin{equation}
\expectation{X+Y} = \expectation{X} + \expectation{Y}
\end{equation}

\begin{equation}
\mathbb{E}\left(\alpha X\right) = \alpha \mathbb{E}\left(X\right)
\end{equation}

$$
X \perp Y \implies \expectation{XY} = \mathbb{E}(X) \cdot \mathbb{E}(Y)
$$


The expected value of an [[indicator function]] for an [[event]] is just its probability.
\begin{equation}
\mathbb{E}\left(1_A\right) = \Pr(A)
\end{equation}

* [[Law of total expectation]]