---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

@kakade2002natural proposes a natural policy gradient. Here, our job is to maximize the average undiscounted reward $\eta$ for a policy $\pi$ parameterized by $\theta$.

$$
\eta(\theta) = \sum_{s, a} \rho^\pi(s) \pi(a \mid s, \theta) R(s, a)
$$

[[Newton's method]] provides a way to optimize this, and it requires the derivative and a metric or a Hessian. The question is which metric or Hessian to use. The derivative is straightforward.

$$
\nabla \eta(\theta) = \sum_{s, a} \rho^\pi(s) \nabla \pi(a \mid s, \theta) Q^\pi(s, a)
$$

<<Warn("There's some weird notation choice here with Q")>>

---