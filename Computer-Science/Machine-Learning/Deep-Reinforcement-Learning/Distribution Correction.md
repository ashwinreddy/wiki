**Distribution Correction (DisCor)** is an algorithm for 

One main reason that deep RL algorithms might not work is that the ones based on dynamic programing suffer from disjunction between the data dstribution and the learned model.

Def. Approximate Dynamic Programming = Dynamic Programming with function approximation

Examples:

1. DQN
2. SAC

In DQN, we do an update on the Q function with the Bellman backup using the current parameterized update of Q.

Similar process for actor-critic using policy $\pi$.


Choice of data-distribution important for ADP (function approximation causes the learned Q to depeond on choice of data distribution).

Corrective feedback - ABSENCE OF (training under distributions induced by on-policy exploration may fail to correct sytematic errors in the Q-function)

A simple example would be a one-step RL contextual bandit. Tries to hard mine for rewards by picking actions with overestimated Q values. But then you'll see which ones are overestimated because you actually try them. That's corrective feedback.


BUT if you start using previous Q functions, you won't get corrective feedback. Errors in $\bar{Q}$ at the next state result in incorrect Q-value targets at the current state.


# References

* [blog](https://bair.berkeley.edu/blog/2020/03/16/discor/)
* [paper](https://arxiv.org/pdf/2003.07305.pdf)