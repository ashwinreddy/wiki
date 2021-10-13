**Empirical risk minimization** is one way of casting the [[supervised learning]] problem. We want to learn a hypothesis $h$ to minimize the risk, which is the [[expected value]] of loss.

$$
R_{\text{emp}}(h)= \mathbb{E}\left[ L(h(x), y) \right]
$$

$$
{\displaystyle {\hat {h}}=\arg \min_{h\in {\mathcal {H}}}R_{\text{emp}}(h).}
$$