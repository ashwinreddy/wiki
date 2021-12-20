The **binomial distribution** [[probability distribution]] gives the probability of getting $k$ heads out of $n$ flips from a [[Bernoulli distribution]] with probability of heads $p$. In other words, it is the sum of $n$ [[iid]] Bernoullis. Using the [[binomial coefficient]],

\begin{equation}
X \sim \mathsf{Binomial}(n, p) \iff  \Pr(X = k; n, p) = \binom{n}{k} p^k (1-p)^{n-k}
\end{equation}

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$np$|
|[[Variance]]|$np(1-p)$|
|[[Moment-generating function]]|$(1-p+pe^t)^n$|

* If $X \sim \mathsf{Binomial}(n,p)$ and $Y \sim \mathsf{Binomial}(m,p)$, then $X+Y \sim \mathsf{Binomial}(n+m, p)$
* If $p=\frac{1}{2}$, then $\mathbb{P}_X(x = k; n, p) = 2^{-n}\binom{n}{k}$.