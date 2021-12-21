**Supervised learning** is learning from labeled data. We have a datset $\mathcal{D} = \\{(x_i, y_i)\\}$ and our goal is to learn $f: X \to Y$ to minimize the empirical risk given by the loss function. The $y_i$ may be discrete or continuous, which correspond to categorical classification or regression tasks. In either case, the problem can be formulated as

\begin{equation}
\arg\min_\theta \mathbb{E}\_{(x, y) \sim \mathcal{D}} \left[ L \left( f_\theta(x), y \right) \right]
\end{equation}


It can be thought of as a [[maximum likelihood estimation]] problem or empirical risk minimization.