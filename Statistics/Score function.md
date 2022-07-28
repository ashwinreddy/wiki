The **score function** describes how sensitive a [[statistical model]] is to changes in parameter.

$$
s(\theta) \triangleq \nabla_\theta \log\ell(\theta)
$$

The [[expected value]] of the score is 0.

\begin{align}
    \mathop{\mathbb{E}}\_{p(x \vert \theta)} \left[ s(\theta) \right] &= \mathop{\mathbb{E}}_{p(x \vert \theta)} \left[ \nabla \log p(x \vert \theta) \right] \\[5pt]
    &= \int \nabla \log p(x \vert \theta) \, p(x \vert \theta) \, \text{d}x \\[5pt]
    &= \int \frac{\nabla p(x \vert \theta)}{p(x \vert \theta)} p(x \vert \theta) \, \text{d}x \\[5pt]
    &= \int \nabla p(x \vert \theta) \, \text{d}x \\[5pt]
    &= \nabla \int p(x \vert \theta) \, \text{d}x \\[5pt]
    &= \nabla 1 \\[5pt]
    &= 0
\end{align}

The [[variance]] of the score is [[Fisher information]].

