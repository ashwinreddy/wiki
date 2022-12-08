**Variational Autoencoder (VAE)** is a deep generative latent variable model $p_\theta(x)$ of $p_{\rm data}(x)$. The latent variable is $z$.

\begin{align*}
p_\theta(x) &= \int p(z) p_\theta(x \mid z) \mathrm{d}z \\\\
&= \mathbb{E}_{z \sim p(z \mid x)}\left[ \frac{p(x,z)}{p(z \mid x)} \right]
\end{align*}

We typically assume simple distributions for $p(z)$ and $p(x \mid z)$ like $p(z)$ is Gaussian and $p(x \mid z)$ is conditional Gaussian with mean and variance supplied by a neural network.


This integral is intractable to compute, so we take another approach. We have an approximation

$$
q_\phi(z \mid x) = \mathcal{N}(z ; \mu_\phi(x), \mathsf{diag}(\sigma^2_\phi(x)))
$$

$$
\log p_\theta(x) \geqslant \mathsf{ELBO}(x; \theta, \phi) = \underbrace{\mathbb{E}\_{q_\phi(z\mid x)}\left[ \log p_\theta(x \mid z) \right]}\_{\text{Decoding Latents}} - \underbrace{D_{KL}(q_\phi(z\mid x) \Vert p(z))}_{\text{Matching Prior}}
$$