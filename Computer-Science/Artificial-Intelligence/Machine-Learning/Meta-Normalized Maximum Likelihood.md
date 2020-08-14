**Meta-Normalized Maximum Likelihood (Meta-NML)** is an algorithm for Bayesian classification.

# Algorithm

* $\mathcal{D}$: original datasets (e.g. visited states in VICE)
* $N$: number of classes
* $\theta$: the model parameters learned by [[MAML|Model-Agnostic Meta-Learning]]

Repeat for each epoch:

1. Initialize a set of tasks $\mathcal{T} = \\{\\}$
    1. For each $(x_i, y_i) \in \mathcal{D}$:
        1. $\mathcal{T} \leftarrow \mathcal{T} \cup \\{(x_i, 0), (x_i, 1), ..., (x_i, N)\\}$
        2. _(Creates $N$ adaptation tasks, where $N$ is the number of classes. Goal of meta-NML is to learn an initialization where taking a gradient step on any query point gives good test performance on the entire dataset with the query point included)_
2. For each $(x_i, y_i') \in$$ $$\mathcal{T}$ do:
    1. Evaluate $\nabla_\theta \mathcal{L}(f_\theta(x_i), y_i')$, the cross entropy loss on the query point with the proposed label
    2. Compute adapted parameters with gradient descent: 
        $$\theta_i' = \theta - \alpha \nabla_\theta \mathcal{L}(f_\theta(x_i), y_i')$$
    3. Compute test loss for adapted model:
        1. Define $\mathcal{D'} := \mathcal{D} \cup (x_i, y_i')$
        2. $$L_i = \frac{1}{|\mathcal{D'}|} \sum_{(x_i, y_i) \in \mathcal{D'}} \mathcal{L}(f_{\theta_i'}(x_i), y_i)$$
3. Meta-update step: 
    $$\theta \leftarrow \theta - \beta \nabla_\theta \sum_i L_i$$