A **tangent space** $T_pM$ for a [[differentiable manifold]] $M$ is a [[vector space]] we can attach to $M$ at $p$ that allows us to do calculus locally. 


# Construction

First, consider all the curves $\gamma$ that go through $p$ at time 0.

$$
S = \{\gamma: I\to M | \gamma(0) = p\}
$$

Next, pick a coordinate chart $\varphi: U \to \RR^n$. We want to consider different vectors, so we define an [[equivalence relation]]

$$
\gamma \sim \delta \iff (\varphi \circ \gamma)'(0) = (\varphi \circ \delta)'(0)
$$

Then,

$$
T_p M \triangleq  S / \sim
$$

Each element of $T_pM$ is a tangent vector.


# [[Basis]]

$$
\mathcal{B} = \left\{\left(\frac{\partial}{\partial x^a}\right)_p \in T_p M | 1 \leq a \leq \dim M \right\}
$$

That means we can write a tangent vector as 

$$
X = \overbrace{X^a}^{\text{components}} \underbrace{\left(\frac{\partial}{\partial x^a}\right)_p}_{\text{coordinate basis}}
$$