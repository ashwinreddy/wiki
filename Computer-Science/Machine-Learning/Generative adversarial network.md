A **[GAN](https://arxiv.org/pdf/1406.2661.pdf)** is a machine learning algorithm capable of synthetically generating new examples from a dataset. 

# Formalism

The goal of a GAN is to learn a mapping via a network $G$. The output $x$ depends on some noise $z$ and the parameters to the network $\theta_g$.

$$x = G(z; \theta_g)$$

But how do we train this network? We pit it against a discriminator network $D(x; \theta_d)$.



consists of a generative model $G$ pitted against an adversary $D$ which tries to discriminate between the training data and the synthetic examples.


$$
\mathbb{E}_{x \sim p_{\text{data}}(x)}\left[\log D_Y(y)\right] + \mathbb{E}_{z \sim p_{z}(x)}\left[\log\left( 1 - (D_Y\circ G)(x) \right)\right]
$$



