---
bibliography: "Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Model-agnostic meta-learning (MAML)** is an algorithm for [[meta-learning]] [@finn2017modelagnostic]. It's essentially an addition one can make to a neural network architecture where a gradient step is inserted inside the model. 

The idea is to train the model's parameters in such a way that doing a small number (fixed beforehand) gradient steps on a new task leads to good performance.

> The process of training a model’s parameters such that a
few gradient steps, or even a single gradient step, can produce good results on a new task can be viewed from a feature learning standpoint as building an internal representation that is broadly suitable for many tasks.

# Formalism

First, we introduce the base model, a neural network $f_\theta$ with meta-parameters $\theta$ [@antoniou2018train]. The hope is to learn a good $\theta_0$ so that the $\theta_N$ obtained after $N$ gradient steps using a support set $S_b$ results in good performance on the target set $T_b$. The $N$ steps are the inner-loop update process. If we use learning rate $\alpha$ with base weights $\theta^b_i$, the rolled-up update looks like

$$
\theta^b_i = \theta^b_{i-1} - \alpha \nabla_\theta \mathcal{L}\_{S_b}\left( f_{\theta^b_{i-1}} \right)
$$

The equation above optimizes the model for a single task.

But ultimately the goal is to be good at various tasks, so what we want to optimize is

$$
\mathcal{L}\_{\text{meta}}(\theta_0) = \sum_{b=1}^B \mathcal{L}\_{T_b}\left( f_{\theta^b_N}(\theta_0) \right)
$$

We do gradient steps on this as well.

$$
\theta_0 \leftarrow \theta_0 - \beta \nabla_\theta \sum_{b=1}^B \mathcal{L}\_{T_b}\left( f_{\theta^b_N}(\theta_0) \right) \tag{Outer Loop Update}
$$

# Algorithm

1. Randomly initialize $\theta$
2. Repeat
    1. Sample a batch of tasks $\mathcal{T}_i \sim p(\mathcal{T})$
    2. For each task $\mathcal{T}_i$,
        1. Evaluate the gradient of loss using the task examples: $\nabla_\theta \mathcal{L}\_{\mathcal{T}\_i}(f_\theta)$
        2. Compute the parameters after taking one gradient step using learning rate $\alpha$. $$\theta_i' = \theta - \alpha \nabla_\theta \mathcal{L}\_{\mathcal{T}\_i}(f_\theta)$$
    3. Update $$\theta \leftarrow \theta - \beta \sum\_{\mathcal{T}\_i \sim p(\mathcal{T})} \mathcal{L}_{\mathcal{T}\_i}(f\_{\theta_i'})$$




---