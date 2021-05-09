**Birth-death process** is an important example of [[CTMC|continuous time Markov chain]].

[[https://upload.wikimedia.org/wikipedia/commons/2/28/BD-proces.png]]

Suppose $\lambda_i = \lambda$ and $\mu_i = \mu$. The balance equation tells us 

\begin{gather}
\pi(k-1)\lambda - \pi(k)\mu = 0 \\\\
\pi(k) = \left(\frac{\lambda}{\mu}\right)\pi(k-1) \\\\
\pi(k) = \left(\frac{\lambda}{\mu}\right)^k \pi(0)
\end{gather}

We need to ensure that $\sum_{i=0}^\infty \pi(i) = 1$, which means

$$
\pi(0) \cdot \frac{1}{1 - \frac{\lambda}{\mu}} = 1
$$


Then, the stationary distribution $\pi$ looks like

$$
\pi(k) = \left(1 - \frac{\lambda}{\mu}\right)\left(\frac{\lambda}{\mu}\right)^k
$$