**Variational Autoencoder (VAE)** is a deep generative latent variable model $p_\theta(x)$ of $p_{\rm data}(x)$. 

$$
p_\theta(x) = \int p(z) p_\theta(x \mid z) \mathrm{d}z
$$