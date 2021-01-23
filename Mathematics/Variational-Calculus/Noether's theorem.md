---
bibliography: "./Physics/physics.bib"
---

**Noether's theorem** associates a conserved charge with a [[continuous symmetry]]. 

The presentation in @vogtmann2013mathematical says:

> If the [[lagrangian system]] $(M, L)$ admits the [[one-parameter group]] of diffeomorphisms $h^s: M \to M$, $s \in \RR$, then the lagrangian system of equations corresponding to $L$ has a first integral $I: TM \to \RR$. In local coordinates $q$ on $M$ the integral $I$ is written in the form $$I(\mathbf{q}, \dot{\mathbf{q}}) = \underbrace{\pdv{L}{\dot{\mathbf{q}}}}\_{p}\dv{h^s(\mathbf{q})}{s}\Bigg|_{s=0}.$$

# Examples

Consider a system of point masses with masses $m_i$:

$$
L = \sum m_i \frac{\mathbf{x_i}^2}{2} - U(\mathbf{x}), \qquad \mathbf{x}_i = x_{i1}\mathbf{e}_1 + x_{i2}\mathbf{e}_2 + x_{i3}\mathbf{e}_3
$$

# Symmetries

|Translation Symmetry|Conservation Law|
|--------------------|----------------|
|Time|Energy|
|Space translation|Momentum|
|Rotation|Angular momentum|

---