---
bibliography: 'bibliography.bib'
---

**Advantage weighted actor critic** [@nair2020accelerating] is an actor-critic algorithm with a weighted actor/policy update:

\begin{equation}
\theta_{k+1} = \arg\max_\theta \mathbb{E}_{\mathbf{s}, \mathbf{a} \sim \beta}\left[ \log \pi(\mathbf{a} \mid \mathbf{s}) \frac{1}{Z(\mathbf{s})} \exp\left( \frac{1}{\lambda}A^{\pi_k}(\mathbf{s}, \mathbf{a}) \right) \right]
\end{equation}

---