A **[GAN](https://arxiv.org/pdf/1406.2661.pdf)** is a machine learning algorithm capable of synthetically generating new examples from a dataset. 

# Formalism

The goal of a GAN is to learn a mapping via a network $G$ that produces output $x$ looking like it came from $X$. So $G$ has to depend on some noise $z$ and the parameters to the network $\theta_g$:

$$x = G(z; \theta_g)$$

But how do we train this network? We pit it against a discriminator network $D(x; \theta_d)$ that tells the probability the data is legit. The discriminator wants to be right on average, based on where the sample is coming from. The generator wants the discriminator to be wrong:

$$
\min_G \max_D \mathbb{E}_{x \sim p_{\text{data}}(x)}\left[\log D(x)\right] + \mathbb{E}_{z \sim p_{z}(x)}\log\left[ 1 - D(G(z)) \right]
$$


# Algorithm

1. For each training iteration:
    1. For k steps
        1. Sample $m$ noise samples
        3. Sample $m$ samples of real data
        4. Update the discriminator by seeing how well it performs on these two sets
    2. Sample $m$ noise samples
    3. Update the generator by descending its stochastic decent.

\begin{equation}
\label{eq:disc}
\theta\_d \leftarrow \theta_d + \nabla\_{\theta_d} \frac{1}{m} \sum\_{i=1}^m \left[ \log D( x^{(i)} ) + \log \left( 1 - D\left(G\left(z^{(i)}\right)\right) \right) \right] \tag{Discriminator Update}
\end{equation}