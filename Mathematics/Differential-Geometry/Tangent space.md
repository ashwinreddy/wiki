A **tangent space** $T_pM$ for a [[differentiable manifold]] $M$ is a [[vector space]].

$$
\boxed{T_p M \triangleq \{\gamma: I\to M | \gamma(0) = p\} / \sim,\quad \gamma \sim \delta \iff (x \circ \gamma)'(0) = (x \circ \delta)'(0)}
$$



# [[Basis]]

$$
\mathcal{B} = \left\{\left(\frac{\partial}{\partial x^a}\right)_p \in T_p M | 1 \leq a \leq \dim M \right\}
$$

That means we can write a tangent vector as 

$$
X = \overbrace{X^a}^{\text{components}} \underbrace{\left(\frac{\partial}{\partial x^a}\right)_p}_{\text{coordinate basis}}
$$