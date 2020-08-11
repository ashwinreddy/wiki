---
bibliography: "Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Model-agnostic meta-learning (MAML)** is an algorithm for [[meta-learning]] [@finn2017modelagnostic]. It's essentially an addition one can make to a neural network architecture where a gradient step is inserted inside the model. 

The idea is to train the model's parameters in such a way that doing a couple gradient steps with new data leads to good performance.

> The process of training a model’s parameters such that a
few gradient steps, or even a single gradient step, can produce good results on a new task can be viewed from a feature learning standpoint as building an internal representation that is broadly suitable for many tasks.

The model is a map $f$. Each task $\mathcal{T}$ has a loss function $\mathcal{L}$.

# Algorithm

1. Outer loop. Sample a batch of tasks $\mathcal{T}_i \sim p(\mathcal{T})$
2. Inner loop. For each task $i$,
    1. Evaluate the gradient of loss using the task examples.
    2. Compute the parameters after taking one gradient step using learning rate $\alpha$.
3. 

---