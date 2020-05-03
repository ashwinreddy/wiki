**[TraVeLGAN](https://arxiv.org/pdf/1902.09631.pdf)** is an algorithm that uses [[GAN|generative adversarial network]]s similar to [[CycleGAN]] to do image-to-image translation without [[cycle consistency|CycleGAN#cycle-consistency]]. We still have $X$ and $Y$ and $G_{XY}: X \to Y$ and $G_{YX}: Y \to X$. 

The adversarial loss is

$$
\mathcal{L}_{\text{adv}} = \mathbb{E}_X\left[ D_Y(G_{XY}(X)) \right]
$$

To get semantically meaningful images, they use transformation vector instead of cycle consistency.

Transformation vector
: For vectors $x_i$ and $x_j$, the transformation vector is given by $\nu(x_i, x_j) = x_j - x_i$