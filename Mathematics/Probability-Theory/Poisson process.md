A **Poisson process** is a [[counting process]], meaning it counts arrivals that are random in a [[memoryless]] way (i.e. how many you saw in the past doesn't affect how many you will see). The process has a rate $\lambda$.


[[_TOC_]]

# Distributions

First, we need that the interarrival times are distributed [[exponentially|exponential distribution]]: 

$$
S_i \sim_{\mathsf{IID}} \mathsf{Exp}(\lambda).
$$

Immediately, it follows that the arrival times are [[Erlang distribution]].


$$
T_n \sim \mathsf{Erlang}(n, \lambda)
$$

Let the count at time $t \in \RR$ be $N(t)$, which turns out to be a [[Poisson distribution]].

$$
N(t) \sim \mathsf{Poisson}(\lambda t), \qquad t \geqslant 0.
$$

By memoryless property, $N(t+s) - N(s)$ is also a Poisson process (some qualification on the value of $t$ and $s$). Moreover, $N(t+s)-N(s)$ is independent of $N(\tau)$ for $0 \leqslant \tau \leqslant s$.

$$
(N(t_i) - N(t_{i-1})) \sim \mathsf{Poisson}(\lambda(t_i - t_{i - 1})), \qquad \forall i
$$


# Merging

If $N_1(t)$ and $N_2(t)$ are independent Poisson processes with rates $\lambda_1$ and $\lambda_2$ respectively, then $N(t) = N_1(t) + N_2(t)$ is also a Poisson process with rate $\lambda_1 + \lambda_2$:

# Splitting / Thinning

Let $N(t)$ be a Poisson process with rate $\lambda$. If each arrival is assigned a probability $p$ of being special, then the process of arrivals of special events is a Poisson process of rate $p\lambda$ and independently, arrivals of non-special events is a Poisson process of rate $(1-p)\lambda$.

# Conditional Distribution of Arrivals

Conditioned on $N(t)=n$, 

$$
(T_1, T_2, \dots, T_n) \stackrel{d}{=} \left( U_{(1)}, U_{(2)}, \dots, U_{(n)} \right).
$$

where the $U$ are [[order statistic]] of $n$ $\mathsf{Uniform}(0, t)$ random variables.

# Random Incidence Paradox

From the perspective of a given point, the expected interarrival time is doubled. A Poisson process backwards is still a Poisson process (?).


Let's say a Poisson process bus stop has been running for a long time. Let's say the rate is $4$ per hour. So the expected arrival time is 15 minutes. Now you try to test it out yourself by showing up to the bus stop. You'll actually find that it takes about 30 minutes, on average, for the bus to come.

Say that the last arrival is $U$, you showed up at $t\^\*$ and the next arrival is $V$. The interarrival time is given by 

$$
V - U = \underbrace{(V - t^\*)}_{\mathsf{Exp}(\lambda)} + \underbrace{(t^* - U)}_{\mathsf{Exp}(\lambda)}
$$

So the expected interrarival time is actually doubled!