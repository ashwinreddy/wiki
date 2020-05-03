**[CycleGAN](https://junyanz.github.io/CycleGAN/)** is an algorithm that performs image-to-image translation, that is learns mappings $G: X \to Y$ as well as $F: Y \to X$ from domain $X$ to $Y$ _without explicit pairings_. For example, $X$ could be any set of horse pictures and $Y$ could be any set of zebra pictures. 

To do this, introduce adversarial discriminators $D_X$ and $D_Y$. Their jobs are to distinguish between $\{x\}$ and $\{F(y)\}$ and $\\{y\\}$ and $\\{G(x)\\}$, respectively.

$$
\mathcal{L}_{\text{GAN}}(G, D_Y, X, Y) = \mathbb{E}_{y \sim p_{\text{data}}(y)}\left[\log D_Y(y)\right]
$$