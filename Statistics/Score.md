The **score function** describes how sensitive a [[statistical model]] is to changes in parameter.

$$
s(\theta) \triangleq \nabla_\theta \log\ell(\theta)
$$

# Properties

The [[expected value]] of the score is 0.

\begin{align}
\mathbb{E}[s \mid \theta] &= \int_{\mathcal{X}} f(x; \theta) s(\theta) \dd{x} \\\\\
&= \int_{\mathcal{X}} \pdv{f(x; \theta)}{\theta}  \dd{x} \\\\\
&= \pdv{}{\theta}\cancelto{1}{\int_{\mathcal{X}} f(x; \theta)  \dd{x}} \\\\\
&= 0
\end{align}

The [[variance]] is [[Fisher information]].
