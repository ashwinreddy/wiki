The **binomial distribution** [[probability distribution]] gives the probability of getting $k$ heads out of $n$ flips from a [[Bernoulli distribution]] with probability of heads $p$. Using the [[binomial coefficient]],

\begin{equation}
X \sim \mathsf{Binomial}(n, p) \iff  \mathbb{P}_X(x = k; n, p) = \binom{n}{k} p^k (1-p)^{n-k}
\end{equation}

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$np$|
|[[Variance]]|$np(1-p)$|
|[[Moment-generating function]]|$(1-p+pe^t)^n$|

* If $X \sim \mathsf{Binomial}(n,p)$ and $Y \sim \mathsf{Binomial}(m,p)$, then $X+Y \sim \mathsf{Binomial}(n+m, p)$