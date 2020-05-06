**[TraVeLGAN](https://arxiv.org/pdf/1902.09631.pdf)** is an algorithm that uses [[GAN|generative adversarial network]]s similar to [[CycleGAN]] to do image-to-image translation from domain $X$ to $Y$ but does so without [[cycle consistency|CycleGAN#cycle-consistency]], which uses pixel per pixel differences (which aren't as meaningful). To get semantically meaningful images, they use a transformation vector instead of cycle consistency.

Transformation vector
: For vectors $x_i$ and $x_j$, the transformation vector is given by $\nu(x_i, x_j) = S(x_j) - S(x_i)$ for some latent space representation $S$.

# Formalism

We want to learn $G_{XY}: X \to Y$ and $G_{YX}: Y \to X$. 

The adversarial loss is

$$
\mathcal{L}_{\text{adv}} = \mathbb{E}_X\left[ D_Y(G_{XY}(X)) \right]
$$

If we just use the adversarial loss, then the $G$ mapping will learn to produce an arbitrary an image in its target output domain. 

We then require that $\nu(x_i , x_j) = \nu(G_{XY}(x_i), G_{XY}(x_j))$. That is, the difference between two horses is maintained by the mappings into the difference between two zebras. The idea is that this should learn "analogies" since this technique has worked in NLP. We add the latent representation so we can learn complex transformations.

The TraVeL loss is given by a distance metric

\begin{align}
\mathcal{L}\_{\text{TraVeL}} &= \sum_{i \neq j} \operatorname{dist}(\nu_{ij}, \nu_{ij}') \\\\\
\nu_{ij} &= S(x_i) - S(x_j) \\\\\
\nu_{ij}' &= S(G_{XY}(x_i)) - S(G_{XY}(x_j))
\end{align}

We need to add one last fix to make sure that $S$ doesn't collapse to something trivial like outputting a constant. We make sure that every point is at least $\delta$ away from every other point in the latent space.

$$
\mathcal{L}_{S_c} = \sum_{i \neq j} \max(0, \delta - \lVert \nu_ij \rVert_2 )
$$

Then, the objectives to minimize are for $S$ and $G$:

\begin{align\*}
\mathcal{L}\_S &= \mathcal{L}\_{S_c} + \mathcal{L}\_{\text{TraVeL}} \\\\\
\mathcal{L}\_G &= \mathcal{L}\_{\text{adv}} + \mathcal{L}_{\text{TraVeL}}
\end{align\*}