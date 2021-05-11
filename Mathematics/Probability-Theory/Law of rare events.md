**Law of rare events** says the following: If $p_n$ is a [[sequence]] of real numbers in $[0, 1]$ such that the sequence $np_n$ converges to finite limit $\lambda$, then 

$$
\lim_{n \to \infty} \binom{n}{k} p_n^k (1-p_n)^{n-k} = e\^{-\lambda}\frac{\lambda^k}{k!}
$$

In other words, [[binomial distribution]] $\mathsf{Binomial}(n, p)$ reaches [[poisson distribution]] $\mathsf{Poisson}(\lambda)$ when $\lambda = np$ and there is a large $n$.