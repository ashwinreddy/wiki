**Bernoulli distribution** represents a single biased coin flip with heads probability $p$ (and tails $q=1-p$).

$$
X \sim \text{Bernoulli}(p) \implies \mathbb{P}(X=k) = \begin{cases} p & k = 1 \\ 1-p & k = 0 \end{cases} 
$$

A cute, compact way of writing the above (in a way that highlights similarity to the [[Binomial distribution]]) is

$$
\mathbb{P}(X=k) = p^k(1-p)^{1-k}
$$

# Properties


|Quantity|Value|
|--------|-----|
|[[Expected value]]|$\p$|
|[[Variance]]|$pq$|
|[[Entropy]]|$-q \lg q$|