**Coupling** is a [[proof]] technique for comparing two [[random variables|random variable]] $X$ and $Y$ where you pick suitable $Z_1$ and $Z_2$ s.t. $Z_1$ has the same distribution as $X$ and $Z_2$ has the same distribution as $Y$, but $Z_1$ and $Z_2$ are dependent (thus, coupling). 

# Examples

Suppose you want to show that [[binomial distribution]] $X \sim \mathsf{Binomial}(m, p)$ is [[stochastically smaller|stochastic ordering]] than $Y\sim\mathsf{Binomial}(n, p)$ with $m \leqslant n$.

$$
Z_1 \sim \mathsf{Binomial}(m, p), \quad Z_2 \sim \mathsf{Binomial}(n - m, p)
$$

Then, $\tilde{X} = Z_1 \sim \mathsf{Binomial}(m, p)$ and $\tilde{Y} = Z_1 + Z_2$ so that $\tilde{Y} - \tilde{X} = Z_2 \geqslant 0$ with probability 1.