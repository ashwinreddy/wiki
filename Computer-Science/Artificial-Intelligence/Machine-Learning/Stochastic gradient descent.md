**Stochastic gradient descent** is [[Monte Carlo algorithm]] for [[gradient descent]] where we estimate the gradient using a minibatch of examples. If our dataset is $\mathcal{D}$, then at time $t$ we take a random minibatch $B^t \subseteq D$ and do gradient descent with it.

# Momentum

Momentum averages past gradients to prevent certain pathological behavior (like what?)

\begin{align\*}
\pmb{v}^t &= m \pmb{v}^{t-1} + \pmb{\nabla} L(\pmb{\theta}^t) \\\\\
\pmb{\theta}^{t+1} &= \pmb{\theta}^t - \alpha \pmb{v}^t
\end{align\*}