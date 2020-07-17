---
bibliography: "Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Generative adversarial networks (GANs)** are algorithms that can synthesize examples from given data, introduced in @goodfellow2014generative.

We have a generative model $G$ and a discriminative model $D$ in a two player game.

$$
\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{\text{data}}(x) }\left[\log D(x)\right] + \mathbb{E}_{z \sim p_z(z)}\left[ 1 - D(G(z)) \right]
$$

---