---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**AlphaGo Zero** is [[AlphaGo]] without the imitation learning [@silver2017mastering]. Key differences include

1. Trained soley by self-play RL.
2. Single neural network for policy and value.
3. Simpler tree search without Monte Carlo rollouts.

Components

* Model $(\mathbf{p}, v) = f_\theta(s)$ for raw board representation $s$ where $p_a = \Pr(a \mid s)$ and $v$ is the value.
* A [[Monte-Carlo Tree Search]] guided by $f_\theta$ that outputs policy $\pi$.

---