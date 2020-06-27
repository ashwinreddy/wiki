**Entropy** is a measure of average [[surprisal]] by [[expectation]].

$$
H(X) = \mathbb{E}[I_X(x)]
$$

# Computation

Since the entropy doesn't care about the values of the random variable, just the underlying probabilities, it is really only a function of the probabilities $(p_1, \dots p_n ) = \vec{p}$

$$
H\left(\vec{p}\right) = - \sum_{i=1}^n p_i \log p_i
$$