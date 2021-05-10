**Poisson distribution** is a [[probability distribution]]

\begin{equation}
X \sim \mathsf{Poisson}(\lambda) \iff \Pr(X = k) = \begin{cases} \frac{\lambda^ k e^{-\lambda}}{k!} & k = 0, 1, 2, \dots \\\\ 0 \end{cases}
\end{equation}

It is involved in the [[Poisson process]].


# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\lambda$|
|[[Variance]]|$\lambda$|

* If $X \sim \mathsf{Poisson}(\lambda)$ and $Y \sim \mathsf{Poisson}(\mu)$, then $X+Y \sim \mathsf{Poisson}(\lambda + \mu)$
* A Poisson random variable of rate $n$ is the sum of $n$ independent Poisson random variables of rate 1.