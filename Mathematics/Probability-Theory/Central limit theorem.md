The **central limit theorem (CLT)** says that the empirical mean (a normalized sum) $\bar{X}\_n \equiv \frac{1}{n} \sum_{i=1}^n X_i$ for iid [[random variable]]s $X_1, \dots, X_n$ of mean $\mu$ and [[variance]] $\sigma^2$ converges in distribution to a [[normal distribution]] for large enough $n$:


\begin{equation}
\frac{\bar{X} - \mu}{\sigma / \sqrt{n} } \xrightarrow[n \to \infty]{\mathsf{d}} \mathcal{N}(0, 1) \tag{CLT}
\end{equation}

Note that ${\bar{X} - \mu \over \sigma \sqrt{n}}$ is just the $z$-score of $\bar{X}$ since $\mathbb{V}[\bar{X}] = \sqrt{\sigma}/n$.

A [[binomial distribution]] $\mathsf{Binomial}(n, p)$ for large $n$ is approximately $\mathcal{N}(np, np(1-p))$ (??)