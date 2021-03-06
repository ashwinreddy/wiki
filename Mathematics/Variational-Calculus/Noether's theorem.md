---
bibliography: "./Physics/physics.bib"
---

**Noether's theorem** associates a conserved charge with a [[continuous symmetry]]. 

The presentation in @vogtmann2013mathematical says:

> If the [[lagrangian system]] $(M, L)$ admits the [[one-parameter group]] of diffeomorphisms $h^s: M \to M$, $s \in \RR$, then the lagrangian system of equations corresponding to $L$ has a first integral $I: TM \to \RR$. In local coordinates $q$ on $M$ the integral $I$ is written in the form $$I(\mathbf{q}, \dot{\mathbf{q}}) = \underbrace{\pdv{L}{\dot{\mathbf{q}}}}\_{p}\dv{h^s(\mathbf{q})}{s}\Bigg|_{s=0}.$$

# Examples

> Consider a system of point masses with masses $m_i$: $$L = \sum m_i \frac{\mathbf{x_i}^2}{2} - U(\mathbf{x}), \qquad \mathbf{x}_i = x\_{i1}\mathbf{e}_1 + x\_{i2}\mathbf{e}_2 + x\_{i3}\mathbf{e}_3,$$ constrained by the conditions $f_j(\mathbf{x}) = 0$. We assume that the system admits translations along the $\mathbf{e}_1$ axis: $$\forall i:\quad h^s(\mathbf{x}_i) = \mathbf{x}_i + s \mathbf{e}_1.$$ In other words, the constraints admit motions of the system as a whole along the $\mathbf{e}_1$ axis, and the potential energy does not change under these. By Noether's theorem we conclude: If a system admits translations along the $\mathbf{e}_l$ axis, then the projection of its center of mass on the $\mathbf{e}\_1$ axis moves linearly and uniformly. In fact, $(d/ds)|\_{s=0} h^s \mathbf{x}_i = \mathbf{e}_1$. According to the remark at the end of B, the quantity $$I = \sum \pdv{L}{\dot{\mathbf{x}}\_i}\mathbf{e}\_1 = \sum m\_i \dot{x}\_{i1}$$ is preserved, i.e., the first component $P_1$ of the momentum vector is preserved. We showed this earlier for a system without constraints.


# Symmetries

|Translation Symmetry|Conservation Law|
|--------------------|----------------|
|Time|Energy|
|Space translation|Momentum|
|Rotation|Angular momentum|

---