The **Bernoulli distribution** $\mathsf{Bern}(p)$ represents a single coin flip with parameter $\theta$.

$$
f_\theta(x) = \begin{cases} \theta & x = 1 \\\\ 1-\theta & x = 0 \end{cases}
$$

A cute way to compactly write this is

$$
f_\theta(x) = \theta^x (1-\theta)^{1-x}
$$

If $\\{X_i\\}_{i=1}^n$ are i.i.d. Bernoulli trials, then

$$
\sum_{k=1}^n X_k \sim \mathsf{Binomial}(n, p)
$$

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\theta$|
|[[Variance]]|$\theta(1-\theta)$|
|[[Fisher Information]]|$\frac{1}{p(1-p)}$|