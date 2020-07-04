A **Bernoulli distribution** represents a coin flip with a potentially biased coin with 1 and 0 instead of heads and tails. The distribution is parameterized by the probability of getting a heads $0 \leq \mu \leq 1$:

$$
X \sim \mathrm{Bernoulli}(\mu) \iff f(k) = \begin{cases} \mu & k = 1 \\\\ 1-\mu & k = 0\end{cases}
$$

A cute way to compactly write this is

\begin{equation}
\Pr(X = k) = \mu^k (1-\mu)^{1-k}
\end{equation}

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\mu$|