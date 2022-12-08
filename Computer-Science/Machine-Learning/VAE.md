**Variational Autoencoder (VAE)** is a deep generative latent variable model $p_\theta(x)$ of $p_{\rm data}(x)$. The latent variable is $z$.

$$
p_\theta(x) = \int p(z) p_\theta(x \mid z) \mathrm{d}z
$$

$$
\log p_\theta(x) \geqslant \mathsf{ELBO}(x; \theta, \phi)
$$