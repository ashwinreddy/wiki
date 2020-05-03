A **[GAN](https://arxiv.org/pdf/1406.2661.pdf)** consists of a generative model $G$ pitted against an adversary $D$ which tries to discriminate between the training data and the synthetic examples.


$$
\mathbb{E}_{y \sim p_{\text{data}}(y)}\left[\log D_Y(y)\right] + \mathbb{E}_{x \sim p_{\text{data}}(x)}\left[\log\left( 1 - (D_Y\circ G)(x) \right)\right]
$$

