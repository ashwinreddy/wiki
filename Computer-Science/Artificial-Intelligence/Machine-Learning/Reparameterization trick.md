The **reparameterization trick** is a trick that allows us to backpropagate through random nodes. Formally, it lets us compute the gradient of an expectation with respect to parameters that influence both the sampling and the values.

$$
\nabla_\theta \mathbb{E}_{p_\theta(z)}\left[ f_\theta(z) \right]
$$