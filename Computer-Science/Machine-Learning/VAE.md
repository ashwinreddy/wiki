**Variational Autoencoder (VAE)** is a deep generative latent variable model $p_\theta(x)$ of $p_{\rm data}(x)$. The latent variable is $z$.

$$
p_\theta(x) = \int p(z) p_\theta(x \mid z) \mathrm{d}z
$$

This integral is intractable to compute, so we take another approach.

$$
\log p_\theta(x) \geqslant \mathsf{ELBO}(x; \theta, \phi)
$$