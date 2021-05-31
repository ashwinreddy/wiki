The **Metropolis-Hastings algorithm** produces samples from a [[probability distribution]] $\pi$ that you can't directly sample from. The idea is to simulate a [[Markov chain]] whose [[stationary distribution]] is designed to be $\pi$. Then, in the long run, sampling from the chain is sampling from $\pi$.

We need a proposal distribution $Q(y \mid x)$ which proposes a new state $y$ when we're in the current state $x$.

\begin{equation}
A = \min \left\\{ 1, \frac{\pi(y) Q(x_t \mid y) }{\pi(x_t) Q(y \mid x_t) } \right\\}
\end{equation}

Note that this seems to use $\pi$! However, since we're using a ratio, we only need it up to proportionality.

1. Initialize $X_1 = x_1$
2. For $t=1, 2, \dots$,
    1. Sample $y$ from $Q(y \mid x_t)$
    2. Sample $\mathsf{Bernoulli}(A)$ to accept the proposal $x_{t+1} = y$ or keep the same value $x_{t+1} = x_t$