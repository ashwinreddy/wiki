**Variational Autoencoder (VAE)** is a deep generative latent variable model $p_\theta(x)$ of $p_{\rm data}(x)$. We'll assume a latent variable $z$, so the PGM is $z \to x$. The question is how to train this model given that we don't explicitly know $z$. But we will assume simple distributions for $p(z)$ and $p(x \mid z) = \mathcal{N}(\mu_{\rm nn}(z), \sigma_{nn}(z))$ where $\rm nn$ means it is supplied by a neural network. The solution is that we'll _also_ learn how to get $z$ from $x$, i.e. our task is really decoding $z$ into $x$ but let's also learn how to encode $x$ into $z$. 

![](https://lilianweng.github.io/posts/2018-08-12-vae/vae-gaussian.png)

\begin{align*}
\log p_\theta(x) &= \log \int\_{\RR^k} p(z) p_\theta(x \mid z) \mathrm{d}z \\\\
&= \log \int\_{\RR^k} p(z) p_\theta(x \mid z) \mathrm{d}z 
\end{align*}


This integral is intractable to compute, so we take another approach. We have an approximation

$$
q_\phi(z \mid x) = \mathcal{N}(z ; \mu_\phi(x), \mathsf{diag}(\sigma^2_\phi(x)))
$$

$$
\log p_\theta(x) \geqslant \mathsf{ELBO}(x; \theta, \phi) = \underbrace{\mathbb{E}\_{q_\phi(z\mid x)}\left[ \log p_\theta(x \mid z) \right]}\_{\text{Decoding Latents}} - \underbrace{D_{KL}(q_\phi(z\mid x) \Vert p(z))}_{\text{Matching Prior}}
$$