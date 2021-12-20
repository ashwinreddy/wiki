A **Bernoulli distribution** is a [[probability distribution]] represents a coin flip with a potentially biased coin with 1 and 0 instead of heads and tails. The distribution is parameterized by the probability of getting a heads $\mu \in [0,1]$:

$$
X \sim \mathsf{Bernoulli}(\mu) \iff \Pr(x=k) = \begin{cases} \mu & k = 1 \\ 1-\mu & k = 0\end{cases}
$$

A cute way to compactly write this is

\begin{equation}
\Pr(X = k) = \mu^k (1-\mu)^{1-k}, \quad k \in \\{0, 1\\}
\end{equation}

This makes more sense in the context of the [[binomial distribution]].

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\mu$|
|[[Variance]]|$\mu(1 - \mu)$|