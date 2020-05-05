A **[GAN](https://arxiv.org/pdf/1406.2661.pdf)** is a machine learning algorithm capable of synthetically generating new examples from a dataset. 

# Formalism

The goal of a GAN is to learn a mapping via a network $G$ that produces output $x$ looking like it came from $X$. So $G$ has to depend on some noise $z$ and the parameters to the network $\theta_g$:

$$x = G(z; \theta_g)$$

But how do we train this network? We pit it against a discriminator network $D(x; \theta_d)$ that tells the probability the data is legit. The discriminator wants to be right on average, based on where the sample is coming from. The generator wants the discriminator to be wrong:

$$
\min_G \max_D \mathbb{E}_{x \sim p_{\text{data}}(x)}\left[\log D(x)\right] + \mathbb{E}_{z \sim p_{z}(x)}\log\left[ 1 - D(G(z)) \right]
$$



