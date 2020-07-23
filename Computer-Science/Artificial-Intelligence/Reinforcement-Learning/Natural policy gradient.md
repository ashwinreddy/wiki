---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

@kakade2002natural proposes a **natural policy gradient**. The goal is to maximize the average undiscounted reward $\eta$ for a [[policy]] $\pi$ parameterized by $\theta$.

$$
\eta(\theta) = \sum_{s, a} \rho^\pi(s) \pi(a \mid s, \theta) R(s, a)
$$

[[Newton's method]] provides a way to optimize this, and it requires the derivative and a metric or a [[Hessian]]. The question is which metric or Hessian to use. The first derivative (i.e. [[gradient]]) is straightforward.

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

$$
\widetilde\nabla \eta(\theta) = F(\theta)^{-1} \nabla \eta(\theta)
$$



---