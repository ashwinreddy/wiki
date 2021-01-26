**Coupling** is a [[proof]] technique for comparing two [[random variables|random variable]] $X$ and $Y$. 

# Examples

Suppose you want to show that $X \sim \mathsf{Binomial}(m, p)$ ([[binomial distribution]]) is [[stochastically smaller|stochastic ordering]] than $Y\sim\mathsf{Binomial}(n, p)$ with $m \leqslant n$.

$$
Z_1 \sim \mathsf{Binomial}(m, p), \quad Z_2 \sim \mathsf{Binomial}(n - m, p)
$$

Then, $\tilde{X} = Z_1 \sim \mathsf{Binomial}(m, p)$ and $\tilde{Y} = Z_1 + Z_2$ so that $\tilde{Y} - \tilde{X} = Z_2 \geqslant 0$ with probability 1.