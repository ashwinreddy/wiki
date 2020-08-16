---
bibliography: "bibliography.bib"
---

The **SIR model** extends the [[SI model]] by adding a released/recovery population. Thus, it compartmentalizes the population into susceptible, infected, and recovered individuals.

[[https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/SIR_Flow_Diagram.svg/2880px-SIR_Flow_Diagram.svg.png|align=center,width=700px]]

$$
{\displaystyle {\begin{aligned}&{\dv{S}{t}}=-{\frac {\beta IS}{N}},\\\\[6pt]&{\dv{I}{t}}={\frac {\beta IS}{N}}-\gamma I,\\\\[6pt]&{\dv{R}{t}}=\gamma I,\end{aligned}}}
$$

# Variants

@srivastava2020learning propose a variant on the SIR model. Here, we still have a Susceptible compartment $S$. Susceptibles become Infected $I$ based on a time-dependent rate $\beta$ with $k$ different values, although in practice they just use a single value for $\beta$ (i.e. $k=1$).

$$
\Delta S_t = -\frac{S_t}{N} \sum_{i=1}^k \beta_i \Delta I_{t-i}
$$

$$
\Delta I_t = \frac{S_t}{N} \sum_{i=1}^k \beta_i \left( I_{t-(i-1)J} - I_{t-iJ} \right)
$$

The infected people have a probability $\gamma$ of being reported. Everyone else is immune or isolated.

$$
R_t = \gamma I_t
$$

However, the changes are dependent on the infection rates $\beta$:

$$
\Delta R_t = \sum_{i=1}^k \gamma_i \left( I_{t-(i-1)J} - I_{t-iJ} \right)
$$


---
