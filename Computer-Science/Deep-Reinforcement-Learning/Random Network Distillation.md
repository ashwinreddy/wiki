[paper](https://arxiv.org/pdf/1810.12894.pdf)

Random network distillation introduces an exploration bonus for deep reinforcement learning methods. You have two neural networks: 

* _target_ network $f: \mathcal{O} \to \RR^k$: fixed and randomly initialized, setting the prediction problem
* _predictor_ network $\hat{f}: \mathcal{O} \to \RR^k$: trained on data collected by te agent.