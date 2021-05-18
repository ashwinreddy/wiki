**Hypothesis testing** is about trying to fit a model for a set of observations (which is the opposite of usual probability). For example, say a coin is flipped a hundred times and comes up head a certain number of times. Should we say the coin is biased or not?

Since the number of heads $H$ can be modeled as a [[binomial distribution]] with $p = q = \frac{1}{2}$ and $n=100$, the [[central limit theorem]] allows us to approximate with a [[normal distribution]] $\mathcal{N}(np, \sqrt{npq} )$. Now the question is how much of a deviation from 50 heads would be cause to think the coin is biased.

We pick a significance level of $\alpha = 0.05$. In other words, we will reject the hypothesis that the coin is unbiased if there's a less than 5% of getting the results that we do. Note that $\frac{H - 50}{\sqrt{5}} \sim \mathcal{N}(0, 1)$. So the question is

\begin{align}
\mathbb{P}\left( |H - 50| > \text{deviation} \right) \leqslant \alpha \\\\
\mathbb{P}\left( H > 50 + \text{deviation} \cap H < 50 - \text{deviation} \right) \leqslant \alpha \\\\
\end{align}

# Formalization

You are given some observations $x \sim X$ and told that there is some $\theta^* \in \Theta$ for which the data was drawn as $X \sim \mathbb{P}_{\theta^\*}$, and the task is to determine whether $\theta^*$ is in $\Theta_0$ or in $\Theta_1$ (which are MECE). If $\theta^\* \in \Theta_0$, we say $H_0$ is correct else $H_1$ is correct.

A hypothesis $H_i$ is simple if $\Theta_i$ has only one item.