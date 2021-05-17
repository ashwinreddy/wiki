**Hypothesis testing** is about trying to fit a model for a set of observations (which is the opposite of usual probability). For example, say a coin is flipped a hundred times and comes up head a certain number of times. Should we say the coin is biased or not?

Since the flips are modeled as a [[binomial distribution]] with the [[central limit theorem]] allowing us to approximate with a [[normal distribution]], we can say that

# Formalization

You are given some observations $x \sim X$ and told that there is some $\theta^* \in \Theta$ for which the data was drawn as $X \sim \mathbb{P}_{\theta^\*}$, and the task is to determine whether $\theta^*$ is in $\Theta_0$ or in $\Theta_1$ (which are MECE). If $\theta^\* \in \Theta_0$, we say $H_0$ is correct else $H_1$ is correct.

A hypothesis $H_i$ is simple if $\Theta_i$ has only one item.