**Exponential distribution** [[probability distribution]]. The [[probability density function]] is given by

\begin{equation}
X \sim \mathsf{Exponential}(\lambda) \iff \varphi(x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\\\ 0 & x < 0 \end{cases}
\end{equation}

[[Cumulative distribution function]]

$$
F_X(x) = \begin{cases} 1-e^{-\lambda x} & x \geqslant 0 \\\\ 0\end{cases}
$$

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\frac{1}{\lambda}$|
|[[Variance]]|$\frac{1}{\lambda^2}$|

* If $n$ independent exponential variables indexed as $X_k$ with parameters $\lambda_k$, then $\min_k X_k \sim \mathsf{Exponential}\left(\sum_j \lambda_j \right)$