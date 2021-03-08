**Conditional entropy** is the [[entropy]] of a [[random variable]] when another random variable is known.

$$
\mathcal{H}(Y \mid X) = -\sum_{x \in \mathcal{X}, y \in \mathcal{Y}} p(x, y) \log \frac{p(x, y)}{p(x)}
$$

\begin{equation}
\mathcal{H}(Y \mid X)  + \mathcal{H}(X) = \mathcal{H}(X, Y)
\end{equation}

[[Bayes' theorem]] becomes

\begin{equation}
\mathcal{H}(Y \mid X) = \mathcal{H}(X \mid Y) + \mathcal{H}(Y) - \mathcal{H}(X)
\end{equation}
