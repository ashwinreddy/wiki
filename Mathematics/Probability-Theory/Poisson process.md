A **Poisson process** is a [[counting process]], meaning it counts arrivals that are random in a [[memoryless]] way (i.e. how many you saw in the past doesn't affect how many you will see). In particular, this means the interarrival times are distributed [[exponentially|exponential distribution]]: $S_i \sim_{\mathsf{IID}} \mathsf{Exp}(\lambda).$ 

[[_TOC_]]

# Technical Construction

If the count $(N_t)_{t \geqslant 0}$ is a Poisson process with parameter $\lambda$, then for each $t \geqslant 0$, then it is distributed [[Poisson distribution]].

$$
N_t \sim \mathsf{Poisson}(\lambda t)
$$

By memoryless property, $(N_{t+s}-N_s)\_{t \geqslant 0}$ is also a Poisson process for all $s \geqslant 0$. Moreover, $(N\_{t+s}-N\_s)\_{t \geqslant 0}$ is independent of $(N_\tau)_{0 \leqslant \tau \leqslant s}$.

$$
(N_{t_i} - N_{t_{i-1}}) \sim \mathsf{Poisson}(\lambda(t_i - t_{i - 1})), \qquad \forall i
$$

# Merging

If $N_1(t)$ and $N_2(t)$ are independent Poisson processes with rates $\lambda_1$ and $\lambda_2$ respectively, then $N(t) = N_1(t) + N_2(t)$ is also a Poisson process with rate $\lambda_1 + \lambda_2$:

# Splitting / Thinning

Let $N(t)$ be a Poisson process with rate $\lambda$. If each arrival is assigned a probability $p$ of being special, then the process of arrivals of special events is a Poisson process of rate $p\lambda$ and independently, arrivals of non-special events is a Poisson process of rate $(1-p)\lambda$.