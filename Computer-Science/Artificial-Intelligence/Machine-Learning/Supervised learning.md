**Supervised learning** is learning from labeled data. We have a datset $\mathcal{D} = \\{(x_i, y_i)\\}$ and our goal is to learn $f: X \to Y$ to minimize the empirical risk given by the loss function. 

\begin{equation}
\arg\min_\theta \mathbb{E}_{(x, y) \sim \mathcal{D}} \left[ L(f_\theta(x), y) \right]
\end{equation}

[@dibya]