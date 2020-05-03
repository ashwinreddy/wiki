**[CycleGAN](https://junyanz.github.io/CycleGAN/)** is an algorithm based on [[GANs|generative adversarial network]] that performs image-to-image translation, that is learns mappings $G: X \to Y$ as well as $F: Y \to X$ from domain $X$ to $Y$ _without explicit pairings_. For example, $X$ could be any set of horse pictures and $Y$ could be any set of zebra pictures. 


To do this, introduce adversarial discriminators $D_X$ and $D_Y$. Their jobs are to distinguish between $\{x\}$ and $\{F(y)\}$ and $\\{y\\}$ and $\\{G(x)\\}$, respectively. The discriminator $D_Y$ gets a loss

$$
\mathcal{L}_{\text{GAN}}(G, D_Y, X, Y) = \mathbb{E}_{y \sim p_{\text{data}}(y)}\left[\log D_Y(y)\right] + \mathbb{E}_{x \sim p_{\text{data}}(x)}\left[\log\left( 1 - (D_Y\circ G)(x) \right)\right]
$$

The idea here is that $D_Y$ learns to behave as $D_Y(y)=1$ and $D_Y(G(x))=0$. We do a similar construction of a loss for $D_X$.

# Cycle Consistency

To guide sensible learning, we also ask that the network learn $F$ and $G$ such that 

Forward cycle consistency
: The criteria that $F(G(x)) \approx x$

Backward cycle consistency
: The criteria that $G(F(y)) \approx y$.