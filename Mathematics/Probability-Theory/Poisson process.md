**Poisson process** is a [[counting process]] with [[iid]] interarrival times distributed [[exponentially|exponential distribution]]: $S_i \sim_{\mathsf{IID}} \mathsf{Exp}(\lambda)$. 

If $(N_t)_{t \geqslant 0}$ is a Poisson process with parameter $\lambda$, then for each $t \geqslant 0$, then it is distributed [[Poisson distribution]].

$$
N_t \sim \mathsf{Poisson}(\lambda t)
$$

By memoryless property, $(N_{t+s}-N_s)_{t \geqslant 0}$ is also a Poisson process for all $s \geqslant 0$.