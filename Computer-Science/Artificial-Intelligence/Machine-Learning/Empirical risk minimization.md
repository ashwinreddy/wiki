**Empirical risk minimization** is one way of casting the [[supervised learning]] problem. We want to learn a hypothesis $h$ to minimize the risk, which is the [[expected value]] of loss.

$$
R_{\text{emp}}(h)= \mathbb{E}_{\substack{x \sim p(x) \\ y \sim p(y \mid x)}}\left[ L(h(x), y) \right] = \int L(h(x), y) \dd{P(x,y)}
$$

$$
{\displaystyle {\hat {h}}=\arg \min_{h\in {\mathcal {H}}}R_{\text{emp}}(h).}
$$