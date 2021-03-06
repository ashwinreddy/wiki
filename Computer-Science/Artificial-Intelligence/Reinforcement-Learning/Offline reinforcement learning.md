---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Offline reinforcement learning** (sometimes known as **batch RL**) is reinforcement learning using only a static dataset of transitions $\mathcal{D} = \\{(s, a, s', r)_j\\}$ of experience without being able to try anything online.

>  Offline RL [[algorithms|algorithm]] promise to learn effective policies from previously-collected, static datasets without further interaction. However, in practice, offline RL presents a major challenge, and standard off-policy RL methods can fail due to overestimation of values induced by the distributional shift between the dataset and the learned policy. [@kumar2020conservative]

# Challenges in Offline RL with Online Fine-tuning

From @nair2020accelerating

* Data Efficiency: Imitation learning doesn't work because you may be learning from suboptimal data. On-policy finetuning is going to be inefficient because it can't use $\mathcal{D}$.
* Bootstrap Error in Offline Learning with Actor-Critic Methods: Standard off-policy algorithms like [[SAC|Soft Actor-Critic]] accumulate error through bootstrapping.


---