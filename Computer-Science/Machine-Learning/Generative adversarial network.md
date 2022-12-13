**Generative adversarial network (GAN)**

$$
G_\theta(z): \RR^k \to \RR^d
$$

$$
D_\phi(x): \RR^d \to \RR
$$

$$
\min_{G\_\theta} \max_{D_\phi} \mathbb{E}\_{x \sim p_{\rm data}(x)}\left[\log D_{\phi}(x) \right] + \mathbb{E}_{z \sim p(z)}\left[ \log \left(1 - D_\phi(G_\theta(z))\right) \right]
$$