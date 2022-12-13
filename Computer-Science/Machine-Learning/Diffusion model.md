**Diffusion model**

$$
q(x_t \mid x_{t-1}) = \mathcal{N}\left(\sqrt{\beta_{t-1}}x_{t-1}, (1 - \beta_{t-1})I \right)
$$

# Training

Compute the gradient 

$$
\nabla_\theta \lVert \epsilon - \epsilon_\theta(x_t, t) \rVert_2^2
$$