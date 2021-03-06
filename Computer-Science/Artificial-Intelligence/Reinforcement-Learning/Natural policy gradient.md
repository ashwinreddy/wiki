---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**Natural policy gradient** is a [[policy gradient]] method proposed by @kakade2002natural. The goal is to maximize the average undiscounted reward $\eta$ for a stochastic [[policy]] $\pi$ parameterized by $\theta$.

$$
\eta(\theta) = \sum_{s, a} \rho^\pi(s) \pi(a \mid s, \theta) R(s, a)
$$

[[Newton's method]] provides a way to optimize this, and it requires the derivative and a [[metric|metric tensor]] or a [[Hessian]]. The question is which metric or Hessian to use. The first derivative (i.e. [[gradient]]) is straightforward.

$$
\nabla \eta(\theta) = \sum_{s, a} \rho^\pi(s) \nabla \pi(a \mid s, \theta) Q^\pi(s, a)
$$

<<Warn("There's some weird notation choice here with Q")>>

Standard [[gradient descent]] uses identity, but this is not covariant. We could use the Hessian of $\eta$, but this is a little too complicated and may not be appropriate.

$$
\nabla^2 \eta(\theta) = \sum_{s,a} \rho^\pi(s)\left[ \nabla^2 \pi(a \mid s) Q^\pi(s, a) + \nabla \pi(a \mid s) \nabla Q\^\pi(s,a)^\mathsf{T} + \nabla Q^\pi(s,a)\nabla \pi(s,a)^\mathsf{T} \right]
$$

The suggestion here is to use [[Fisher information]]. We can only compute this conditioned on $s$, however: 

$$
F_s(\theta) = \mathbb{E}_{\pi(a \mid s, \theta)}\left[ \frac{\partial \log \pi(a \mid s, \theta)}{\partial \theta_i}\cdot\frac{\partial \log \pi(a \mid s, \theta)}{\partial \theta_j} \right]
$$

We can get a metric without dependence on $s$ through an [[expected value]].

$$
F(\theta) = \mathbb{E}_{\rho^\pi(s)}\left[ F_s(\theta) \right]
$$

This gives us the natural policy gradient.

$$
\widetilde\nabla \eta(\theta) = F(\theta)^{-1} \nabla \eta(\theta)
$$

# Properties

One nice property is that we can show that approximating the Q function by $f(s, a; \omega) = \omega^\mathsf{T}\nabla\log \pi(a\mid s, \theta)$  is optimal if we pick weights $\tilde\omega = \widetilde \nabla \eta(\theta)$. Another property is that following the natural gradient leads to a greedy policy, one that takes the action that maximizes this approximation.

---