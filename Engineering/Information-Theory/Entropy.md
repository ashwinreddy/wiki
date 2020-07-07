**Entropy** is the [[expected|expected value]] [[surprisal]] in a [[random variable]].  

$$
\mathcal{H}(X) \doteq \mathbb{E}[I_X(x)]
$$

Intuitively, it tells you how many bits it takes to describe the random variable. For example, a fair [[Bernoulli distribution]] takes 1 bit.

# Computation

Since the entropy doesn't care about the values of the random variable, just the underlying probabilities, it is really only a function of the probabilities $(p_1, \dots p_n ) = \vec{p}$. A nice form that exposes the computation is

$$
\mathcal{H}\left(\vec{p}\right) = - \sum_{i=1}^n p_i \lg p_i,
$$

where we use $\lg$ to get the result in units of bits rather than nats or digits. If we have a uniform distribution (i.e. $p_i = 1/n$), then the entropy is simply

$$
\mathcal{H}(\mathsf{DiscreteUniform}(n)) = \lg n 
$$