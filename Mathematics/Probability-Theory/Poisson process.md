A **Poisson process** is a [[counting process]] with [[iid]] interarrival times distributed [[exponentially|exponential distribution]]: $S_i \sim_{\mathsf{IID}} \mathsf{Exp}(\lambda)$. 

If the count $(N_t)_{t \geqslant 0}$ is a Poisson process with parameter $\lambda$, then for each $t \geqslant 0$, then it is distributed [[Poisson distribution]].

$$
N_t \sim \mathsf{Poisson}(\lambda t)
$$

By memoryless property, $(N_{t+s}-N_s)\_{t \geqslant 0}$ is also a Poisson process for all $s \geqslant 0$. Moreover, $(N\_{t+s}-N\_s)\_{t \geqslant 0}$ is independent of $(N_\tau)_{0 \leqslant \tau \leqslant s}$.

$$
(N_{t_i} - N_{t_{i-1}}) \sim \mathsf{Poisson}(\lambda(t_i - t_{i - 1})), \qquad \forall i
$$