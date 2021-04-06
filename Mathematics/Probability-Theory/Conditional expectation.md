**Conditional expectation** is the [[expected value]] of a [[random variable]] as a [[conditional probability]].

\begin{equation}
\mathbb{E}(X \mid A) = \frac{1}{\Pr(A)} \sum_x \Pr(X = x \cap A)}
\end{equation}

$$
\mathbb{E}\left( X \mid Y = y \right) = \begin{cases} \sum_{x \in \mathcal{X}} xp_{X\mid Y}(x \mid y) \\\\ \int_{\mathcal{X}} xf_{X\mid Y}(x \mid y)\dd{x} \end{cases}
$$

$$
\mathbb{E}\left(X \mid Y = y\right) = \sum_{x} x \frac{P(X=x,Y=y)}{P(Y=y) }
$$

$$
\mathbb{E}\left(X \mid Y = y\right) = \frac{\int_\RR x f_{X,Y}(x,y) \dd{x} }{ \int_\RR f_{X,Y}(x,y)\dd{x} }
$$