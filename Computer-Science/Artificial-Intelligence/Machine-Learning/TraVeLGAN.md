**[TraVeLGAN](https://arxiv.org/pdf/1902.09631.pdf)** is an algorithm that uses [[GAN|generative adversarial network]]s similar to [[CycleGAN]] to do image-to-image translation without [[cycle consistency|CycleGAN#cycle-consistency]]. We still have $X$ and $Y$ and $G_{XY}: X \to Y$ and $G_{YX}: Y \to X$. 

The adversarial loss is

$$
\mathcal{L}_{\text{adv}} = \mathbb{E}_X\left[ D_Y(G_{XY}(X)) \right]
$$

If we just use the adversarial loss, then the $G$ mapping will learn to produce an arbitrary an image in its target output domain. To get semantically meaningful images, they use transformation vector instead of cycle consistency.

Transformation vector
: For vectors $x_i$ and $x_j$, the transformation vector is given by $\nu(x_i, x_j) = S(x_j) - S(x_i)$ for some latent space representation $S$.

We then require that $\nu(x_i , x_j) = \nu(G_{XY}(x_i), G_{XY}(x_j))$. The TraVeL loss is given by a distance metric

\begin{align}
\mathcal{L}\_{\text{TraVeL}} &= \sum_{i \neq j} \operatorname{dist}(\nu_{ij}, \nu_{ij}') \\\\\
\nu_{ij} &= S(x_i) - S(x_j) \\\\\
\nu_{ij}' &= S(G_{XY}(x_i)) - S(G_{XY}(x_j))
\end{align}