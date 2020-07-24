---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**Twin delayed DDPG (TD3)** [@fujimoto2018addressing] is an extension of [[deep deterministic policy gradient]] with a couple tricks up its sleeve to prevent Q-value overestimation.

1. Learn two functions and use the min for the targets.
2. Update policy and target networks less frequently than Q function.
3. Add noise to target action.

---