**Meta-Normalized Maximum Likelihood (Meta-NML)** is an algorithm for Bayesian classification based on [[MAML|Model-Agnostic Meta-Learning]] and [[Normalized Maximum Likelihood]].

# Algorithm

* $\mathcal{D}$: original datasets (e.g. visited states in [[VICE|Variational Inverse Control with Events]])
* $N$: number of classes
* $\theta$: the model parameters learned by MAML.

Repeat for each epoch:

1. Initialize a set of tasks $\mathcal{T} = \\{\\}$
    1. For each $(x_i, y_i) \in \mathcal{D}$:
        1. $\mathcal{T} \leftarrow \mathcal{T} \cup \\{(x_i, 0), (x_i, 1), ..., (x_i, N)\\}$
        2. _(Creates $N$ adaptation tasks, where $N$ is the number of classes. Goal of meta-NML is to learn an initialization where taking a gradient step on any query point gives good test performance on the entire dataset with the query point included)_
2. For each $(x_i, y_i') \in$$ $$\mathcal{T}$ do:
    1. Evaluate $\nabla_\theta \mathcal{L}(f_\theta(x_i), y_i')$, the cross entropy loss on the query point with the proposed label
    2. Meta-Training: Compute adapted parameters with gradient descent: 
        $$\theta_i' = \theta - \alpha \nabla_\theta \mathcal{L}(f_\theta(x_i), y_i')$$
    3. Meta-Testing: Compute loss for adapted model:
        1. Define $\mathcal{D'} \doteq \mathcal{D} \cup (x_i, y_i')$
        2. $$L_i = \frac{1}{|\mathcal{D'}|} \sum_{(x_i, y_i) \in \mathcal{D'}} \mathcal{L}(f_{\theta_i'}(x_i), y_i)$$
3. Meta-update step: 
    $$\theta \leftarrow \theta - \beta \nabla_\theta \sum_i L_i$$


# Weighting

In its current formulation, meta-NML takes a gradient step on just the query point alone, so it doesn't have any knowledge of the rest of the dataset except for whatever is implicitly encoded in the network parameters. So when we compute the outer loss, it’s not really reasonable to expect the model to perform well on points that are far from the query point. 

But since the goal of the NML adaptation is just to get an output for the query point, we don’t really care about other points very much, so we weight points near the query point much higher when evaluating the outer loss. We’re using an exponentially decaying function of distance from the query point, and `dist_weight_thresh` is the distance at which the weight becomes 0.1. the full formula is $$\exp\left(- 2.3\frac{\lVert x - q \rVert}{ \mathsf{dist\\_weight\\_thresh}}\right),$$ where $q$ is the query point and $x$ is the test point whose weight we’re calculating.

If you don't weight the points, then the model is likely to stay near a uniform distribution so that it can adapt very quickly because it is being evaluated on the dataset overall. The more you weight nearby points, the closer you get to the MLE.
