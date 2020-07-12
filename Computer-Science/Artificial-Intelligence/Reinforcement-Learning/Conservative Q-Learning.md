---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Conservative Q-Learning** [@kumar2020conservative] is an [[offline reinforcement learning]] algorithm that modifies [[Q-learning]] so not to be erroneously high on states it has not seen before. The algorithm comes up with a lower bound on the Q value, thereby making it conservative.

![](https://lh5.googleusercontent.com/e-DpLATp3z_kFfl3n6sHthjj84pP7VW7t20xaLG6b9UDU5-HAMl5bXYLcXFAS7dXLWJ0ShOsFzYbEJ0dH-55zKyIGa2UbCwoVFRG5c6WrFxRvJZ3kIw=w1280)

It says the Q-functions for OOD actions are pushed down. 

# Algorithm

1. Learn $\hat{Q}^\pi_{\text{CQL}}$ using offline data $\mathcal{D}$
2. Optimize policy w.r.t. $\hat{Q}^\pi\_{\text{CQL}}: \pi \leftarrow \arg\max_\pi \mathbb{E}_\pi\left[ $\hat{Q}^\pi_{\text{CQL}}$ \right]$

---