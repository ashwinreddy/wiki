---
bibliography: "bibliography.bib"
---

The **SIR model** extends the [[SI model]] by adding a released/recovery population. Thus, it compartmentalizes the population into susceptible, infected, and recovered individuals.

[[https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/SIR_Flow_Diagram.svg/2880px-SIR_Flow_Diagram.svg.png|align=center,width=700px]]

$$
{\displaystyle {\begin{aligned}&{\dv{S}{t}}=-{\frac {\beta IS}{N}},\\\\[6pt]&{\dv{I}{t}}={\frac {\beta IS}{N}}-\gamma I,\\\\[6pt]&{\dv{R}{t}}=\gamma I,\end{aligned}}}
$$

# Variants

@srivastava2020learning propose a variant in which $\beta$ is discretized into $k$ states over time. Then, the equations are

\begin{align}
\Delta S^p_t = - \frac{S\^p_{t-1}}{N^p} \sum_{i=1}^k \beta_i^p \Delta I^p_{t-i}, \\\\\
\Dleta I^p_t = \frac{S\^p_{t-1}}{N^p} \sum_{i=1}^k \beta_i^p \Delta I^p_{t-i} + \delta \sum_q F(q, p) \frac{\sum_{i=1}^k \beta_i^q \Delta I\^q_{t-i}}{N^q}
\end{align}

---
