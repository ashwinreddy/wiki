If we have too few features, we run the risk of underfitting while too many features may lead to overfitting. The locally weighted linear regression approach minimizes a new cost function. Previously, 

1. Fit $\theta$ to minimize $\sum_i \left( \idx{y}{i} - \transpose{\theta}\idx{x}{i}\right)^2$
2. Output $\transpose{\theta}x$

Now,

1. Fit $\theta$ to minimize $\sum_i \idx{w}{i}\left( \idx{y}{i} - \transpose{\theta}\idx{x}{i}\right)^2$ for non-negative weights $\idx{w}{i}$
2. Output $\transpose{\theta}x$

One fairly standard choice of weights is

\begin{equation*}
\idx{w}{i} = \exp(-\frac{\left( \idx{x}{i}- x\right)^2}{2\tau^2})
\end{equation*}

$\tau$ is called the bandwidth parameter. In this regime, there is a higher weight given to training examples close to the query point $x$. Note that to use this algorithm\footnote{We call this algorithm non-parametric.} during prediction we need to store the training set.
